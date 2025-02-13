import { Boisson } from "./boissons/Boisson.ts";
import { Espresso } from "./boissons/Espresso.ts";
import { Lait } from "./options/Lait.ts";
import { Sucre } from "./options/Sucre.ts";
import { Caramel } from "./options/Caramel.ts";

const maBoisson: Boisson = new Sucre(new Lait(new Espresso()));
const maBoisson2: Boisson = new Caramel(new Lait(new Espresso()));

console.log("Commande :", maBoisson.getDescription());
console.log("Prix total :", maBoisson.getPrix().toFixed(2) + "€");

console.log("Commande :", maBoisson2.getDescription());
console.log("Prix total :", maBoisson2.getPrix().toFixed(2) + "€");
