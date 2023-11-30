<template>
    <div>
      <Sidebar />
      <div class="relative md:ml-64 bg-blueGray-100">
        <Navbar />
          <slot />
          <End/>
        </div>
    </div>
  </template>