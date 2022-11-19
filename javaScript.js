
function valorApagar(){    
    const PrecioEntrada = 200;
    var pagar = PrecioEntrada * document.getElementById("cantidad").value; 
    if (document.getElementById("categoria").value == "Estudiante" ){
        pagar =  pagar - (pagar * 0.8) ;
    } else if (document.getElementById("categoria").value == "Trainee"){
        pagar = pagar - (pagar * 0.5);
    } else if (document.getElementById("categoria").value == "Junior"){
        pagar = pagar - (pagar * 0.15);}
    const total =  document.getElementById("total");
    total.textContent = pagar;
} 
