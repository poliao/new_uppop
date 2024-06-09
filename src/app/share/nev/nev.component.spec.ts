import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevComponent } from './nev.component';

describe('NevComponent', () => {
  let component: NevComponent;
  let fixture: ComponentFixture<NevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
