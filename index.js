const main = document.querySelector(".main");
const form = document.querySelector(".form");
let tab=[];
let condition = true;
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let taskName=document.querySelector(".name").value;
    let description=document.querySelector(".description").value;
    if(!description){
        description="Task not described";
    }
    let date=document.querySelector(".date").value;
    if(taskName && date){
        let art = document.createElement("article");
        let name = document.createElement("h3");
        let taskDate=document.createElement("p");
        const articles = document.querySelectorAll(".article");
        for(let i=0; i<tab.length; i++){
            if(taskName==tab[i]){
                condition = false;
            }
        }
        if(condition){
            name.innerText=taskName;
            taskDate.innerText=date;
            art.classList.add("article");
            name.classList.add("taskName");
            taskDate.classList.add("taskDate");
            let doneButton = document.createElement("button");
            let showDescription = document.createElement("button");
            doneButton.innerText="Task done";
            doneButton.setAttribute("value", taskName);
            doneButton.classList.add("doneButton");
            showDescription.innerText="Description";
            showDescription.setAttribute("value", description);
            showDescription.classList.add("showDescription");
            art.setAttribute("id", taskName);
            art.appendChild(name);
            art.appendChild(taskDate);
            art.appendChild(doneButton);
            art.appendChild(showDescription);
            main.appendChild(art);
            tab.push(taskName);
        }else{
            alert("takie zadanie już istnieje");
            condition = true;
        }
        const buttons = document.querySelectorAll(".doneButton");
        buttons.forEach(buttons => {
            buttons.addEventListener("click", (event)=>{
                event.preventDefault();
                let tabIndex = tab.indexOf(buttons.value);
                tab.splice(tabIndex, tabIndex+1);
                let artDelete = document.getElementById(buttons.value);
                main.removeChild(artDelete);
            })
        });
        const descButtons = document.querySelectorAll(".showDescription");
        descButtons.forEach(desc =>{
            desc.addEventListener("click", (event)=>{
                event.preventDefault();
                alert(desc.value)
            })
        })
    }
})