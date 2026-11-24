let todo = [];

const input = document.getElementById("input");
const hiits = document.getElementById("hiihum");

const addhiits = () => {
  if (input.value === "") return;

  todo.push(input.value);

  renderhiits();

  input.value = "";
};

const renderhiits = () => {
  hiits.textContent = "";

  for (let i = 0; i < todo.length; i++) {
    const newDiv = document.createElement("div");

    newDiv.textContent = todo[i];
    newDiv.classList.add("shinekow");

    hiits.appendChild(newDiv);
  }
};

const clearAll = () => {
  todo = [];
  renderhiits();
};
