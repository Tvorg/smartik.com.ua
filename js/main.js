function initMap1() {
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
function initMap2(){
    let pos = {lat: 50.44657962469081, lng: 30.5231837122494};
    let map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 17
    });
    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "AutoVegas"
    });

}