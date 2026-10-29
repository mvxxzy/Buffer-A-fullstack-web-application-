<script></script>

<template>
  <button class="btns" type="submit">
    <slot />
  </button>
</template>

<style scoped>
.btns {
  width: fit-content;
  padding: 11px 16px 11px 16px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid #dbe1d8;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #fffdf9;
  color: #263a33;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 300;
  cursor: pointer;
}
</style>
