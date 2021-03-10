function duplicateCount(text) {
    let res = 0,
        solobj = {};
    text.toLowerCase().split('').map(function(s){
        if (solobj.hasOwnProperty(s)) {
            if (solobj[s] === 0) {
                res += 1;
            }
            solobj[s] += 1;
        } else {
            solobj[s] = 0;
        }
    });
    return res;
}
console.log(duplicateCount('kallllaaaa11222alyas'));