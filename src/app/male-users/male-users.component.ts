import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Country, countries, continents} from 'countries-list';

@Component({
  selector: 'app-male-maleUsers',
  templateUrl: './male-users.component.html',
  styleUrls: ['./male-users.component.scss']
})
export class MaleUsersComponent implements OnInit {

  maleUsers = [];
  currentPage: any;
  page: number = 1;
  usersCopy: any[] = [];
  searchParam = "";

  constructor(private userService: UserService) { }

  ngOnInit() {
this.getUsers(this.page);
  }

  getUsers(page){
    this.userService.getMaleUsers(page).
    subscribe(res => {
      console.log(res);
      this.maleUsers = [];
      this.maleUsers.push(...res.results);
      this.usersCopy = [...this.maleUsers];
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
      this.maleUsers = user;
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
