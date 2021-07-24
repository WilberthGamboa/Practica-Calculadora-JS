var opcion
        var x,y,boleano
        let respuesta
        //funciones 
        const suma = (argumento1,argumento2) => argumento1+argumento2

        const resta = (argumento1,argumento2) => argumento1-argumento2

        const multiplicacion = (argumento1,argumento2) => argumento1*argumento2

        const division = (argumento1,argumento2) => argumento1/argumento2

        const comprobar = () =>{
            var validar, respuesta
            do{
                respuesta=prompt('¿Continuar?, SI || NO')
                respuesta = respuesta.toUpperCase()
                if (respuesta=='SI' || respuesta=='SÍ'){
                    return validar= true
                } else if (respuesta=='NO'){
                    return validar=false
                    
                }else{
                    alert('Respuesta no válida,(debes escribir Si || No)')
                    
                }

            }while(respuesta!='SI'||respuesta!='SÍ'||respuesta!='NO' )
           
            
            
        }

        //Codigo principal
        alert('Pequeña calculadora js')

        do{
            do{
                //Introducción y petición de la opción al usuario
                
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

        }while(comprobar())

        alert("Programa finalizado con éxito ")
        



       

        

        
        


    