import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";

@Injectable({
    providedIn: 'root'
})
export class CatchedPokemonService {

    private _catchedPokemons : Pokemon[] = []
    private _catchedPokemonsNames : string [] = []

    catchPokemon(pokemon: Pokemon) {
        if(!this._catchedPokemons.includes(pokemon)) {
            this._catchedPokemons.push(pokemon);
            this._catchedPokemonsNames.push(pokemon.name)
        }
    }

    get catchedPokemons()  {
        return this._catchedPokemons;
    }

    get catchedPokemonsNames() {
        return this._catchedPokemonsNames;
    }
}