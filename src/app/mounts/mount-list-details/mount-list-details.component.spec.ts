import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountListDetailsComponent } from './mount-list-details.component';

describe('MountListDetailsComponent', () => {
  let component: MountListDetailsComponent;
  let fixture: ComponentFixture<MountListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
