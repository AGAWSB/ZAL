<template>
  <div>
    <h1>Witaj</h1>

    <router-view></router-view>

    <button @click="fetchData">Pobierz dane</button>

    <div v-if="dataLoaded">
      <p v-for="item in items" :key="item.id">{{ item.name }}</p>
    </div>

    <MyComponent>
      <template v-slot:header>
        <h2>O mnie</h2>
      </template>

      <template v-slot:content>
        <p>XXXXXXXXXXXXXXX</p>
      </template>

      <template v-slot:footer>
        <button @click="handleButtonClick">Kliknij mnie</button>
      </template>
    </MyComponent>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePinia } from 'pinia';

import MyComponent from './MyComponent.vue';

export default {
  components: {
    MyComponent
  },

  setup() {
    const route = useRoute();
    const pinia = usePinia();

    const dataLoaded = ref(false);
    const items = ref([]);

    const fetchData = async () => {
      // Pobieranie danych za pomocą fetch lub innej metody
      const response = await fetch('https://example.com/api/data');
      const data = await response.json();

      items.value = data;
      dataLoaded.value = true;
    };

    const handleButtonClick = () => {
      // Obsługa kliknięcia przycisku
      console.log('Kliknięto przycisk');
    };

    return {
      dataLoaded,
      items,
      fetchData,
      handleButtonClick
    };
  }
}
</script>

<style lang="scss">
h1 {
  color: #f00;
}

p {
  font-size: 18px;
}

button {
  background-color: #00f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>