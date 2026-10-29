<script>
export default {
    props: {
        foodName: String,
        foodDesc: String,
        isFavorite: Boolean
    },
    data() {
        return {
        }
    },
    methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite', this.foodName)
        }
    }
}

</script>
<template>
    <div v-on:click="countClicks">
        <h1>{{ foodName }}</h1>
        <p>{{ foodDesc }}</p>
        <img src="/img_quality.svg" v-show="isFavorite" />
        <button v-on:click="toggleFavorite">favorite</button>
    </div>
</template>

<style>
#red {
    font-weight: bold;
    color: rgb(144, 12, 12);
}

img {
    height: 1.5em;
    float: right;
}
</style>