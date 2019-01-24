import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MessageService} from '../../message/services/message.service';
import {Hero} from '../hero';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  private log(message: string) {
    this.messageService.add('HeroService: ${message}');
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  //
  // getHero(id: number): Observable<Hero> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }
  //
  // getHeroByName(name: string): Observable<Hero> {
  //   this.messageService.add(`We are looking for name=${name}`);
  //   return of(HEROES.find(hero => hero.name === name));
  // }

  // addHero(name: any) {
  //   this.messageService.add(`We added a new Hero : name=${name}`);
  //   HEROES.push({id: 0, name});
  // }
}
