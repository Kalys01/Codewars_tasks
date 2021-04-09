function plus(d) {
    var res = 0;
    var res1 = 0;
    var d = d.toString().split('');
    for (let i = 0; i < d.length; i++) {
        res += Number.parseInt(d[i]);
    }
    if (res.toString().length > 1) {
        var n = res.toString().split('');
        for (let j = 0; j < n.length; j++) {
            res1 += Number.parseInt(n[j]);
        }
        return res1;
    }
    return res;
}
console.log(plus(456));

