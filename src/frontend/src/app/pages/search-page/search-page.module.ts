import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { SharedModule } from "../../shared/shared.module";
import { SearchResultComponent } from './search-result/search-result.component';



@NgModule({
  declarations: [
    SearchInputComponent,
    SearchResultComponent
  ],
  exports: [
    SearchInputComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SearchPageModule { }
