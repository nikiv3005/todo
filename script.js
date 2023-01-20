class TodoController {
  constructor() {
      this.todos = [{
              name: 'example1',
          },
          {
              name: 'example2',
          },

      ];
  }
  init() {
      this.updateTodos();
      this.createAddButtonListener();
  }

  updateTodos() { // <---- full render!!
    var render = Handlebars.compile(document.getElementById('todo-list-template').innerHTML);
    var html = render(this.todos);
    document.getElementById('todos').innerHTML = html; // <--- DOM Destroyed
    
    this.createTodoListeners();
  }

  toggleDoneItem(todo) {
      return () => {
          console.log('closing item');
          todo.done = !todo.done;
          this.updateTodos(); // <---- force re-render
      }
  }

  createAddButtonListener() {
      document.getElementById('add-button').addEventListener('click', () => {
          var newTodoName = document.getElementById('todo-name').value;
          this.todos.push({
              name: newTodoName,
          });
          this.updateTodos(); // <--- force re-render
      });
  }

  createTodoListeners() {
      this.todos.forEach((todo, index) => {
          document.getElementById('done-item-' + index).addEventListener(
            'click', this.toggleDoneItem(todo));
          
          document.getElementById('todo-item-' + index)
            .getElementsByClassName('name')[0].addEventListener(
            'click', (event) => {

            //   event.target.parentNode.getElementsByClassName('description')[0]
            //     .classList.toggle('hidden');

          })
      });
  }

}
var todocontroller = new TodoController();
