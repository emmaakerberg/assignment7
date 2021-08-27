import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";

@Injectable({
    providedIn: 'root'
})
export class CatchedPokemonService {

    private _catchedPokemons : Pokemon[] = []

    public catchPokemon(pokemon: Pokemon) {
        if(!this._catchedPokemons.includes(pokemon)) {
            this._catchedPokemons.push(pokemon);
        }
    }

    public get catchedPokemons()  {
        return this._catchedPokemons;
    }
}