import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewDemoComponent } from './tab-view-demo.component';

describe('TabViewDemoComponent', () => {
  let component: TabViewDemoComponent;
  let fixture: ComponentFixture<TabViewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabViewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
