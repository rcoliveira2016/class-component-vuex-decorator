<template>
  <div class="contador">
    <button @click="valor--">-</button>
    <span>{{ valor }}</span>
    <button @click="valor++">+</button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ContadorModule } from "@/store/modules/contador/contador-module";

@Options({
  name: "contador",
})
export default class Contador extends Vue {
  get valor(): number {
    return ContadorModule.valor;
  }
  set valor(valor: number) {
    ContadorModule.alterarValor(valor);
  }
}
</script>
<style scoped>
.contador button {
  padding: 0.25rem 1rem;
}
.contador span {
  padding: 0.25rem 4rem;
}
</style>
