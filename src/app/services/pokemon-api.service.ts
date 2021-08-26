import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../models/pokemon.model";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PokemonApiService {

    private _pokemons: Pokemon[] = []

    constructor(private readonly http: HttpClient) {
        this.populatePokemons()
    }

    getPokemons(limit: number) {
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    }

    getPokemon(name: string) {
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }

    populatePokemons() {
        return this.getPokemons(12)
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

    private toUpperCase(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    get pokemons() {
        return this._pokemons;
    }
}