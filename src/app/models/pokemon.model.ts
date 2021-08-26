export interface Pokemon {
    name: string
    height: number
    weight: number
    abilities: string[]
    types: string[]
    stats: Stats[]
    sprites: object
}

export interface Stats {
    name: string
    base: number
}


