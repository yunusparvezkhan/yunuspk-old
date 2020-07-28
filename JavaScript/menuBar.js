function openMenu() {
  document.getElementById("screenBlocker").style.display="block";
  document.getElementById("body").style.overflowY="hidden";
  document.getElementById("menu-box").style.transform="translate(0)";
}

function closeMenu() {
  document.getElementById("screenBlocker").style.display="none";
  document.getElementById("body").style.overflowY="scroll";
  document.getElementById("menu-box").style.transform="translate(-100%)";

}
