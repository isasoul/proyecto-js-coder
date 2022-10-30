

// SECCION DE RECLAMOS
class reclamo {
    constructor(id, pedido, nombre, telefono, producto, marca){
        this.id = id,
        this.pedido = pedido,
        this.nombre = nombre,
        this.telefono = telefono,
        this.producto = producto,
        this.marca = marca

    }

    mostrardatos(){
        console.log(`Datos de la Solicitud:
        NUMERO DE RECLAMO:    ${this.id}
        NUMERO DE PEDIDO:     ${this.pedido}
        NOMBRE DE CLIENTE:    ${this.nombre}
        NUMERO DE TELEFONO:   ${this.telefono}
        NOMBRE DEL PRODUCTO:  ${this.producto}
        NOMBRE DE LA MARCA:   ${this.marca}` )
    }
}

const reclamo1= new reclamo(1,111111,"Sarah Ochoa",1126950698,"luly","st")
const reclamo2= new reclamo(2,111111,"Isa Molina",1126950698,"joe 3","st")
const registroGarantia = [reclamo1,reclamo2]


function garantia(){
    let fecha1 = new Date(prompt("ingrese la fecha del dia en formato mm/dd/aa")) //fecha del dia
    let fecha2 = new Date(prompt("ingrese la fecha en que recibió el producto o lo compró presencial en formato mm/dd/aa")) //fecha nueva
    let milisegundosMes= 4.345*7*24*60*60*1000
    let milisegundosTranscurridos = Math.abs(fecha1.getTime()- fecha2.getTime())
    let mesesTranscurridos = Math.round(milisegundosTranscurridos/milisegundosMes)
    console.log(`la cantidad de meses transcurridos desde la compra es: ${mesesTranscurridos}`)


    function nuevoReclamo(array){
        if( mesesTranscurridos <= 6){
        let numeroPedido = parseInt(prompt("Ingrese el número de pedido: "))
        let nombreIngresado = prompt ("Ingrese el nombre del cliente: ")
        let numeroTelefono = parseInt(prompt("Ingrese el número de telefono del cliente: "))
        let nombreProducto = prompt(" Ingrese el nombre del producto: ") 
        let nombreMarca = prompt(" Ingrese el nombre de la marca: ")
        let reclamoCreado = new reclamo (array.length+1,numeroPedido,nombreIngresado,numeroTelefono,nombreProducto,nombreMarca)
        array.push(reclamoCreado)
        console.log(array)
    }else{
        alert("El producto se encuentra fuera del tiempo de garantía")
    } }
    nuevoReclamo(registroGarantia)
     }
     console.log(registroGarantia)

function verGarantias(array){
    for(let reclamo of array){
        console.log (`DATOS DE LA SOLICITUD DE GARANTIA:
        Reclamo:  ${reclamo.id}
        Pedido:   ${reclamo.pedido}
        Cliente:  ${reclamo.nombre}
        Teléfono: ${reclamo.telefono}
        Producto: ${reclamo.producto}
        Marca:    ${reclamo.marca} `)
    }
}

function buscarPorReclamo (array){
    let reclamoBuscado = parseInt(prompt("Ingrese el numero de reclamo que desea buscar"))
    let reclamoEncontrado = array.find(
        (reclamo)=>reclamo.id == reclamoBuscado
    )
    if (reclamoEncontrado == undefined){
        console.log(`El reclamo numero ${reclamoBuscado} no se encuentra en el registro de garantías`)
    }else{
        console.log(reclamoEncontrado)
    }
}
//  SECCION DEVOLUCIONES

class reclamoDevolucion{
    constructor(id, pedido, nombre, telefono, producto, marca){
        this.id = id,
        this.pedido = pedido,
        this.nombre = nombre,
        this.telefono = telefono,
        this.producto = producto,
        this.marca = marca

    }

    mostrardatos(){
        console.log(`Datos de la Solicitud:
        NUMERO DE RECLAMO:    ${this.id}
        NUMERO DE PEDIDO:     ${this.pedido}
        NOMBRE DE CLIENTE:    ${this.nombre}
        NUMERO DE TELEFONO:   ${this.telefono}
        NOMBRE DEL PRODUCTO:  ${this.producto}
        NOMBRE DE LA MARCA:   ${this.marca}` )
    }
}

const devolucion1 = new reclamoDevolucion(1,111111,"Sarah Ochoa",1126950698,"luly","st")
const devolucion2 = new reclamoDevolucion(2,111111,"Isa Molina",1126950698,"joe 3","st")
const registroDevolucion = [devolucion1,devolucion2]

function devolucion(){
    let fecha1 = new Date(prompt("ingrese la fecha del dia en formato mm/dd/aa")) //fecha del dia
    let fecha2 = new Date(prompt("ingrese la fecha en que recibió el producto o lo compró presencial en formato mm/dd/aa")) //fecha nueva
    let milisegundosdia= 24*60*60*1000
    let milisegundosTranscurridos = Math.abs(fecha1.getTime()- fecha2.getTime())
    let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosdia)
    console.log(`la cantidad de días transcurridos desde la compra es: ${diasTranscurridos}`)

    function nuevaDevolucion(array){
    if( diasTranscurridos <= 10){
    let numeroPedido = parseInt(prompt("Ingrese el número de pedido: "))
    let nombreIngresado = prompt ("Ingrese el nombre del cliente: ")
    let numeroTelefono = parseInt(prompt("Ingrese el número de telefono del cliente: "))
    let nombreProducto = prompt(" Ingrese el nombre del producto: ") 
    let nombreMarca = prompt(" Ingrese el nombre de la marca: ")
    let DevolucionCreada = new reclamoDevolucion (array.length+1,numeroPedido,nombreIngresado,numeroTelefono,nombreProducto,nombreMarca)
    array.push(DevolucionCreada)
    console.log(array)
}else{
    alert("EL PRODUCTO SE ENCUENTRA FUERA DEL TIEMPO PARA DEVOLUCION")
} }
nuevaDevolucion(registroDevolucion)
}
console.log(registroDevolucion)

function verDevoluciones(array){
    for(let reclamoDevolucion of array){
        console.log (`DATOS DE LA DEVOLUCION:
        Reclamo:  ${reclamoDevolucion.id}
        Pedido:   ${reclamoDevolucion.pedido}
        Cliente:  ${reclamoDevolucion.nombre}
        Teléfono: ${reclamoDevolucion.telefono}
        Producto: ${reclamoDevolucion.producto}
        Marca:    ${reclamoDevolucion.marca} `)
    }
}
//SECCION CAMBIOS
class reclamoCambio{
    constructor(id, pedido, nombre, telefono, producto, marca){
        this.id = id,
        this.pedido = pedido,
        this.nombre = nombre,
        this.telefono = telefono,
        this.producto = producto,
        this.marca = marca

    }

    mostrardatos(){
        console.log(`Datos de la Solicitud:
        NUMERO DE RECLAMO:    ${this.id}
        NUMERO DE PEDIDO:     ${this.pedido}
        NOMBRE DE CLIENTE:    ${this.nombre}
        NUMERO DE TELEFONO:   ${this.telefono}
        NOMBRE DEL PRODUCTO:  ${this.producto}
        NOMBRE DE LA MARCA:   ${this.marca}` )
    }
}

const cambio1 = new reclamoCambio(1,111111,"Sarah Ochoa",1126950698,"luly","st")
const cambio2 = new reclamoCambio(2,111111,"Isa Molina",1126950698,"joe 3","st")
const registroCambio= [cambio1,cambio2]

function cambio(){
    let fecha1 = new Date(prompt("ingrese la fecha del dia en formato mm/dd/aa")) //fecha del dia
    let fecha2 = new Date(prompt("ingrese la fecha en que recibió el producto o lo compró presencial en formato mm/dd/aa")) //fecha nueva
    let milisegundosdia= 24*60*60*1000
    let milisegundosTranscurridos = Math.abs(fecha1.getTime()- fecha2.getTime())
    let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosdia)
    console.log(`la cantidad de días transcurridos desde la compra es: ${diasTranscurridos}`)

    function nuevoCambio(array){
    if( diasTranscurridos <= 30){
    let numeroPedido = parseInt(prompt("Ingrese el número de pedido: "))
    let nombreIngresado = prompt ("Ingrese el nombre del cliente: ")
    let numeroTelefono = parseInt(prompt("Ingrese el número de telefono del cliente: "))
    let nombreProducto = prompt(" Ingrese el nombre del producto: ") 
    let nombreMarca = prompt(" Ingrese el nombre de la marca: ")
    let cambioCreado = new reclamoCambio (array.length+1,numeroPedido,nombreIngresado,numeroTelefono,nombreProducto,nombreMarca)
    array.push(cambioCreado)
    console.log(array)
}else{
    alert("EL PRODUCTO SE ENCUENTRA FUERA DEL TIEMPO PARA CAMBIO")
} }
nuevoCambio(registroCambio)
}
console.log(registroCambio)

function verCambios(array){
    for(let reclamoCambio of array){
        console.log (`DATOS DEL CAMBIO:
        Pedido:   ${reclamoCambio.pedido}
        Cliente:  ${reclamoCambio.nombre}
        Reclamo:  ${reclamoCambio.id}
        Teléfono: ${reclamoCambio.telefono}
        Producto: ${reclamoCambio.producto}
        Marca:    ${reclamoCambio.marca} `)
    }
}

//MENU PRINCIPAL
function opcionElegida (){
    let opcion = parseInt(prompt(`Indique la gestión que desea realizar:

            1 -  Garantía
            2 -  Cambio de producto
            3 -  Devolución de producto
            4 -  Ver todas las Garantías ingresadas
            5 -  Ver todas las Devoluciones Ingresadas
            6 -  Ver todos los Cambios ingresados
            7 -  Buscar Garantía por número de reclamo
            0 -  Para Salir

    `))
menu(opcion)
}
//``
function menu(opcionElegida){
    switch(opcionElegida){
        case 0:
            salir = true
            alert(`Gracias por utilizar nuestro sistema`)
            break
            case 1: 
                garantia()
            break
            case 2:
                cambio()
            break
            case 3:
                devolucion()
            break
            case 4:
                verGarantias(registroGarantia)
            break
            case 5:
                verDevoluciones(registroDevolucion)
            break
            case 6:
                verCambios(registroCambio)
            break
            case 7: 
                buscarPorReclamo(registroGarantia)
            break
                default: 
                    alert(`Ingrese una opción correcta`)

        }
    }
    let salir = false
    
    while (salir!= true){
        opcionElegida()
    }

 