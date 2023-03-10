import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';

import { MatInputModule } from '@angular/material/input'
import { MatTabsModule } from '@angular/material/tabs'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { CertificateComponent } from './certificate/certificate.component';
import { Login2Component } from './login2/login2.component';
import { Result2Component } from './result2/result2.component'

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    LoginComponent,
    UploadComponent,
    CertificateComponent,
    Login2Component,
    Result2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPrintModule,
    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
