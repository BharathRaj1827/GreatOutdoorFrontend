import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductbyproductCategoryComponent } from './search-productbyproduct-category.component';

describe('SearchProductbyproductCategoryComponent', () => {
  let component: SearchProductbyproductCategoryComponent;
  let fixture: ComponentFixture<SearchProductbyproductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductbyproductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductbyproductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
