import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentangappPage } from './tentangapp.page';

describe('TentangappPage', () => {
  let component: TentangappPage;
  let fixture: ComponentFixture<TentangappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentangappPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentangappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
