let adding = []
const itemsDiv = document.getElementById("items")
const inputitems = document.getElementById("itemInput")
const storageKey = "items"

function renderitem(){
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(adding)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p") 
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button =  document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeitem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

renderitem()

function loaditem(){
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) adding = JSON.parse(oldItems) 
    renderitem()
    }   

function saveitem(){
    const stringitem =JSON.stringify(adding);
    localStorage.setItem(storageKey, stringitem)
}

function additems(){
    const value = inputitems.value;
    if(!value){
        alert("You cannot add an empty item")
        return
    }
    adding.push(value)
    renderitem()
    inputitems.value = ""
    saveitem()
}

function removeitem(idx){
    adding.splice(idx, 1)
    renderitem()
    saveitem()
}

document.addEventListener("DOMContentLoaded",loaditem)
