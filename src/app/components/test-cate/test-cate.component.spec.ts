import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCateComponent } from './test-cate.component';

describe('TestCateComponent', () => {
  let component: TestCateComponent;
  let fixture: ComponentFixture<TestCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestCateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
