function yesClick() {
  document.querySelector(".card").innerHTML =
    "<h1>I don’t like you… I LOVE YOU 💞😭</h1>";
}

function noHover() {
  const btn = document.querySelector(".no");
  btn.style.left = Math.random() * 200 + "px";
  btn.style.top = Math.random() * 100 + "px";
}
