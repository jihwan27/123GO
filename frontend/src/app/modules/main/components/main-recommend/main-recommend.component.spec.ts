import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecommendComponent } from './main-recommend.component';

describe('MainRecommendComponent', () => {
  let component: MainRecommendComponent;
  let fixture: ComponentFixture<MainRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRecommendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
