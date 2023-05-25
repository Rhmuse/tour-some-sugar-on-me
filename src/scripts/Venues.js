import { getVenues, getBands, getBookings } from './database.js';

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

document.addEventListener(
    "click",
    e => {
        let clickedVenue = e.target;
        if (clickedVenue.id.startsWith("venue")) {
            const [, venuePrimaryKey] = clickedVenue.id.split("--")

            let matchingVenue = null;
            for (const venue of venues) {
                if (venue.id === parseInt(venuePrimaryKey)) {
                    matchingVenue = venue;
                    break;
                }
            }

            let bookingsAtVenue = [];
            for (const booking of bookings) {
                if (booking.venueId === matchingVenue.id) bookingsAtVenue.push(booking);
            }

            let bookedBands = [];
            for (const booking of bookingsAtVenue) {
                for (const band of bands) {
                    if (band.id === booking.bandId) bookedBands.push(band);
                }
            }

            let alertHTML = ""
            for (const band of bookedBands) {
                alertHTML += `${band.name} `
            }

            window.alert(alertHTML);
        }
    }
)

export const Venues = () => {
    let venuesSection = document.querySelector("#venues")
    let venuesListHTML = "<ul>\n"

    for (const venue of venues) {
        const venueListItemHTML = `<li id="venue--${venue.id}">${venue.name}</li>`
        venuesListHTML += venueListItemHTML
    }

    venuesListHTML += "</ul>"

    venuesSection.innerHTML = venuesListHTML;
}