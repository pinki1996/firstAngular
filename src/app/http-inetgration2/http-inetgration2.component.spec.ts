import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInetgration2Component } from './http-inetgration2.component';

describe('HttpInetgration2Component', () => {
  let component: HttpInetgration2Component;
  let fixture: ComponentFixture<HttpInetgration2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpInetgration2Component]
    });
    fixture = TestBed.createComponent(HttpInetgration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
