function horaActual(){
    let 
    hora = new Date(), 
    s = hora.getSeconds(),
    m = hora.getMinutes(),
    h = hora.getHours();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;    
    let reloj = h +':' + m;
    document.getElementById('reloj').textContent = reloj;
    

let 
hResta = 24 - h,
mResta = 60 - m,
sResta = 60 - s;
sResta = sResta < 10 ? '0' + sResta:sResta;
mResta = mResta < 10 ? '0' + mResta:mResta;

relojResta = hResta +':' + mResta +':'+sResta;
document.getElementById('diaRestante').textContent = relojResta;

}

//Fecha actual
function fechaActual(){
    let fecha = new Date();
    document.getElementById('fecha').innerHTML = fecha.toLocaleDateString();
    
    //Edad

    let nacimiento = 1995;
    let year = fecha.getFullYear();
    document.getElementById('edad').textContent = year - nacimiento;

   


};




let 
horaInterval = setInterval(horaActual,0),
fechaInterval = setInterval(fechaActual,0),
diaInterval = setInterval(edadActual,0);


