import Availability, { VehicleStatus } from "../model/Availability";

describe("Availability e VehicleStatus Enum", () => {
  let availability: Availability;

  beforeEach(() => {
    availability = new Availability();
  });

  it("deve iniciar com status AVAILABLE e retornar true para isAvailable()", () => {
    expect(availability.isAvailable()).toBe(true);
    expect(availability.getStatus()).toBe(VehicleStatus.AVAILABLE);
    expect(availability.isAvailable(true)).toBe(VehicleStatus.AVAILABLE);
  });

  it("deve mudar o status para RENTED após rent()", () => {
    availability.rent();
    expect(availability.isAvailable()).toBe(false);
    expect(availability.getStatus()).toBe(VehicleStatus.RENTED);
    expect(availability.isAvailable(true)).toBe(VehicleStatus.RENTED);
  });

  it("deve voltar para AVAILABLE após returnVehicle()", () => {
    availability.rent();
    expect(availability.isAvailable()).toBe(false);

    availability.returnVehicle();
    expect(availability.isAvailable()).toBe(true);
    expect(availability.getStatus()).toBe(VehicleStatus.AVAILABLE);
  });

  it("deve permitir definir status de manutenção MAINTENANCE", () => {
    availability.setStatus(VehicleStatus.MAINTENANCE);
    expect(availability.isAvailable()).toBe(false);
    expect(availability.getStatus()).toBe(VehicleStatus.MAINTENANCE);
  });
});
