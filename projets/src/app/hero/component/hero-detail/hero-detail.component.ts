import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {Location} from '@angular/common';
import {ChangeColorOfHeroPipe} from '../../../shared/pipe/change-name-of-hero.pipe';

import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  numberRegex = /[0-9][0-9]*/g;
  letterRegex = /[a-z][A-Z]*/g;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getHero();

  }

  getHero(): void {
    if (!this.route.snapshot.paramMap.get('id').match(this.letterRegex) && this.route.snapshot.paramMap.get('id').match(this.numberRegex)) {
      const id = +this.route.snapshot.paramMap.get('id');
      console.log('const id : ' + id);
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    } else {
      const name = this.route.snapshot.paramMap.get('id');
      console.log('Je suis le nom : ' + name);
      this.heroService.getHeroByName(name)
        .subscribe(hero => this.hero = hero);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
