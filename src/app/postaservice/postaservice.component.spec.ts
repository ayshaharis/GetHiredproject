import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaserviceComponent } from './postaservice.component';

describe('PostaserviceComponent', () => {
  let component: PostaserviceComponent;
  let fixture: ComponentFixture<PostaserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostaserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
