const url = 'https://valorant-api.com/v1/agents/';
const options = {
    method: 'GET',
    headers: {
        'agentUuid': "e370fa57-4757-3604-3648-499e1f642d3f"
    }
};
let row = document.getElementById("rowproduct");



export let agents = async () => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error);
        return false;
    }
}

let AgentCard=()=>{
    let AgentImg=document.createElement("img");
    AgentCard.classList.add("card-img-top")
}



export let showAgents = async () => {
    row.innerHTML = "";
    let Agents = await agents();
    (Agents.data).forEach(agent => {
        console.log(agent);

        const { displayName, description, fullPortrait, role } = agent;
        let AgentEl = document.createElement("div");
        AgentEl.classList.add("card");
        AgentEl.style.width = "18rem";

        AgentEl.innerHTML = `
           <img src="${fullPortrait}" class="card-img-top" alt="...">
           <div class="card-body">
           <h5 class="card-title">${displayName}</h5>
           <p class="card-text">${description}</p>
           <a href="#" class="btn btn-primary">${displayName}</a>
           </div>
           `
        row.appendChild(AgentEl);
        /* if ((anime.title.toLowerCase()).includes("slam"))
             console.log(anime.title);*/

    });
}
