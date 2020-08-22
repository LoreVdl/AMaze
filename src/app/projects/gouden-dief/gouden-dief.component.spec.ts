import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoudenDiefComponent } from './gouden-dief.component';

describe('GoudenDiefComponent', () => {
  let component: GoudenDiefComponent;
  let fixture: ComponentFixture<GoudenDiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoudenDiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoudenDiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
