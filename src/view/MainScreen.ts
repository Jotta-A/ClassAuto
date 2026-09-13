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
                    console.log("Entre com um número entre 1 e 4")
                    break;
            }
            //console.clear();
        }

    }
    //método para cadastrar um cliente
    private registerScreen(): void {
      let client = this.controller.getNewClient();
      client.setName(this.prompt("Digite o nome do Cliente"));
      client.setAge(Number(this.prompt("Digite a idade do Cliente")));
      
      // agora preciso guardar o cadastro no BD
      this.controller.database.clients.push(client);
      //this.controller.showAllClients();
      private getAllClients(): string[] {
        for(let i=0; i < this.controller.database.clients.length; i++)
        console.log(this.controller.database.clients[i]);}
        
    }

       //Metodo para escolha de categoria e veiculo
       private rentScreen (): void {
        
       }

}


