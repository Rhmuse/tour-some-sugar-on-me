import { getBands } from './database.js'

export const Bands = () => {
    const bands = getBands();
    let bandsSection = document.querySelector("#bands");
    let bandsListHTML = "<ul>\n"

    for (const band of bands) {
        const bandListItemHTML = `<li class="band--${band.id}">${band.name}</li>\n`
        bandsListHTML += bandListItemHTML;
    }

    bandsListHTML += "</ul>"

    bandsSection.innerHTML = bandsListHTML;
}