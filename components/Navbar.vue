<script lang="ts">
import "../assets/css/index.css";
</script>
<template>
    <!-- Navbar -->
    <nav
      class="top-0 left-0 w-full z-10 bg-sky-400 md:flex-row md:flex-nowrap md:justify-start  items-center p-4 shadow-lg hidden md:block"
    >
      <div
        class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
      >
        <!-- Brand -->
        <a
          class="title text-white text-lg  hidden lg:inline-block font-bold"
          href="javascript:void(0)"
        >
          Welcome Name
        </a>
        <!-- Form -->
        <div>
            <NuxtLink to="/dashboard/profile"><img src="../assets/img/profile.png" alt="" width="40"></NuxtLink>
        </div>
        <!-- User -->
      </div>
    </nav>
    <!-- End Navbar -->
  </template>
  
 
  