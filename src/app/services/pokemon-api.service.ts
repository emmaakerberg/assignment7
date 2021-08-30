import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../models/pokemon.model";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PokemonApiService {

    private _pokemons: Pokemon[] = [];
    private _numberOfPokemonsToGet = 150;

    constructor(private readonly http: HttpClient) {

    }

    /**
     * Uses the pokemon name returnd from the api call to get more information
     * about a specific pokemon
     * @param limit number of pokemons to return from the PokeApi
     * @returns a json object with the amount of pokemons requested
     */
    getPokemons(limit: number) {
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    }

    /**
     * Used to get detailed information about a specific pokemon
     * @param name of a pokemon
     * @returns a json object with information about the specific pokemon
     */
    getPokemon(name: string) {
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }

    /**
     * Populate a pokemons array with Pokemons fromt the api call.
     * Values are set to the corresponding values in the Pokemon Model
     */
    populatePokemons() {
        return this.getPokemons(this._numberOfPokemonsToGet)
        .subscribe(
            (pokemons: any) => {
                (pokemons.results).forEach((pokemon: any) => {
                    this.getPokemon(pokemon.name)
                        .subscribe(
                            (pokemon: any) => {
                                let tempPokemon: Pokemon ={
                                    name: this.toUpperCase(pokemon.name),
                                    height: pokemon.height,
                                    weight: pokemon.weight,
                                    types: [...pokemon.types].map(t => t.type.name),
                                    img: pokemon.sprites.front_default,
                                    stats: [...pokemon.stats].map(s => s = {
                                        name: s.stat.name,
                                        base: s.base_stat
                                    }),
                                    abilities: [...pokemon.abilities].map(a => a.ability.name),
                                    catched: false
                                }
                                this._pokemons.push(tempPokemon)
                            }
                        )  
                });
            },
            (error: HttpErrorResponse) => {
                console.log(error)
            }
        )
    }

    /**
     * @param name of a pokemon
     * @returns the name vit first letter to uppercase
     */
    private toUpperCase(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    /**
     * Get all pokemons
     */
    get pokemons() {
        return this._pokemons;
    }

    /**
     * Set the pokemons array to an empty array
     */
    clearPokemons() {
        this._pokemons = []
    }
}