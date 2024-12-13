var map = L.map('map', {
    center: [-12.097794615537152, -77.06973007427352],
    zoom: 15,
    minZoom: 12,
    maxZoom: 20,
    maxBounds: [[-12.097794615537152, -77.06973007427352], [-12.093093260982554, -77.06012042719814]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);



var Colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_magdalena_del_mar/wms?", {
    layers: "web_magdalena_del_mar:colegios", //gisweb:Colegios Magdalena del mar
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Colegios.addTo(map);

 var Curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_magdalena_del_mar/wms?", {
    layers: "web_magdalena_del_mar:curvas_nivel", //gisweb:Curvas nivel Magdalena del mar
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Curvas_nivel.addTo(map);

 var Farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/web_magdalena_del_mar/wms?", {
    layers: "web_magdalena_del_mar:farmacia_lima", //gisweb:Farmacias Magdalena del mar
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Farmacias.addTo(map);

 var Iglesias = L.tileLayer.wms("http://localhost:8080/geoserver/web_magdalena_del_mar/wms??", {
    layers: "web_magdalena_del_mar:magdalena", //gisweb:Iglesias Magdalena del mar
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Iglesias.addTo(map);


 var Magdalena = L.tileLayer.wms("http://localhost:8080/geoserver/web_magdalena_del_mar/wms?", {
    layers: "web_magdalena_del_mar:magdalena_mar", //gisweb: Magdalena del mar
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Magdalena.addTo(map);










 var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat
};

var overlayMaps = {
    "Colegios":Colegios,
    "Curvas_nivel":Curvas_nivel,
    "Farmacias":Farmacias,
    "Iglesias":Iglesias,
    "Magdalena":Magdalena


    
    
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
