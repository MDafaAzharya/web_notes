<template>
   <div>
      <div class="mt-8 p-5 rounded-full shadow-xl mx-10 bg-sky-100">
          <h1 class="title font-bold text-sky-400"> Dashboard </h1>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-1 gap-5 mx-10 my-5">
        <div class="text-sky-400 border-0 px-3 py-3 rounded-2xl bg-sky-100 shadow-xl">
            <div class="flex justify-start gap-3 mb-5">
                <Icon name="material-symbols:home-rounded" color="#fff" size="20" class="bg-sky-400 px-1 py-2 w-8 h-8 rounded-full"/>
                <h2 class="title text-xl font-bold "> Dashboard </h2>
            </div>
            <NuxtLink to="/dashboard" class="text-md font-medium italic underline underline-offset-1"> Go To Page </NuxtLink>
        </div>
        <div class="text-sky-400 border-0 px-3 py-3 rounded-2xl bg-sky-100 shadow-xl">
            <div class="flex justify-start gap-3 mb-5">
                <Icon name="material-symbols:edit-note-sharp" color="#fff" size="20" class="bg-sky-400 px-1 py-2 w-8 h-8 rounded-full"/>
                <h2 class="title text-xl font-bold "> Notes </h2>
            </div>
            <NuxtLink to="/dashboard/notes" class="text-md font-medium italic underline underline-offset-1"> Go To Page </NuxtLink>
        </div>
        <div class="text-sky-400 border-0 px-3 py-3 rounded-2xl bg-sky-100 shadow-xl">
            <div class="flex justify-start gap-3 mb-5">
                <Icon name="iconamoon:profile-fill" color="#fff" size="20" class="bg-sky-400 px-1 py-2 w-8 h-8 rounded-full"/>
                <h2 class="title text-xl font-bold "> Profile </h2>
            </div>
            <NuxtLink to="/dashboard/profile" class="text-md font-medium italic underline underline-offset-1"> Go To Page </NuxtLink>
        </div>
      </div>
   </div>
</template>

<script lang="ts" setup>
import "../../assets/css/index.css";
definePageMeta({
  layout: "dashboard",
});

</script>