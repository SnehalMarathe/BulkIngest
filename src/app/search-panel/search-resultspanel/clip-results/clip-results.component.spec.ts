import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipResultsComponent } from './clip-results.component';

describe('ClipResultsComponent', () => {
  let component: ClipResultsComponent;
  let fixture: ComponentFixture<ClipResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
