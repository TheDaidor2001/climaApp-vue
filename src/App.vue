<script setup>
import { useClima } from './composables/useClima';
import Formulario from './components/Formulario.vue'
import Clima from './components/Clima.vue'
import Spinner from './components/Spinner.vue'

const { consultarApi, clima, mostrarClima, error, loading } = useClima()
</script>

<template>
  <main class="w-full p-10 lg:p-0 lg:w-1/3 md:w-1/2 mx-auto mt-20">
    <h1 class="text-3xl xl:text-6xl lg:text-5xl md:text-4xl text-center mb-10 text-white font-black">Explora el clima de <span class="text-yellow-400 uppercase underline">tu ciudad</span></h1>
   <div class="flex flex-col gap-5">
      <Formulario 
        @consultar-api="consultarApi"
      />
      <Spinner v-if="loading"/>
      <Clima v-if="mostrarClima" :clima="clima"/>
      <p v-if="error" class="text-center text-3xl text-white font-bold">{{ error }}</p>
   </div>
  </main>
</template>

