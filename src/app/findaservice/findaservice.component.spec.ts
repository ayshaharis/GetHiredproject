import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindaserviceComponent } from './findaservice.component';

describe('FindaserviceComponent', () => {
  let component: FindaserviceComponent;
  let fixture: ComponentFixture<FindaserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindaserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
