import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleworkerComponent } from './singleworker.component';

describe('SingleworkerComponent', () => {
  let component: SingleworkerComponent;
  let fixture: ComponentFixture<SingleworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleworkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
