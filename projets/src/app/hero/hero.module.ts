import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroService} from './services/hero.service';
import {HeroRoutingModule} from './hero-routing.module';
import {HeroesComponent} from './component/heroes/heroes.component';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {FormsModule} from '@angular/forms';
import {ChangeNameOfHeroPipe} from '../shared/pipe/change-name-of-hero.pipe';

@NgModule({
  declarations: [
    ChangeNameOfHeroPipe,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    HeroRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [HeroService],
})
export class HeroModule {
}



