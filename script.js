
window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(planets) {
         console.log(planets);
         let index = Math.floor(Math.random() * planets.length)
         document.getElementById("missionTarget").innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${planets[index].name}</li>
               <li>Diameter: ${planets[index].diameter}</li>
               <li>Star: ${planets[index].star}</li>
               <li>Distance from Earth: ${planets[index].distance}</li>
               <li>Number of Moons: ${planets[index].moons}</li>
            </ol>
            <img src="${planets[index].image}">
         `
      })
   })

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
         //stop the form submission
         event.preventDefault();  
      }

      let faultyItems = document.getElementById("faultyItems");
      if(fuelLevel.value < 10000){
         faultyItems.style.visibility =  "visible";
         document.getElementById("pilotStatus").innerText = `Pilot ${pilotName.value} is ready for launch.`
         document.getElementById("copilotStatus").innerText = `Co-pilot ${copilotName.value} is ready for launch.`
         document.getElementById("fuelStatus").innerText = `Fuel level not high enough for launch`
         document.getElementById("launchStatus").innerText = `Shuttle not ready for launch`
         document.getElementById("launchStatus").style.color = "red"

         
      } else {
         faultyItems.style.visibility =  "visible"
         document.getElementById("pilotStatus").innerText = `Pilot ${pilotName.value} is ready for launch.`
         document.getElementById("copilotStatus").innerText = `Co-pilot ${copilotName.value} is ready for launch.`
         document.getElementById("launchStatus").innerText = `Shuttle  ready for launch`
         document.getElementById("launchStatus").style.color = "green"
         
      
      }

      if(cargoMass.value > 10000){
         faultyItems.style.visibility =  "visible";
         document.getElementById("pilotStatus").innerText = `Pilot ${pilotName.value} is ready for launch.`
         document.getElementById("copilotStatus").innerText = `Co-pilot ${copilotName.value} is ready for launch.`
         document.getElementById("cargoStatus").innerText = `Too much mass for the shuttle `
         document.getElementById("launchStatus").innerText = `Shuttle not ready for launch`
         document.getElementById("launchStatus").style.color = "red"

         
      } else {
         faultyItems.style.visibility =  "visible"
         document.getElementById("pilotStatus").innerText = `Pilot ${pilotName.value} is ready for launch.`
         document.getElementById("copilotStatus").innerText = `Co-pilot ${copilotName.value} is ready for launch.`
         document.getElementById("launchStatus").innerText = `Shuttle  ready for launch`
         document.getElementById("launchStatus").style.color = "green"
         
      
      }
      
// event.preventDefault()


 
      event.preventDefault()
   })
   
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
