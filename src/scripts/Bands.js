import { getBands } from './database.js'

export const Bands = () => {
    const bands = getBands();
    let bandsSection = document.querySelector("#bands");
    let bandListHTML = "<ul>\n"

    for (const band of bands) {
        const bandListItemHTML = `<li>${band.name}</li>\n`
        bandListHTML += bandListItemHTML;
    }

    bandListHTML += "</ul>"

    bandsSection.innerHTML = bandListHTML;
}