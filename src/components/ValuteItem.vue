<template>
   <div class="valute-item">
    <h2>{{ valute.Name }}</h2>
    <p>Курс: {{ valute.Nominal }} {{ valute.CharCode }} = {{ valute.Value }} RUB</p>
    <p v-if="showVunitRate">1 {{ valute.CharCode }} = {{ valute.VunitRate }} RUB</p>
  </div>
</template>
  
<script lang="ts">
import { ref, watch } from 'vue';
import { Valute } from '../model/Valute';
export default {
  props: {
    valute: {
      type: Valute,
      required: true      
    }
  },
  setup(props) {        
    const showVunitRate = ref(false);
    watch(
      () => props.valute.Nominal,
      (newNominal) => {
        showVunitRate.value = newNominal > 1;
      },
      { immediate: true } // Включаем немедленный запуск, чтобы установить начальное значение
    );
    return {
      showVunitRate,
    };      
  },  
}
</script>