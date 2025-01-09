const input = document.getElementById("input")

function reversedstring(str){
    return str.split("").reverse().join("")
}

function checkpalindrome(){
    const value = input.value
    const reverse = reversedstring(value)

    if (value === reverse){
        alert("P A L I N D R O M E")
    }
    else{
        alert('This sting is not palindrome!')
    }
    
    input.value = ""
}