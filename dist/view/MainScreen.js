"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class MainScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
        this.openFirstScreen();
    }
    openFirstScreen() {
        let option = 0;
        while (option != 3) {
            option = Number(this.prompt("DIGITE:\n1 para Cadastrar\n2.para Alugar\n3.para Listar\n4.para Sair"));
            switch (option) {
                case 1:
                    this.registerScreen();
                    break;
                case 2:
                    this.rentScreen();
                    break;
                case 3:
                    console.log(this.getAllClients());
                    break;
                default:
                    console.log("Entre com um número entre 1 e 4");
                    break;
            }
            //console.clear();
        }
    }
    //método para cadastrar um cliente
    registerScreen() {
        let client = this.controller.getNewClient();
        client.setName(this.prompt("Digite o nome do Cliente"));
        client.setAge(Number(this.prompt("Digite a idade do Cliente")));
        // agora preciso guardar o cadastro no BD
        this.controller.database.clients.push(client);
        //this.controller.showAllClients();
    }
    //this.controller.showAllClients();
    getAllClients() {
        for (let i = 0; i < this.controller.database.clients.length; i++)
            console.log(this.controller.database.clients[i]);
    }
}
exports.default = MainScreen;
rentScreen();
void {};
