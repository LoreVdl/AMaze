import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmFunComponent } from './farm-fun.component';

describe('FarmFunComponent', () => {
  let component: FarmFunComponent;
  let fixture: ComponentFixture<FarmFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
