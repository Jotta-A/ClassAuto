"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExemploJest {
    getDouble(n) {
        return n * 2;
    }
    newString(s) {
        return s + "Augusto!!";
    }
}
exports.default = ExemploJest;
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
