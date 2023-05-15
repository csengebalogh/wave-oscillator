import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'bout', component: CreditsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
