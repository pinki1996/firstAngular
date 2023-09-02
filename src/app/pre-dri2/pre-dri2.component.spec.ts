import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDri2Component } from './pre-dri2.component';

describe('PreDri2Component', () => {
  let component: PreDri2Component;
  let fixture: ComponentFixture<PreDri2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreDri2Component]
    });
    fixture = TestBed.createComponent(PreDri2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
