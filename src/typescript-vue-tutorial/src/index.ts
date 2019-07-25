// src/index.ts

import Vue from "vue";
import Demo1 from './components/demo1'
import Demo2 from './components/demo2.vue'
import Demo3 from './components/demo3.vue'
let v = new Vue({
    el: "#app",
    template: `
    <div>
        <div>Hello {{name}}!</div>
        <div>demo1:</div>
        <demo1 :name="name" :initialEnthusiasm="5"></demo1>
        <div>demo2:</div>
        <demo2 :name="name" :initialEnthusiasm="5"></demo2>
        <div>demo3:</div>
        <demo3 :name="name" :initialEnthusiasm="5"></demo3>
    </div>`,
    data: {
        name: "World"
    },
    components: {
        Demo1,
        Demo2,
        Demo3
    }
});