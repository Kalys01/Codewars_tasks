function findDifference(a, b) {
    return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y))
}
console.log(findDifference( [ 27, 1, 10 ], [ 11, 24, 18 ] ));
