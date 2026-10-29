<template>
    <svg :width="size" :height="size" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0 0H30V30H0V0ZM5 5H17V9H5V5ZM5 12H25V16H5V12ZM5 19H21V23H5V19Z" fill="#246B5D" />
    </svg>
</template>

<script setup>
defineProps({
    size: {
        type: [String, Number],
        default: 24
    }
});
</script>