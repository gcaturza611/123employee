//disable inspect element and copy pasting
document.oncontextmenu = () => {
  alert("Error");
  return false;
};

document.onkeydown = (e) => {
  if (e.key == "F12") {
    alert("Error");
    return false;
  }
  if (e.ctrlKey && e.key == "u") {
    alert("Error");
    return false;
  }
  if (e.ctrlKey && e.key == "c") {
    alert("Error");
    return false;
  }
  if (e.ctrlKey && e.key == "v") {
    alert("Error");
    return false;
  }
};
