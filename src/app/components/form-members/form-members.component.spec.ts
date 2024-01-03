/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormMembersComponent } from './form-members.component';

describe('FormMembersComponent', () => {
  let component: FormMembersComponent;
  let fixture: ComponentFixture<FormMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
