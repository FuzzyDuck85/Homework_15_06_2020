import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [

      ],
      newTask: "",
    },
    methods: {
      saveNewTask: function(newtask){
// console.log(newtask);
        this.tasks.push({
          name: this.newTask,
          isCompleted: false,
          // priority: newtask.default.radio1
        });
        this.newTask = ""
      },
      completeTask: function(index){
        this.tasks[index].isCompleted = true;
      }
    }
  });
});
