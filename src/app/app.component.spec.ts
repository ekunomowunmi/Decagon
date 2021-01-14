import { TestBed, async,inject, fakeAsync, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BsDropdownConfig, DropdownModule, IconsModule} from 'angular-bootstrap-md'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NguiInviewModule } from '@ngui/common';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { FemaleUsersComponent } from './female-users/female-users.component';
import { MaleUsersComponent } from './male-users/male-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppModule } from './app.module';
import { Component, NgModule } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import { RouterLinkDirectiveStub } from 'src/environments/testing/router-link-directive-stub';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {
}

class MockRouter{
  navigateByUrl(url:string){return url;}
}

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  const routes: Routes = [
    {path:'',component: AllUsersComponent, pathMatch: 'full'},
    {path:'all-users',component:AllUsersComponent},
    {path:'male-users',component:MaleUsersComponent},
    {path:'female-users',component:FemaleUsersComponent},
    {path:'user-details',component:UserDetailComponent}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // [RouterTestingModule.withRoutes(routes)],
         BrowserModule, RouterModule.forRoot(routes), IconsModule, DropdownModule.forRoot(), FormsModule, HttpClientModule, NguiInviewModule
      ],
      declarations: [
        AppComponent,
        AllUsersComponent,
        MaleUsersComponent,
        FemaleUsersComponent,
        UserDetailComponent
      ],
      providers:[{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  // router = TestBed.get(Router);
  // location = TestBed.get(Location);
  // router.initialNavigation();


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Decagon'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Decagon');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('Decagon app is running!');
  // });
});
