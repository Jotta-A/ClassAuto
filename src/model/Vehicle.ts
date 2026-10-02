// Abstract base class defining the common structure
abstract class Vehicle {
  constructor(
    public plate: string,
    //public model: string,
    public year: number,
    protected baseDailyRate: number
  ) {}

  protected rented: boolean = false;

  // Abstract method that forces subclasses to define their own rental calculation
  abstract calcRentValue(days: number): number;


  //TIRAR DAQUI!!!
  // Checks if the vehicle is available for rent
  public isAvailable(): boolean {
    return !this.rented;
  }

  // Marks the vehicle as rented
  public rent(): void {
    if (this.isAvailable()) {
      this.rented = true;
    } else {
      console.log("Vehicle is already rented.");
    }
  }

  // Returns the vehicle to available status
  public returnVehicle(): void {
    this.rented = false;
  }
}