<template>
  <div class="div">
    <input
      v-model="myVal"
      class="div__in"
      :type="type"
      :placeholder="placeholder"
    />
    <span> {{ errors[0] }} </span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const textFieldRef = ref(null);
const props = defineProps({
  value: {
    type: String,
  },

  type: {
    type: String,
  },

  placeholder: {
    type: String,
  },

  errors: {
    type: Array,
  },
});

const myVal = computed({
  get() {
    return textFieldRef.value;
  },
  set(val) {
    textFieldRef.value = val;
  },
});
</script>

<style lang="scss">
.div {
  &__in {
    color: yellow;
  }
}
</style>
