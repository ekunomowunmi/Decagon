import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IconsModule, ButtonsModule, WavesModule, CollapseModule, DropdownModule } from 'angular-bootstrap-md';

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
    DropdownModule.forRoot()
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
});
