import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultspanelComponent } from './search-resultspanel.component';

describe('SearchResultspanelComponent', () => {
  let component: SearchResultspanelComponent;
  let fixture: ComponentFixture<SearchResultspanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultspanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
