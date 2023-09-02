import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDirectComponent } from './pre-direct.component';

describe('PreDirectComponent', () => {
  let component: PreDirectComponent;
  let fixture: ComponentFixture<PreDirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreDirectComponent]
    });
    fixture = TestBed.createComponent(PreDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
