function garantia () {
    let pregunta = prompt ("desea ingresar una nueva garantia")
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
    function salirGarantia (){
        let pregunta2 = prompt("desea seguir ingresando garantías?")
        while(pregunta2.toLowerCase == "no"){
        console.log(" gracias por utilizar nuestro sistema de garantías") }
    }
    
    salirGarantia ()
   }
    }
garantia()
//prueba


    

