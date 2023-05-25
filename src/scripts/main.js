import { Bands } from "./Bands.js";
import { Bookings } from './Bookings.js';

let body = document.querySelector("body");

body.innerHTML = `<section id="bookings">Bookings</section>
<section id="venues">Tour Venues</section>
<section id="bands"></section>`

Bands();
Bookings(); 
