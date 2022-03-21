var anyInput = 'Ft Worth';
var lat = 32.7532;
var lon = -97.3327;
var searcher;


newWeather(lat, lon)


function newWeather(lat, lon) {

    theMap(lat, lon)

    function theMap(lat, lon) {
        mapboxgl.accessToken = MBX_KEY;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            zoom: 8,
            center: [lon, lat]

        });

        var marker = new mapboxgl.Marker({
            color: "green",
            draggable: true
        }).setLngLat([map.getCenter().lng, map.getCenter().lat])
            .addTo(map)


        function onDragEnd() {
            const lngLat = marker.getLngLat();
            newWeather(lngLat.lat, lngLat.lng)
        }

        marker.on('dragend', onDragEnd);

        function add_marker(event) {
            var coordinates = event.lngLat;
            marker.setLngLat(coordinates).addTo(map);
            newWeather(coordinates.lat, coordinates.lng);


        }

        map.on('click', add_marker);

        geocoder = new MapboxGeocoder({
            accessToken: MBX_KEY,
            mapboxgl: mapboxgl,
        });

        map.addControl(geocoder)
        setGeocoderEventListener()

        function setGeocoderEventListener() {
            geocoder.on("result", function (e) {
                let searchCoordLng = e.result.geometry.coordinates[0];
                let searchCoordLat = e.result.geometry.coordinates[1];
                newWeather(searchCoordLat, searchCoordLng);

            });

        }

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OWM_KEY}`)
            .then(response => response.json())
            .then(data => {

                let html = '';

                for (let i = 0; i < 5; i++) {
                    html += '<div class="card row-sm col-md-2 bg-secondary bg-opacity-50 text-light text-center" style="border-color: #EB9D3A; border-style: solid">'
                    let dailyTemp = data.daily[i].temp.day;
                    let dailyFeelsDay = data.daily[i].feels_like.day;
                    let dailyFeelsNight = data.daily[i].feels_like.night;
                    let uvIndex = data.daily[i].uvi;
                    let windSpeed = data.daily[i].wind_speed;
                    var myDate = new Date(data.daily[i].dt * 1000).toLocaleString();
                    html += '<div class="card-header bg-dark" style="height: 2em">'
                    html += '<p>' + myDate.substring(0, 9) + '</p>';
                    html += '</div>'
                    html += '<p>Temp: ' + Math.floor(dailyTemp) + 'º</p>' + '<p> Feels like: ' + Math.floor(dailyFeelsDay) + 'º daytime.</p>' + '<p> Feels like: ' + Math.floor(dailyFeelsNight) + 'º at night.</p>' + '<p> UV Index: ' + uvIndex + ' out of 10</p>' + '<p> Wind Speed: ' + windSpeed + ' mph</p>'
                    html += '</div>'
                }

                $('#weather').html(html)

            });
    }

}
