<script setup>
definePageMeta({
  layout: "dashboard",
});  

import { ref, onMounted } from 'vue';
import { useNotesStore } from '~/stores/notes';
import { useRouter, useRoute } from 'vue-router';
import Swal from 'sweetalert2'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://hycxpprqqihhtzmrcvnq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5Y3hwcHJxcWloaHR6bXJjdm5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMzI2NTksImV4cCI6MjAxNjcwODY1OX0.qpEES7ovy2Az64g94D__eitv4ydaXhSlixKosA4NIyw')
const note = ref({})
const notesStore = useNotesStore();
const router = useRouter();
const route = useRoute();
const noteId = ref(route.params.id);
console.log(noteId.value);

const form = ref({
  name: '',
  date: '',
  text: '',
});

const getDataNote = async (idNote) => {
  const { data } = await supabase.from("notes").select().eq("id", idNote);
  note.value = data[0];
};

const editNote = async () => {
  try {
    await supabase
      .from("notes")
      .update({
        title: note.value.title,
        text: note.value.text,
        create: note.value.create,
      })
      .eq("id", note.value.id);

    // Show success message
    Swal.fire({
        title: "Success!",
        text: "Click for view the result!",
        icon: "success"
      });

    router.push({ path: "/dashboard/notes" });
  } catch (error) {
    console.error(error.message);

    // Show error message
    Swal.fire({
        title: 'Error',
        text: 'Failed to delete the note. Please try again.',
        icon: 'error',
      });
  }
};

onMounted(() => {
  const idNote = route.params.id;
  getDataNote(idNote);
});
</script>
<template>
   <div>
    <form
      @submit.prevent="editNote"
      class="md:w-full md:max-w-lg shadow-lg p-10 mx-5 md:mx-auto my-10 md:my-20 border-t-8 border-sky-400 rounded-lg"
    >
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
            id="grid-first-name"
            type="text"
            placeholder="Title"
            v-model="note.title"          
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
            name=""
            id=""
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="note.create"                    
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
            name=""
            id=""
            cols="30"
            rows="5"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="note.text"          
            ></textarea>
        </div>
      </div>
      <div>
        <button
        type="submit"
          class="bg-sky-400 flex md:ms-auto mx-auto md:mx-0 py-2 px-28 md:px-5 rounded-xl text-white font-medium hover:scale-110 hover:opacity-80 duration-200"
        >
          Save Perubahan
        </button>
      </div>
    </form>
  </div>
  </template>