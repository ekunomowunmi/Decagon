import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-female-users',
  templateUrl: './female-users.component.html',
  styleUrls: ['./female-users.component.scss']
})
export class FemaleUsersComponent implements OnInit {
  femaleUsers = [];
  currentPage: number;
  page: number = 1;

  constructor(private userService: UserService) { }

  ngOnInit() {
  this.getUsers(this.page);
  }
  getUsers(page){
    this.userService.getFemaleUsers(page).
    subscribe(res => {
      console.log(res);
      this.femaleUsers = [];
      this.femaleUsers.push(...res.results);
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

}
