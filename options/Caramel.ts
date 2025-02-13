import { OptionBoisson } from "./OptionsBoisson.ts";

class Caramel extends OptionBoisson {
    getDescription(): string {
        return this.boisson.getDescription() + ", Caramel";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 0.70;
    }
}

export { Caramel };
