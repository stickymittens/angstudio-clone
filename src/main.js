import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia"; // Import Pinia

const app = createApp(App);

app.use(router); // Use the router if set up
app.use(createPinia()); // Initialize Pinia for state management

app.mount("#app");
