import { OptionBoisson } from "./OptionsBoisson.ts";

class Sucre extends OptionBoisson {
    getDescription(): string {
        return this.boisson.getDescription() + ", Sucre";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 0.20;
    }
}

export { Sucre };
