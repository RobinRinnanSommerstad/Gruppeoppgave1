
function addItem() {
    document.getElementById('inventory').classList.add = '';
}

function removeItem() {
    document.getElementById('kurv').classList.add = '';
}

function invInfo() {
  //blankAll();
    document.getElementById('inventoryBox').innerHTML =/*HTML*/`
        <div class="inheader" id="box">
        Ut hent boks
        <button class="knapp1" onclick="addItem()">
             Hent item
        </button>
        <button class="knapp2" onclick="removeItem()">
             Fjern item
        </button>
        </div>`
}

function kurvInfo(){
    //blankAll();
    document.getElementById('kurv').innerHTML=/*HTML*/`
        <div class="inheader" id = "box"> Ut hent boks
            <div button class="knapp1" onclick = "addItem()" >
                Hent item
            </div>
        <button class="knapp2" onclick="removeItem()">
            Fjern item
        </button>
        </div>`
}

//function blankAll(){
    //document.getElementById('box').innerHTML ='';
    //document.getElementById('kurv').innerHTML ='';
//}