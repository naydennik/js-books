import config from "@/config/config";

const getAuthtoken = () => sessionStorage.getItem("authtoken");

export const booksServices = {
  data() {
    return {
      books: [],
      book: [],
    };
  },
  methods: {
    getAllBooks() {
      return this.$http
        .get(`appdata/${config.kinveyAppKey}/books`)
        .then(({ data }) => (this.books = data));
    },

    getBookDetails(id) {
      return this.$http
        .get(`appdata/${config.kinveyAppKey}/books/${id}`)
        .then(({ data }) => (this.book = data));
    },

    editBook(id, data) {
      return this.$http.put(`appdata/${config.kinveyAppKey}/books/${id}`, data);
    },

    createBook(data) {
      return this.$http.post(`appdata/${config.kinveyAppKey}/books`, data);
    },

    deleteBook(id) {
      return this.$http.delete(`appdata/${config.kinveyAppKey}/books/${id}`);
    },
  },
  created() {
    this.$http.defaults.headers["Authorization"] = `Kinvey ${getAuthtoken()}`;
  },
};
