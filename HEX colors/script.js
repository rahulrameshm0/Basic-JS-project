function changeColor(){
    var hex_numbers = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hex_code = '';


    for (i = 0; i < 6; i++){
        var random_hex = Math.floor(Math.random() * hex_numbers.length);

        hex_code += hex_numbers[random_hex];
    }

    document.getElementById('hex-code').innerHTML = hex_code;
    document.getElementsByTagName('body')[0].style.background = '#' + hex_code; 
}