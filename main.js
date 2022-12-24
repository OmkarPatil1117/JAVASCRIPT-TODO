const arr = [];

const map = ()=> {
    document.getElementById("sec").innerHTML = "";
    document.querySelector("#taskLogo").innerHTML = "Tasks <span>List</span>";
    document.getElementById("sec").style.justifyContent = "space-between";
    arr.map( (card)=> {
            const CardHtmlData = `
            <div class="card ${card.header}">
                <p class="cardHeader" onclick="nextPage('${card.header}')">${card.header}</p>
                <hr>
                <div id="innerData">
                <div id="${card.arr[0]}" onclick="line('${card.arr[0]}')" > ${card.arr[0] == undefined ? " " : card.arr[0]} </div>
                <div id="${card.arr[1]}" onclick="line('${card.arr[1]}')"> ${card.arr[1] == undefined ? " " : card.arr[1]} </div>
                <div id="${card.arr[2]}" onclick="line('${card.arr[2]}')"> ${card.arr[2] == undefined ? " " : card.arr[2]} </div>
                </div>
                <i class="fa-solid fa-circle-plus" id="cardAdd" onclick="addInnerData('${card.header}')"></i>
                <i class="fa-solid fa-trash" id="cardRemove" onclick="removeCard('${card.header}')" ></i> 
            </div>    
            `
            document.querySelector("section").innerHTML += CardHtmlData 
    } )
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
    delet.addEventListener("click", ()=> {
      popup.remove();
    })
}

const addCard = ()=> {
    let data = document.querySelector("#inp").value
    function obj(data) {
        this.header = data
        this.arr = [];
    }
    let objData = new obj(data)
    arr.push(objData)
    map()
    document.querySelector("#inp").value = "";
}

const removeCard = (name)=> {
    arr.filter( (card, index, arr)=> {
        if(card.header == name) {
            if( arr.length == 1 || arr.length == 2 ) {
                arr.splice(index, index + 1)
            } else {
                arr.splice(index, index)
            }
        }
    })
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
    delet.addEventListener("click", ()=> {
      popup.remove();
    })
}

const addCardData = (cardName)=> {
    let data = ""
    arr.map( (card)=> {
        if(cardName == card.header) {
            data = document.querySelector("#innerinp").value
            card.arr.push(data)
        }
    } )
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
            <div class="card ${card.header}">
                    <p class="cardHeader" onclick="nextPage('${card.header}')">${card.header}</p>
                    <hr>
                    <div id="innerData">
                    <div id="${card.arr[0]}" onclick="line('${card.arr[0]}')" > ${card.arr[0] == undefined ? " " : card.arr[0]} </div>
                    <div id="${card.arr[1]}" onclick="line('${card.arr[1]}')"> ${card.arr[1] == undefined ? " " : card.arr[1]} </div>
                    <div id="${card.arr[2]}" onclick="line('${card.arr[2]}')"> ${card.arr[2] == undefined ? " " : card.arr[2]} </div>
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