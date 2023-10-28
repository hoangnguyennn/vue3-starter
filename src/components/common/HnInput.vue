<template>
  <div class="hn-input" :class="classes">
    <label v-if="label" class="label" :for="internalId">{{ label }}</label>

    <input
      :id="internalId"
      v-model="value"
      class="input"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
    />

    <div class="input-footer">
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-if="withCount" class="count">
        {{ value.length }}/{{ maxLength }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useId from '@hn/composables/useId'
import { computed, watch } from 'vue'

/**
 * id: id
 * label: label
 * errorMessage: error message
 * placeholder: placeholder
 * maxLength: max length của input
 * withCount: nếu true, component sẽ hiển thị bộ đếm chiều dài input
 * disabled: nếu true, component sẽ bị disable
 */
export interface HnInputProps {
  id?: string
  label?: string
  errorMessage?: string
  placeholder?: string
  maxLength?: number
  withCount?: boolean
  disabled?: boolean
  modelValue?: string
}

const props = withDefaults(defineProps<HnInputProps>(), {
  id: undefined,
  label: undefined,
  errorMessage: undefined,
  placeholder: 'Please input',
  maxLength: 100,
  withCount: true,
  disabled: false,
  modelValue: ''
})

const emit = defineEmits<{
  (event: 'update:model-value', value: string): void
  (event: 'exceed-max-length', value: boolean): void
}>()

/**
 * Giá trị của input
 */
const value = computed({
  get: () => props.modelValue,
  set: value => emit('update:model-value', value)
})

/**
 * Id của input
 */
const useid = useId()
const internalId = computed(() => {
  if (props.id) {
    return props.id
  }

  return 'input-' + useid
})

/**
 * Danh sách class của component
 */
const classes = computed(() => {
  const classes: string[] = []

  if (props.errorMessage) {
    classes.push('error')
  }

  if (props.disabled) {
    classes.push('disabled')
  }

  return classes.join(' ')
})

watch(value, newValue => {
  emit('exceed-max-length', newValue.length > props.maxLength)
})
</script>
