const arr = []

const strData = (arr)=> {
    let str = ""
    arr.map( (item)=> {
        str += `<div id="${item}" onclick="line('${item}')"> ${item == undefined ? " " : item} </div>` 
    })
    return str
}

function del() {
    const popup = document.querySelector(".popup");
    popup.remove()
}

let a = JSON.parse( localStorage.getItem("arr") )
if(a == null ) { console.log("null") } else {
    a.map( (item)=> {
        arr.push(item)
    } )
}

map()

function map() {
    if( arr.length === 0 ) {
        document.getElementById("sec").innerHTML = `<span id="empty" > <span  >No items in the todo list</span></span>`
    } else {
    document.getElementById("sec").innerHTML = "";
    document.querySelector("#taskLogo").innerHTML = "Tasks <span>List</span>";
    document.getElementById("sec").style.justifyContent = "space-between";
    arr.map( (card)=> {
            const CardHtmlData = `
        <div class="cardContainer">
            <div class="card ${card.header}">
                <p class="cardHeader" onclick="nextPage('${card.header}')">${card.header}</p>
                <hr>
                <div id="innerData">
                ${strData(card.arr)}
                </div>
            </div>
            <i class="fa-solid fa-circle-plus" id="cardAdd" onclick="addInnerData('${card.header}')"></i>
            <i class="fa-solid fa-trash" id="cardRemove" onclick="removeCard('${card.header}')" ></i>
        </div>  
            `
            document.querySelector("section").innerHTML += CardHtmlData 
    } )
  }
}

const popup = ()=> {
    let popup = document.createElement('div');
    popup.className = "popup"
    let htmlData = `
    <div class="div">
              <p>
                  <strong>Add New List</strong>
              </p>
              <input type="text" id="inp" placeholder="Add New List">
              <div class="addClose">
                  <button id="addData" onclick="addCard()" >add</button>
                  <button class="closeTab">Close</button>
              </div>
          </div>
    ` 
    popup.innerHTML = htmlData;
    document.body.appendChild(popup);

    let delet = popup.querySelector(".closeTab")
    delet.addEventListener("click", del )
}
      

const addCard = ()=> {
    let data = document.querySelector("#inp").value
    function obj(data) {
        this.header = data
        this.arr = [];
    }
    let objData = new obj(data)
    arr.push(objData)
    let js = JSON.stringify(arr)
    localStorage.setItem("arr", js)
    map()
    document.querySelector("#inp").value = "";
    del()
}

const removeCard = (name)=> {
    arr.filter( (card, index, arr)=> {
        if(card.header == name) {
                arr.splice(index, 1)
        }
    })
    let js = JSON.stringify(arr)
    localStorage.setItem("arr", js)
    map()
}


const addInnerData = (cardName)=> {
    let popup = document.createElement('div');
    popup.className = "popup"
    let htmlData = `
    <div class="div">
        <p>
            <strong>Add Task List</strong>
        </p>
        <input type="text" id="innerinp" placeholder="Add inner List">
        <div class="addClose">
            <button id="addInnerData" onclick="addCardData('${cardName}')">add</button>
            <button class="closeInnerTab">Close</button>
        </div>
    </div>
    ` 
    popup.innerHTML = htmlData;
    document.body.appendChild(popup);
  
    let delet = popup.querySelector(".closeInnerTab")
    delet.addEventListener("click", del )
}

const addCardData = (cardName)=> {
    let data = ""
    arr.map( (card)=> {
        if(cardName == card.header) {
            data = document.querySelector("#innerinp").value
            card.arr.push(data)
        }
    } )
    let js = JSON.stringify(arr)
    localStorage.setItem("arr", js)
    document.querySelector("#innerinp").value = "";
    document.querySelector("section").innerHTML = "";
    map();
}

const line = (elementName)=> {
     document.getElementById(`${elementName}`).style.textDecoration = "line-through";
}

const nextPage = (cardName)=> {
    document.querySelector("section").innerHTML = "";
    document.getElementById("nav").remove()
    document.getElementById("sec").remove()
    
    arr.filter( (card)=> {
        if(card.header == cardName ) {
            const CardHtmlData = `
            <nav id="nav">
                <h1 id="taskLogo" onclick="map()" >Go Back</h1>
                <h1 id="add" onclick="popup()" ><div id="curser"> <i class="fa-solid fa-circle-plus"></i> <b id="none"> Add items</b></div></h1> 
            </nav>

            <section id="sec"  style="justify-content: center">
            <div class="cardContainer">
                <div class="card ${card.header}">
                    <p class="cardHeader" onclick="nextPage('${card.header}')">${card.header}</p>
                    <hr>
                    <div id="innerData">
                    ${strData(card.arr)}
                    </div>
                </div>
                <i class="fa-solid fa-circle-plus" id="cardAdd" onclick="addInnerData('${card.header}')"></i>
                <i class="fa-solid fa-trash" id="cardRemove" onclick="removeCard('${card.header}')" ></i>
            </div>  
            </section>
            `
            document.querySelector(".container").innerHTML += CardHtmlData
        }
    } )
   
}