import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {HeroesComponent} from './component/heroes/heroes.component';

const heroesRoutes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'detail/:name', component: HeroDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [RouterModule]

})


export class HeroRoutingModule {
}
