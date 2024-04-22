import { robots } from "./robots.js";

// metodo find
export const getRobotById = (id="009")=>{
    return robots.find((Robot)=>{
        return Robot.id === id;
    })
}

// metodo filter
export const getRobotBySeries = (series = 2) =>{
    return robots.filter((Robot) => {
        return Robot.series === series;
    })
}

export const {id,name,series} = getRobotById("013");
console.log(id);
console.log(name);
console.log(series);

const createCard = (data) => {
    const card = `
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
            <img src="${data.avatar || data.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">Weapon/Type: ${data.weapon}</p>
            </div>
        </div>
    </div>`;
    return card;
}

const renderCard = (data, containerId) => {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        container.innerHTML += createCard(item);
    });
}

renderCard(robots, 'robotRow');