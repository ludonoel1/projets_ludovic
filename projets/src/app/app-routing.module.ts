import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/component/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HeroModule} from './hero/hero.module';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', loadChildren: './hero/hero.module#HeroModule'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes,{
      // useHash: true,
      // To debug routing
      enableTracing: true
    })
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}



