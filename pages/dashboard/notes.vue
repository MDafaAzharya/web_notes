<script lang="ts" setup>
import { useNotesStore } from "~/stores/notes";
import "../../assets/css/index.css";

const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);
notesStore.getAllNotes();

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
    <div>
       <div class="mt-8 p-5 rounded-full shadow-xl mx-10 bg-sky-100">
           <h1 class="title font-bold text-sky-400"> Dashboard> Notes </h1>
       </div>
       <div class="my-5 mx-10">
          <div class="">
            <NuxtLink to="/note/create" class="bg-sky-400 flex mx-auto md:mx-0 py-3 px-5 md:px-5 w-36 rounded-xl text-white font-medium hover:scale-110 hover:opacity-80 duration-200"> 
              Buat Catatan </NuxtLink>          
          </div>
       </div>    
       <div class="mx-10 my-5">
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <template v-for="(note, index) in notes" :key="index" >
              <CardsCardNotes :note="note"/>
            </template>
          </div>
        </div>
    </div>
</template>
 
