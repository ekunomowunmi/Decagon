import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleUsersComponent } from './female-users.component';

describe('FemaleUsersComponent', () => {
  let component: FemaleUsersComponent;
  let fixture: ComponentFixture<FemaleUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemaleUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
