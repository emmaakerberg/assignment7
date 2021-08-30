/**
 * Model of a pokemon, filled in with relevant data from the [PokeApi](https://pokeapi.co/) 
 * 
 */
export interface Pokemon {
    name: string
    height: number
    weight: number
    abilities: string[]
    types: string[]
    stats: Stats[]
    img: string
    catched: boolean
}

export interface Stats {
    name: string
    base: number
}


