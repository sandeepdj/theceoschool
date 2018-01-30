import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowlongComponent } from './howlong.component';

describe('HowlongComponent', () => {
  let component: HowlongComponent;
  let fixture: ComponentFixture<HowlongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowlongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowlongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
