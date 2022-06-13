<template>
  <template v-if="visible">
    <div class="bubble-dialog-overlay"></div>
    <div class="bubble-dialog-wrapper">
      <div class="bubble-dialog">
        <header>标题</header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button>ok</Button>
          <Button>cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
    },
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.bubble-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
}
</style>