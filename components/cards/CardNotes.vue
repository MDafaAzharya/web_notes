<script lang="ts" setup>

const props = defineProps({
note: {
type: Object,
default: {},
}
});

import { ref } from 'vue';
import {useNotesStore} from "~/stores/notes";
import Swal from 'sweetalert2'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const notesStore = useNotesStore();
const fullText = ref(props.note.text);
const truncatedText = ref(props.note.text.slice(0, 100));
const isFullTextVisible = ref(false);

const toggleTextVisibility = () => {
  isFullTextVisible.value = !isFullTextVisible.value;
};

const displayText = computed(() => {
  return isFullTextVisible.value ? fullText.value : truncatedText.value;
});

const deleteNote = async () => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true,
  });
  if (result.isConfirmed) {
    try {
      await notesStore.deleteNotes(props.note.id);
     Swal.fire({
        title: 'Deleted!',
        text: 'Your note has been deleted.',
        icon: 'success',
      });
      router.push(`/dashboard/notes`);
      notesStore.getAllNotes();
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Failed to delete the note. Please try again.',
        icon: 'error',
      });
    }
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire({
      title: 'Cancelled',
      text: 'Your note is safe :)',
      icon: 'info',
    });

  }
};
</script>

<template>
        <div class="shadow-xl rounded-lg px-5 py-3 border-t-8 border-sky-400">
        <h1 class="title text-sky-400 font-semibold text-xl hidden">  {{props.note.id }} </h1>
        <h1 class="title text-sky-400 font-semibold text-xl">  {{props.note.title }} </h1>
        <div class="text-container">
          <p class="text-sky-900 font-normal mt-2 text-md">{{ displayText }}</p>
          <button @click="toggleTextVisibility" class="underline underline-offset-1 italic text-sm text-blue-600">
            {{ isFullTextVisible ? 'Tutup' : 'Lihat Selengkapnya' }}
          </button>
        </div>
        <h2 class="text-sky-400 font-medium text-lg mt-5 italic">  {{props.note.create }}</h2>
        <div class="flex justify-end gap-2">
            <NuxtLink :to="`/note/edit/${props.note.id}`"><Icon name="basil:edit-outline" size="30" color="#fff" class="bg-green-400 p-2 rounded-full w-9 h-9 hover:opacity-90" /></NuxtLink>
            <button @click="deleteNote"><Icon name="fluent:delete-28-filled" size="30" color="#fff" class="bg-red-500 p-2 rounded-full w-9 h-9 hover:opacity-90"/></button>
        </div>
        </div>
</template>
