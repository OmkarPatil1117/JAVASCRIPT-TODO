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
            <input id="cardAdd" type="button" value="Add">
            <input id="cardRemove" type="button" value="Remove">
    `
    card.innerHTML = htmlD;
    document.querySelector("section").appendChild(card);
    let del = card.querySelector("#cardRemove");
    del.addEventListener("click", ()=> {
      console.log("Hello");
      card.remove();
    })

  })

}





add.addEventListener("click", getData)