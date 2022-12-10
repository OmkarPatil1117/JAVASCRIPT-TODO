let add = document.querySelector("#add");
let getData = ()=> {
  let popup = document.createElement('div');
  popup.className = "popup"
  let htmlData = `
  <div class="div">
            <p>
                <strong>Add New List</strong>
            </p>
            <input type="text" id="inp" placeholder="Add New List">
            <div class="addClose">
                <button id="addData">add</button>
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

  let Add = document.querySelector("#addData");
  Add.addEventListener("click", ()=> {
    if( document.querySelector("#empty")) {
      document.querySelector("#empty").remove();
    }
    let data = document.querySelector("#inp").value;
    let card = document.createElement("div");
    card.className = "card"
    let htmlD = `
    <p class="cardHeader">${data}</p>
            <hr>
            <div id="innerData">
            </div>
            <i class="fa-solid fa-circle-plus" id="cardAdd"></i>
            <i class="fa-solid fa-trash" id="cardRemove"></i>
    `
    card.innerHTML = htmlD;
    document.querySelector("section").appendChild(card);
    let del = card.querySelector("#cardRemove");
    del.addEventListener("click", ()=> {
      card.remove();
    })
    
    let inCardAdd = card.querySelector("#cardAdd")
    inCardAdd.addEventListener("click", ()=> {
    let innerpopup = document.createElement('div');
    innerpopup.className = "popup"
    let htmlData = `
    <div class="div">
              <p>
                  <strong>Add New inner List</strong>
              </p>
              <input type="text" id="innerinp" placeholder="Add inner List">
              <div class="addClose">
                  <button id="addInnerData">add</button>
                  <button class="closeInnerTab">Close</button>
              </div>
          </div>
    ` 
    innerpopup.innerHTML = htmlData;
    document.body.appendChild(innerpopup);

    let delet = innerpopup.querySelector(".closeInnerTab")
    delet.addEventListener("click", ()=> {
      console.log("hello");
      innerpopup.remove();
    })


    let addCradData = innerpopup.querySelector("#addInnerData");
    addCradData.addEventListener("click", ()=> {
      let innerData = innerpopup.querySelector("#innerinp").value;
      console.log(innerData);
      let inDiv = document.createElement("div");
      inDiv.className = "innerD"
      inDiv.innerHTML = innerData;
      card.querySelector("#innerData").appendChild(inDiv);
      let overLine = document.querySelector(".innerD")
      overLine.addEventListener("click", ()=> {
        console.log("HEloo");
        overLine.style = "text-decoration:line-through;"
      })
    })
    })
  })
}





add.addEventListener("click", getData)