import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvFormComponent } from './uv-form.component';

describe('MainComponent', () => {
  let component: UvFormComponent;
  let fixture: ComponentFixture<UvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
