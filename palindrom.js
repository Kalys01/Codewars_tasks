function palindrom(n) {
    n = n.toLowerCase();
    for (let i = 0; i < n.length / 2; i++) {
        if (n[i] !== n[(n.length - 1) - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrom('KAlYSsYLaK'));
