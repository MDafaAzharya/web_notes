export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [] as any,
    status: false,
    message: "",
  }),
  actions: {
    async createNotes(payload: any) {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/notes", {
        baseURL: baseUrl,
        method: "POST",
        headers: {
          apikey: apikey,
          "Content-Type": "application/json",
          "prefer" : "return=minimal",
        },
        body: payload,
      });

      if (error.value) {
        this.status = false;
        this.message = "Get Products Failed !!!";
      } else if (data) {
        this.status = true;
        this.message = "Get Products successfully";
      }
    },
    async getAllNotes() {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/notes", {
        baseURL: baseUrl,
        method: "GET",
        headers: {
          apikey: apikey,
        },
      });

      if (error.value) {
        this.status = false;
        this.message = "Get Products Failed !!!";
      } else if (data) {
        this.status = true;
        this.message = "Get Products successfully";
        this.notes = data.value;
      }
    },
    async deleteNotes(id: string) {
      const { baseUrl, apikey } = useAppConfig();
      const url = `/rest/v1/notes?id=eq.${id}`; 
      const { data, error } = await useFetch(url, {
        baseURL: baseUrl,
        method: "DELETE",
        headers: {
          apikey: apikey,
        },
      });

      if (error.value) {
        this.status = false;
        this.message = "Get Products Failed !!!";
      } else if (data) {
        this.status = true;
        this.message = "Get Products successfully";
        this.notes = data.value;
      }
    },
  },
});


