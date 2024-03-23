import { Ref, onBeforeUnmount, onMounted } from 'vue'

/**
 * Xử lý sự kiện click bên ngoài element
 * @param elementRef DOM element
 * @param callback Hàm xử lý
 */
const useClickOutside = (
  elementRef: Ref<HTMLElement | undefined>,
  callback: (event: MouseEvent) => void
) => {
  const onClick = (event: MouseEvent) => {
    const element = elementRef.value

    if (!element) return

    const isClickElement = element === event.target
    const isClickChildElement = element.contains(event.target as Node)

    if (isClickElement || isClickChildElement) {
      callback(event)
    }
  }

  onMounted(() => {
    document.addEventListener('click', onClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', onClick)
  })
}

export default useClickOutside
