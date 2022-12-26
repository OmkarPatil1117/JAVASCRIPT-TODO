const arr = [];

const map = ()=> {
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
                    <div id="${card.arr[0]}" onclick="line('${card.arr[0]}')" > ${card.arr[0] == undefined ? " " : card.arr[0]} </div>
                    <div id="${card.arr[1]}" onclick="line('${card.arr[1]}')"> ${card.arr[1] == undefined ? " " : card.arr[1]} </div>
                    <div id="${card.arr[2]}" onclick="line('${card.arr[2]}')"> ${card.arr[2] == undefined ? " " : card.arr[2]} </div>
                    <div id="${card.arr[3]}" onclick="line('${card.arr[3]}')"> ${card.arr[3] == undefined ? " " : card.arr[3]} </div>
                    <div id="${card.arr[4]}" onclick="line('${card.arr[4]}')"> ${card.arr[4] == undefined ? " " : card.arr[4]} </div>
                    <div id="${card.arr[5]}" onclick="line('${card.arr[5]}')"> ${card.arr[5] == undefined ? " " : card.arr[5]} </div>
                    <div id="${card.arr[6]}" onclick="line('${card.arr[6]}')"> ${card.arr[6] == undefined ? " " : card.arr[6]} </div>
                    <div id="${card.arr[7]}" onclick="line('${card.arr[7]}')"> ${card.arr[7] == undefined ? " " : card.arr[7]} </div>
                    <div id="${card.arr[8]}" onclick="line('${card.arr[8]}')"> ${card.arr[8] == undefined ? " " : card.arr[8]} </div>
                    <div id="${card.arr[9]}" onclick="line('${card.arr[9]}')"> ${card.arr[9] == undefined ? " " : card.arr[9]} </div>
                    <div id="${card.arr[10]}" onclick="line('${card.arr[10]}')"> ${card.arr[10] == undefined ? " " : card.arr[10]} </div>
                    <div id="${card.arr[11]}" onclick="line('${card.arr[11]}')"> ${card.arr[11] == undefined ? " " : card.arr[11]} </div>
                    <div id="${card.arr[12]}" onclick="line('${card.arr[12]}')"> ${card.arr[12] == undefined ? " " : card.arr[12]} </div>
                    <div id="${card.arr[13]}" onclick="line('${card.arr[13]}')"> ${card.arr[13] == undefined ? " " : card.arr[13]} </div>
                    <div id="${card.arr[14]}" onclick="line('${card.arr[14]}')"> ${card.arr[14] == undefined ? " " : card.arr[14]} </div>
                </div>
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
                arr.splice(index, 1)
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
                    <div id="${card.arr[3]}" onclick="line('${card.arr[3]}')"> ${card.arr[3] == undefined ? " " : card.arr[3]} </div>
                    <div id="${card.arr[4]}" onclick="line('${card.arr[4]}')"> ${card.arr[4] == undefined ? " " : card.arr[4]} </div>
                    <div id="${card.arr[5]}" onclick="line('${card.arr[5]}')"> ${card.arr[5] == undefined ? " " : card.arr[5]} </div>
                    <div id="${card.arr[6]}" onclick="line('${card.arr[6]}')"> ${card.arr[6] == undefined ? " " : card.arr[6]} </div>
                    <div id="${card.arr[7]}" onclick="line('${card.arr[7]}')"> ${card.arr[7] == undefined ? " " : card.arr[7]} </div>
                    <div id="${card.arr[8]}" onclick="line('${card.arr[8]}')"> ${card.arr[8] == undefined ? " " : card.arr[8]} </div>
                    <div id="${card.arr[9]}" onclick="line('${card.arr[9]}')"> ${card.arr[9] == undefined ? " " : card.arr[9]} </div>
                    <div id="${card.arr[10]}" onclick="line('${card.arr[10]}')"> ${card.arr[10] == undefined ? " " : card.arr[10]} </div>
                    <div id="${card.arr[11]}" onclick="line('${card.arr[11]}')"> ${card.arr[11] == undefined ? " " : card.arr[11]} </div>
                    <div id="${card.arr[12]}" onclick="line('${card.arr[12]}')"> ${card.arr[12] == undefined ? " " : card.arr[12]} </div>
                    <div id="${card.arr[13]}" onclick="line('${card.arr[13]}')"> ${card.arr[13] == undefined ? " " : card.arr[13]} </div>
                    <div id="${card.arr[14]}" onclick="line('${card.arr[14]}')"> ${card.arr[14] == undefined ? " " : card.arr[14]} </div>
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