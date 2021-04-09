function lifePathNumber(dateOfBirth) {
    var lifenum = 0;
    var year = 0;
    var month = 0;
    var day = 0;
    var n = dateOfBirth.split('-');
    
    for (let i = 0; i < n.length; i++) {
        lifenum = n[i].split('');
        for (let j = 0; j < lifenum.length; j++) {
            year += Number.parseInt(lifenum[j])
        }
    }

    if (year.toString().length > 1) {
        var sp = year.toString().split('');
        for (let x = 0; x < sp.length; x++) {
            month += Number.parseInt(sp[x]);
        }
        if (month.toString().length > 1) {
            var sp1 = month.toString().split('');
            for (let y = 0; y < sp1.length; y++) {
                day += Number.parseInt(sp1[y]);
            }
            return day;
        }
        return month;
    }
    return year;
}
console.log(lifePathNumber("1791-12-26"));
