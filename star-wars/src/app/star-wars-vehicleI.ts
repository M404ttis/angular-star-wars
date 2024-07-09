// quick vim tip: record macro with qq, make changes on one line,
// enter visial line mode, apply register to all selcected lines :'<,'>normal @q
export interface StarWarsVehicle {
    cargo_capacity:number,
    consumables:string,
    cost_in_credits:number,
    created:Date,
    crew:string, // for whatever reason, SWAPI makes this a string
    edited:Date,
    length:number,
    manufacturer:string,
    max_atmosphering_speed:string, // for whatever reason, SWAPI makes this a string
    model:string,
    name:string,
    passengers:string, // for whatever reason, SWAPI makes this a string
    vehicle_class:string,
}

/*
 * this is an example from the SWAPI for a Vehicle,
 * for now we take out the films and pilots for having less interfaces
{
    "cargo_capacity": "50000",
    "consumables": "2 months",
    "cost_in_credits": "150000",
    "created": "2014-12-10T15:36:25.724000Z",
    "crew": "46",
    "edited": "2014-12-10T15:36:25.724000Z",
    "length": "36.8",
    "manufacturer": "Corellia Mining Corporation",
    "max_atmosphering_speed": "30",
    "model": "Digger Crawler",
    "name": "Sand Crawler",
    "passengers": "30",
    "pilots": [],
    "films": [
        "https://swapi.dev/api/films/1/"
    ],
    "url": "https://swapi.dev/api/vehicles/4/",
    "vehicle_class": "wheeled"
}
*/
