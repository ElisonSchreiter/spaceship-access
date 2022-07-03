class Spaceship {
  constructor(name, crewQuantity) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.currentVelocity = 0
  }
  static get deceleration() {
    return 0.17
  }
  speedUp(acceleration) {
    this.currentVelocity += acceleration * (1 - Spaceship.deceleration)
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, crewQuantity, seatQuantity) {
    super(name, crewQuantity)
    this.seatQuantity = seatQuantity
  }
}

class BattleSpaceship extends Spaceship {
  constructor(name, crewQuantity, gunQuantity) {
    super(name, crewQuantity)
    this.gunQuantity = gunQuantity
  }
}
