const url = 'https://valorant-api.com/v1/agents/';
const options = {
    method: 'GET',
    headers: {
        'agentUuid': "e370fa57-4757-3604-3648-499e1f642d3f"
    }
};
let row = document.getElementById("rowproduct");



let agents = async () => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error);
        return false;
    }
}

let AgentCard = (Agent) => {
    let AgentEl = document.createElement("div");
    AgentEl.classList.add("card");
    AgentEl.style.width = "18rem";

    let AgentImg = document.createElement("img");
    AgentImg.src = Agent.fullPortrait;
    AgentImg.classList.add("card-img-top");

    let CardBody = document.createElement("div")
    CardBody.classList.add("card-body");

    let DisplayName = document.createElement("h5")
    DisplayName.classList.add("card-title");
    DisplayName.textContent = Agent.displayName;

    let description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = Agent.description;

    let Dbutton = document.createElement("a")
    Dbutton.classList.add("btn", "btn-primary");
    Dbutton.textContent = Agent.displayName;

    AgentEl.appendChild(AgentImg);
    AgentEl.appendChild(CardBody);
    AgentEl.appendChild(DisplayName);
    AgentEl.appendChild(description);
    AgentEl.appendChild(Dbutton);

    return AgentEl;

}



export let showAgents = async () => {

    let Agents = await agents();
    (Agents.data).forEach(agent => {
        console.log(agent);

        const { displayName, description, fullPortrait, role } = agent;

        let AgentEl = AgentCard(agent);

        /* AgentEl.innerHTML = `
            <img src="${fullPortrait}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${displayName}</h5>
            <p class="card-text">${description}</p>
            <a href="#" class="btn btn-primary">${displayName}</a>
            </div>
            `*/
        row.appendChild(AgentEl);
        /* if ((anime.title.toLowerCase()).includes("slam"))
             console.log(anime.title);*/

    });
}
