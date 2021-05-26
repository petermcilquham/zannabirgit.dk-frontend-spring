let quote1 = "\"Når vi lærer at elske og stole på vores krop, at lytte til dens signaler, at give den sund mad, hvile og omsorg, når vi holder op med at forurene den og holder op med at forsøge at kontrollere den ved hjælp af vores ideer om, hvad  der er rigtigt, vil vi næppe være i stand til fortsat at mishandle og misbruge den.\""
let quote2 = "\"Tilstrækkelig søvn, rigtig kost og gode tanker er lige så uundværlige for helbredet som luft, sol og vand.\""
let quote3 = "\"Kroppen er vores indre vejleder - og med hjælp fra zoneterapien er det muligt at lære at tolke kroppens sprog.\""
let quote4 = "\"At lade sjælen komme til orde.\""
let quote5 = "\"Zoneterapi - få fodfæste!\""
let quote6 = "\"Zoneterapi - mærk den fantastiske ro\""
let quote7 = "\"Videnskabsmænd, læger og psykologer, der har undersøgt forholdet mellem stress og sygdom har konkluderet, at både evnen til at tilgive og manglen på denne evne påvirker udfaldet af alvorlig sygdom.\" Tilgivelse er ikke en handling, der fritsætter den krænkende part, det er heller ikke et signal til andre om, at det, de har gjort, er \"i orden\"  og at \"alt er tilgivet nu\". En ægte tilgivende handling finder sted i det indre landskab, hvor det skuffede, sårede, krænkede eller vrede indre barn/ego møder sjælen. -Caroline Myss\""

setTimeout(function(){
    let quote

    switch(getRndInteger(1,8)) {
        case 1:
            quote = document.querySelector(".quote").innerHTML = quote1
            break;
        case 2:
            quote = document.querySelector(".quote").innerHTML = quote2
            break;
        case 3:
            quote = document.querySelector(".quote").innerHTML = quote3
            break;
        case 4:
            quote = document.querySelector(".quote").innerHTML = quote4
            break;
        case 5:
            quote = document.querySelector(".quote").innerHTML = quote5
            break;
        case 6:
            quote = document.querySelector(".quote").innerHTML = quote6
            break;
        case 7:
            quote = document.querySelector(".quote").innerHTML = quote7
            break;
        default:
            quote = document.querySelector(".quote").innerHTML = quote5
    }
}, 300)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}