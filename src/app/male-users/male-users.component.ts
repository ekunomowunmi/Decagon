import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-male-maleUsers',
  templateUrl: './male-users.component.html',
  styleUrls: ['./male-users.component.scss']
})
export class MaleUsersComponent implements OnInit {

  maleUsers = [];
  currentPage: any;
  page: number = 1;

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
