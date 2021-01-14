import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {Country, countries, continents} from 'countries-list';
import { IconsModule, ButtonsModule, WavesModule, CollapseModule, DropdownModule } from 'angular-bootstrap-md';

import { UserDetailComponent } from './user-detail.component';
import { UserService } from '../user.service';
import UserServiceMock from '../mocks/user.service.mock';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let userServiceMock: UserServiceMock;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    userServiceMock = new UserServiceMock();
    TestBed.configureTestingModule({
      imports:[
        FormsModule, HttpClientModule,
        IconsModule,
        ButtonsModule.forRoot(),
    WavesModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ UserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should get list of countries', () => {
  //   expect(component.countryList).toEqual(Object.values(countries));
  // });
  // it('should populate user',()=> {
  //   var results = {
  //     info: {},
  //     results:[
  //       {
  //         dob:{
  //           date: "1988-03-07T15:04:25.326Z",
  //           age: 33
  //         },
  //         email:'nwachukwu@gmail.com',
  //         gender:'male',
  //         location:{
  //           street:'Melbourne',
  //           city: 'Sth sha',
  //           state: 'Toronto',
  //           country:'Canada',

  //         },
  //         name:{
  //           title:'Mr',
  //           first:'Nwachukwu',
  //           last:'Ejiofor'
  //         },
  //         phone: '06-889-12',
  //         picture:{
  //           large:'https://randomuser.me/api/portraits/women/83.jpg',
  //           thumbnail:'https://randomuser.me/api/portraits/thumb/women/83.jpg'
  //         },
  //         registered:{
  //           date: '002-11-04T01:59:34.993Z',
  //           age:19

  //         }
  //       }
  //     ]

  //   }
  //   expect(results.results).toBeDefined();

  // })
});
