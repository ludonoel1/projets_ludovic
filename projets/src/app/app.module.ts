import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './hero/component/heroes/heroes.component';
import { HeroDetailComponent } from './hero/component/hero-detail/hero-detail.component';
import { MessagesComponent } from './message/component/messages/messages.component';
import {HeroModule} from './hero/hero.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/component/dashboard/dashboard.component';
import { ChangeColorDirective } from './shared/directive/change-color.directive';
import {CommonModule} from '@angular/common';
import {DashboardModule} from './dashboard/dashboard.module';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ChangeColorDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    DashboardModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  exports: [
    CommonModule,
    FormsModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
