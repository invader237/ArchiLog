import { Boisson } from "../boissons/Boisson.ts";

abstract class OptionBoisson implements Boisson {
    protected boisson: Boisson;

    constructor(boisson: Boisson) {
        this.boisson = boisson;
    }

    getDescription(): string {
        return this.boisson.getDescription();
    }

    getPrix(): number {
        return this.boisson.getPrix();
    }
}

export { OptionBoisson };
