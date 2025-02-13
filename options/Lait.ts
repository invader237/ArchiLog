import { OptionBoisson } from "./OptionsBoisson.ts";

class Lait extends OptionBoisson {
    getDescription(): string {
        return this.boisson.getDescription() + ", Lait";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 0.50;
    }
}

export { Lait };
