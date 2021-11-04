import { Injectable } from '@angular/core';
import { Zaak } from "./zaak.model";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ZaakService {
  static readonly BASE_URL = 'https://cors-anywhere.herokuapp.com/https://open-zaak.test.sudwestfryslan.opengem.nl/';
  static readonly BEARER_URL = 'https://cors-anywhere.herokuapp.com/http://openzaakbrug.test.sudwestfryslan.opengem.nl/jwt';

  private bearerToken = "";
  private zaakUrl = "";
  private bronorganisatie = "823288444";

  private zaakSubject: BehaviorSubject<Zaak> = new BehaviorSubject<Zaak>(new Zaak());
  public zaakObserver = this.zaakSubject.asObservable();

  constructor(private http: HttpClient) {

  }

  public postZaak(file: File) {
    const zaak = this.zaakSubject.getValue();

    this.getBearerToken().then(() => {
      this.readFile(file).then((fileContent) => {
        let currentDate = new Date();
        const documentData = {
          "bronorganisatie": this.bronorganisatie,
          "creatiedatum": formatDate(currentDate, 'yyyy-MM-dd', 'en-US'),
          "titel": file.name,
          "vertrouwelijkheidaanduiding": "openbaar",
          "auteur": zaak.afzender,
          "status": "in_bewerking",
          "formaat": file.type,
          "taal": "nld",
          "bestandsnaam": file.name,
          "inhoud": fileContent,
          "indicatieGebruiksrecht": false,
          "informatieobjecttype": zaak.informatieObjectTypen
        }

        this.http.post(`${ZaakService.BASE_URL}documenten/api/v1/enkelvoudiginformatieobjecten`, documentData, {headers: this.getHeaders()}).subscribe((zaakResponse: any) => {
          const relatieData = {
            "informatieobject": zaakResponse.url,
            "zaak": this.zaakUrl,
            "titel": file.name
          }
          this.http.post(`${ZaakService.BASE_URL}zaken/api/v1/zaakinformatieobjecten`, relatieData, {headers: this.getHeaders()}).subscribe((relatieResponse: any) => {
              
          })
        })
      })
    })


  }

  public getZaak(id: string): void {
    this.http.get<any>(`http://localhost/api/test?identificatie=${id}`).subscribe(res => {
      const zaak = {
        id: res.zaakId,
        type : res.zaakTypeId,
        afzender: res.afzender,
        typeOmschrijving: res.zaakTypeOmschrijving,
        omschrijving : res.zaakOmschrijving,
        informatieObjectTypen: res.informatieObjectTypen.replace(/(?<=.nl):443/g, ''),
        documents: res.documents.split(';')
      };
      this.zaakUrl = res.zaakUrl;
      this.zaakSubject.next(zaak);
    })
  }


  public async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        return resolve((e.target as FileReader).result ?? '');
      };

      reader.onerror = e => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };

      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }

      reader.readAsDataURL(file);
    });
  }


  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Accept-Crs': 'EPSG:4326',
      'Authorization': `Bearer ${this.bearerToken}`
    })
  }

  public async getBearerToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(ZaakService.BEARER_URL, {
        responseType: 'text'
      } as Object)
        .subscribe((res: string) => {
          resolve(res);
          return this.bearerToken = res;
        })
    })
  }

}
