export const ApiAgents = "https://valorant-api.com/v1/agents/";
export const ApiWeapons = "https://valorant-api.com/v1/weapons";
const options = {
    method: "GET",
    headers: {
        agentUuid: "e370fa57-4757-3604-3648-499e1f642d3f",
    },
};
export let row = document.getElementById("rowproduct");

let getData = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return false;
    }
};

let ObjectCard = (Object) => {
    let EL = document.createElement("div");
    EL.classList.add("card");
    EL.style.width = "18rem";

    let AgentImg = document.createElement("img");
    AgentImg.classList.add("card-img-top");
    AgentImg.src = Object.displayIcon;

    let CardBody = document.createElement("div");
    CardBody.classList.add("card-body");

    let DisplayName = document.createElement("h5");
    DisplayName.classList.add("card-title");
    DisplayName.textContent = Object.displayName;

    let description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = Object.description;

    let Dbutton = document.createElement("a");
    Dbutton.classList.add("btn", "btn-primary");
    Dbutton.textContent = Object.displayName;





    EL.append(AgentImg);
    EL.append(CardBody);
    CardBody.append(DisplayName);
    CardBody.append(description);
    CardBody.append(Dbutton);

    return EL;
};

export let showData = async (url) => {
    let Objects = await getData(url);
    Objects.data.forEach((Object) => {
        console.log(Object);
        row.appendChild(ObjectCard(Object));

    });
};

export let Welcome = () => {
    let welcomeUwU = document.createElement("div");
    let pickImg = document.createElement("img");
    pickImg.src = "./1661130727752034.gif";
    pickImg.style.height = "600px";
    pickImg.style.width = "600px";
    let options = document.createElement("select");
    const optionValues = ["Agents", "Weapons", "Skins", "Ranks"];


    optionValues.forEach((value, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = value;
        options.appendChild(option);
    });


    let pick = document.createElement("h1");
    pick.textContent = "Welcome To Valoranti , Would You Pick What You Want To See ? ";

    row.parentNode.insertBefore(welcomeUwU,row);
    welcomeUwU.appendChild(pickImg);
    welcomeUwU.appendChild(pick);
    welcomeUwU.appendChild(options);

}
