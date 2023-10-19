import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioComponent } from './portafolio.component';
import { OnInit } from '@angular/core';

describe('PortafolioComponent', () => {
  let component: PortafolioComponent;
  let fixture: ComponentFixture<PortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

