import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZaakInputComponent } from "./zaak-input/zaak-input.component";
import { FileComponent } from "./file/file.component";
import { ZaakInfoComponent } from "./zaak-info/zaak-info.component";
import { SharedModule } from "../../shared/shared.module";
import { NgxDropzoneModule } from "ngx-dropzone";


@NgModule({
  declarations: [
    ZaakInputComponent,
    FileComponent,
    ZaakInfoComponent,
  ],
  exports: [
    ZaakInputComponent,
    ZaakInfoComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxDropzoneModule
  ]
})
export class FilePageModule { }
