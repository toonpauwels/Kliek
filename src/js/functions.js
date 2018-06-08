
function nieuwaanbieding(){
    var titel = document.getElementById("titel").value;
    var beschrijving = document.getElementById("beschrijving").value;
    var aantalklieks = document.getElementById("aantalklieks").value;
    var bereik = document.getElementById("bereik").value;
    var deadline = document.getElementById("deadline").value;

    var storedtitle = localStorage.getItem(titel);
    var storedbeschrijving = localStorage.getItem(beschrijving);
    var storedaantalklieks = localStorage.getItem(aantalklieks);
    var storedbereik = localStorage.getItem(bereik);
    var storeddeadline = localStorage.getItem(deadline);


}
