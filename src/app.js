import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      title: "ToDo's",
      tasks: [

      ],
      newTask: {
        name: "",
        priority: null
      },
    },
    methods: {
      saveNewTask: function(){
        this.tasks.push(this.newTask);
        this.newTask = {
          name: "",
          priority: null
        // },
        // completeTask: function(index){
        //   this.tasks[index].isCompleted = true;
        };
      },
    }
  });
});
