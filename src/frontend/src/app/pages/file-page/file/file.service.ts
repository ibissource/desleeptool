import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { NgxDropzoneChangeEvent } from "ngx-dropzone";
import { Zaak } from 'src/app/zaak.model';
import { ZaakService } from 'src/app/zaak.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  files: File[] = [];
  
  constructor(private zaakService: ZaakService) {
    this.zaakService.zaakObserver.subscribe((zaak: Zaak) => {
      if (zaak.id !== '' && zaak.documents) {
        zaak.documents.forEach((fileName: string) => this.files.push(new File([], fileName)));
      }
    })
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
    
    event.addedFiles.forEach((addedFile) => this.zaakService.postZaak(addedFile))
  }

  onRemove(file: File) {
    this.files.splice(this.files.indexOf(file), 1);
  }



}
