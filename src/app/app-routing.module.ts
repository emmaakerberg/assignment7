import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { StartPageComponent } from "./start-page/start-page.component";
import { LoginService } from "./services/login.service";
import { ProfilePage } from "./profile-page/profile-page.component";
import { UserNameService } from "./services/user-name.service";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'login',
        component: StartPageComponent,
        canActivate: [UserNameService]
    },
    {
        path: 'pokemons',
        component: PokemonListComponent,
        canActivate: [LoginService]
    },
    {
        path: 'profile',
        component: ProfilePage,
        canActivate: [LoginService]
    },
    {
        path: '**',
        redirectTo: '/login'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}