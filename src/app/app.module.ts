import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ClientCardComponent } from './client-card/client-card.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    NavComponent,
    UploadPhotoComponent,
    EditComponent,
    ClientCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
