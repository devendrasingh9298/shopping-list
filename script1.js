let serialNo = 1;
let sum = 0;
function insertItem() {
    const code = document.getElementById("emp_code").value;
    const name = document.getElementById("emp_name").value;
    const salary = document.getElementById("salary").value;
    
    if(code === "" || emp_name === "" || salary === "") return;

    const tr = document.createElement('tr')
    const tdempcode = document.createElement('td')
    const tdname    = document.createElement('td')
    const tdsalary = document.createElement('td')
    const tdSerial = document.createElement('td')

    tdempcode.innerText =  code;
    tdname.innerText = name;
    tdsalary.innerText = salary;
    tdSerial.innerText = serialNo;
    serialNo++;

    tr.appendChild(tdSerial) 
    tr.appendChild(tdempcode)
    tr.appendChild(tdname)
    tr.appendChild(tdsalary)

    sum += Number(salary);
    document.getElementById('total').innerText = sum; 

    document.getElementById("tbody").appendChild(tr)
    document.getElementById("emp_code").value = ""
    document.getElementById("emp_name").value = ""
    document.getElementById("salary").value = ""

    document.getElementById('tbody').appendChild(tr)

}