let arr = [];
let arr1 = [];
let strM =   localStorage.getItem("arrN") + localStorage.getItem("arrM") 
console.log(strM);
if( localStorage.getItem("arrM") == "" || localStorage.getItem("arrM") == "null"  ) {
    console.log("HELLO");
} else {
    console.log("inloop");
    const jarr = localStorage.getItem("arrM");
    const arrMap = JSON.parse(jarr)
    if(localStorage.getItem("arrN") == "null" ) {
        console.log("null")
    } else {
        const jarr1 = localStorage.getItem("arrN")
        const demoarr = JSON.parse(jarr1)
        if(demoarr == null ) {
            console.log("Hello");
        } else {
            arrMap.push(demoarr);
            localStorage.setItem("arrN", null);
        }
    }
    const arr1 = [];
    if(arrMap == null ) {
        console.log("Hello");
    } else {
        console.log(arrMap);
        arrMap.map( (item)=> {
            let get = ()=> {
            let data = item.name;
            if(data === "") {
              return alert("Please add Task");
            }
            function obj(name) {
              this.name = name
            }
            let objname = new obj(data)
            arr.push(objname);
            let jarr  = JSON.stringify(arr)
            localStorage.setItem("arrM", jarr)
            if( document.querySelector("#empty")) {
              document.querySelector("#empty").remove();
            }
            let card = document.createElement("div");
            card.className = "card"
            let htmlD = `
            <a href="./index2.html">
            <p class="cardHeader">${data}</p>
            </a>
                    <hr>
                    
                    <div class="innerData">
                    ${item.arr ?  item.arr[0] : "" } <br> ${item.arr ?  item.arr[1] : "" } <br> ${item.arr ?  item.arr[2] : "" }
                    </div>
                    <i class="fa-solid fa-circle-plus" id="cardAdd"></i>
                    <i class="fa-solid fa-trash" id="cardRemove"></i> 
            `
            card.innerHTML = htmlD;
            document.querySelector("section").appendChild(card);
      
            let del = card.querySelector("#cardRemove");
            del.addEventListener("click", ()=> {
              card.remove();
              arrMap.filter( (item)=> {
                  if(item.name == data) {
                      let ind = arrMap.indexOf(item)
                      console.log(ind);
                      arrMap.splice( ind, ind + 1 )
                      console.log(ind);
                      let jsArr = JSON.stringify(arrMap)
                      localStorage.setItem("arrM", jsArr)
                  }
              } )
            })
            let inCardAdd = card.querySelector("#cardAdd")
            inCardAdd.addEventListener("click", ()=> {
            let innerpopup = document.createElement('div');
            innerpopup.className = "popup"
            let htmlData = `
            <div class="div">
                      <p>
                          <strong>Add Task List</strong>
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
              console.log("hHello");
              let innerData = innerpopup.querySelector("#innerinp").value;
              if(innerData === "") {
                return alert("Please add Task");
              }
              console.log(innerData);
              arr1.push(innerData)
              arr.filter( (item, index, arr)=> {
                  if(item.name == data) {
                      item.arr = arr1 
                  }
              })
              console.log(arr);
              let arrjs = JSON.stringify(arr)
              localStorage.setItem("arrM", arrjs)
      
              let inDiv = document.createElement("div");
              inDiv.className = "innerD"
              let htmlADD = `
              <div id="inD"> ${innerData}</div>
              `
              inDiv.innerHTML = htmlADD;
              card.querySelector(".innerData").appendChild(inDiv)
              innerpopup.querySelector("#innerinp").value = "";
        
              let linetho  = inDiv.querySelector("#inD");
              linetho.addEventListener("click", ()=> {
                console.log("Hello i nthere");
                linetho.id = "line"
              })
            })

            let headClick = card.querySelector(".cardHeader");
            let newPage = ()=> {
              let innerData = card.querySelector(".innerData");
              let inData = innerData.textContent;
              console.log(inData);
              let str = "";
              str = inData
              let upstr = str.replace("\n","").trim().split(" ").join('').split("\n").join(',').replace(",,",",");
              console.log(upstr);
              function forwordData(upstr, data) {
                this.data = data;
                this.indata = upstr;
              }
              let obj = new forwordData(upstr, data);
              console.log(obj);
              let jso = JSON.stringify(obj)
              console.log(jso);
              localStorage.setItem("nextPageData", jso)
            }
            headClick.addEventListener("click", newPage); 
          })
        }
          get();
      } )
    }
}


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
      let data = document.querySelector("#inp").value;
      if(data === "") {
        return alert("Please add Task");
      }
      function obj(name) {
        this.name = name
      }
      let objname = new obj(data)
      arr.push(objname);
      let jarr  = JSON.stringify(arr)
      localStorage.setItem("arrM", jarr)
      console.log(localStorage.getItem("arrM"));


      if( document.querySelector("#empty")) {
        document.querySelector("#empty").remove();
      }
      let card = document.createElement("div");
      card.className = "card"
      let htmlD = `
      <a href="./index2.html" >
      <p class="cardHeader">${data}</p>
      </a>
              <hr>
              
              <div class="innerData">
              </div>
              <i class="fa-solid fa-circle-plus" id="cardAdd"></i>
              <i class="fa-solid fa-trash" id="cardRemove"></i> 
      `
      card.innerHTML = htmlD;
      document.querySelector("section").appendChild(card);
      document.querySelector("#inp").value = "";
      let del = card.querySelector("#cardRemove");
      del.addEventListener("click", ()=> {
          console.log("Hello");
        card.remove();
        arr.filter( (item)=> {
            if(item.name == data) {
                let ind = arr.indexOf(item)
                arr.splice( ind, ind + 1 )

                localStorage.setItem("arrM", arr);
            }
        } )
      })

      let inCardAdd = card.querySelector("#cardAdd")
      inCardAdd.addEventListener("click", ()=> {
      let innerpopup = document.createElement('div');
      innerpopup.className = "popup"
      let htmlData = `
      <div class="div">
                <p>
                    <strong>Add Task List</strong>
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
        if(innerData === "") {
          return alert("Please add Task");
        }
        console.log(innerData);
        arr1.push(innerData)
        arr.filter( (item, index, arr)=> {
            if(item.name == data) {
                item.arr = arr1 
            }
        })
        console.log(arr);
        let arrjs = JSON.stringify(arr)
        localStorage.setItem("arrM", arrjs)

        let inDiv = document.createElement("div");
        inDiv.className = "innerD"
        let htmlADD = `
        <div id="inD"> ${innerData}</div>
        `
        inDiv.innerHTML = htmlADD;
        card.querySelector(".innerData").appendChild(inDiv)
        innerpopup.querySelector("#innerinp").value = "";
  
        let linetho  = inDiv.querySelector("#inD");
        linetho.addEventListener("click", ()=> {
          console.log("Hello");
          linetho.id = "line"
        })
      })

    })
    let headClick = card.querySelector(".cardHeader");
    let newPage = ()=> {
        console.log("H in");
      let innerData = card.querySelector(".innerData");
      let inData = innerData.textContent;
      console.log(inData);
      let str = "";
      str = inData
      let upstr = str.replace("\n","").trim().split(" ").join('').split("\n").join(',').replace(",,",",");
      console.log(upstr);
      function forwordData(upstr, data) {
        this.data = data;
        this.indata = upstr;
      }
      let obj = new forwordData(upstr, data);
      console.log(obj);
      let jso = JSON.stringify(obj)
      console.log(jso);
      localStorage.setItem("nextPageData", jso)
    }
    headClick.addEventListener("click", newPage); 
    })
}
add.addEventListener("click", getData);