import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishManageComponent } from './wish-manage.component';

describe('WishManageComponent', () => {
  let component: WishManageComponent;
  let fixture: ComponentFixture<WishManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
