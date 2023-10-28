import { ref } from 'vue'

const id = ref(0)

const useId = () => {
  id.value++
  return id.value
}

export default useId
