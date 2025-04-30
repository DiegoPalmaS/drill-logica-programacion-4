//función para calcular la serie de fibonacci de un número n
function fibonacci(n) {
    //si el número es 1, devuelve "0, 1"
    if (n === 1){
        return '0'
    } else if (n === 2){
        return '0, 1'
    } else{
        let serie = [0, 1]; //inicializa la serie con los dos primeros números
        for (let i=3; i <= n; i++){
            //suma los dos últimos números de la serie y lo añade al array
            serie.push(serie[serie.length-1] + serie[serie.length-2]);
        }
        //transforma el array en una cadena de texto separada por comas
        return serie.join(', ');
    }
}

//función para validad que el input sea un número natural
function validValue(n){
    //si el número es entero y mayor que 0, devuelve true
    if (Number.isInteger(n) && n > 0){
        return true;
    } else {
        //en caso contrario, devuelve false
        return false;
    }
}

//función que ejecuta el usuario al hacer click en el botón
function main() {
    //obtiene el valor del input y lo convierte a número
    let n = parseInt(document.getElementById('number').value);
    //si el valor es válido, llama a la función fibonacci y muestra el resultado
    if (validValue(n)){
        document.getElementById('result').innerHTML = fibonacci(n);
    } else {
        //en caso contrario, muestra un mensaje de error
        document.getElementById('result').innerHTML = 'Por favor, introduce un número natural.';
    }
}