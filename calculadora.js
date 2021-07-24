var opcion
        var x,y
        do{
            //Introducción y petición de la opción al usuario
            alert('Pequeña calculadora js')
            alert("Ingrese el número de lo que desee hacer")
            opcion = prompt('1=suma || 2=resta || 3=multiplicación || 4=división')
            opcion = Number(opcion)
            if(opcion<1 || opcion>4){
                alert("Número no válido (debe ser entre 1 y 4)")
            }else if (isNaN(opcion)){
                alert("Metiste texto por lo tanto no es válido")
            }

        }while((opcion<1 || opcion>4) || (isNaN(opcion)))
        
            //Petición de variables
        switch (opcion) {
            case 1:
                alert("Escogiste la opción SUMAR")
                x=parseFloat(prompt("Inserte el primer número"))
                y=parseFloat(prompt("Inserte el segundo número"))
                alert("La respuesta es: " + suma(x,y))
                break;
            case 2:
                alert("Escogiste la opción RESTAR")
                x=parseFloat(prompt("Inserte el primer número"))
                y=parseFloat(prompt("Inserte el segundo número"))
                alert("La respuesta es: " + resta(x,y))
                break;
            case 3:
                alert("Escogiste la opción MULTIPLICACION")
                x=parseFloat(prompt("Inserte el primer número"))
                y=parseFloat(prompt("Inserte el segundo número"))
                alert("La respuesta es: " + multiplicacion(x,y))
                break;

            case 4:
                alert("Escogiste la opción DIVISION")
                x=parseFloat(prompt("Inserte el primer número"))
                y=parseFloat(prompt("Inserte el segundo número"))
                alert("La respuesta es: " + division(x,y))
                break;
                
        }

        alert("Programa finalizado con éxito :3")
        



        //funciones
        function suma(argumento1,argumento2) {
            return argumento1+argumento2
            
        }
        function resta(argumento1,argumento2) {
            return argumento1-argumento2
            
        }
        function multiplicacion(argumento1,argumento2) {
            return argumento1*argumento2
            
        }
        function division(argumento1,argumento2) {
            return argumento1/argumento2
            
        }

        