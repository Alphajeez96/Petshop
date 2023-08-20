<template>
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="{ transform: isOpen }"
  >
    <g clip-path="url(#clip0_7916_792)">
      <path
        d="M16.59 8.95605L12 13.5361L7.41 8.95605L6 10.3661L12 16.3661L18 10.3661L16.59 8.95605Z"
        :fill="fill"
      />
    </g>
    <defs>
      <clipPath id="clip0_7916_792">
        <rect width="24" height="24" :fill="fill" transform="translate(0 0.366211)" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
export interface Dropdown {
  isOpen: boolean
  fill?: string
}

withDefaults(defineProps<Dropdown>(), {
  isOpen: false,
  fill: 'white'
})
</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
  transform: rotateX(0deg);
  transition: transform 0.5s ease-in-out;

  &.transform {
    transform: rotateX(180deg);
  }
}
</style>
