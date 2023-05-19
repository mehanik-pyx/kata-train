function example() {
    var x = 1;
    let y = 2;
    const z = 3;

    if (true) {
        var x = 4;
        let y = 5;
        const z = 6;
    }

    console.log(x);
    console.log(y);
    console.log(z);
}

example();
