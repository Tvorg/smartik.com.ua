function initMap() {
    let pos = {lat: 50.467338, lng: 30.471332};
    let map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 15
    });
    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "AutoVegas"
    });
}