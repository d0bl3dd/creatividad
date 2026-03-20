function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

/* CONTENEDORES */
let cont = document.getElementById("contenedores");

for(let i=1;i<=12;i++){
    let nivel = random(10,100);

    let card = `
    <div class="card">
        <b>C${i}</b>
        <div class="progress">
            <div class="fill" style="width:${nivel}%; background:${nivel>80?"red":nivel>50?"orange":"green"}"></div>
        </div>
        ${nivel}%
    </div>`;

    cont.innerHTML += card;
}

/* METRICAS */
document.getElementById("tiempo").innerText = "Tiempo: "+random(20,60)+" min";
document.getElementById("combustible").innerText = "Combustible: "+random(5,20)+" L";
document.getElementById("eficiencia").innerText = "Eficiencia: "+random(60,95)+"%";
document.getElementById("distancia").innerText = "Distancia: "+random(5,25)+" km";
document.getElementById("trafico").innerText = "Tráfico: "+["Bajo","Medio","Alto"][random(0,2)];

/* MAPA */
let mapa = document.getElementById("mapa");

for(let i=0;i<20;i++){
    let x = random(0,100);
    let y = random(0,100);

    let point = document.createElement("div");
    point.className="point";
    point.style.left = x+"%";
    point.style.top = y+"%";

    mapa.appendChild(point);
}

/* LOG */
let log = document.getElementById("log");

let eventos = [
    "Sensor actualizado",
    "Ruta recalculada",
    "Contenedor crítico detectado",
    "Datos enviados a la nube",
    "Optimización ejecutada",
    "Nodo IoT activo"
];

for(let i=0;i<15;i++){
    log.innerHTML += "> "+eventos[random(0,eventos.length-1)]+"<br>";
}
