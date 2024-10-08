<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link
        class="navbar-brand me-3"
        :to="{ name: 'Home' }"
        exact-active-class="active"
      >
        <i class="fas fa-utensils mt-2"></i> ROTANA
      </router-link>

      <!-- Bouton pour mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { show: isNavbarVisible }]" id="navbarSupportedContent">

      <!-- Liens du menu -->
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav gap-3">
          <RouterLink
          class="nav-link"
          :class="{ active: route.path.startsWith('/recette') }"
          to="/recette"
        >
        {{ $t("recette.app_page.ricipe_title") }}
        </RouterLink>
         
          <router-link
            class="nav-link"
            :class="{ active: route.path.startsWith('/categorie') }"
          to="/categorie"
          >
            {{ $t("recette.app_page.recipe_title") }}
          </router-link>
          <div class="navbar-nav">
            <select class="form-select" @change="changeLanguage">
              <option value="fr">Français</option>
              <option value="en">Anglais</option>
            </select>
          </div>
        </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const isNavbarVisible = ref(false);
const route = useRoute();
function toggleNavbar() {
  isNavbarVisible.value = !isNavbarVisible.value;
}

const { locale } = useI18n();
const changeLanguage = (event) => {
  locale.value = event.target.value;
};
</script>

<style scoped>
.nav-link.active {
  font-weight: bold;
  color: #007bff; 
}

@media (max-width: 992px) {
  .navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-select {
    margin-top: 10px;
  }
}
</style>
