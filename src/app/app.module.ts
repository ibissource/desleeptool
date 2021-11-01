import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZaakInputComponent } from './zaak-input/zaak-input.component';
import { FileComponent } from './file/file.component';
import { NgxDropzoneModule } from "ngx-dropzone";

@NgModule({
  declarations: [
    AppComponent,
    ZaakInputComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
