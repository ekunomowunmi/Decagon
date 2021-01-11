import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleUsersComponent } from './male-users.component';

describe('MaleUsersComponent', () => {
  let component: MaleUsersComponent;
  let fixture: ComponentFixture<MaleUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
