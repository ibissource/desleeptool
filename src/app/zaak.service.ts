import { Injectable } from '@angular/core';
import { Zaak } from "./zaak.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZaakService {
  private zaakSubject: Subject<Zaak> = new Subject<Zaak>();
  public zaakObserver = this.zaakSubject.asObservable();

  constructor() {
  }

  // TODO: Get last 20 zaken.

  // TODO: Get zaak by id.
  public getZaak(id: string): void {
    this.zaakSubject.next({
      id: id,
      type: 'testZaak B1202',
      afzender: 'Philipsen, S',
      omschrijving: 'Aanvraag rijbewijs'
    });
  }

  // TODO: Update zaak with file
}
