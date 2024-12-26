let player='O'
let w = document.getElementById('winner')
let game = true

function Restart(){
    window.location="index.html"
}
function Cell0(){
    let d = document.getElementById('c0')
     if(game==true && d.innerHTML==" "){
        if (player=='O'){
            d.innerHTML="O"
            Checkwin()
            player='X'
           }
          else{
           d.innerHTML='X'
           Checkwin()
           player='O'
          }
     }        
}
function Cell1(){
    let d = document.getElementById('c1')
    if(game==true && d.innerHTML==" "){
        if (player=='O'){
            d.innerHTML="O"
            Checkwin()
            player='X'
           }
          else{
           d.innerHTML='X'
           Checkwin()
           player='O'
          }
     } 
}
function Cell2(){
    let d = document.getElementById('c2')
    if(game==true && d.innerHTML==" "){
        if (player=='O'){
            d.innerHTML="O"
            Checkwin()
            player='X'
           }
          else{
           d.innerHTML='X'
           Checkwin()
           player='O'
          }
     } 
}
function Cell3() {
    let d = document.getElementById('c3');
    if (game==true && d.innerHTML == "") { 
        if (player == 'O') {
            d.innerHTML = "O";
            Checkwin();  
            player = 'X'; 
        } else {
            d.innerHTML = 'X';
            Checkwin();  
            player = 'O'; 
        }
    }
 }
function Cell4(){
    let d = document.getElementById('c4')
    if(game==true && d.innerHTML==" "){
        if (player=='O'){
            d.innerHTML="O"
            Checkwin()
            player='X'
           }
          else{
           d.innerHTML='X'
           Checkwin()
           player='O'
          }
     } 
}
function Cell5(){
    let d = document.getElementById('c5')
    if(game==true && d.innerHTML==" "){
        if (player=='O'){
            d.innerHTML="O"
            Checkwin()
            player='X'
           }
          else{
           d.innerHTML='X'
           Checkwin()
           player='O'
          }
     } 
}
function Cell6(){
    let d = document.getElementById('c6')
    if(game==true && d.innerHTML==" "){
        if (player=='O'){
            d.innerHTML="O"
            Checkwin()
            player='X'
           }
          else{
           d.innerHTML='X'
           Checkwin()
           player='O'
          }
     } 
}
function Cell7(){
    let d = document.getElementById('c7')
    if(game==true &&d.innerHTML==" "){
        if (player=='O'){
            d.innerHTML="O"
            Checkwin()
            player='X'
           }
          else{
           d.innerHTML='X'
           Checkwin()
           player='O'
          }
     } 
}
function Cell8(){
    let d = document.getElementById('c8')
    if(game==true && d.innerHTML==" "){
        if (player=='O'){
            d.innerHTML="O"
            Checkwin()
            player='X'
           }
          else{
           d.innerHTML='X'
           Checkwin()
           player='O'
          }
     } 
}
let count=0;
function Checkwin(){
    let a1 = document.getElementById('c0').innerHTML
    let a2 = document.getElementById('c1').innerHTML
    let a3 = document.getElementById('c2').innerHTML
    let a4 = document.getElementById('c3').innerHTML
    let a5 = document.getElementById('c4').innerHTML
    let a6 = document.getElementById('c5').innerHTML
    let a7 = document.getElementById('c6').innerHTML
    let a8 = document.getElementById('c7').innerHTML
    let a9 = document.getElementById('c8').innerHTML
    if((a1==player && a2==player && a3==player) ||
        (a3==player && a6==player && a9==player) ||
        (a7==player && a8==player && a9==player) ||
        (a1==player && a4==player && a7==player) ||
        (a1==player && a5==player && a9==player) ||
        (a3==player && a5==player && a7==player) ||
        (a4==player && a5==player && a6==player) ||
        (a2==player && a5==player && a8==player) 
    ){
        w.innerHTML=player+" Is  Winner"
      
        game=false
    }
    count++
    if(count === 9){
        if(w.innerHTML==''){
            w.innerHTML="Its a Draw!.."
            game=false;
        }

    }

    
      
}
