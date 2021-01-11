import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users = [];
  page = 1;
  searchParam = "";
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  currentPage: number;
  constructor(private userService: UserService) { }

  ngOnInit() {
   this.getUsers(this.page);
  }

  getUsers(page){

    this.userService.getAllUsers(page).
    subscribe(res => {
      console.log(res);
      this.users = [];
      this.users.push(...res.results);
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
