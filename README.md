# angular-star-wars

# Userstory
As a user, I want an UI, where the 6 movies are shown initially and where I can query for 
- starships 
- People 
- Vehicles 

Using the Star wars API with the 6 Movies being accordingly higlighted, if one of the params applies after hitting the Search Button. 

# Implementation
- [x] fetch from form with search param
- [x] Component for form
- [x] Comp for Cards 
- [x] Comp for Grit, displaying cards
- [x] fetches to the SWAPI 
- [x] types for vehicles, people, starships and films 
- [ ] CSS/JS to mark films where search applies
- [ ] match the query results with films 
    + every film has an episode_id
    + vehicles, characters, starships ALL (yay) come with a results.films[url, url,..]
    + the urls end with "../{episode_id}/"
    + we could pattern-match the episode_id's with Array.filter
    + the matching film gets a css class added, that marks it as starring the search query 

# Problems and Solutions:
- getting bootstrap run / importing BS in styles.css
    - import from node_modules into styles.css
- *ngFor - iterating over data and passing them to each into child comp
    - import CommonModule
- passing down props or using a store 
- understanding the API response fully before starting to implement: 
    - tried to make the categories a dropdown, but urls given in response
    - tried to abstract the search url param "?search=", realized 
        + lol, was right, just typoed the category
