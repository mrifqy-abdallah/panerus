import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupPage } from './grup.page';

describe('GrupPage', () => {
  let component: GrupPage;
  let fixture: ComponentFixture<GrupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
