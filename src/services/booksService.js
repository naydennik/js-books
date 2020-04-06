import config from "@/config/config";

const getAuthtoken = () => sessionStorage.getItem("authtoken");

export const booksServices = {
  data() {
    return {
      books: []
    };
  },
  created() {
    this.$http.defaults.headers["Authorization"] = `Kinvey ${getAuthtoken()}`;
    this.$http
      .get(`appdata/${config.kinveyAppKey}/books`)
      .then(({ data }) => (this.books = data));
  }
};
