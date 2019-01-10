export class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    setName(value: string): User {
        this.name = value;
        return this;
    }

    getName(): string {
        return this.name;
    }
}
