import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";

@Injectable({
    providedIn: 'root'
})
export class CatchedPokemonService {

    private _catchedPokemons : Pokemon[] = []

    catchPokemon(pokemon: Pokemon) {
        if(!this._catchedPokemons.includes(pokemon)) {
            this._catchedPokemons.push(pokemon);
        }
    }

    clearAllPokemons() {
        this._catchedPokemons = [];
    }

    get catchedPokemons()  {
        return this._catchedPokemons;
    }
}