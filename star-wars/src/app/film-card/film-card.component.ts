import { Component } from '@angular/core';
import { StarWarsFilmI } from '../star-wars-filmI';
import { StarWarsVehicle } from './../star-wars-vehicleI';
import { StarWarsCharacter } from './../star-wars-characterI';
import { StarWarsStarship } from './../star-wars-starshipI';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {
  // this is a test film
  film1: StarWarsFilmI = {

    characters: <StarWarsCharacter> {
      birth_year: "19 BBY",
      eye_color: "Blue",
      gender: "Male",
      hair_color: "Blond",
      height: "172",
      mass: "77",
      name: "Luke Skywalker",
      skin_color: "Fair",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-10T13:52:43.172000Z",
    },

    vehicles: <StarWarsVehicle>{
        cargo_capacity: "50000",
        consumables: "2 months",
        cost_in_credits: "150000",
        created: "2014-12-10T15:36:25.724000Z",
        crew: "46",
        edited: "2014-12-10T15:36:25.724000Z",
        length: "36.8",
        manufacturer: "Corellia Mining Corporation",
        max_atmosphering_speed: "30",
        model: "Digger Crawler",
        name: "Sand Crawler",
        passengers: "30",
        vehicle_class: "wheeled"
    },

    starships: <StarWarsStarship>{
        MGLT: "10 MGLT",
        cargo_capacity: "1000000000000",
        consumables: "3 years",
        cost_in_credits: "1000000000000",
        created: "2014-12-10T16:36:50.509000Z",
        crew: "342953",
        edited: "2014-12-10T16:36:50.509000Z",
        hyperdrive_rating: "4.0",
        length: "120000",
        manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
        max_atmosphering_speed: "n/a",
        model: "DS-1 Orbital Battle Station",
        name: "Death Star",
        passengers: "843342",
        starship_class: "Deep Space Mobile Battlestation",
      },
    opening_crawl:
      "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
    title:"A new hope",
    release_date: "1977-05-25",
  }
}
