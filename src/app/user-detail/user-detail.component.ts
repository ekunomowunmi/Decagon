import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Country, countries, continents} from 'countries-list';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user:any;
  picture:any;
  title:string="";
  firstName:string="";
  lastName:string="";
  age:number=0;
  streetNo:string="";
  streetName:string="";
  city:string="";
  state:string="";

  page = 1;
  searchParam = "";
  searchCountryParam = "";
  showCountry = false;
  closeDd = false;
  countryList: Country[];
  country: string;
  email:string;
  phoneNum:string;
  dateRegistered: string;

  constructor(private userService: UserService, private router:Router) {
    this.userService.selectedUser.subscribe(res => {
      if(res){
        this.user = res;
        this.picture = this.user.picture.large;
        this.title = this.user.name.title;
        this.firstName = this.user.name.first;
        this.lastName = this.user.name.last;
        this.age = this.user.dob.age;
        this.streetNo = this.user.location.street.number;
        this.streetName = this.user.location.street.name;
        this.city = this.user.location.city;
        this.state = this.user.location.state;
        this.country = this.user.location.country;
        this.email = this.user.email;
        this.dateRegistered = this.user.registered.date;
        this.phoneNum = this.user.phone;



      } else {
        this.router.navigate(["/all-users"]);
      }

    },error => console.log(error));

  }

  ngOnInit() {
    this.countryList = Object.values(countries);

  }

  goToList(){
    this.router.navigate(["/all-users"]);
  }

  searchUser(name){
    // if(!name || name == ''){
    //   this.getUsers(this.page);
    // }
    // else{
    //   var user =  this.usersCopy.filter(user => user.name.first.includes(name) || user.name.last.includes(name)
    //   || user.email.includes(name));
    //   this.users = user;
    // }

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
