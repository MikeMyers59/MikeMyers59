function open_drawer(drawer_id, tab_id) {
  document.getElementById(drawer_id).style.display = "block";
  document.getElementById(tab_id).style.display = "none";
}
function close_drawer(drawer_id, tab_id) {
  document.getElementById(drawer_id).style.display = "none";
  document.getElementById(tab_id).style.display = "block";
}