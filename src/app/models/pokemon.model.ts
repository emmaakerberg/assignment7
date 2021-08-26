export interface Pokemon {
    name: string
    height: number
    weight: number
    abilities: string[]
    types: string[]
    stats: Stats[]
    img: string
}

export interface Stats {
    name: string
    base: number
}


