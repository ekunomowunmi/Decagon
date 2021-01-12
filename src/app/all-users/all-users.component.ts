import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { UserService } from '../user.service';
import {Country, countries, continents} from 'countries-list';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users = [];
  page = 1;
  searchParam = "";
  searchCountryParam = "";
  showCountry = false;
  closeDd = false;
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  currentPage: number;
  usersCopy: any[] = [];
  countryList = [];
  userPage: string;
  constructor(private userService: UserService) {
    // this.userPage = this.route.snapshot.queryParamMap.get('all');
    // console.log(this.userPage);
  }

  ngOnInit() {
   this.getUsers(this.page);
   this.countryList = Object.values(countries);
  }

  getUsers(page){

    this.userService.getAllUsers(page).
    subscribe(res => {
      // console.log(res);
      this.users = [];
      this.users.push(...res.results);
      this.usersCopy = [...this.users];
      this.currentPage = this.page;
    }, (error)=>{
        this.page = this.currentPage;
    })
    ;
  }

  nextPage(){
    this.currentPage = this.page;
    this.page+=1;
    this.getUsers(this.page);

  }

  prevPage(){
    this.currentPage = this.page;
    if(this.page == 1){}
    else{
      this.page -= 1;
      this.getUsers(this.page);
    }
  }
  searchUser(name){
    if(!name || name == ''){
      this.getUsers(this.page);
    }
    else{
      var user =  this.usersCopy.filter(user => user.name.first.includes(name) || user.name.last.includes(name)
      || user.email.includes(name));
      this.users = user;
    }

  }

  searchCountry(name){
    if(name == '' || !name){
      this.countryList = Object.values(countries);
    } else {
      this.countryList = this.countryList.filter(country => country.name.includes(name));
    }

  }

  downloadPage(){
    this.userService.downloadPage().subscribe(res=>
      {
        const data = res.results;
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(data[0]);
        const csv = [header.join(','),
        ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
      ].join('\r\n');
      this.downloadCSV(csv, 'downloadedFile.csv');


        console.log("downloaded",res);
      })
  }
   downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

}
