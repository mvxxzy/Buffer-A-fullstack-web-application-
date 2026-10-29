<script setup>
import { useMonitorSize } from './composable/monitor-size';
const sizes = useMonitorSize()
</script>

<template>
  <RouterView />
</template>

<style>
body {
  background-color: #FFFDF9;
  margin: 0;
}
</style>
