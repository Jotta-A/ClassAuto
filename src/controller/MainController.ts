import Database from "../database/Database";
import Client from "../model/Client";
import Vehicle from "../model/Vehicle";
import Contract from "../model/Contract";
import MainScreen from "../view/MainScreen";

export default class MainController {
  public database: Database = new Database();

  constructor() {
    new MainScreen(this);
  }

  public getNewClient(): Client {
    return new Client();
  }

  public getAvailableVehicles(): Vehicle[] {
    return this.database.vehicles.filter((vehicle) => vehicle.availability.isAvailable());
  }

  public getAllVehicles(): Vehicle[] {
    return this.database.vehicles;
  }

  public getAvailableVehiclesByType(type: Function): Vehicle[] {
    return this.getAvailableVehicles().filter((vehicle) => vehicle instanceof type);
  }

  // Cadastra o cliente, marca o veículo como alugado e guarda o contrato no BD
  public createContract(client: Client, vehicle: Vehicle, days: number): Contract {
    const contract = new Contract(client, vehicle, days);
    vehicle.rent();
    this.database.clients.push(client);
    this.database.contracts.push(contract);
    return contract;
  }
}
