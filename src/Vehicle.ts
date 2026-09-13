// Abstract base class defining the common structure
abstract class Vehicle {
  constructor(
    public plate: string,
    public model: string,
    public year: number,
    protected baseDailyRate: number
  ) {}

  // Abstract method that forces subclasses to define their own rental calculation
  abstract calcRentValue(days: number): number;
}