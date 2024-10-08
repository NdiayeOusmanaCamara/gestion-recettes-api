<template>
    <div class="container mt-4">
      <h4>{{ $t("recette.category_page.titre") }}</h4>
      <div class="row d-flex">
        <form @submit.prevent="handleSubmit">
          <div>
          <div class="col-md-6">
            <label for="categorie">{{ $t("recette.category_page.label_title") }}</label>
            <input
              type="text"
              class="form-control"
              v-model="name"
              id="categorie"
            />
          </div>
          </div>
          <div class="col-md-4 mt-4  d-flex justify-content-between w-50">
            <button type="submit" class="btn btn-primary">{{ $t("recette.category_page.button_update") }}</button>
            <RouterLink class="btn btn-primary" :to="{ name: 'categorie' }">
              <i class="fas fa-arrow-left"></i>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script setup>
  import { RouterLink, useRouter,useRoute } from "vue-router";
  import { useRecettetore } from "@/store/recetteStore";
  import { ref, onMounted, computed  } from "vue";
  
//   const categorie = ref('');
  
  const store = useRecettetore();
  const router = useRouter();
  const route = useRoute();

  const name = ref('');
  const id = route.params.id;

  onMounted(() => {
  const category = store.getCategory(parseInt(route.params.id));
  if (category) {
    name.value = category.name;
  }
});

function handleSubmit() {
  store.updateCategory(id, {
    name: name.value,
  });
  router.push({ name: "categorie" });
}
  
  onMounted(() => {
    store.loadDataFromApis()
  });
    
  </script>
  