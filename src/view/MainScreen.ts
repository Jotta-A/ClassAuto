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
        while (option != 4) {
            option = Number(this.prompt("DIGITE:\n1 para Cadastrar\n2.para Listar\n3.para Login de Admin\n4.para Sair\nOpção: "));
            switch (option) {
                case 1:
                    this.registerScreen();
                    break;
                case 2:
                    console.log(this.getAllClients());
                    break;
                case 3:
                    this.adminLoginScreen();
                    break;
                case 4:
                    break;
                default:
                    console.log("Entre com um número entre 1 e 4")
                    break;
            }
            //console.clear();
        }

    }

    private adminLoginScreen(): void {
        console.log("Login de Admin (Funcionalidade em desenvolvimento)");
    }
    //método para cadastrar um cliente
    private registerScreen(): void {
      let client = this.controller.getNewClient();
      client.setName(this.prompt("Digite o nome do Cliente: "));
      client.setAge(Number(this.prompt("Digite a idade do Cliente: ")));
      
      // agora preciso guardar o cadastro no BD
      this.controller.database.clients.push(client);
      
      this.rentScreen();
    }

    private getAllClients(): any[] {
        return this.controller.database.clients;
    }

    //Metodo para escolha de categoria e veiculo
    private rentScreen (): void {
        let option = Number(this.prompt("Escolha o tipo de veículo para alugar:\n1. Sedan\n2. Hatch\n3. Motorcycle\n4. Utilitarian\nOpção: "));
        switch (option) {
            case 1:
                console.log("Você escolheu Sedan.");
                break;
            case 2:
                console.log("Você escolheu Hatch.");
                break;
            case 3:
                console.log("Você escolheu Motorcycle.");
                break;
            case 4:
                console.log("Você escolheu Utilitarian.");
                break;
            default:
                console.log("Opção inválida.");
                break;
        }
    }

}


