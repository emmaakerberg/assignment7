import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PokemonApiService {

    constructor(private readonly http: HttpClient) {

    }

    getPokemons(limit: number) {
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    }

    getPokemon(name: string) {
        return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }
}