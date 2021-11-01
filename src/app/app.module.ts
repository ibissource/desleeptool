import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZaakInputComponent } from './zaak-input/zaak-input.component';
import { FileComponent } from './file/file.component';
import { NgxDropzoneModule } from "ngx-dropzone";
import { ZaakInfoComponent } from './zaak-info/zaak-info.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ZaakInputComponent,
    FileComponent,
    ZaakInfoComponent
  ],
  imports: [
    BrowserModule,
    NgxDropzoneModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
