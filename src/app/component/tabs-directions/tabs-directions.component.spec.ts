import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDirectionsComponent } from './tabs-directions.component';

describe('TabsDirectionsComponent', () => {
  let component: TabsDirectionsComponent;
  let fixture: ComponentFixture<TabsDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
