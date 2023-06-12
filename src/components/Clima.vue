<script setup>
import { useClima } from '../composables/useClima';

const { convertirAGrados } = useClima()

defineProps({
    clima: {
        type: Object,
        required: true
    }
})

</script>


<template>
    <div class="bg-white p-5 rounded-md">
        <h2 class="text-center font-bold text-2xl lg:text-4xl">Clima de: {{ clima.name }}</h2>
        <p class="text-center mt-5 text-6xl font-black">{{ convertirAGrados(clima.main.temp) }}<span>&deg;C</span></p>
        <div class="flex justify-center mt-5 gap-10">
            <p class="">Máximo: <span class="font-bold">{{ convertirAGrados(clima.main.temp_max) }}&deg;C</span></p>
            <p class="">Mínimo: <span class="font-bold">{{ convertirAGrados(clima.main.temp_min) }}&deg;C</span></p>
        </div>
    </div>
</template>

<style></style>