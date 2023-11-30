<template>
    <div class="flex justify-center my-10 md:my-20">
      <div class="w-96 px-6 py-6  text-center bg-sky-400 rounded-lg lg:mt-0 xl:px-10 shadow-xl">
        <div class="space-y-4 xl:space-y-6">
            <img class="mx-auto rounded-full h-36 w-36" src="../../assets/img/profile.png" alt="author avatar">
            <div class="space-y-2">
                <div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                    <h3 class="title text-white font-bold text-2xl">John Doe</h3>
                    <p class="title text-white font-normal ">Web Developer</p>
                </div>
            </div>
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