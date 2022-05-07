export interface Character {
    id: number;
    name: string;
    birth_year: string;
    homeworld: string;
    species: string;
    height: string;
    mass: string;
    vehicles: string;
    starships: string;
    films: string;
}
export interface Films {
    id: number;
    title: string;
    episode_id: number;
    release_date: string;
    director : string;
    producer: string;
    opening_crawl: string;
    vehicles: string;
    starships: string;
    species: string;
    characters: string;
}
export interface People {
    name: string;
    birthData: string;
    email: string;
    phone: string;
    password: string;
    summary: string;
    cv: any;
    charFav: any;
}

