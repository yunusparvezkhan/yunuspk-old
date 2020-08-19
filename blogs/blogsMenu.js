function openMenu() {
  document.getElementById("menuBox").style.transform="translate(0)";
  document.getElementById("screenBlocker").style.display="block";
}

function closeMenu() {
  document.getElementById("menuBox").style.transform="translate(-100%)";
  document.getElementById("screenBlocker").style.display="none";
}
