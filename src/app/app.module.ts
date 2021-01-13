import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {IconsModule, DropdownModule, ButtonsModule, WavesModule, CollapseModule} from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MaleUsersComponent } from './male-users/male-users.component';
import { FemaleUsersComponent } from './female-users/female-users.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { NguiInviewModule } from '@ngui/common';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    MaleUsersComponent,
    FemaleUsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
    WavesModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    NguiInviewModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
