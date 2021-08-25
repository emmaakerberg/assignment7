import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { StartPageComponent } from "./start-page/start-page.component";
import { LoginService } from "./services/login.service";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
        
    },
    {
        path: 'login',
        component: StartPageComponent
    },
    {
        path: 'pokemons',
        component: PokemonListComponent,
        canActivate: [LoginService]
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}