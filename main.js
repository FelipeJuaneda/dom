//CLASE
class Producto{
    constructor(id, local, precio, espacio){
        this.id= parseInt(id);
        this.local=local;
        this.precio=precio;
        this.espacio=espacio;
    }
    //metodos
    descuento(valor){
        this.precio = this.precio - valor;
    }
}


//ARRAY

const productos= [];
productos.push(new Producto(01,"Local 1", 5000,"3m x 4m"));
productos.push(new Producto(02,"Local 2", 7000, "5,5m x 5m"));
productos.push(new Producto(03,"Local 3", 8000, "6m x 6m"));
productos.push(new Producto(04,"Local 4", 10000, "8 x 7m"));
productos.push(new Producto(05,"Local 5", 15000, "10 x 9m"));


let localesDiv = document.getElementById("contenedorLocales");
for (const producto of productos) {
    //Crear elemento
    let localesCont= document.createElement("div");
    //Asignar valor
    localesCont.innerHTML= `<h2> ${producto.local} </h2> 
                            <h2> Precio: ${producto.precio} $ por mes</h2>
                            <h2> Y cuenta con un espacio de ${producto.espacio}</h2>
                            <button id='${producto.id}' class = 'btnLocal'>Ver Local</button>
                            <hr>`;
    //Asignar el padre
    localesDiv.append(localesCont);
}

//BOTONES DE LOCALES
let botonesLocales = document.getElementsByClassName("btnLocal");
for (const boton of botonesLocales) {
    boton.addEventListener('click', function(){
        let seleccion = productos.find(producto=> producto.id==this.id);
        alert('id numero ' + this.id)
    })
}

