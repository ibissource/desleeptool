import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaakInputComponent } from './zaak-input.component';

describe('ZaakIdComponent', () => {
  let component: ZaakInputComponent;
  let fixture: ComponentFixture<ZaakInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaakInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaakInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
