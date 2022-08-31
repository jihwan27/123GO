import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendSubComponent } from './recommend-sub.component';

describe('MainRecommendComponent', () => {
  let component: RecommendSubComponent;
  let fixture: ComponentFixture<RecommendSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
