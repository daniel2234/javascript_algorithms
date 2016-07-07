function factorialize(num) {
    var cnt = 1;
    for (var i = 1; i <= num ; i++) {
        cnt *= i;
    }
    return cnt;
}

debug(factorialize(5));
debug(factorialize(4));
debug(factorialize(3));