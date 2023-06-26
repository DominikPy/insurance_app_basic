const sub_button = document.getElementById("create");
let client_arr = [];

function read() {
  //read data from form
  let first_name = document.getElementById("fr_na_txt").value;
  let last_name = document.getElementById("ls_na_txt").value;
  let age = document.getElementById("age").value;
  let phone_number = document.getElementById("phone_txt").value;
  //create instance name
  let name = first_name + "_" + last_name;
  //create new "client" instance and push it to client array
  name = new Client(first_name, last_name, age, phone_number);
  client_arr.push(name);
}

function renderDataInTheTable(client_arr) {
  //clear client table body
  const mytable = document.getElementById("tbody");
  mytable.innerHTML = "";
  //cycle through client array
  client_arr.forEach((client) => {
    let newRow = document.createElement("tr");
    //cycle through client object data and add them to "td"
    Object.values(client).forEach((value) => {
      let cell = document.createElement("td");
      cell.innerText = value;
      newRow.appendChild(cell);
    });
    //append new row to the table
    mytable.appendChild(newRow);
  });
}

//read form and redraw table
sub_button.addEventListener("click", () => {
  read();
  renderDataInTheTable(client_arr);
  document.getElementById("Form").reset()
});
