<template>
  <div class="container">
    <h2>{{ $t("recette.create_page.titre") }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">{{
          $t("recette.create_page.label_title")
        }}</label>
        <input
          v-model="titre"
          type="text"
          id="title"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">{{
          $t("recette.create_page.label_ingredients")
        }}</label>
        <textarea
          v-model="ingredient"
          id="ingredients"
          class="form-control"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{
          $t("recette.create_page.label_type")
        }}</label>
        <select v-model="type" id="type" class="form-select" required>
          <option value="entrée">
            {{ $t("recette.create_page.type_entree") }}
          </option>
          <option value="plat">
            {{ $t("recette.create_page.type_plat") }}
          </option>
          <option value="dessert">
            {{ $t("recette.create_page.type_dessert") }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">{{
          $t("recette.create_page.label_category")
        }}</label>
        <select
          v-model="category_id"
          id="category"
          class="form-select"
          required
        >
          <option value="" disabled>
            {{ $t("recette.create_page.option") }}
          </option>
          <option
            v-for="category in categorys"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-primary">
          {{ $t("recette.create_page.button_add") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRecettetore } from "@/store/recetteStore";
import { useRouter } from "vue-router";

const titre = ref("");
const ingredient = ref("");
const type = ref("");
const category_id = ref("");
const categorys = ref([]);

const store = useRecettetore();
const category = useRecettetore();
const router = useRouter();

onMounted(async () => {
  await store.loadDataFromApis();
  categorys.value = store.categorys;
});

function handleSubmit() {
  if (titre.value.length < 5 || titre.value.length > 500) {
    alert("Le titre de la recette doit contenir entre 5 et 500 caractères.");
    return;
  }

  const existingRecipe = store.recipes.find(
    (recipe) => recipe.titre.toLowerCase() === titre.value.toLowerCase()
  );

  if (existingRecipe) {
    alert("Cette recette existe déjà.");
  } else {
    store.addRecipe({
      titre: titre.value,
      type: type.value,
      ingredient: ingredient.value,
      category_id: category_id.value,
    });
    titre.value = "";
    type.value = "";
    ingredient.value = "";
    category_id.value = "";
    router.push("/recette");
  }
  store.addRecipe({
    titre: titre.value,
    type: type.value,
    ingredient: ingredient.value,
    category_id: category_id.value,
  });
  titre.value = "";
  type.value = "";
  ingredient.value = "";
  category_id.value = "";
  router.push("/recette");
}
</script>
