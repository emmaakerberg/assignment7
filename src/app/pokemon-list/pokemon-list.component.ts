import { SlicePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core"
import { Pokemon } from "../models/pokemon.model";
import { CatchedPokemonService } from "../services/catched-pokemons.service";
import { LoginService } from "../services/login.service";
import { PokemonApiService } from "../services/pokemon-api.service";



@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

    public loggedIn: boolean;
    public userName :string | null = localStorage.getItem('userName');
    public pokemons: Pokemon[] = []
    
    constructor(
        private readonly _loginService: LoginService,
        private readonly _pokemonApiService: PokemonApiService,
        private readonly _catchedPokemonsService: CatchedPokemonService
        ) {
        this.loggedIn = this._loginService.getLoggedInStatus();
    }
    
    ngOnInit() : void {
        this._pokemonApiService.getPokemons(12)
            .subscribe(
                (pokemons: any) => {
                    (pokemons.results).forEach((pokemon: any) => {
                        this._pokemonApiService.getPokemon(pokemon.name)
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
                                        abilities: [...pokemon.abilities].map(a => a.ability.name)
                                    }
                                    this.pokemons.push(tempPokemon)
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

    public catchPokemon(pokemon : Pokemon) {
        this._catchedPokemonsService.catchPokemon(pokemon);
    }
    

}