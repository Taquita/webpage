import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOffComponent } from './side-off.component';

describe('SideOffComponent', () => {
  let component: SideOffComponent;
  let fixture: ComponentFixture<SideOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
