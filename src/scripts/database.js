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
            numberOfMembers: 6,
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