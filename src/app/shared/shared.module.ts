import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBarComponent } from "./input-bar/input-bar.component";
import { ButtonComponent } from "./button/button.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    InputBarComponent,
    ButtonComponent,
  ],
  exports: [
    InputBarComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
