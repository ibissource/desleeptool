import { Injectable } from '@angular/core';
import { Zaak } from "./zaak.model";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ZaakService {
  static readonly BASE_URL = 'https://cors-anywhere.herokuapp.com/https://open-zaak.test.sudwestfryslan.opengem.nl/';
  static readonly BEARER_URL = 'https://cors-anywhere.herokuapp.com/http://openzaakbrug.test.sudwestfryslan.opengem.nl/jwt';

  private bearerToken = "";

  private zaakUrl = "";

  private zaakSubject: Subject<Zaak> = new Subject<Zaak>();
  public zaakObserver = this.zaakSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  // TODO: Get last 20 zaken.

  public getZaak(id: string): void {

    this.http.get<any>(`http://localhost:8080/iaf-example/api/test?identificatie=${id}`).subscribe(res => {
      const zaak= {
        id: res.zaakId,
        type : res.zaakTypeId,
        afzender: res.afzender,
        typeOmschrijving: res.zaakTypeOmschrijving,
        omschrijving : res.zaakOmschrijving
      };
      this.zaakSubject.next(zaak);
    })
  }

  // getHeaders(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*',
  //     'Accept-Crs': 'EPSG:4326',
  //     'Authorization': `Bearer ${this.bearerToken}`
  //   })
  // }

  // public async getBearerToken(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     this.http.get<any>(ZaakService.BEARER_URL, {
  //       responseType: 'text'
  //     } as Object)
  //       .subscribe((res: string) => {
  //         resolve(res);
  //         return this.bearerToken = res;
  //       })
  //   })
  // }

  // public async getOmschrijving(zaak: Zaak): Promise<string> {

  //   return new Promise((resolve, reject) => {
  //     this.http.get(`${ZaakService.BASE_URL}zaken/api/v1/zaken?identificatie=${zaak.id}`, {
  //       headers: this.getHeaders(),
  //     }).subscribe((res: any) => {
  //       console.log(res);
  //       const results = res.results[0];
  //       this.zaakUrl = results.url;
  //       zaak.omschrijving = results.omschrijving;
  //       resolve(results.zaaktype);
  //     })
  //   })


  // }

  // public async getZaakType(url: string, zaak: Zaak): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(`https://cors-anywhere.herokuapp.com/${url}`, {
  //       headers: this.getHeaders(),
  //     }).subscribe((res: any) => {
  //       console.log(res);
  //       zaak.type = res.identificatie;
  //       zaak.typeOmschrijving = res.omschrijving;
  //       resolve("");
  //     })
  //   })
  // }

  // public async getZaakAfzender(zaak: Zaak): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(`${ZaakService.BASE_URL}zaken/api/v1/rollen?zaak=${this.zaakUrl}`, {
  //       headers: this.getHeaders(),
  //     }).subscribe((res: any) => {
  //       console.log(res);
  //       const initiator = res.results.find((result: any) => result.omschrijvingGeneriek == "initiator" && result.omschrijving == "Initiator");
  //       console.log('initiator:::: ', initiator)
  //       zaak.afzender = initiator.betrokkeneIdentificatie.geslachtsnaam + ", " + initiator.betrokkeneIdentificatie.voorletters;
  //       resolve("");
  //     })
  //   })
  // }

  // TODO: Update zaak with file
}
