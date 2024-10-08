<template>
  <div class="container">
    <h2>{{ $t("recette.modify_page.titre") }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">{{
          $t("recette.modify_page.label_titre")
        }}</label>
        <input
          v-model="titre"
          type="text"
          id="titre"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{
          $t("recette.modify_page.label_recipeType")
        }}</label>
        <select v-model="type" id="type" class="form-select" required>
          <option value="entrée">
            {{ $t("recette.modify_page.type_entree") }}
          </option>
          <option value="plat">
            {{ $t("recette.modify_page.type_plat") }}
          </option>
          <option value="dessert">
            {{ $t("recette.modify_page.type_dessert") }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">{{
          $t("recette.modify_page.label_ingredients")
        }}</label>
        <textarea
          v-model="ingredient"
          id="ingredient"
          class="form-control"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">{{
          $t("recette.modify_page.label_category")
        }}</label>
        <select
          v-model="categoryName"
          id="category_id"
          class="form-select"
          required
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.name"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-primary">
          {{ $t("recette.modify_page.button_edit") }}
        </button>
        <RouterLink class="btn btn-primary" :to="{ name: 'recette' }">
          <i class="fas fa-arrow-left"></i>
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useRecettetore } from "@/store/recetteStore";

const store = useRecettetore();
const route = useRoute();
const router = useRouter();

const id = route.params.id;
const recipe = ref({});

const titre = ref("");
const ingredient = ref("");
const type = ref("");
const category_id = ref("");
const categoryName = ref("");
const categories = computed(() => store.categorys);

onMounted(() => {
  const recipe = store.getRecipe(parseInt(route.params.id));
  if (recipe) {
    titre.value = recipe.titre;
    type.value = recipe.type;
    ingredient.value = recipe.ingredient;
    const category = categories.value.find((c) => c.id === recipe.category_id);
    if (category) {
      categoryName.value = category.name;
    }
  }
});

function handleSubmit() {
  const selectedCategory = categories.value.find(
    (c) => c.name === categoryName.value
  );
  store.updateRecipe(id, {
    titre: titre.value,
    ingredient: ingredient.value,
    type: type.value,
    category_id: selectedCategory.id,
  });
  router.push({ name: "recette" });
}
</script>
