<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});
import "../assets/css/index.css";
import { useAuthStore } from "~/stores/auth";
import Swal from 'sweetalert2'

const authStore = useAuthStore();
const isLoading = ref(false);
const router = useRouter();

const register = ref([
  { name: "email", label: "Email", type: "email", value: "", placeholder: "name@company.com", required: true },
  { name: "password", label: "Password", type: "password", value: "", placeholder: "••••••••", required: true },
]);

const submitRegister = async () => {
  isLoading.value = true;
  const result: {[key: string]: string} = {};
  register.value.forEach((item) => {
    result[item.name] = item.value;
  });

  await authStore.register(result);

  if(!authStore.status){
    Swal.fire({
        title: 'Error',
        text: 'Incorrectly formatted password or email. Please try again.',
        icon: 'error',
      });
  }else{
    Swal.fire({
        title: "Success!",
        text: "Register Success!",
        icon: "success"
      });
      router.push(`/login`);
  }
}
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="title flex items-center mb-6 text-2xl font-bold text-sky-400 dark:text-white">
          <img class="w-8 h-8 mr-2" src="../assets/img/logo.png" alt="logo">
          Notes Web    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold text-center text-sky-400 md:text-2xl dark:text-white">
                  Register to your account
              </h1>
              <form @submit.prevent="submitRegister" class="space-y-4 md:space-y-6" >
                <div v-for="(item, index) in register" :key="index" class="mb-6">
                    <label :for="item.name" class="block mb-2 text-sm font-medium text-gray-900">{{ item.label }}</label>
                    <input 
                        :type="item.type"
                        :name="item.name"
                        :id="item.name"
                        v-model="item.value"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        :placeholder="item.placeholder" 
                        :required="item.required"
                    >
                </div>
                  <button type="submit" class="w-full text-white bg-sky-400 hover:opacity-70 hover:scale-90 duration-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    have an account yet? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</template>