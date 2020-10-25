require("./bootstrap");

import HeaderComponent from "./components/HeaderComponent";
import TaskListComponent from "./components/TaskListComponent";

window.Vue = require("vue");
Vue.use(VueRouter);


Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.component("header-component", HeaderComponent);
Vue.component("body-component", TaskListComponent);


const app = new Vue({
    el: "#app"
});
