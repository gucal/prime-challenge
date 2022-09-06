import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalItemCardComponent } from './horizontal-item-card.component';

describe('HorizontalItemCardComponent', () => {
  let component: HorizontalItemCardComponent;
  let fixture: ComponentFixture<HorizontalItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
