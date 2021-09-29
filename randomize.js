var wepkitjson
fetch("https://raw.githubusercontent.com/Silicasandwhich/splatoon2randomizer/main/wepkits.json")
  .then(response => response.json())
  .then(data => wepkitjson = data)

fetch("https://raw.githubusercontent.com/Silicasandwhich/splatoon2randomizer/main/weplist.json")
  .then(response => response.json())
  .then(data => weplistjson = data)

fetch("https://raw.githubusercontent.com/Silicasandwhich/splatoon2randomizer/main/weptypelist.json")
  .then(response => response.json())
  .then(data => weptypejson = data)

function randomize(){
  if (document.getElementById('tclass').checked){
    var unlockedlist = []
    for(key in weptypejson){
      if(weptypejson[key] <= document.getElementById("ilevel").value){
        unlockedlist.push(key)
      }
    }
    document.getElementById("wepname").innerText = unlockedlist[Math.floor(Math.random() * (unlockedlist.length ))]
  }
  else{
    var unlockedlist = []
    for(key in weplistjson){
      if(weplistjson[key] <= document.getElementById("ilevel").value){
        unlockedlist.push(key)
      }
    }
    selectedWep = unlockedlist[Math.floor(Math.random() * (unlockedlist.length ))]
    document.getElementById("wepname").innerText = selectedWep
    document.getElementById("thumbnail").src = wepkitjson[selectedWep]["thumbnail"]
    document.getElementById("wepdesc").innerText = wepkitjson[selectedWep]["description"]
    document.getElementById("wepclass").innerText = "Class: "+wepkitjson[selectedWep]["class"]
    document.getElementById("wepsub").innerText = "Sub: "+wepkitjson[selectedWep]["sub"]
    document.getElementById("wepspecial").innerText = "Special: "+wepkitjson[selectedWep]["special"]
    document.getElementById("weplvl").innerText = "Unlock Level: "+wepkitjson[selectedWep]["level"]
    document.getElementById("wepdmg").innerText = "Base Damage: "+wepkitjson[selectedWep]["damage"]
    document.getElementById("weppts").innerText = "Class: "+wepkitjson[selectedWep]["special pts"]
    document.getElementById("wepfield1").innerText = wepkitjson[selectedWep]["field 1"]["name"]+": "+wepkitjson[selectedWep]["field 1"]["value"]
    document.getElementById("wepfield2").innerText = wepkitjson[selectedWep]["field 2"]["name"]+": "+wepkitjson[selectedWep]["field 2"]["value"]
    document.getElementById("wepfield3").innerText = wepkitjson[selectedWep]["field 3"]["name"]+": "+wepkitjson[selectedWep]["field 3"]["value"]
  } 
}