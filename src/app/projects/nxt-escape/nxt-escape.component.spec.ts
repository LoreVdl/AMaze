import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxtEscapeComponent } from './nxt-escape.component';

describe('NxtEscapeComponent', () => {
  let component: NxtEscapeComponent;
  let fixture: ComponentFixture<NxtEscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxtEscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxtEscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
