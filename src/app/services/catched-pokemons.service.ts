import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";

@Injectable({
    providedIn: 'root'
})
export class CatchedPokemonService {

    private _catchedPokemons : Pokemon[] = []

    /**
     * Add a pokemon to the catchedPokemon array if not already catced
     * @param pokemon pokemon to catch
     */
    catchPokemon(pokemon: Pokemon) {
        if(!this._catchedPokemons.includes(pokemon)) {
            this._catchedPokemons.push(pokemon);
        }
    }

    /**
     * Clear catchedPokemons array by setting it to an empty array
     */
    clearAllPokemons() {
        this._catchedPokemons = [];
    }

    /**
     * Return array of all catched pokemons
     */
    get catchedPokemons()  {
        return this._catchedPokemons;
    }
}