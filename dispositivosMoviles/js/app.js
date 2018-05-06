const json = new XMLHttpRequest();

json.open('GET', 'Movil.json', true);

json.onload = function () {
    //200:correcto 403:prohibido  404:no se encuentra
    if (this.status === 200) {
        const productos = JSON.parse(this.responseText);

        let htmltemplate = '';

        productos.forEach(function (Movil) {
            htmltemplate += ` 
            <tr>
                <td>${Movil.nombre}</td>
                <td>${Movil.Pantalla}</td>
                <td>${Movil.SistemaOperativo}</td>
                <td>${Movil.Almacenamiento}</td>
                <td>${Movil.Resolucion}</td>
                <td>${Movil.Bateria}</td>
            </tr>`;
        });
        document.getElementById('info').innerHTML = htmltemplate;
    } else {
        console.log("error");
    }
}
json.send();