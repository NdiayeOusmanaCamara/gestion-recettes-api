<template>
  <div class="container">
    <h2>{{ $t("recette.details_page.titre") }}</h2>
    <div v-if="recipe">
      <p>
        <strong> {{ $t("recette.details_page.titre1") }}:</strong>
      </p>
        <p>{{ recipe.titre }}:</p>
      
      <p>
        <strong>{{ $t("recette.details_page.label_ingredients") }}:</strong>
      </p>
      <p>{{ recipe.ingredient }}</p>
      <p>
        <strong>{{ $t("recette.details_page.label_type") }}:</strong>
        {{ recipe.type }}
      </p>
      <p>
        <strong>{{ $t("recette.details_page.label_category") }}:</strong>
        {{ categoryName }}
      </p>
      <button @click="goBack" class="btn btn-secondary">
        {{ $t("recette.details_page.button_back") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRecettetore } from "@/store/recetteStore";

const store = useRecettetore();
const route = useRoute();
const router = useRouter();
const recipe = ref(null);
const categoryName = ref('');  

onMounted(() => {
  const fetchedRecipe = store.recipes.find(r => r.id === parseInt(route.params.id));
  if (fetchedRecipe) {
    recipe.value = fetchedRecipe;
    const category = store.categorys.find(c => c.id === fetchedRecipe.category_id);
    if (category) {
      categoryName.value = category.name;  
    } else {
      categoryName.value = 'Catégorie non trouvée';
    }
  }
});

function goBack() {
  router.push({ name: "recette" });
}
</script>
