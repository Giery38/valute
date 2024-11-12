<template>
  <div>
    <select v-model="selectedCurrency">
      <option v-for="valute in valuties?.Valute" :key="valute.ID" :value="valute">
        {{ valute.Name }}
      </option>
    </select>  
    <div v-if="selectedCurrency">
    <ValuteItem :valute="selectedCurrency"></ValuteItem>
  </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
import ValuteItem from './components/ValuteItem.vue';
  import { ValutiesParser } from './model/ValutiesParser';
import { ValCurs } from './model/ValCurs';
import { Valute } from './model/Valute';

  let selectedCurrency = ref<Valute | null>(null); 
  const valuties = ref<ValCurs | null>(null);
  const loadCurrencies = async () => {
    let valutiesParser = new ValutiesParser()
    const valCurs = await valutiesParser.Parse()
    valuties.value = valCurs 
  }
  onMounted(async () => {
     await loadCurrencies();
    });
</script>