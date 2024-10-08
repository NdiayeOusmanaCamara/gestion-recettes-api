import { defineStore } from 'pinia';
import axios from "axios";

export const useRecettetore = defineStore('recipes', {
  state: () => ({
    recipes: [],
    categorys:[
      {categorie:'aaaa'},
      {categorie:'bbbb'},
      {categorie:'ccc'},
    ]
  }),
  actions: {
    async loadDataFromApi() {
      try {
        const resp = await axios.get("http://localhost:3070/recipes");
        this.recipes = resp.data;
      } catch (error) {
        this.recipes = [];
      }
    },
    async loadDataFromApis() {
      try {
        const resp = await axios.get("http://localhost:3070/category");
        this.categorys = resp.data;
      } catch (error) {
        this.categorys = [];
      }
    },
    async addRecipe(recipe) {
      return await axios.post("http://localhost:3070/recipes", recipe);
    },
    async addCategory(category) {
      return await axios.post("http://localhost:3070/category", category);
    },
    getRecipe(id) {
      return this.recipes.find(recipe => recipe.id === id);
    },
    getCategory(id) {
      return this.categorys.find(category => category.id === id);
    },
    async updateRecipe(id, updatedRecipe) {
      try {
        await axios.put(`http://localhost:3070/recipes/${id}`, updatedRecipe);
        await this.loadDataFromApi();
      } catch (error) {}
    },
    async updateCategory(id, updatedCategory) {
      try {
        await axios.put(`http://localhost:3070/category/${id}`, updatedCategory);
        await this.loadDataFromApis();
      } catch (error) {}
    },
   async deleteRecipe(id) {
      try {
        await axios.delete(`http://localhost:3070/recipes/${id}`);
        await this.loadDataFromApi();
      } catch (error) {}
    },
   async deleteCategory(id) {
      try {
        await axios.delete(`http://localhost:3070/category/${id}`);
        await this.loadDataFromApis();
      } catch (error) {}
    },
  }
});
