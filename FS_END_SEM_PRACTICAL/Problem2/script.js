const btn = document.querySelector("#btn");
const date = document.querySelector("#date");

const showDate = () => {
  date.innerHTML = "";
  const curr = new Date();
  date.innerHTML = curr;
}

btn.addEventListener("click", () => {
  showDate();
})