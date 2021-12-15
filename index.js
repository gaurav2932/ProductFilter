filterSelect("all")
function filterSelect(c) {
  let filterDiv, i;
  filterDiv = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < filterDiv.length; i++) {
    filRemoveClass(filterDiv[i], "show");
    if (filterDiv[i].className.indexOf(c) > -1){
            filAddClass(filterDiv[i], "show");
        }    
  }
}

function filAddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function filRemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let active = document.getElementsByClassName("active");
    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";
  });
}