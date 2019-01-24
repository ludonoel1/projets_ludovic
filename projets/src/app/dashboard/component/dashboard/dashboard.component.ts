import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../hero/hero';
import { HeroService } from '../../../hero/services/hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              private router: Router) { }

  ngOnInit() {
    this.getHeroes();
    console.log(this.router.config);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
