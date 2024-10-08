## Gestion de Recettes - Application Node.js

## Description

Cette API permet de gérer des recettes culinaires en offrant des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer). Elle est développée avec Express.js et utilise MySQL pour la gestion de la base de données. Le projet comprend des tests unitaires, des outils d'analyse et de formatage de code (ESLint, Prettier).


## Objectifs
- Développer et tester une API RESTful avec Express.js et MySQL.
- Intégrer des outils d'analyse et de formatage de code.
## prérequis

Avant de démarrer, assurez-vous d'avoir installé les logiciels suivants :

- Node.js (version 14+)
- MySQL (version 5.7+)
- Postman (pour tester l'API)

## Technologies Utilisées

- **Node.js** : Plateforme JavaScript côté serveur.
- **Express** : Framework web pour Node.js.
- **MySQL** : Système de gestion de base de données relationnelle.
- **Jasmine** : Framework de tests pour JavaScript.
- **Postman** : Utilisé pour tester l'API.

## Installation

1. Clonez le dépôt sur votre machine locale :

```
git clone https://github.com/NdiayeOusmanaCamara/gestion-recettes-api.git
```

2. Accédez au répertoire du projet :

```
cd gestion-recettes-api
```

3. Installez les dépendances du projet :

```
npm install
```
L'API sera accessible à `http://localhost:3000`
## Endpoints de l'API
## Recette
## GET /recipes

- Description : Récupère toutes les recettes. `http://localhost:3000/recipes`
- Réponse

        [
                {
                    "id": 2,
                    "titre": "Crêpes classiques",
                    "type": "Dessert",
                    "ingredient": "250g de farine, 3 ?ufs",
                    "cartegory_id":"2"
                },
                {
                    "id": 3,
                    "titre": "Soupe de légumes",
                    "type": "Entrée",
                    "ingredient": "3 carottes, 2 pommes de terre",
                    "cartegory_id":"3"
                }
            ]

## POST /recipes

- Description : Crée une nouvelle recette. `http://localhost:3000/recipes`

- Corps de la requête :

```
{

"titre": "Salades Césars",
"type": "Entrée",
"ingredient": "Laitue, Poulet, Parmesan, Croutons",
"cartegory_id":"4"

    }
```

- Reponse:

```
{
  "message": "Recette ajouter avec succès"
}
```

## PUT /recipes/id

- Description : Met à jour une recette existante. `http://localhost:3000/recipes/4`

- Corps de la requête :

          {
          "titre": "Salade Césars",
          "type": "Entrée",
          "ingredient": "Laitue, Poulet, Parmesan, Croutons",
          "cartegory_id":"1"
          }

- Réponse :

```

{
  "message": "Recette mise à jour avec succès"
}
```

## DELETE /recipes/id

- Description : Supprime une recette par ID. `http://localhost:3000/recipes/2`
- Réponse :

```
{
  "message": "Recette supprimée avec succès"
}
```
## les tests unitaires

L'application utilise Jasmine pour les tests unitaires. Pour exécuter les tests, utilisez la commande suivante :

```
npm test
```
Exemple:

![](/src/assets/images/img%20test.JPG)

Les tests incluent la vérification des fonctionnalités principales telles que la création, la récupération, la mise à jour, et la suppression des recettes.



## Analyse et formatage de code

L'analyse statique du code s'effectue à l'aide d'ESLint, tandis que le formatage est assuré par Prettier. Ces outils sont configurés pour être intégrés dans votre pipeline de développement afin de garantir un code propre et homogène

## Exécuter l'analyse du code :

```
npm run lint
```
## Exécuter le formatage automatique :
```
npm run format
```

## Documentation et Collection Postman
- **Exporter la collection recette** :`recetteApi.postman_collection`
- **Exporter la collection category** :`categoryApi.postman_collection`
- **Importer dans Postman** et exécuter les requêtes.
## Auteur
[N'Diaye Ousmane Camara](https://github.com/NdiayeOusmanaCamara)
