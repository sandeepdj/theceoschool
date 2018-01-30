import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttrainingComponent } from './posttraining.component';

describe('PosttrainingComponent', () => {
  let component: PosttrainingComponent;
  let fixture: ComponentFixture<PosttrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosttrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
