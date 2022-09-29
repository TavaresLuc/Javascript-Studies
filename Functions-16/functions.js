
var resultado =parimpar(3)
function parimpar(n) {

    if (n%2== 0) {
        
        return console.log('Par');
    } else {
        return console.log('Ímpar');
    }
}

// ----------------------------------------------------

function soma (n1=0, n2=0) {
    return n1 + n2

}

console.log(soma(1, 2))


// ----------------------------------------------------

var vezes = function(x) {
    return x*2
}

console.log(vezes(5))


// ----------------------------------------------------

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5));

// ----------------------------------------------------

function fatorial2(s) {
    if (s == 1) {
        return 1
    }    else {
             return s * fatorial2(s - 1)
    }

}

console.log(fatorial2(5))


// ----------------------------------------------------