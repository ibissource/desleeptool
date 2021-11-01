import { Component, OnInit } from '@angular/core';
import { ZaakService } from "../zaak.service";
import { Zaak } from "../zaak.model";

@Component({
  selector: 'app-zaak-info',
  templateUrl: './zaak-info.component.html',
  styleUrls: ['./zaak-info.component.css']
})
export class ZaakInfoComponent implements OnInit {
  public zaak!: Zaak;

  constructor(public zaakService: ZaakService) { }

  ngOnInit(): void {
    this.subscribeOnZaak();
  }

  private subscribeOnZaak() {
    this.zaakService.zaakObserver.subscribe({
      next: (zaak) => {
        this.zaak = zaak;
      }
    })
  }
}
