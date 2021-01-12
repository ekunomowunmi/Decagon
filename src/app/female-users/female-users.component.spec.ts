import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, CollapseModule, DropdownModule, IconsModule, WavesModule } from 'angular-bootstrap-md';

import { FemaleUsersComponent } from './female-users.component';

describe('FemaleUsersComponent', () => {
  let component: FemaleUsersComponent;
  let fixture: ComponentFixture<FemaleUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, HttpClientModule,
        IconsModule,
        ButtonsModule.forRoot(),
    WavesModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot()
      ],
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
