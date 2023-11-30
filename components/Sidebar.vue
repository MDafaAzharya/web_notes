<script lang="ts" setup>
import "../assets/css/index.css";
import { useAuthStore } from "~/stores/auth";
import Swal from 'sweetalert2';
const authStore = useAuthStore();
const isAuthenticated = ref();
const router = useRouter();

isAuthenticated.value = useCookie("access_token").value;
const logout = async () => {
  // Show a confirmation SweetAlert before logging out
  const confirmLogout = await Swal.fire({
    title: 'Are you sure you want to log out?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: ' #FF0000',
    cancelButtonColor: '#38bdf8',
    confirmButtonText: 'Yes, log out',
    cancelButtonText: 'Cancel',
  });

  // If the user confirms the logout, proceed with the logout process
  if (confirmLogout.isConfirmed) {
    try {
      await authStore.logout();
      const accessToken = useCookie("access_token");
      const refreshToken = useCookie("refresh_token");
      accessToken.value = null;
      refreshToken.value = null;

      setTimeout(() => {
        isAuthenticated.value = useCookie("access_token").value;
      }, 100);

      router.push({
        path: "/",
      });

      // Show success message after successful logout
      Swal.fire({
        icon: 'success',
        title: 'Logged out successfully',
      });
    } catch (error) {
      // Show error message if the logout fails
      Swal.fire({
        icon: 'error',
        title: 'Error logging out',
      });
    }
  }
};

const collapseShow = ref("hidden");

const toggleCollapseShow = (classes: string) => {
  collapseShow.value = classes;
};

const isActive = (path: string) => {
  const route = useRoute();
  return route.path === path;
};
</script>

<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-2xl bg-sky-400 md:bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <button
        class="cursor-pointer text-white md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <Icon name="ci:hamburger-md" size="35" color="#fff" />
      </button>
      <!-- Brand -->
      <NuxtLink
        class="title md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-lg font-bold p-4 px-0 text-white md:text-sky-400"
        to="/dashboard"
      >
        <Icon name="material-symbols:add-notes" size="30" color="#38bdf8" /> Web
        Notes
      </NuxtLink>
      <!-- User -->
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <NuxtLink
                class="title md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-xl font-bold p-4 px-0 text-sky-400 md:text-sky-400"
                to="/dashboard"
              >
                <Icon
                  name="material-symbols:add-notes"
                  size="30"
                  color="#38bdf8"
                />
                Web Notes
              </NuxtLink>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <Icon name="maki:cross" size="35" color="#38bdf8" />
              </button>
            </div>
          </div>
        </div>

        <!-- Heading -->
        <h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          List Pages
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li
            class="text-sm py-3 font-bold block hover:translate-x-2 duration-300"
            :class="[
              isActive('/dashboard')
                ? 'bg-sky-200 rounded-xl pl-2 text-sky-500'
                : 'items-center hover:bg-sky-200 rounded-xl duration-300',
            ]"
          >
            <NuxtLink to="/dashboard" exact>
              <Icon
                name="material-symbols:home-rounded"
                size="30"
                color="#38bdf8"
              />
              Dashboard
            </NuxtLink>
          </li>

          <li
            class="text-sm py-3 font-bold block hover:translate-x-2 duration-300"
            :class="[
              isActive('/dashboard/notes')
                ? 'bg-sky-200 rounded-xl pl-2 text-sky-500'
                : 'items-center hover:bg-sky-200 rounded-xl duration-300',
            ]"
          >
            <NuxtLink to="/dashboard/notes">
              <Icon
                name="material-symbols:edit-note-sharp"
                size="30"
                color="#38bdf8"
              />
              Notes
            </NuxtLink>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Authentication
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li
            class="text-sm py-3 font-bold block hover:translate-x-2 duration-300"
            :class="[
              isActive('/dashboard/profile')
                ? 'bg-sky-200 rounded-xl pl-2 text-sky-500'
                : 'items-center hover:bg-sky-200 rounded-xl duration-300',
            ]"
          >
            <NuxtLink to="/dashboard/profile">
              <Icon name="iconamoon:profile-fill" size="30" color="#38bdf8" />
              Profile
            </NuxtLink>
          </li>

          <li class="items-center hover:bg-red-200 rounded-xl duration-300">
            <button @click="logout" class="text-red-500 text-sm py-3 font-bold block hover:translate-x-2 duration-300">
              <Icon name="heroicons-outline:logout" size="30" color="#FF0000" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

