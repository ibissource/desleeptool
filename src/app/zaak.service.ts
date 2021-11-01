import { Injectable } from '@angular/core';
import { Zaak } from "./zaak.model";
import { Observer, Subject } from "rxjs";

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
  public getZaak(id: number): void {
    this.zaakSubject.next({id: id, name: 'testZaak'});
  }

  // TODO: Update zaak with file
}
