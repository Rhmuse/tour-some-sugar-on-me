import { getVenues } from './database.js';

export const Venues = () => {
    const venues = getVenues();
    let venuesSection = document.querySelector("#venues")
    let venuesListHTML = "<ul>\n"

    for (const venue of venues) {
        const venueListItemHTML = `<li class="venue--${venue.id}">${venue.name}</li>`
        venuesListHTML += venueListItemHTML
    }

    venuesListHTML += "</ul>"

    venuesSection.innerHTML = venuesListHTML;
}