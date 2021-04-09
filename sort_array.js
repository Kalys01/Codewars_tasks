function findSmallestInt(args) {
    for (let n = 0; n < args.length; n++) {
        for (let i = 0; i < args.length - 1 - n; i++) {
            if (args[i] > args[i + 1]) {
                const k = args[i];
                args[i] = args[i + 1];
                args[i + 1] = k;
            }
        }
    }
    return args;
};

console.log(findSmallestInt( [34, 15, 88, 12, 2] ));
