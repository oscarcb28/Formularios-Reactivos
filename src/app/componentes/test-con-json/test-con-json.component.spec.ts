import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConJsonComponent } from './test-con-json.component';

describe('TestConJsonComponent', () => {
  let component: TestConJsonComponent;
  let fixture: ComponentFixture<TestConJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestConJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestConJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
