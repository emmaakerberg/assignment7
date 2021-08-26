import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { LoginService } from './services/login.service';
import { StartPageComponent } from './start-page/start-page.component';
import { ProfilePage } from './profile-page/profile-page.component';
import { PokemonApiService } from './services/pokemon-api.service';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HeaderComponent,
    PokemonListComponent,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, PokemonApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
