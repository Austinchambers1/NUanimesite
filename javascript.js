var artistSelect = document.getElementById("artistSelect");


var arts = document.getElementsByClassName("art");

function findArtist(){
  showAll();
  for(var i = 0; i < arts.length; i++) {
    if(!(arts[i].classList.contains(artistSelect.value) || artistSelect.value === "all")){
      arts[i].style.display="none";
    }
  }
}

function showAll() {
  for (var i = 0; i < arts.length; i++) {
    arts[i].style.display="block";
  }
}
