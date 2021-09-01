import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import  {NavComponent} from  './nav/nav.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import  {UploadPhotoComponent} from './upload-photo/upload-photo.component';
import {ClientCardComponent} from './client-card/client-card.component'



const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
  { path: 'getUsers', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'clientcard/:id', component: ClientCardComponent},
  { path: 'uploadPhoto/:id', component: UploadPhotoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
