import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule} from "@angular/forms";
import { CkeditorPopupComponent } from './ckeditor-popup/ckeditor-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CkeditorPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
