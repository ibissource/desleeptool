import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaakInfoComponent } from './zaak-info.component';

describe('ZaakInfoComponent', () => {
  let component: ZaakInfoComponent;
  let fixture: ComponentFixture<ZaakInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaakInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaakInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
