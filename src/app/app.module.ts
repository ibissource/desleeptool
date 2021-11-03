import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilePageComponent } from './pages/file-page/file-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SharedModule } from "./shared/shared.module";
import { FilePageModule } from "./pages/file-page/file-page.module";
import { RouterModule } from "@angular/router";
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchPageModule } from "./pages/search-page/search-page.module";


const routes = [
  {path: 'file', component: FilePageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'settings', component: SettingsPageComponent},
  {path: '**', redirectTo: 'file'},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilePageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FilePageModule,
    RouterModule.forRoot(routes),
    SearchPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
