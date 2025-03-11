var n = Number(prompt("Input N"));

if (n >= 2) {
    var sum = 0;
    document.write("<span>1.Result: </span>");
    for (let i = 2; i <= n; i += 2) {
        document.write(`<span>${i}</span>`);
        if (i < n - 1){
            document.write(" + ");
        }
        sum += i;
    }
    document.write(" = " + sum + "<br>");
}

if (n >= 3) {
    var sum = 0;
    document.write("<span>2.Result: </span>");
    for (let i = 3; i <= n; i += 2) {
        document.write(`<span>${i}</span>`);
        if (i < n - 1){
            document.write(" + ");
        }
        sum += i;
    }
    document.write(" = " + sum + "<br>");
}

if (n >= 1) {
    var sum = 0;
    document.write("<span>3.Result: </span>");
    for (let i = 1; i <= n; i ++) {
        document.write(`<span>${i}!</span>`);
        let m = 1;
        for (let j = 1; j <= i; j++) {
            m *= j;
        }
        if (i < n){
            document.write(" + ");
        }
        sum += m;
    }
    document.write(" = " + sum + "<br>");
}

if (n >= 1) {
    var sum = 0;
    document.write("<span>4.Result: </span>");
    for (let i = 1; i <= n; i ++) {
        document.write(`<span>Cos(${i})</span>`);
        if (i < n){
            document.write(" + ");
        }
        sum += Math.cos(i);
    }
    document.write(" = " + sum );
}