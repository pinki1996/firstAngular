import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpIntegrationComponent } from './http-integration.component';

describe('HttpIntegrationComponent', () => {
  let component: HttpIntegrationComponent;
  let fixture: ComponentFixture<HttpIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpIntegrationComponent]
    });
    fixture = TestBed.createComponent(HttpIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
