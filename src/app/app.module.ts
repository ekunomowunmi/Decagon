import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {IconsModule, DropdownModule, ButtonsModule, WavesModule, CollapseModule} from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MaleUsersComponent } from './male-users/male-users.component';
import { FemaleUsersComponent } from './female-users/female-users.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    MaleUsersComponent,
    FemaleUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
    WavesModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot()

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
