import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTreeViewComponent } from './treeview.component';

describe('TreeviewComponent', () => {
  let component: CheckboxTreeViewComponent;
  let fixture: ComponentFixture<CheckboxTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxTreeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
