export default class ExemploJest {
    public getDouble(n: number): number {
        return n * 2;
    }
    public newString(s: string): string {
        return s + "Augusto!!";
    }
}

describe("ExemploJest", () => {
    it("deve retornar o dobro do numero", () => {
        const exemplo = new ExemploJest();
        expect(exemplo.getDouble(4)).toBe(8);
    });

    it("deve concatenar a string com Augusto!!", () => {
        const exemplo = new ExemploJest();
        expect(exemplo.newString("Ola ")).toBe("Ola Augusto!!");
    });
});