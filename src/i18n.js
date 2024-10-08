// i18n.js
import { createI18n } from 'vue-i18n'; // Import du createI18n

// Définition des messages de traduction
const messages = {
  en: {
    recette: {
      create_page: {
        titre: "Create a recipe",
        label_title: "Title",
        label_ingredients: "Ingredients",
        label_type: "Type",
        type_entree: "Starter",
        type_plat: "Main course",
        type_dessert: "Dessert",
        label_category:"Category",
        button_add: "Add",
        option: "Please select a category"
      },
      list_page: {
        titre: "Recipe List",
        label_title: "Title",
        label_ingredients: "Ingredients",
        label_category:"Category",
        label_type: "Type",
        label_action: "Action",
        button_add: "Add a recipe",
      },
      modify_page: {
        titre: "Modify Recipe",
        label_titre: "Title",
        label_ingredients: "Ingredients",
        label_recipeType: "Type",
        label_category:"Category",
        submit: "Save Changes",
        type_entree: "Starter",
        type_plat: "Main course",
        type_dessert: "Dessert",
        button_edit: "Modify recipe"
      },
      details_page: {
        titre: "Recipe Details",
        titre1:"Title",
        label_ingredients: "Ingredients",
        label_category:"category",
        label_type: "Type",
        button_back: "Back"
      },
      details_category:{
        titre:"Category Details",
         id:"Category ID",
        name:"Category Name"
      },
      app_page: {
        titre: "GestionRecipe",
        ricipe_title: "Recipe",
        recipe_title:"Category"
      },
      home_page: {
        titre: "Welcome to ROTANA",
      },
      category_page: {
        titre: "Create a category",
        label_title: "Category name",
        label_col: "Category",
        button_submit: "Add",
        button_update: "Modify category",
        
      },
      list_category: {
        titre: "Category List",
        button_add: "Add a category",
      
      }
    }
  },
  fr: {
    recette: {
      create_page: {
        titre: "Ajouter une recette",
        label_title: "Titre",
        label_ingredients: "Ingrédients",
        label_type: "Type",
        type_entree: "Entrée",
        type_plat: "Plat",
        type_dessert: "Dessert",
        label_category:"Categorie",
        option:"Veuillez sélectionner une catégorie",
        button_add: "Ajouter",
      },
      list_page: {
        titre: "Liste des recettes",
        label_title: "Titre",
        label_ingredients: "Ingrédients",
        label_category:"Categorie",
        label_type: "Type",
        label_action: "Action",
        button_add: "Ajouter une recette",
      },
      modify_page: {
        titre: "Modifier la recette",
        label_titre: "Titre",
        label_ingredients: "Ingrédients",
        label_recipeType: "Type",
        label_category:"Categorie",
        submit: "Enregistrer les modifications",
        type_entree: "Entrée",
        type_plat: "Plat",
        type_dessert: "Dessert",
        button_edit: "Modifier la recette"
      },
      details_page: {
        titre: "Détails de la recette",
        titre1:"Titre",
        label_ingredients: "Ingrédients",
        label_type: "Type",
        label_category:"categorie",
        button_back: "Fermer"
      },
      details_category:{
        titre:"Details de la categorie",
        id:"ID du categorie",
        name:"Nom de la categorie"
      },
      app_page: {
        titre: "GestionRecette",
        ricipe_title: "Recette",
        recipe_title:"Catégorie"
      },
      home_page: {
        titre: "Bienvenue à ROTANA",
      },
      category_page: {
        titre: "Ajouter une catégorie",
        label_title: "Nom du Catégorie",
        label_col: "Catégorie",
        button_submit: "Ajouter",
        button_update: "Modifier Categorie"
      },
      list_category: {
        titre: "Liste des catégorie",
        button_add: "Ajouter une category",
      
      }
    }
  }
};

// Initialisation de vue-i18n
const i18n = createI18n({
  legacy: false, // Utilisation de la Composition API
  locale: 'fr', // Langue par défaut
  fallbackLocale: 'en', // Langue de secours
  messages, // Messages de traduction
});

export default i18n;
