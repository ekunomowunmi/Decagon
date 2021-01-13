import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IconsModule, ButtonsModule, WavesModule, CollapseModule, DropdownModule } from 'angular-bootstrap-md';
import { UserService } from '../user.service';

import { MaleUsersComponent } from './male-users.component';

describe('MaleUsersComponent', () => {
  let component: MaleUsersComponent;
  let fixture: ComponentFixture<MaleUsersComponent>;

  beforeEach(async(() => {
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
      declarations: [ MaleUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get list of countries', () => {
    expect(component.countryList).toBeTruthy();
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
    expect(component.maleUsers).toBeDefined();
  });

  it('should search countries',()=> {
    var country = '';
    // component.page = 1;
    component.searchCountry(country);
    expect(component.countryList).toBeDefined();
  });
});
