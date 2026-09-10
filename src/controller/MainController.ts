import Database from "../database/Database";
import Client from "../model/Client";
import MainScreen from "../view/MainScreen";

export default class MainController {
  public database: Database = new Database();

  constructor() {
    new MainScreen(this);
  }

  public getNewClient(): Client {
    return new Client();
  }

  public getAllClients(): string {}
}
