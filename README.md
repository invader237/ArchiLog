# Choix du Pattern

## Decorator Pattern

Le **Decorator Pattern** est un **pattern structurel** qui permet d'ajouter dynamiquement des fonctionnalités à un objet **sans modifier sa structure**. Il repose sur l'utilisation de classes décoratrices qui enveloppent l'objet d'origine, lui conférant ainsi de nouveaux comportements.

## Pourquoi utiliser ce pattern ?

Dans notre cas, nous avons un système de gestion de **boissons** ☕ avec plusieurs **suppléments** (ex. : lait, sucre, caramel). Grâce au **Decorator Pattern**, nous pouvons :

- ✅ Ajouter de nouveaux suppléments sans modifier la classe de base.
- ✅ Combiner plusieurs décorateurs pour enrichir progressivement les fonctionnalités.
- ✅ Maintenir un code plus modulaire, évolutif et facile à maintenir.

## Fonctionnement

1. **Une interface commune** : La classe de base (ex. `Boisson`) définit une interface commune pour les boissons et leurs décorateurs.
2. **Une classe concrète** : Une ou plusieurs classes concrètes (ex. `Café`, `Thé`) implémentent cette interface.
3. **Des décorateurs** : Chaque supplément (ex. `Sucre`, `Lait`) est une classe qui **étend** un décorateur abstrait et ajoute son propre comportement tout en conservant les fonctionnalités de la boisson de base.

Ainsi, nous pouvons **enchaîner plusieurs décorateurs** pour enrichir une boisson **sans modifier sa classe d'origine**.

## Exécution

Le programme principal renvoie les informations suivantes :

```
Commande : Espresso, Lait, Sucre
Prix total : 2.70€
Commande : Espresso, Lait, Caramel
Prix total : 3.20€
```

## Sources

[Refactoring Guru - Decorator Pattern](https://refactoring.guru/design-patterns/decorator)
