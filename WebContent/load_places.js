class Marker {
    constructor(name, lat, lng){
        this.name = name;
        this.coords = [lat, lng];
    }

    toString(){
    	return this.name + "<br>" + "Coords: <br>" + this.coords[0] + "<br>" + this.coords[1] + "<br>";
    }
}
//
//function loadPlaces(json) {
//    let places = [];
//    let campus = JSON.parse(json);
//    for(let i = 0; i<campus.length; i++){
//      let elem = campus[i];
//      let coords = elem.coords;
//      places.push(new Marker(i, elem.name, coords.latitude, coords.longitude));
//    }
//    return places;
//}

function renderPlaces(places) {
    let a_scene = document.getElementById("scene");

    for(let i = 0; i < places.length; i++) {

        // add place icon
        const icon = document.createElement("a-image");
        icon.setAttribute("gps-entity-place", "latitude: " + places[i].coords[0] + "; longitude: " + places[i].coords[1] + ";");
        icon.setAttribute("name", places[i].name);
        icon.setAttribute("src", "pattern-map-marker.patt");

        // eventually alter scale. Now big for debugging.
        icon.setAttribute("scale", "20");
        icon.setAttribute("position", "vertical")

//        //Listener present in demo from lib_developer, unknown usage.
//        icon.addEventListener("loaded", () => window.dispatchEvent(new CustomEvent("gps-entity-place-loaded")));

        //Define click listener for every marker
        const clickListener = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            //click listener code
        };

        icon.addEventListener("click", clickListener);

        a_scene.appendChild(icon);
    }
}

let httpReq = new XMLHttpRequest();
httpReq.open("GET", "places.json");
httpReq.send(null);
let markers = [];
httpReq.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let json = httpReq.response;
		let obj = JSON.parse(json);
		let places = obj.Campus;
		for(let i = 0; i < places.length; i++){
			markers.push(new Marker( places[i].name, places[i].coords.latitude, places[i].coords.longitude));
		}
		renderPlaces(markers);
		
	}
};
