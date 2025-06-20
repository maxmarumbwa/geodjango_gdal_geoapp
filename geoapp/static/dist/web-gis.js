    
        // View full screen
    var mapId = document.getElementById('map');
    function fullScreenview() {
        if(document.fullscreenElement){
            document.exitFullscreen()
        }else{
            mapId.requestFullscreen()
        }
    }   
    
    // View full screen
    mapId = document.getElementById('map');
    function fullScreenview() {
        mapId.requestFullscreen()
    }


    // L.control.browserPrint().addTo(map);
    // L.control.browserPrint({ position: 'topleft', title: 'Print ...' }).addTo(map);
    L.control.browserPrint({position:'topright'}).addTo(map);

    // Measure
    // L.control.measure({
    //     primaryLengthUnit: 'kilometers',
    //     secondaryLengthUnit: 'meter',
    //     primaryAreaUnit: 'sqmeters'
    // })

        // Leaflet search
    new L.Control.Geocoder().addTo(map);

    // Zoom to layer
    $('.zoom-to-layer').click(function () {
        map.setView([-17.853657, 31.03434], 9);
    });








