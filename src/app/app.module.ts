import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CnpjComponent } from './cnpj/cnpj.component';
import { AppComponent } from './app.component';

//Nebular
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule, 
  NbLayoutModule, 
  NbInputModule, 
  NbButtonModule
} from '@nebular/theme';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CnpjComponent,
    CardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    //Nebular
    NbThemeModule.forRoot({ name: 'dark' }),
    NbEvaIconsModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,

    //Ngx-Mask
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
