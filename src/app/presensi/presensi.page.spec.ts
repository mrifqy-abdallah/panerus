import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresensiPage } from './presensi.page';

describe('PresensiPage', () => {
  let component: PresensiPage;
  let fixture: ComponentFixture<PresensiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresensiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresensiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
