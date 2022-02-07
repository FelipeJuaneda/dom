//CLASE
class Producto{
    constructor(local, precio, espacio){
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
productos.push(new Producto("Local 1", 5000,"3m x 4m"));
productos.push(new Producto("Local 2", 7000, "5,5m x 5m"));
productos.push(new Producto("Local 3", 8000, "6m x 6m"));
productos.push(new Producto("Local 4", 10000, "8 x 7m"));
productos.push(new Producto("Local 5", 15000, "10 x 9m"));


let localesDiv = document.getElementById("contenedorLocales");
for (const producto of productos) {
    //Crear elemento
    let localesCont= document.createElement("div");
    //Asignar valor
    localesCont.innerHTML="<h2>"+producto.local+"</h2><h2>Precio: "+ producto.precio+"$ por mes</h2><h2>Y cuenta con un espacio de "+producto.espacio+"<h2> <button>Ver Local</button> <hr>"
    //Asignar el padre
    localesDiv.append(localesCont);
}
