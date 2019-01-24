import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroService} from './services/hero.service';
import {HeroRoutingModule} from './hero-routing.module';
import {HeroesComponent} from './component/heroes/heroes.component';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from '../dashboard/component/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [],
})
export class DashboardModule {
}



