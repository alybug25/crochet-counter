let count = 0;
let countEl = document.getElementById("count-el");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-btn");
let recordEl = documentgetElementById("record-el");

function test() {
    console.log("hi");
}

addBtn.addEventListener("click", () => {
    console.log("button clicked");
    count += 1;
    countEl.textContent = count;
});

deleteBtn.addEventListener("click", () => {
    count -= 1;
    countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
    let recordString = `${count} - `;
    recordEl.textContent += recordString;
    countEl.textContent = 0;
    count = 0;
});