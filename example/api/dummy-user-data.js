module.exports = dummyGenerator();

function dummyGenerator() {
    const arr = [];

    for (let i = 0; i < 100; i++) {
        arr.push(
            {
                id: i + 1,
                name: `Username ${i + 1}`
            }
        )
    }

    return arr;
}
