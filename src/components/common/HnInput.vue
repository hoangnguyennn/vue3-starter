<template>
  <v-text-field
    v-model="value"
    :label="label"
    :placeholder="placeholder"
    :error-messages="errorMessage"
  />
</template>

<script setup lang="ts">
import { RuleExpression, useField } from 'vee-validate'
import { computed } from 'vue'

interface HnInputProps {
  name: string
  label?: string
  placeholder?: string
  rules?: RuleExpression<string>
}

const props = withDefaults(defineProps<HnInputProps>(), {
  label: undefined,
  placeholder: undefined,
  rules: undefined
})

// Tạo computed để xử lý trường hợp rules động
const rules = computed(() => props.rules)

// Field
const { value, errorMessage } = useField(props.name, rules, {
  syncVModel: true
})
</script>
