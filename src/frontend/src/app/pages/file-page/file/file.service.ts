import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { NgxDropzoneChangeEvent } from "ngx-dropzone";
import { ZaakService } from 'src/app/zaak.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  files: File[] = [];
  
  constructor(public zaakService: ZaakService) {}

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);

    console.log('add files: ', event.addedFiles);
    event.addedFiles.forEach(addedFile => this.zaakService.postZaak(addedFile))
  }

  onRemove(file: File) {
    this.files.splice(this.files.indexOf(file), 1);
  }

  // getFileContents() {
  //   this.files.forEach((file) => this.readFile(file).then((content) => {
  //     console.log(content)
  //   }))
  // }


}
