<script>
        document.querySelector("#add").addEventListener("click", ()=> {
            let popup = document.createElement("div")
            popup.setAttribute("class",'popup')
            let div = document.createElement("div");
            div.setAttribute("class","div")
            let p = document.createElement("p");
            p.id = "pt"
            let strong = document.createElement("strong");
            strong.innerText = "Add New List"
            let input = document.createElement("input");
            input.placeholder = "Add New List"
            input.id = "input"
            let addClose = document.createElement("div")
            addClose.className = "addClose"
            let Add = document.createElement("button")
            Add.innerText = "Add"
            Add.id = "addData"
            Add.onclick = ()=> {

                let x = document.querySelector("#input").value;
                // let empty = document.querySelector("#empty")
                // empty.remove(empty.firstElementChild)
                let creteCard = document.createElement("div")
                creteCard.className = "card"
                let pTag = document.createElement("p")
                pTag.className = "cardHeader"
                pTag.textContent = x;
                let hr = document.createElement("hr")
                document.querySelector("section").appendChild(creteCard).appendChild(pTag).appendChild(hr)
                
            }

            

            let close = document.createElement("button")
            close.onclick = ()=> {
                let chid = document.querySelector(".remove")
                chid.remove(chid.firstElementChild)
            }
            close.className = "closeTab"
            close.innerText = "Close"

            document.querySelector(".remove").appendChild(popup)
            document.querySelector(".popup").appendChild(div)
            document.querySelector(".div").appendChild(p)
            document.querySelector("#pt").appendChild(strong)
            document.querySelector(".div").appendChild(input)
            document.querySelector(".div").appendChild(addClose)
            document.querySelector(".addClose").appendChild(Add)
            document.querySelector(".addClose").appendChild(close)
        })
    </script>