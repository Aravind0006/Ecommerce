import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanneroneComponent } from './bannerone.component';

describe('BanneroneComponent', () => {
  let component: BanneroneComponent;
  let fixture: ComponentFixture<BanneroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanneroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanneroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
