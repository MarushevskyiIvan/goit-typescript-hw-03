class Key {
	constructor(private signature: number) {
		this.signature = Math.random()
	}

	getSignature(): number {
		return this.signature
	}
}

class Person {
	constructor(private key: Key) {
		this.key = key
	}
	getKey(): Key {
		return this.key
	}
}

abstract class House {
	door: boolean = true || false
	key: Key
	tenants: Person[] = []
	constructor(key: Key) {
		this.key = key
	}

	comeIn(person: Person) {
		if (this.door) {
			return this.tenants.push(person)
		}
	}

	abstract openDoor(key: Key): void
}

class MyHouse extends House {
	openDoor(key: Key): void {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true
		}
	}
}

const key = new Key(0.5)

const house = new MyHouse(key)
const person = new Person(key)

house.openDoor(person.getKey())

house.comeIn(person)

export {}
