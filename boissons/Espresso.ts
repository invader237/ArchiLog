import { Boisson } from "./Boisson.ts";

class Espresso implements Boisson {
    getDescription(): string {
        return "Espresso";
    }

    getPrix(): number {
        return 2.00;
    }
}

export { Espresso };
