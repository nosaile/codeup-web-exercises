"use strict";
mapboxgl.accessToken = MBX_KEY;
let zoom = 10
var lat = 33;
var lon = -97;
var userSearch;
let geocoder;
let popup;


mapboxgl.accessToken = MBX_KEY;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: zoom,
    center: [lon, lat],

});
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);


geocode("dallas", MBX_KEY).then(function (coord) {
    console.log(coord);
    lat = coord[1]
    lon = coord [0]
    map.setCenter(coord);
    map.setZoom(10);
});
console.log(lat)
console.log(lon)




//
//
// function restrauntInfo() {
//     return [{
//         name: "Cane Corso",
//         location: [-97.3332, 32.7305],
//         description: "good pizza, lots of good drinks"
//     },
//         {
//             name: "Rio Mambo",
//             location: [-97.416470, 32.680890],
//             description: "tex-mex, rarely busy, great salsa"
//         },
//         {
//             name: "Crazy Tomato",
//             location: [-82.374450, 36.346960],
//             description: "italian, my favorite as a kid, waiter that works there named \"baby face\""
//         }
//
//     ]
// }
//
// restrauntInfo().forEach(myFunction);
//
// function myFunction(restaurant) {
//     markerPopup()
// }
//
//
// function markerPopup() {
//     for (let i = 0; i < restrauntInfo().length; i++) {
//         let restraunt = restrauntInfo();
//         //markers
//         var marker = new mapboxgl.Marker({
//             color: 'green'
//         })
//             .setLngLat([restraunt[i].location[0], restraunt[i].location[1]])
//             .addTo(map)
// //popups
//         var popup = new mapboxgl.Popup()
//             .setHTML("<p>" + restrauntInfo()[i].name + "</p>" +
//                 "<p>" + restrauntInfo()[i].description + "</p>")
//         marker.setPopup(popup)
//     }
// }