let serialNo = 1;
let sum = 0;
function insertItem() {
    const name = document.getElementById("item_name").value;
    const price = document.getElementById("price").value;
    
    if(name === "" || price === "") return;

    const tr = document.createElement('tr')
    const tdItemName = document.createElement('td')
    const tdPrice = document.createElement('td')
    const tdSerial = document.createElement('td')

    tdItemName.innerText =  name;
    tdPrice.innerText = price;
    tdSerial.innerText = serialNo;
    serialNo++;

    tr.appendChild(tdSerial) 
    tr.appendChild(tdItemName)
    tr.appendChild(tdPrice)

    sum += Number(price);
    document.getElementById('total').innerText = sum; 

    document.getElementById("tbody").appendChild(tr)
    document.getElementById("item_name").value = ""
    document.getElementById("price").value = ""

    document.getElementById('tbody').appendChild(tr)

}