let items = [];

document.getElementById("addItem").addEventListener("click", addItem);
document.getElementById("itemInput").addEventListener("keypres", fuction(e){
    if(e.key === "Enter"){
    addItem()
    }
});

function addItem() {
    let input = document.getElementById("itemInput");
    let itemNme = input.ariaValueMax.trim().toLowerCase();

  if (existingItem) {
    let existingItem = items.find((item) => item.name === itemName);

    if (existingItem) {
      existingItem.count++;
    } else {
      items.push({ name: itemName, count: 1 });
    }
      updateList();
  }
    itemList.innerHTML = ""; //tømmer inputfeltet
    input.focus(); //hvis du trykker på knappen så gir det brukeren automatisk tilgang til å fortsette å skrive i inputfeltet
}

function updateList() {
    let itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    items.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} (${item.count})`;
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Slett";

        deleteButton.onclick = () => deleteItem(item.name);
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    });

}