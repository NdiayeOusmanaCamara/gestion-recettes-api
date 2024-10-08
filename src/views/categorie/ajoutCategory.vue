<template>
  <div class="container mt-4">
    <h4>{{ $t("recette.category_page.titre") }}</h4>
    <div class="row d-flex">
      <form @submit.prevent="submitForm">
        <div>
          <div class="col-md-6">
            <label for="categorie">{{
              $t("recette.category_page.label_title")
            }}</label>
            <input
              type="text"
              class="form-control"
              v-model="name"
              id="categorie"
              required
            />
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <button type="submit" class="btn btn-primary">
            {{ $t("recette.category_page.button_submit") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useRecettetore } from "@/store/recetteStore";
import { ref } from "vue";

const store = useRecettetore();
const router = useRouter();
const name = ref("");

function submitForm() {
  

  if(name.value.length < 5 || name.value.length > 100){
    alert("Le nom de la category doit contenir entre 5 et 100 caractères.");
    return;
  }

  const existingCategory = store.categorys.find(
    (category) => category.name.toLowerCase() === name.value.toLowerCase()
  );
  

  if(existingCategory){
    alert("cette categorie existe déjà.")
  }else{
    store.addCategory({
      name: name.value,
    });
    name.value = "";
    router.push({ name: "categorie" });
  }
  
}
</script>