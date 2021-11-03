import { Injectable } from '@angular/core';
import { NgxDropzoneChangeEvent } from "ngx-dropzone";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  files: File[] = [];

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
  }

  onRemove(file: File) {
    this.files.splice(this.files.indexOf(file), 1);
  }

  getFileContents() {
    this.files.forEach((file) => this.readFile(file).then((content) => {
      console.log(content)
    }))
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
}
