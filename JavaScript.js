function ejecuta(){

  var elementos =document.querySelectorAll("#principal p, span");
  for (var i=0;i<elementos.length;i++){
    elementos[i].onclick=saludo;
  }


//document.querySelector("#principal p:last-child").onclick=saludo;

//  for(var i=0; i<2;i++){
//var z=document.getElementsByclassName("importante")[i].onclick=saludo;
//}
//}

    // document.getElementsByTagName("p")[i].onclick=saludo;
  // }
/*document.getElementById("importante").onclick=saludo;*/
}
function saludo(){
  alert("Que hay de nuevo?");

}
window.onload=ejecuta;
