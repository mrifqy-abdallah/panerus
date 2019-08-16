import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanPage } from './aduan.page';

describe('AduanPage', () => {
  let component: AduanPage;
  let fixture: ComponentFixture<AduanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AduanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
