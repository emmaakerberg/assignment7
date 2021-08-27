import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../models/pokemon.model";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PokemonApiService {

    private _pokemons: Pokemon[] = [];
    private _totalPokemons : number = 0;

    constructor(private readonly http: HttpClient) {

    }

    getPokemons(limit: number, offset: number) {
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    }

    getPokemon(name: string) {
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }

    populatePokemons(limit: number, offset: number) {
        return this.getPokemons(limit, offset)
        .subscribe(
            (pokemons: any) => {
                this._totalPokemons = pokemons.count;

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

    getAllPokemons() {
        console.log(this._pokemons[0], "in api")
        return this._pokemons;
    }

    set pokemons(pokemons : Pokemon[]) {
        this._pokemons = pokemons
    }

    get totalPokemons() {
        return this._totalPokemons;
    }

    getspecificPokemon(index : number) {
        return this._pokemons[index]
    }
}