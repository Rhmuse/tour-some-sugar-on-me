import { getBands, getBookings, getVenues } from './database.js';

const bookings = getBookings();
const bands = getBands();

document.addEventListener(
    "click",
    e => {
        let clickedBooking = e.target;
        if (clickedBooking.id.startsWith("booking")) {
            const [, bookingPrimaryKey] = clickedBooking.id.split("--")

            let matchingBooking = null;
            for (const booking of bookings) {
                if (booking.id === parseInt(bookingPrimaryKey)) {
                    matchingBooking = booking;
                    break;
                }
            }

            let bookedBand = null;
            for (const band of bands) {
                if (band.id === matchingBooking.bandId) {
                    bookedBand = band;
                    break;
                }
            }

            let alertHTML = `${bookedBand.name}\n${bookedBand.genre}\nFormed in ${bookedBand.established}\n${bookedBand.numberOfMembers} band members`;

            window.alert(alertHTML);
        }
    }
)

export const Bookings = () => {
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