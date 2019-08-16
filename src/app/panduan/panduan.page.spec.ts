import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanduanPage } from './panduan.page';

describe('PanduanPage', () => {
  let component: PanduanPage;
  let fixture: ComponentFixture<PanduanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanduanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanduanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
