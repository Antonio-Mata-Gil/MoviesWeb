import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMovieDetailsComponent } from './my-movie-details.component';

describe('MyMovieDetailsComponent', () => {
  let component: MyMovieDetailsComponent;
  let fixture: ComponentFixture<MyMovieDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMovieDetailsComponent]
    });
    fixture = TestBed.createComponent(MyMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
