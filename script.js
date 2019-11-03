var graWToku = false;
var kierunek = 'p';
var polozenie = 42;
var timer = 0;

function init(){
    var kod = "";
    var nr = 0;
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            nr = 10*i + j +1;
            kod += '<div id="'+nr+'" class="pole">'+nr+'</div>'
        }
        kod +='<div class="clear"></div>';
    }
    document.getElementById('plansza').innerHTML = kod;
}

function idz(){
    // console.log('dzialam');
    document.getElementById(polozenie).classList.remove("waz");
    polozenie++;
    document.getElementById(polozenie).classList.add("waz");
    // setTimeout("idz()",1000);
    timer = setTimeout("idz()",1000);
}
function start(){
    // console.log('dzialam');
    graWToku = !graWToku;
    if(graWToku){
        document.getElementById('start').innerHTML = 'Pauza';
        document.getElementById(polozenie).classList.add("waz");
        // setTimeout("idz()",1000);
        timer = setTimeout("idz()",1000);
    } else {
        clearTimeout(timer);
        document.getElementById('start').innerHTML = 'Start';

    }
}

function zmienKierunek(event) {
    // alert("zmienKierunek - dzialam");
    //console.log(event);
    var key = event.which || event.keyCode;
    if(key==38){
        kierunek = 'g';
    } else if (key==39) {
        kierunek = 'p';
    } else if (key==40) {
        kierunek = 'd';
    } else if (key==37) {
        kierunek = 'l';
    }
    console.log(kierunek);
}
