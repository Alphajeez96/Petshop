<template>
  <button class="remove-button" @click="$emit('click')" :style="{ height: height }">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_7916_2242)">
        <path
          d="M18.9417 18.9419L2.30833 2.30859L1.66667 1.66693L1.05833 1.05859L0 2.11693L3.65833 5.77526L5.5 9.65859L4.375 11.7003C4.24167 11.9336 4.16667 12.2086 4.16667 12.5003C4.16667 13.4169 4.91667 14.1669 5.83333 14.1669H12.05L13.2 15.3169C12.7833 15.6169 12.5083 16.1086 12.5083 16.6669C12.5083 17.5836 13.25 18.3336 14.1667 18.3336C14.725 18.3336 15.2167 18.0586 15.5167 17.6336L17.8833 20.0003L18.9417 18.9419ZM6.18333 12.5003C6.06667 12.5003 5.975 12.4086 5.975 12.2919L6 12.1919L6.75 10.8336H8.71667L10.3833 12.5003H6.18333ZM12.9583 10.8336C13.5833 10.8336 14.1333 10.4919 14.4167 9.97526L17.4 4.56693C17.4667 4.45026 17.5 4.30859 17.5 4.16693C17.5 3.70859 17.125 3.33359 16.6667 3.33359H5.45L12.9583 10.8336ZM5.83333 15.0003C4.91667 15.0003 4.175 15.7503 4.175 16.6669C4.175 17.5836 4.91667 18.3336 5.83333 18.3336C6.75 18.3336 7.5 17.5836 7.5 16.6669C7.5 15.7503 6.75 15.0003 5.83333 15.0003Z"
          fill="#F09E00"
        />
      </g>
      <defs>
        <clipPath id="clip0_7916_2242">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

    <span class="ml-2">remove from cart</span>
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
withDefaults(defineProps<{ height?: string }>(), {
  height: '36px'
})
</script>

<style lang="scss" scoped>
.remove-button {
  @apply flex items-center justify-center text-[#F09E00] border border-[#f09e0080] uppercase text-sm font-medium rounded px-3;
}
</style>
