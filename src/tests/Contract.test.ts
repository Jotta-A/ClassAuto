import Contract from "../model/Contract";
import Client from "../model/Client";
import Sedan from "../model/Sedan";

describe("Contract", () => {
  it("deve armazenar cliente, veículo, dias e calcular o valor total", () => {
    const client = new Client();
    client.setName("João");
    client.setAge(30);
    const sedan = new Sedan("ABC-1234", "Civic", 2022);

    const contract = new Contract(client, sedan, 3);

    expect(contract.client.getName()).toBe("João");
    expect(contract.vehicle).toBe(sedan);
    expect(contract.days).toBe(3);
    // 3 dias * R$ 80 + R$ 30 seguro = 270
    expect(contract.totalValue).toBe(270);
  });

  it("deve calcular a data de término com base nos dias", () => {
    const client = new Client();
    const contract = new Contract(client, new Sedan("XYZ-0000", "Corolla", 2023), 5);
    const diffDays = Math.round(
      (contract.getEndDate().getTime() - contract.startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    expect(diffDays).toBe(5);
  });
});
