import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesoneachplanComponent } from './devicesoneachplan.component';

describe('DevicesoneachplanComponent', () => {
  let component: DevicesoneachplanComponent;
  let fixture: ComponentFixture<DevicesoneachplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesoneachplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesoneachplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
