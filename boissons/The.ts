import { Boisson } from "./Boisson.ts";

class The implements Boisson {
    getDescription(): string {
        return "Thé";
    }

    getPrix(): number {
        return 3.00;
    }
}

export { The };
