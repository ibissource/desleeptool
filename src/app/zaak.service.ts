import { Injectable } from '@angular/core';
import { Zaak } from "./zaak.model";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ZaakService {
  static readonly BASE_URL = 'https://open-zaak.test.sudwestfryslan.opengem.nl/';
  static readonly BEARER_URL ='http://openzaakbrug.test.sudwestfryslan.opengem.nl/jwt';

  private zaakSubject: Subject<Zaak> = new Subject<Zaak>();
  public zaakObserver = this.zaakSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  // TODO: Get last 20 zaken.

  // TODO: Get zaak by id.
  public getZaak(id: string): void {
    this.http.get(`${ZaakService.BASE_URL}zaken/api/v1/zaken?identificatie=${id}`, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept-Crs' : 'EPSG:4326',
        'Authorization': 'Bearer: '
      }),
    }).subscribe((res) => {
      console.log(res)
    })

    this.zaakSubject.next({
      id: id,
      type: 'testZaak B1202',
      afzender: 'Philipsen, S',
      omschrijving: 'Aanvraag rijbewijs'
    });
  }

  // TODO: Update zaak with file
}
