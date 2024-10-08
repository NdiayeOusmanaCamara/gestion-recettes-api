import { createRouter, createWebHistory } from "vue-router";
import AjouteRecette from "@/views/recette/ajouteRecette.vue";
import ListeRecette from "@/views/recette/listeRecette.vue";
import Home from "@/views/Home.vue";
import ModifierRecette from "@/views/recette/modifierRecette.vue";
import ShowRecette from "@/views/recette/showRecette.vue";
import Categorie from "../views/categorie/categorie.vue";
import ModifietCategory from "../views/categorie/modifietCategory.vue";
import ShowCategory from "../views/categorie/showCategory.vue";
import AjoutCategory from "../views/categorie/ajoutCategory.vue";




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    path: "/recette/ajout",
    name: "ajouteRecette",
    component: AjouteRecette,
  },
  {
    path: "/recette",
    name: "recette",
    component: ListeRecette,
  },
  {
    path: "/recette/mod/:id",
    name: "modifier",
    component: ModifierRecette,
  },
  {
    path: "/recette/show/:id",
    name: "show",
    component: ShowRecette
  },
  {
    path: "/categorie",
    name: "categorie",
    component: Categorie,
  },
  {
    path: "/categorie/modifie/:id",
    name: "modifierCategory",
    component: ModifietCategory,
  },
 
  {
    path: "/categorie/showCategory/:id",
    name: "showCategory",
    component: ShowCategory
  },
  {
    path: "/categorie/ajoutCategory",
    name: "ajoutCategory",
    component: AjoutCategory
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
