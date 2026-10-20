import MainController from "../controller/MainController";
import promptSync from 'prompt-sync';

export default class MainScreen {

    private prompt = promptSync();

    private controller: MainController;

    constructor(controller: MainController) {
        this.controller = controller;
        this.openFirstScreen();
    }

    private openFirstScreen(): void {
        let option: number = 0;
        while (option != 3) {
            option = Number(this.prompt("DIGITE:\n1 para Alugar um veiculo\n2.para Listar veiculos disponiveis\n3.para Sair\n"));
            switch (option) {
                case 1:
                    this.rentScreen();
                    break;
                case 2:
                    //this.rentScreen();
                    break;
                case 3:
                    //console.log(this.getAllClients());
                    break;

                default:
                    console.log("Entre com um número entre 1 e 3")
                    break;
            }
            //console.clear();
        }

    }
    //método para cadastrar um cliente
    private registerScreen(): void {
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
    private rentScreen(): void {
        console.log("\n--- Aluguel de Veículo ---");
        console.log("Escolha o tipo de veículo:");
        console.log("1 - Sedan");
        console.log("2 - Hatch");
        console.log("3 - Utilitário");
        console.log("4 - Moto");
        const typeOption = Number(this.prompt("Opção (1-4): "));

        let vehicleType = "";
        switch (typeOption) {
            case 1:
                vehicleType = "Sedan";
                break;
            case 2:
                vehicleType = "Hatch";
                break;
            case 3:
                vehicleType = "Utilitário";
                break;
            case 4:
                vehicleType = "Moto";
                break;
            default:
                console.log("Opção de veículo inválida.");
                return;
        }

        const brand = this.prompt("Digite a marca do veículo: ");
        const model = this.prompt("Digite o modelo do veículo: ");

        console.log("\nVeículo selecionado com sucesso:");
        console.log(`Tipo: ${vehicleType}`);
        console.log(`Marca: ${brand}`);
        console.log(`Modelo: ${model}\n`);
    }
}




