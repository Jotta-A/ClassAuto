"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contract {
    constructor(client, vehicle, days) {
        this.client = client;
        this.vehicle = vehicle;
        this.days = days;
        this.id = Contract.nextId++;
        this.startDate = new Date();
        this.totalValue = vehicle.calculateRent(days);
    }
    getEndDate() {
        const end = new Date(this.startDate);
        end.setDate(end.getDate() + this.days);
        return end;
    }
    getSummary() {
        return [
            `Contrato #${this.id}`,
            `Cliente: ${this.client.getName()} (${this.client.getAge()} anos)`,
            `Veículo: [${this.vehicle.constructor.name}] ${this.vehicle.model} | Placa: ${this.vehicle.plate} | Ano: ${this.vehicle.year}`,
            `Diária base: R$ ${this.vehicle.baseDailyRate.toFixed(2)}`,
            `Período: ${this.days} dia(s) — ${this.startDate.toLocaleDateString("pt-BR")} até ${this.getEndDate().toLocaleDateString("pt-BR")}`,
            `Valor total: R$ ${this.totalValue.toFixed(2)}`,
        ].join("\n");
    }
}
Contract.nextId = 1;
exports.default = Contract;
