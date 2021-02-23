import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesDialogComponent } from './resources-dialog.component';

describe('ResourcesDialogComponent', () => {
  let component: ResourcesDialogComponent;
  let fixture: ComponentFixture<ResourcesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
