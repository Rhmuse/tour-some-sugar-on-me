const database = {
    venues: [
        {
            id: 1,
            name: "Zydeko",
            address: "2392 Laury Road Suite 815, Kesslerhaven, NC, 80280",
            size: 1200,
            maxOccupacy: 300,
        },
        {
            id: 2,
            name: "Gardenia Hall",
            address: "456 Rosemary Lane, Greenfield, CA, 90210",
            size: 800,
            maxOccupancy: 200
        },
        {
            id: 3,
            name: "Starlight Palace",
            address: "789 Moonbeam Avenue, Stardust City, TX, 12345",
            size: 1500,
            maxOccupancy: 400
        },
        {
            id: 4,
            name: "Riverside Manor",
            address: "321 Willow Street, Riverdale, NY, 54321",
            size: 1000,
            maxOccupancy: 250
        },
        {
            id: 5,
            name: "Harmony Hall",
            address: "987 Melody Road, Harmonyville, AZ, 67890",
            size: 600,
            maxOccupancy: 150
        },
        {
            id: 6,
            name: "Crystal Ballroom",
            address: "555 Enchantment Avenue, Mystique Town, FL, 13579",
            size: 2000,
            maxOccupancy: 500
        },
    ],
    bands: [
        {
            id: 1,
            name: "Screaming Clowns",
            numberOfMembers: 12,
            genre: "Black Metal",
            established: "2022",
        },
        {
            id: 2,
            name: "Electric Moonshine",
            numberOfMembers: 4,
            genre: "Rock",
            established: "2010",
        },
        {
            id: 3,
            name: "Velvet Shadows",
            numberOfMembers: 5,
            genre: "Gothic Metal",
            established: "2014",
        },
        {
            id: 4,
            name: "Harmonic Chaos",
            numberOfMembers: 3,
            genre: "Progressive Rock",
            established: "2008",
        },
        {
            id: 5,
            name: "Crimson Thunder",
            numberOfMembers: 4,
            genre: "Power Metal",
            established: "2005",
        }
    ],
    bookings: [
        {
            id: 1,
            bandId: 1,
            venueId: 1,
            date: "2/26/2023",
        },
        {
            id: 2,
            bandId: 3,
            venueId: 2,
            date: "3/15/2023"
        },
        {
            id: 3,
            bandId: 4,
            venueId: 3,
            date: "4/10/2023"
        },
        {
            id: 4,
            bandId: 5,
            venueId: 4,
            date: "5/5/2023"
        },
        {
            id: 5,
            bandId: 2,
            venueId: 5,
            date: "6/20/2023"
        },
        {
            id: 6,
            bandId: 1,
            venueId: 3,
            date: "7/8/2023"
        },
        {
            id: 7,
            bandId: 2,
            venueId: 4,
            date: "8/12/2023"
        },
        {
            id: 8,
            bandId: 3,
            venueId: 1,
            date: "9/20/2023"
        },
        {
            id: 9,
            bandId: 4,
            venueId: 6,
            date: "10/5/2023"
        },
        {
            id: 10,
            bandId: 5,
            venueId: 2,
            date: "11/18/2023"
        }
    ],
    artists: [
        {
            id: 1,
            firstName: "Axe",
            lastName: "LeRose",
            dob: "04/10/84",
            role: "Lead Guitarist",
            bandId: 1,
        },
        {
            id: 2,
            firstName: "Elena",
            lastName: "Martinez",
            dob: "11/28/91",
            role: "Lead Vocalist",
            bandId: 1,
        },
        {
            id: 3,
            firstName: "Jack",
            lastName: "Thompson",
            dob: "09/15/79",
            role: "Drummer",
            bandId: 1,
        },
        {
            id: 4,
            firstName: "Sophia",
            lastName: "Chen",
            dob: "03/04/92",
            role: "Bassist",
            bandId: 1,
        },
        {
            id: 5,
            firstName: "Luke",
            lastName: "Anderson",
            dob: "07/20/88",
            role: "Keyboardist",
            bandId: 1,
        },
        {
            id: 6,
            firstName: "Olivia",
            lastName: "Walker",
            dob: "05/12/93",
            role: "Lead Guitarist",
            bandId: 1,
        },
        {
            id: 7,
            firstName: "Max",
            lastName: "Garcia",
            dob: "02/09/85",
            role: "Lead Vocalist",
            bandId: 1,
        },
        {
            id: 8,
            firstName: "Mia",
            lastName: "Johnson",
            dob: "08/03/88",
            role: "Rhythm Guitarist",
            bandId: 1,
        },
        {
            id: 9,
            firstName: "Liam",
            lastName: "Wilson",
            dob: "12/17/90",
            role: "Lead Vocalist",
            bandId: 1,
        },
        {
            id: 10,
            firstName: "Isabella",
            lastName: "Gomez",
            dob: "06/25/87",
            role: "Keyboardist",
            bandId: 1,
        },
        {
            id: 11,
            firstName: "Henry",
            lastName: "Rodriguez",
            dob: "02/06/95",
            role: "Bassist",
            bandId: 1,
        },
        {
            id: 12,
            firstName: "Ava",
            lastName: "Smith",
            dob: "09/11/92",
            role: "Drummer",
            bandId: 1,
        },
        {
            id: 13,
            firstName: "Owen",
            lastName: "Brown",
            dob: "03/27/89",
            role: "Lead Guitarist",
            bandId: 2,
        },
        {
            id: 14,
            firstName: "Charlotte",
            lastName: "Nguyen",
            dob: "07/19/91",
            role: "Lead Vocalist",
            bandId: 2,
        },
        {
            id: 15,
            firstName: "Noah",
            lastName: "Kim",
            dob: "05/08/93",
            role: "Bassist",
            bandId: 2,
        },
        {
            id: 16,
            firstName: "Sophie",
            lastName: "Allen",
            dob: "11/30/85",
            role: "Keyboardist",
            bandId: 2,
        },
        {
            id: 17,
            firstName: "William",
            lastName: "Thomas",
            dob: "01/22/94",
            role: "Drummer",
            bandId: 3,
        },
        {
            id: 18,
            firstName: "Chloe",
            lastName: "Martin",
            dob: "10/12/87",
            role: "Rhythm Guitarist",
            bandId: 3,
        },
        {
            id: 19,
            firstName: "James",
            lastName: "Wong",
            dob: "09/07/86",
            role: "Lead Vocalist",
            bandId: 3,
        },
        {
            id: 20,
            firstName: "Amelia",
            lastName: "Hernandez",
            dob: "04/14/93",
            role: "Bassist",
            bandId: 3,
        },
        {
            id: 21,
            firstName: "Benjamin",
            lastName: "Lee",
            dob: "03/03/88",
            role: "Keyboardist",
            bandId: 3,
        },
        {
            id: 22,
            firstName: "Harper",
            lastName: "Davis",
            dob: "12/02/90",
            role: "Drummer",
            bandId: 4,
        },
        {
            id: 23,
            firstName: "Logan",
            lastName: "Gonzalez",
            dob: "06/09/92",
            role: "Lead Guitarist",
            bandId: 4,
        },
        {
            id: 24,
            firstName: "Lily",
            lastName: "White",
            dob: "08/18/89",
            role: "Lead Vocalist",
            bandId: 4,
        },
        {
            id: 25,
            firstName: "Daniel",
            lastName: "Scott",
            dob: "02/23/94",
            role: "Bassist",
            bandId: 5,
        },
        {
            id: 26,
            firstName: "Ella",
            lastName: "Hall",
            dob: "11/11/87",
            role: "Keyboardist",
            bandId: 5,
        },
        {
            id: 27,
            firstName: "Alexander",
            lastName: "Lopez",
            dob: "10/07/91",
            role: "Drummer",
            bandId: 5,
        },
        {
            id: 28,
            firstName: "Grace",
            lastName: "Wilson",
            dob: "09/19/88",
            role: "Rhythm Guitarist",
            bandId: 5,
        },
    ]
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}
export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}
export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}
export const getArtists = () => {
    return database.artists.map(artist => ({ ...artist }))
}