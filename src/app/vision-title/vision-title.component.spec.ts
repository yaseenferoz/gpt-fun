import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionTitleComponent } from './vision-title.component';

describe('VisionTitleComponent', () => {
  let component: VisionTitleComponent;
  let fixture: ComponentFixture<VisionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
