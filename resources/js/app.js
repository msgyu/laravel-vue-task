require("./bootstrap");

import VueRouter from "vue-router";
import HeaderComponent from "./components/HeaderComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";

window.Vue = require("vue");
Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/tasks",
            name: "task.list",
            component: TaskListComponent
        },
        {
            path: "/tasks/:taskId",
            name: "task.show",
            component: TaskShowComponent,
            props: true
        }
    ]
});

Vue.component("header-component", HeaderComponent);

const app = new Vue({
    el: "#app",
    router
});
