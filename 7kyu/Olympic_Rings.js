function olympicRing(a){
    let arr_olimp = ['a', 'b', 'd', 'e', 'g', 'o', 'p', 'q', 'A', 'B', 'D', 'O', 'P', 'Q', 'R'];
    let count = 0;
    for (let i = 0; i < a.split('').length; i++) {
        for (let j = 0; j < arr_olimp.length; j++) {
            if (a[i] == arr_olimp[j]) {
                if (a[i] == 'B'){
                    count += 1;
                }
                count += 1;                 
            } 
        }
    }
    return (Math.floor(count / 2) <= 1) ? 'Not even a medal!' : (Math.floor(count / 2) == 2 ) ? 'Bronze!' : (Math.floor(count / 2) == 3) ? 'Silver!' : 'Gold!';
}

console.log(olympicRing( 'BBB' ));

