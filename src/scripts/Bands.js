import { getArtists, getBands, getBookings, getVenues } from './database.js'

const bands = getBands();
const venues = getVenues();
const bookings = getBookings();
const artists = getArtists();

document.addEventListener(
    "click",
    e => {
        let clickedBand = e.target;
        if (clickedBand.id.startsWith("band")) {
            const [, bandPrimaryKey] = clickedBand.id.split("--");

            let matchingBand = null;
            for (const band of bands) {
                if (band.id === parseInt(bandPrimaryKey)) {
                    matchingBand = band;
                    break;
                }
            }

            let bookingsOfBand = [];
            for (const booking of bookings) {
                if (booking.bandId === matchingBand.id) bookingsOfBand.push(booking);
            }

            let bookedVenues = [];
            for (const booking of bookingsOfBand) {
                for (const venue of venues) {
                    if (venue.id === booking.venueId) bookedVenues.push(venue);
                }
            }

            let alertHTML = "";
            for (const artist of artists) {
                if (artist.bandId === matchingBand.id) alertHTML += `${artist.firstName} ${artist.lastName} (${artist.role})\n`
            }

            alertHTML += "\nUpcomming Shows:\n"

            for (const venue of bookedVenues) {
                alertHTML += `${venue.name}\n`
            }

            window.alert(alertHTML);
        }
    }
)

export const Bands = () => {
    let bandsSection = document.querySelector("#bands");
    let bandsListHTML = "<ul>\n"

    for (const band of bands) {
        const bandListItemHTML = `<li id="band--${band.id}">${band.name}</li>\n`
        bandsListHTML += bandListItemHTML;
    }

    bandsListHTML += "</ul>"

    bandsSection.innerHTML = bandsListHTML;
}