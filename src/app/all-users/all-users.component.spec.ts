import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IconsModule, DropdownModule, ButtonsModule, CollapseModule, WavesModule } from 'angular-bootstrap-md';

import UserServiceMock from '../mocks/user.service.mock';
import { UserService } from '../user.service';

import { AllUsersComponent } from './all-users.component';

describe('AllUsersComponent', () => {
  let userService: UserServiceMock;
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;

  beforeEach(async(() => {
    userService = new UserServiceMock();
    TestBed.configureTestingModule({
      imports: [
         IconsModule, FormsModule, HttpClientModule,
         ButtonsModule.forRoot(),
    WavesModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot()
      ],
      declarations: [ AllUsersComponent ]
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

  // it('should get all users from the service', ()=> {
  //   const userService = fixture.debugElement.injector.get(UserService);
  //   fixture.detectChanges();
  //   expect(userService.getAllUsers(1)).toEqual(component.users)

  // });
});
