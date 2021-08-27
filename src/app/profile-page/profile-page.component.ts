import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { UserNameService } from "../services/user-name.service";
import { CatchedPokemonService } from "../services/catched-pokemons.service";
import { PokemonApiService } from "../services/pokemon-api.service";
import { Pokemon } from "../models/pokemon.model";

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
})
export class ProfilePage {

    public userName :string | null = localStorage.getItem('userName');
    public catchedPokemons : Pokemon[]
    constructor(
        private readonly _loginService: LoginService,
        private readonly _userNameService: UserNameService,
        private readonly _catchedPokemonService: CatchedPokemonService,
        private readonly _pokemonApiService: PokemonApiService,
        private readonly _router: Router) {
        this.catchedPokemons = this._catchedPokemonService.catchedPokemons;
    }

    logOut() {
        localStorage.clear();
        this._loginService.setLoggedIn(false);
        this._userNameService.setUserName(null)
        this._router.navigate(['/login'])
    }

    goToPokemonsPage(){
        this._pokemonApiService.pokemons = []
        this._router.navigate(['/pokemons'])
    }


}