"use strict";
let zoom = 15


mapboxgl.accessToken = MBX_KEY;


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: zoom,
    center: [-97.3332, 32.7305],

});


function restrauntInfo() {
    return [{
        name: "Cane Corso",
        location: [-97.3332, 32.7305],
        description: "pizza"
    },
        {
            name: "Rio Mambo",
            location: [-97.416470, 32.680890],
            description: "tex-mex"
        },
        {
            name: "Crazy Tomato",
            location: [-82.374450, 36.346960],
            description: "italian"
        }

    ]
}

restrauntInfo().forEach(myFunction);

function myFunction(restaurant) {
    markerPopup()
    console.log(restaurant)


}

//markers


function markerPopup() {
    for (let i = 0; i < restrauntInfo().length; i++) {

        let restraunt = restrauntInfo();
        var marker = new mapboxgl.Marker({
            color: 'green'
        })
            .setLngLat([restraunt[i].location[0], restraunt[i].location[1]])
            .addTo(map)

//popups

        var popup = new mapboxgl.Popup()
            .setHTML("<p>" + restrauntInfo()[i].name + "</p>" +
                "<p>" + restrauntInfo()[i].description + "</p>")
        marker.setPopup(popup)
    }
}

let html = '';


$('#footer').html(html)
