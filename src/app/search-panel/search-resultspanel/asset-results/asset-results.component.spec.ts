import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetResultsComponent } from './asset-results.component';

describe('AssetResultsComponent', () => {
  let component: AssetResultsComponent;
  let fixture: ComponentFixture<AssetResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
