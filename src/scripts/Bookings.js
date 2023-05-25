import { getBands, getBookings, getVenues } from './database.js';

export const Bookings = () => {
    const bookings = getBookings();
    const bands = getBands();
    const venues = getVenues();
    let bookingsSection = document.querySelector("#bookings");
    let bookingsListHTML = "<ul>\n"

    for (const booking of bookings) {
        let bookedBand = null;
        let bookedVenue = null;

        for (const band of bands) {
            if (booking.bandId === band.id) {
                bookedBand = band;
                break;
            }
        }

        for (const venue of venues) {
            if (booking.venueId === venue.id) {
                bookedVenue = venue;
                break;
            }
        }

        const bookingListItemHTML = `<li id="booking--${booking.id}">${bookedBand.name} is playing at ${bookedVenue.name} on ${booking.date}.</li>\n`

        bookingsListHTML += bookingListItemHTML;
    }
    bookingsListHTML += "</ul>"

    bookingsSection.innerHTML = bookingsListHTML;
}