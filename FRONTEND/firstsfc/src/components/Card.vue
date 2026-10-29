<script setup>
import { useMonitorSize } from '@/composable/monitor-size';

const sizes = useMonitorSize()

const isMobile = sizes.isMobile.value
</script>

<template>
    <div class="card" :style="{ padding: isMobile ? '0px' : '' }">
        <slot />
    </div>
</template>

<style>
.card {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: auto;
    height: auto;
    border-radius: 14px;
    padding: 24px;
    border: 1px solid #DBE1D8;
}
</style>