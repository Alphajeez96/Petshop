<template>
  <section class="app__container">
    <HeroSlider />
    <CategoryDisplay />

    <!-- Treat your pup section -->
    <div class="flex mt-28">
      <div class="w-3/5">
        <img src="@/assets/images/puppy.png" alt="puppy" />
      </div>

      <div class="self-center ml-auto">
        <h2 class="text-primary-green text-6xl font-light">Treat your pup</h2>

        <div class="mt-6">
          <Button id="pup-button" classes="h-10 px-4">
            <span class="text-xl font-medium underline">Discover our dog treat selection</span>
          </Button>
        </div>
      </div>
    </div>

    <CategoryDisplay />

    <!--Best Bits section -->
    <div class="flex my-28">
      <div class="self-center w-[52%]">
        <h2 class="text-primary-green text-6xl font-light">Get the best tips</h2>

        <div class="mt-6">
          <Button id="pup-button" classes="h-10 px-4">
            <span class="text-xl font-medium underline">Read our blog</span>
          </Button>
        </div>
      </div>

      <div class="ml-auto">
        <img src="@/assets/images/pets.png" alt="pets" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroSlider from '@/widgets/Home/HeroSlider.vue'
import CategoryDisplay from '@/widgets/Home/CategoryDisplay.vue'
import Button from '@/components/Button/index.vue'
</script>
