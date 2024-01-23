
var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}




/************************************/
/* menu sluiten met de sluit button */
/************************************/


var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}




/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key === "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}



  // Array met agentgegevens om later te displayen /////////////
  const agents = [
    {
      name: "Jett",
      role: "Duelist",
      roleType: "INITIATOR",
      biography: "A fearless and fiery duelist, Jett is armed with an array of explosive weaponry and gadgets."
    },
    {
      name: "Omen",
      role: "Controller",
      roleType: "CONTROLLER",
      biography: "A mysterious and powerful being, Omen manipulates shadows and disrupts the battlefield with his dark powers."
    },
    {
      name: "Astra",
      role: "Duelist",
      roleType: "INITIATOR",
      biography: "A fearless and fiery duelist, Jett is armed with an array of explosive weaponry and gadgets."
    },
    {
      name: "Chamber",
      role: "Controller",
      roleType: "CONTROLLER",
      biography: "A mysterious and powerful being, Omen manipulates shadows and disrupts the battlefield with his dark powers."
    },
    {
      name: "Raze",
      role: "Duelist",
      roleType: "INITIATOR",
      biography: "A fearless and fiery duelist, Jett is armed with an array of explosive weaponry and gadgets."
    },
    {
      name: "Sage",
      role: "Duelist",
      roleType: "INITIATOR",
      biography: "A fearless and fiery duelist, Jett is armed with an array of explosive weaponry and gadgets."
    },
    {
      name: "Yoru",
      role: "Controller",
      roleType: "CONTROLLER",
      biography: "A mysterious and powerful being, Omen manipulates shadows and disrupts the battlefield with his dark powers."
    }
  ];
  


  function generateAgentList() {
    const agentsListElement = document.getElementById("agentsList");
  
    agents.forEach(agent => {
      const agentNameElement = document.createElement("div");
      agentNameElement.classList.add("agent-name");
      agentNameElement.textContent = agent.name;
  
      agentNameElement.addEventListener("click", () => {
        const allAgentNames = document.querySelectorAll(".agent-name");
        allAgentNames.forEach(nameElement => {
          nameElement.classList.remove("selected");
        });
  
        agentNameElement.classList.add("selected");
  
        // Scroll naar de geselecteerde agent zodat deze in het midden van de lijst staat (werkt niet naar wens)
        agentsListElement.scrollTo({
          top: agentNameElement.offsetTop - (agentsListElement.clientHeight - agentNameElement.clientHeight) / 2,
          behavior: 'smooth'
        });
  
        displayAgentDetails(agent);
      });
  
      agentsListElement.appendChild(agentNameElement);
    });
  
    // Selecteer standaard de eerste agent en toon details
    const defaultAgent = agents[0];
    agentsListElement.children[0].classList.add("selected");
    displayAgentDetails(defaultAgent);
  }



  
  function displayAgentDetails(agent) {
    const agentImageElement = document.getElementById("agentImage");
    const agentRoleElement = document.getElementById("agentRole");
    const agentBiographyElement = document.getElementById("agentBiography");
  
    agentImageElement.src = `images/agent-${agent.name.toLowerCase()}.png`;
    agentRoleElement.textContent = agent.roleType;                            // Hier blijft alleen de roleType
    agentBiographyElement.textContent = `Biography: ${agent.biography}`;
  }
  

generateAgentList();
  
const specialAbilities = [
  {
    title: "Q - INCENDIARY",
    description: "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
    video: "Brimstone_v1.mp4"
  },
  {
    title: "E - SKY SMOKE",
    description: "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
    video: "Brimstone_v2.mp4"
  },
  {
    title: "C - STIM BEACON",
    description: "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players near it rapid-fire.",
    video: "Brimstone_v3.mp4"
  },
  {
    title: "X - ORBITAL STRIKE",
    description: "EQUIP an orbital strike marker. FIRE to launch a lingering orbital strike laser at the selected location, dealing damage over time to players in the area.",
    video: "Brimstone_v4.mp4"
  }
];

function generateSpecialAbilitiesIcons() {
  // Klikbaar maken van de bestaande icoontjes uit de HTML
  const existingIcons = document.querySelectorAll(".specials-icons ul li");
  existingIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      updateSpecialAbilityDetails(specialAbilities[index]);
    });
  });

  const specialsIconsElement = document.querySelector(".specials-icons ul");
  // Dynamisch toevoegen van de laatste 4 icoontjes
  specialAbilities.slice(existingIcons.length).forEach((ability, index) => {
    const listItem = document.createElement("li");
    const imgElement = document.createElement("img");

    listItem.addEventListener("click", () => {
      updateSpecialAbilityDetails(ability);
    });

    imgElement.src = `images/specialabilities_icon${existingIcons.length + index + 1}.png`;
    imgElement.alt = `specialabilities icon ${existingIcons.length + index + 1}`;

    listItem.appendChild(imgElement);
    specialsIconsElement.appendChild(listItem);
  });
}

function updateSpecialAbilityDetails(ability) {
  const abilityTitleElement = document.getElementById("abilityTitle");
  const abilityDescriptionElement = document.getElementById("abilityDescription");
  const abilityVideoElement = document.getElementById("abilityVideo");

  abilityTitleElement.textContent = ability.title;
  abilityDescriptionElement.textContent = ability.description;

  // Wijzig de video naar de bijbehorende genummerde video
  abilityVideoElement.src = `images/${ability.video}`;

  // Start de nieuwe video
  abilityVideoElement.play();
}

generateSpecialAbilitiesIcons();


document.addEventListener("DOMContentLoaded", function () {
  const pageTabs = document.querySelectorAll(".page-tab");
  const contentItems = document.querySelectorAll(".related-content-item");

  pageTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Verwijder 'active' klasse van alle tabbladen
      pageTabs.forEach((t) => t.classList.remove("active"));
      // Voeg 'active' klasse toe aan het geselecteerde tabblad
      this.classList.add("active");

      // Haal de paginanummer op dat aan het tabblad is gekoppeld
      const pageNumber = this.dataset.page;

      // Verberg alle content-items
      contentItems.forEach((item) => item.classList.add('hidden'));

      // Laat de content-items van de geselecteerde pagina zien
      document.querySelectorAll(`.page-${pageNumber}`).forEach((item) => item.classList.remove('hidden'));
    });
  });
});