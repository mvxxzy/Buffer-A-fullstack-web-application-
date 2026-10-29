<template>
    <CDatePicker v-model:date="vDate" locale="en-US" />
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { ref } from 'vue'
const vDate = ref(new Date())
</script>