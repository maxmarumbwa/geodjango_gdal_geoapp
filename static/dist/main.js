  // Initialize the map
    var map = L.map('map', {
        measureControl: true
    }).setView([-17.853657, 31.03434], 9);
    // Add a tile layer
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var watercolor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
        minZoom: 1,
        maxZoom: 16,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'jpg'
    });
    var st = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'png'
    });

    var singleMarker = L.marker([-17.853657, 31.03434]);
    singleMarker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    // Add scale control
    L.control.scale({ position: 'bottomright' }).addTo(map);

    // Map coordinates display function
    map.on('mousemove', function (e) {
        console.log(e)
        $('.coordinates').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
    })



    // Geojson data load
    // L.geoJSON(data).addTo(map);

    // Geojson cluster markers
    var marker = L.markerClusterGroup()
    var harare = L.geoJSON(data)
    harare.addTo(marker)
    marker.addTo(map)

    // leaflet layer control
    var baseMaps = {
        'OSM': osm,
        'Water': watercolor,
        'Stamen': st
    }
    var overlayMaps = {
        'Geojson Markers': marker,
        'single marker': singleMarker
    }
    L.control.layers(baseMaps, overlayMaps,{collapsed:false, position:'topleft' }).addTo(map)



