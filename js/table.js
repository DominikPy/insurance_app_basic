const sub_button = document.getElementById("create");
client_arr = [];

function read() {
  let first_name = document.getElementById("fr_na_txt").value;
  let last_name = document.getElementById("ls_na_txt").value;
  let age = document.getElementById("age").value;
  let phone_number = document.getElementById("phone_txt").value;
  let name = first_name + "_" + last_name;

  name = new Client(first_name, last_name, age, phone_number);
  client_arr.push(name);

}

function renderDataInTheTable(client_arr) {
    const mytable = document.getElementById("tbody");
   document.getElementById("tbody").innerHTML = "";

    client_arr.forEach(client => {
        let newRow = document.createElement("tr");
        Object.values(client).forEach((value)=> {
            let cell = document.createElement("td");
            cell.innerText = value
            newRow.appendChild(cell)
        })
        mytable.appendChild(newRow)
    })
}

sub_button.addEventListener("click", () => {
    read();
    console.log(client_arr)
    renderDataInTheTable(client_arr)
})