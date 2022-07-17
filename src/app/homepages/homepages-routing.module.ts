import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './homepages.component';
import { InfohomeComponent } from './components/infohome/infohome.component';

const routes: Routes = [{path:'',component: HomepagesComponent, 
children:[
  {path:'info', component:InfohomeComponent}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepagesRoutingModule { }
