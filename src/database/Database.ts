import Client from "../model/Client";
import Vehicle from "../model/Vehicle";
import Sedan from "../model/Sedan";
import Utilitarian from "../model/Utilitarian";
import Motorcycle from "../model/Motorcycle";
import Hatch from "../model/Hatch";
import Contract from "../model/Contract";

export default class Database {
  public clients: Client[] = [];
  public vehicles: Vehicle[] = [];
  public contracts: Contract[] = [];

  constructor() {
    this.initVehicles();
  }

  private initVehicles(): void {
    this.vehicles.push(
      new Sedan("ABC-1234", "Civic", 2022),
      new Utilitarian("DEF-5678", "Fiorino", 2021),
      new Motorcycle("MTO-9999", "CB 500", 2023),
      new Hatch("GHI-9012", "HB20", 2020)
    );
  }
}