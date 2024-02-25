describe('Calculation', () => {
    it('plus 테스트', () => {
        const a = 1;
        const b = 2;

        expect(a + b).toBe(3);
    })

    it('multiply 테스트', () => {
        const a = 1;
        const b = 2;

        expect(a * b).toBe(2);
    })
})

console.log(process.env.rootDir)