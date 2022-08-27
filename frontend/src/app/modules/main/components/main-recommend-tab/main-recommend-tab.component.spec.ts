import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecommendTabComponent } from './main-recommend-tab.component';

describe('MainRecommendTabComponent', () => {
  let component: MainRecommendTabComponent;
  let fixture: ComponentFixture<MainRecommendTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRecommendTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRecommendTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
