import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionExamsComponent } from './conclusion-exams.component';

describe('ConclusionExamsComponent', () => {
  let component: ConclusionExamsComponent;
  let fixture: ComponentFixture<ConclusionExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConclusionExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
