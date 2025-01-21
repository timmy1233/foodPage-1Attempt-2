import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';
import { FoodService } from './services/food/food.service';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  schemas: [],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    RatingModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
