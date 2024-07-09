import { StarWarsVehicle } from './star-wars-vehicleI';
import { StarWarsCharacter } from './star-wars-characterI';
import { StarWarsStarship } from './star-wars-starshipI';

export interface StarWarsFilmI {
  characters: StarWarsCharacter;
  vehicles: StarWarsVehicle;
  starships: StarWarsStarship;
  opening_crawl: string;
  title: string;
  release_date: string;
}

