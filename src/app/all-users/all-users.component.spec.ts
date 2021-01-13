import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IconsModule, DropdownModule, ButtonsModule, CollapseModule, WavesModule } from 'angular-bootstrap-md';

import UserServiceMock from '../mocks/user.service.mock';
import { UserService } from '../user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AllUsersComponent } from './all-users.component';
import { RouterModule, Routes } from '@angular/router';
import { FemaleUsersComponent } from '../female-users/female-users.component';
import { MaleUsersComponent } from '../male-users/male-users.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { APP_BASE_HREF } from '@angular/common';

describe('AllUsersComponent', () => {
  let userService: UserServiceMock;
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;
  const routes: Routes = [
    {path:'',component: AllUsersComponent, pathMatch: 'full'},
    {path:'all-users',component:AllUsersComponent},
    {path:'male-users',component:MaleUsersComponent},
    {path:'female-users',component:FemaleUsersComponent},
    {path:'user-details',component:UserDetailComponent}
  ];

  beforeEach(async(() => {
    userService = new UserServiceMock();
    TestBed.configureTestingModule({
      imports: [
         IconsModule, FormsModule, HttpClientModule,
         ButtonsModule.forRoot(),
    WavesModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    HttpClientTestingModule,
    RouterModule.forRoot(routes)
      ],
      declarations: [ AllUsersComponent, MaleUsersComponent,FemaleUsersComponent,UserDetailComponent ],
      providers:[{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all users from the service', ()=> {
    const userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.getAllUsers(1)).toBeDefined();

  });

  it('should go to the next page',()=> {
    // component.page = 1;
    component.nextPage();
    expect(component.page).toEqual(2);
  });

  it('should go to the previous page',()=> {
    component.page = 2;
    component.prevPage();
    expect(component.page).toBeDefined();
  });
  it('should search user',()=> {
    var name = '';
    // component.page = 1;
    component.searchUser(name);
    expect(component.users).toBeDefined();
  });

  it('should search countries',()=> {
    var country = '';
    // component.page = 1;
    component.searchCountry(country);
    expect(component.countryList).toBeDefined();
  });
});
