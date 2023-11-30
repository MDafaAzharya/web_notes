<script lang="ts" setup>
import "../../assets/css/index.css";
import { useNotesStore } from '~/stores/notes';
import { useRouter, useRoute } from 'vue-router';
import Swal from 'sweetalert2'

const router = useRouter();
const route = useRoute();
const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);
const form = ref({
  name: "",
  date: "",
  text: "",
});
const createNotes = async () => {
  const newNotesData = {
    title: form.value.name,
    create: form.value.date,
    text: form.value.text,
    // Add other properties if needed
  };

  try {
    await notesStore.createNotes(newNotesData);

    if (notesStore.status) {
      // Success
      Swal.fire({
        title: "Success!",
        text: "Click for view the result!",
        icon: "success"
      });

      router.push(`/dashboard/notes`);
    } else {
      // Failure
      Swal.fire({
        title: 'Error',
        text: 'Failed to delete the note. Please try again.',
        icon: 'error',
      });
    }
  } catch (error) {
    // Error
    Swal.fire({
        title: 'Error',
        text: 'Failed to delete the note. Please try again.',
        icon: 'error',
      });
  }
};
</script>

<template>
  <div>
   
    <form @submit.prevent="createNotes"
      class="md:w-full md:max-w-lg shadow-lg p-10 mx-5 md:mx-auto my-10 md:my-20 border-t-8 border-sky-400 rounded-lg"
    >
      <div class="mb-5"><h1 class="title text-2xl font-semibold text-sky-400 text-center">Create Notes</h1></div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Judul
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="title"
            type="text"
            placeholder="Title"
            v-model="form.name"
            required="true"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Tanggal
          </label>
          <input
            type="date"
            id="date"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="form.date"
            required="true"          
            />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Catatan
          </label>
          <textarea
            id="text"
            cols="30"
            rows="5"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="form.text"
            required="true"          
            ></textarea>
        </div>
      </div>
      <div>
        <button
            type="submit"
          class="bg-sky-400 flex md:ms-auto mx-auto md:mx-0 py-2 px-28 md:px-5 rounded-xl text-white font-medium hover:scale-110 hover:opacity-80 duration-200"
        >
          Tambah Catatan
        </button>
      </div>
    </form>
  </div>
</template>
