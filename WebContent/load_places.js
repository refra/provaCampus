//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/*class Marker {
    constructor(id, name, lat, lng){
        this.id = id;
        this.name = name;
        this.coords = [lat, lng];
    }
}*/
let httpReq = new XMLHttpRequest();
httpReq.open("GET", "places.json");
httpReq.send(null);
httpReq.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		let json = httpReq.response;
		let places = [];
		let campus = JSON.parse(json);
		//for(let i = 0; i<campus.Campus.length; i++){
		//	places.push(new Marker(i, campus.Campus[i].name, campus.Campus[i].coords.latitude, campus.Campus[i].coords.longitude));
		//}
		for(let i = 0; i < campus.Campus.length; i++){
			let text = document.getElementById("par");
			text.innerHTML += campus.Campus[i].name + "<br>";
			text.innerHTML += "    Coords: ";
			text.innerHTML += obj.Campus[i].coords.latitude + "<br>";
			text.innerHTML += "            " + obj.Campus[i].coords.longitude + "<br>";
		}
	}
}
    return places;
};



	
		
/*		let obj = JSON.parse(json);
		for(let i = 0; i < obj.Campus.length; i++){
			let text = document.getElementById("par");
			text.innerHTML += obj.Campus[i].name + "<br>";
			text.innerHTML += "    Coords: ";
			text.innerHTML += obj.Campus[i].coords.latitude + "<br>";
			text.innerHTML += "            " + obj.Campus[i].coords.longitude + "<br>";
		}
		
	}
};
*/
/*function renderPlaces(places) {
    let a_scene = document.getElementById("scene");

    places.forEach((place) => {
        const latitude = place.coords[0];
        const longitude = place.coords[1];

        // add place icon
        const icon = document.createElement("a-image");
        icon.setAttribute("gps-entity-place", "latitude: ${latitude}; longitude: ${longitude}");
        icon.setAttribute("name", place.name);
        icon.setAttribute("id", place.id);
        icon.setAttribute("src", "../img/map-marker.png");

        // eventually alter scale. Now big for debugging.
        icon.setAttribute("scale", "20, 20");

        //Listener present in demo from lib_developer, unknown usage.
        icon.addEventListener("loaded", () => window.dispatchEvent(new CustomEvent("gps-entity-place-loaded")));

        //Define click listener for every marker
        const clickListener = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            //click listener code
        };

        icon.addEventListener("click", clickListener);

        a_scene.appendChild(icon);
    });
}*/


