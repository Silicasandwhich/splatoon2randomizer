var docs = []
var fuse = new Fuse()
fetch("https://raw.githubusercontent.com/Silicasandwhich/splatoon2randomizer/main/wepkits.json")
  .then(response => response.json())
  .then(data => wepkitjson = data)
  .then(() => docs = Object.keys(wepkitjson))
  .then(() => fuse.setCollection(docs))
const options = {
    "isCaseSensitive":false,
    "threshold":0.6
}

function lookup(){
    if(document.getElementById("iwepname").value == "catboy"){
        selectedWep = "Carbon Roller Deco"
    }else if(document.getElementById("iwepname").value == "silica"){
        selectedWep = "Custom Hydra Splatling"
    }else if(document.getElementById("iwepname").value == "redyoshi"){
        selectedWep = "Neo Splash-o-matic"
    }else if(document.getElementById("iwepname").value == "rodrick"){
        selectedWep = "L-3 Nozzlenose"
    }else{
        selectedWep = fuse.search(document.getElementById("iwepname").value, options)[0]["item"]
    }
    try{
        document.getElementById("wepname").innerText = selectedWep
        document.getElementById("thumbnail").src = wepkitjson[selectedWep]["thumbnail"]
        document.getElementById("wepdesc").innerText = wepkitjson[selectedWep]["description"]
        document.getElementById("wepclass").innerText = "Class: "+wepkitjson[selectedWep]["class"]
        document.getElementById("wepsub").innerText = "Sub: "+wepkitjson[selectedWep]["sub"]
        document.getElementById("wepspecial").innerText = "Special: "+wepkitjson[selectedWep]["special"]
        document.getElementById("weplvl").innerText = "Unlock Level: "+wepkitjson[selectedWep]["level"]
        document.getElementById("wepdmg").innerText = "Base Damage: "+wepkitjson[selectedWep]["damage"]
        document.getElementById("weppts").innerText = "Special Points: "+wepkitjson[selectedWep]["special pts"]
        document.getElementById("wepfield1").innerText = wepkitjson[selectedWep]["field 1"]["name"]+": "+wepkitjson[selectedWep]["field 1"]["value"]
        document.getElementById("wepfield2").innerText = wepkitjson[selectedWep]["field 2"]["name"]+": "+wepkitjson[selectedWep]["field 2"]["value"]
        document.getElementById("wepfield3").innerText = wepkitjson[selectedWep]["field 3"]["name"]+": "+wepkitjson[selectedWep]["field 3"]["value"]
    }catch{
        alert("ERROR: please input a valid weapon name.")
    }
    
}