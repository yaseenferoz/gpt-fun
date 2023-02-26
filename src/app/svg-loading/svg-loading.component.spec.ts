import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLoadingComponent } from './svg-loading.component';

describe('SvgLoadingComponent', () => {
  let component: SvgLoadingComponent;
  let fixture: ComponentFixture<SvgLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
