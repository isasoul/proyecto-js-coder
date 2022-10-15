function menuprincipal () {
    let opcion = prompt (`Indique la gestion que desea realizar:
    
    1: - Garantía 
    2: - Cambio de Producto
    3: - Devolución de Producto
    ESC: para salir
    `)
    while (opcion != "ESC"){
        switch (opcion){
            case "1":
                garantia()
                break;
            case "2":
                cambio()
                break;
            case "3":
                devolucion()
                break; 
        }
    }
}
menuprincipal()

function garantia () {
    let pregunta = prompt ("¿desea ingresar una nueva garantia")
    while (pregunta.toLowerCase != "no"){
    let nombreCliente = prompt (" Ingrese nombre de cliente: ")
    let nombreProducto = prompt(" ingrese el nombre del producto: ")
    let nombreMarca = prompt( "ingrese la marca del producto: ")
    let tiempoTranscurrido = parseInt(prompt( " ingrese la cantidad de meses transcurridos desde que compro ó recibio el envío del producto: "))
    if (tiempoTranscurrido <=6){
        console.log(`el juguete se encuentra dentro del tiempo de garantia
        
        Datos de la Solicitud de garantia:
        Cliente: ${nombreCliente}
        Producto: ${nombreProducto}
        Marca: ${nombreMarca}
        tiempo transcurrido desde la compra: ${tiempoTranscurrido}

        `)
    }else{
        console.log("el juguete no se encuentra en garantia")
    }

        let pregunta2 = prompt("desea seguir ingresando garantías?")
        while(pregunta2.toLowerCase == "no"){
        console.log(" gracias por utilizar nuestro sistema de garantías") }
        menuprincipal()
    }
}
/*funcion cambios*/
function cambio () {
    let pregunta = prompt ("¿desea ingresar un nuevo cambio de producto? ")
    while (pregunta.toLowerCase != "no"){
    let nombreCliente = prompt (" Ingrese nombre de cliente: ")
    let nombreProducto = prompt(" ingrese el nombre del producto: ")
    let nombreMarca = prompt( "ingrese la marca del producto: ")
    let tiempoTranscurrido = parseInt(prompt( " ingrese la cantidad de dias transcurridos desde que  recibió el envío del producto: "))
    if (tiempoTranscurrido <=30){
        console.log(`El juguete se encuentra en tiempo para realizar el cambio.
        
        Datos del cambio de producto:
        Cliente: ${nombreCliente}
        Producto: ${nombreProducto}
        Marca: ${nombreMarca}
        tiempo transcurrido desde la compra: ${tiempoTranscurrido}

        `)
    }else{
        console.log("el juguete excede la cantidad de dias permitidas para el cambio de producto")
    }
    let pregunta2 = prompt("desea seguir ingresando solicitudes?")
    while(pregunta2.toLowerCase == "no"){}
    menuprincipal()
    }

}

/*funcion devolucion*/
function devolucion () {
    let pregunta = prompt ("¿desea ingresar una devolución de producto? ")
    while (pregunta.toLowerCase != "no"){
    let nombreCliente = prompt (" Ingrese nombre de cliente: ")
    let nombreProducto = prompt(" ingrese el nombre del producto: ")
    let nombreMarca = prompt( "ingrese la marca del producto: ")
    let tiempoTranscurrido = parseInt(prompt( " ingrese la cantidad de días transcurridos desde que  recibió el envío del producto: "))
    if (tiempoTranscurrido <=10){
        console.log(`El juguete se encuentra en tiempo para realizar el cambio.
        
        Datos del cambio de producto:
        Cliente: ${nombreCliente}
        Producto: ${nombreProducto}
        Marca: ${nombreMarca}
        tiempo transcurrido desde la compra: ${tiempoTranscurrido}

        `)
    }else{
        console.log("el juguete excede la cantidad de dias permitidas para la devolución del producto")
    }
    let pregunta2 = prompt("desea seguir ingresando garantías?")
    while(pregunta2.toLowerCase == "no"){}
    menuprincipal()
    }
}


