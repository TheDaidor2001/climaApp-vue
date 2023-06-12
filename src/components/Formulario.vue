<script setup>
import {reactive, ref} from 'vue'
import Alerta from './Alerta.vue'

const emit = defineEmits(['consultar-api'])

const busqueda = reactive({
    ciudad: '',
    pais: ''
})

const error = ref('')

const paises = [
    {
        id: 1,
        codigo: "US",
        texto: "Estados Unidos"
    },
    {
        id: 2,
        codigo: "ES",
        texto: "España"
    },
]


const handleSubmit = () => {
    if(Object.values(busqueda).includes('')) {
        error.value = 'Todos los campos son obligatorios'
        return
    }
    error.value = ''

    //Hacer la bsuqueda
    emit('consultar-api', busqueda)
}
</script>

<template>
  <Alerta v-if="error">
    {{ error }}
  </Alerta>
  <form @submit.prevent="handleSubmit" class="bg-white p-5 rounded-md">
    <div class="mb-3">
        <label class="block text-lg uppercase font-bold mb-3" for="ciudad">Ciudad</label>
        <input class="border-2 w-full bg-gray-300 p-2 rounded-md focus:outline-yellow-400" type="text" id="ciudad" placeholder="Ej: Madrid, Buenos Aires, New York..." v-model="busqueda.ciudad">
    </div>
    <div class="mb-3">
        <label class="block text-lg uppercase font-bold mb-3" for="pais">Pais</label>
        <select id="pais" class="w-full bg-gray-300 p-2" v-model="busqueda.pais">
            <option value="">-- Selecciona una opción</option>
            <option v-for="pais in paises" :key="pais.id" :value="pais.codigo">{{ pais.texto }}</option>
        </select>
    </div>
    <input class="bg-yellow-400 w-full mt-5 p-2 text-white font-bold cursor-pointer hover:bg-yellow-500 transition-colors" type="submit" value="Consultar Clima">
  </form>
</template>


<style>

</style>