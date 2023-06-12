import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStreamingDataComponent } from './movie-streaming-data.component';

describe('MovieStreamingDataComponent', () => {
  let component: MovieStreamingDataComponent;
  let fixture: ComponentFixture<MovieStreamingDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieStreamingDataComponent]
    });
    fixture = TestBed.createComponent(MovieStreamingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
