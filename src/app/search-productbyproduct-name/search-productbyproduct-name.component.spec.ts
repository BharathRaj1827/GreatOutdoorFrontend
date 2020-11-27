import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductbyproductNameComponent } from './search-productbyproduct-name.component';

describe('SearchProductbyproductNameComponent', () => {
  let component: SearchProductbyproductNameComponent;
  let fixture: ComponentFixture<SearchProductbyproductNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductbyproductNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductbyproductNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
