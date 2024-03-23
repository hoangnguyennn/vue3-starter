import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { onBeforeRouteLeave } from 'vue-router'

/**
 * Thêm popup xác nhận rời khỏi trang
 */
const useBeforeRouteLeaveConfirmation = () => {
  const { t } = useI18n()

  const state = reactive({
    customMessage: '',
    isEnable: false
  })

  const message = computed(() => {
    return t('message.leave_alert')
  })

  /**
   * Hàm xử lý xác nhận rời khỏi trang
   * @param event
   * @returns {boolean} Có rời khỏi trang hay không
   */
  const prevent = (event: BeforeUnloadEvent) => {
    event.preventDefault()
    event.returnValue = state.customMessage || message.value
  }

  const changeMessage = (newMessage: string) => {
    state.customMessage = newMessage
  }

  const enable = () => {
    state.isEnable = true
    window.addEventListener('beforeunload', prevent)
  }

  const disable = () => {
    state.isEnable = false
    window.removeEventListener('beforeunload', prevent)
  }

  onBeforeRouteLeave((_to, _from, next) => {
    if (!state.isEnable) {
      return next()
    }

    if (window.confirm(state.customMessage || message.value)) {
      return next()
    }

    next(false)
  })

  return { enable, disable, changeMessage }
}

export default useBeforeRouteLeaveConfirmation
