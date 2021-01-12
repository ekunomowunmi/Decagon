import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  let httpClientSpy: {get: jasmine.Spy};
  let userService: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    userService = new UserService(httpClientSpy as any);
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  // it('should get all users', () => {
  //   expect(userService.getAllUsers(1)).toBe(new Observable<any>())
  // });
});
