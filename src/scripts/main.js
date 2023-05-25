import { Bands } from "./Bands.js";
import { Bookings } from './Bookings.js';
import { Venues } from './Venues.js';

//establish sections to put info into
let body = document.querySelector("body");

body.innerHTML = `<section id="bookings">Bookings</section>
<div class="container">
<section id="venues">Tour Venues</section>
<section id="bands"></section>
</div>`

//invoke component functions
Bands();
Bookings();
Venues();  
