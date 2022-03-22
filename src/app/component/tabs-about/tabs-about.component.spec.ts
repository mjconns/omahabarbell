import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAboutComponent } from './tabs-about.component';

describe('TabsAboutComponent', () => {
  let component: TabsAboutComponent;
  let fixture: ComponentFixture<TabsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
