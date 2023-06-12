import { computed, ref } from "vue";
import axios from "axios";


export function useClima() {
  const clima = ref({});
  const error = ref('')
  const loading = ref(false)

  const consultarApi = async ({ ciudad, pais }) => {
    const key = import.meta.env.VITE_API_KEY;
    loading.value = true;
    clima.value = {}
    error.value = ''

    try {
    
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

      const { data: climaData } = await axios(urlClima);
      clima.value = climaData;
    } catch (e) {
      error.value = "Ciudad no encontrada"
    }finally{
        loading.value = false
    }
  };


  const mostrarClima = computed(() => {
    return Object.values(clima.value).length > 0
  })

  const convertirAGrados = (clima) => {
    return parseInt(clima - 273.15);
  }

  return {
    consultarApi,
    mostrarClima,
    convertirAGrados,
    clima,
    error,
    loading
  };
}
