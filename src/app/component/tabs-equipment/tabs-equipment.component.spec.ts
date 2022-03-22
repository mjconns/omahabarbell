import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsEquipmentComponent } from './tabs-equipment.component';

describe('TabsEquipmentComponent', () => {
  let component: TabsEquipmentComponent;
  let fixture: ComponentFixture<TabsEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
