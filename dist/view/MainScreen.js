"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Sedan_1 = __importDefault(require("../model/Sedan"));
const Hatch_1 = __importDefault(require("../model/Hatch"));
const Utilitarian_1 = __importDefault(require("../model/Utilitarian"));
const Motorcycle_1 = __importDefault(require("../model/Motorcycle"));
class MainScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
        this.openFirstScreen();
    }
    openFirstScreen() {
        let option = 0;
        while (option != 3) {
            option = Number(this.prompt("DIGITE:\n1 para Alugar um veiculo\n2.para Listar veiculos disponiveis\n3.para Sair\n"));
            switch (option) {
                case 1:
                    this.rentScreen();
                    break;
                case 2:
                    this.listAvailableVehiclesScreen();
                    break;
                case 3:
                    console.log("Encerrando o sistema. Até logo!");
                    break;
                default:
                    console.log("Entre com um número entre 1 e 3");
                    break;
            }
            //console.clear();
        }
    }
    //método para cadastrar um cliente
    registerScreen() {
        let client = this.controller.getNewClient();
        client.setName(this.prompt("Digite o nome do Cliente: "));
        client.setAge(Number(this.prompt("Digite a idade do Cliente: ")));
        // agora preciso guardar o cadastro no BD
        this.controller.database.clients.push(client);
        //this.controller.showAllClients();
        //private getAllClients(): string[] {
        //for(let i=0; i < this.controller.database.clients.length; i++)
        //             console.log(this.controller.database.clients[i]);}
    }
    // Método para escolha de categoria e veículo
    rentScreen() {
        console.log("\n--- Aluguel de Veículo ---");
        console.log("Escolha o tipo de veículo:");
        console.log("1 - Sedan");
        console.log("2 - Hatch");
        console.log("3 - Utilitário");
        console.log("4 - Moto");
        const typeOption = Number(this.prompt("Opção (1-4): "));
        let vehicleType = "";
        let vehicleClass;
        switch (typeOption) {
            case 1:
                vehicleType = "Sedan";
                vehicleClass = Sedan_1.default;
                break;
            case 2:
                vehicleType = "Hatch";
                vehicleClass = Hatch_1.default;
                break;
            case 3:
                vehicleType = "Utilitário";
                vehicleClass = Utilitarian_1.default;
                break;
            case 4:
                vehicleType = "Moto";
                vehicleClass = Motorcycle_1.default;
                break;
            default:
                console.log("Opção de veículo inválida.");
                return;
        }
        const available = this.controller.getAvailableVehiclesByType(vehicleClass);
        console.log(`\n=== ${vehicleType.toUpperCase()}S DISPONÍVEIS ===`);
        if (available.length === 0) {
            console.log(`Nenhum veículo do tipo ${vehicleType} disponível no momento.\n`);
            return;
        }
        available.forEach((vehicle, index) => {
            console.log(`${index + 1}. Modelo: ${vehicle.model} | Placa: ${vehicle.plate} | Ano: ${vehicle.year} | Diária: R$ ${vehicle.baseDailyRate}`);
        });
        console.log("");
        // Escolha do veículo específico
        const vehicleIndex = Number(this.prompt(`Escolha o veículo (1-${available.length}): `)) - 1;
        const chosenVehicle = available[vehicleIndex];
        if (!chosenVehicle) {
            console.log("Veículo inválido.\n");
            return;
        }
        // Quantidade de dias
        const days = Number(this.prompt("Por quantos dias deseja alugar? "));
        if (!Number.isInteger(days) || days <= 0) {
            console.log("Quantidade de dias inválida.\n");
            return;
        }
        // Cadastro básico do cliente
        console.log("\n--- Cadastro do Cliente ---");
        const client = this.controller.getNewClient();
        const name = (this.prompt("Digite o nome do Cliente: ") ?? "").trim();
        if (!name) {
            console.log("Nome inválido.\n");
            return;
        }
        const age = Number(this.prompt("Digite a idade do Cliente: "));
        if (!Number.isInteger(age) || age <= 0) {
            console.log("Idade inválida.\n");
            return;
        }
        client.setName(name);
        client.setAge(age);
        // Cria e armazena o contrato
        const contract = this.controller.createContract(client, chosenVehicle, days);
        console.log("\n=== CONTRATO REGISTRADO COM SUCESSO ===");
        console.log(contract.getSummary());
        console.log("");
    }
    // Método para listar veículos disponíveis
    listAvailableVehiclesScreen() {
        console.log("\n=== VEÍCULOS DISPONÍVEIS ===");
        const availableVehicles = this.controller.getAvailableVehicles();
        if (availableVehicles.length === 0) {
            console.log("Nenhum veículo disponível no momento.\n");
            return;
        }
        availableVehicles.forEach((vehicle, index) => {
            console.log(`${index + 1}. [${vehicle.constructor.name}] Modelo: ${vehicle.model} | Placa: ${vehicle.plate} | Ano: ${vehicle.year} | Diária: R$ ${vehicle.baseDailyRate}`);
        });
        console.log("");
    }
}
exports.default = MainScreen;
