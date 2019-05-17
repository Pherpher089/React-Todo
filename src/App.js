import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
import './components/TodoComponents/Todo.css';
const toDos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  constructor(){
    super();
    this.state = {
      todoList: toDos,
      task: '',
      id:'',
      complete: false
    }
  }

  changeHandler = event => {
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  };

  submit = event =>{
    console.log('Submit');
    event.preventDefault();
    //stoping empty submitions
    if(this.state.task === '')
    {
      return;
    }
    let newTask = {
      task: this.state.task,
      id: Date.now(),
      complete: false
    }

    this.setState({
      todoList: [...this.state.todoList, newTask],
      task:'',
      id:'',
      complete:false

    });
  }

  clear = event =>{
    event.preventDefault;
    const newArray = this.state.todoList.filter(item => item.complete === false);
    this.setState({todoList: newArray});
  }

  completeTodo = id =>{
    console.log('Am being called');
    const newTodoArray = this.state.todoList.map(item => {
      if(item.id === id){
        return { ...item, complete: !item.complete}
      }
      return item;
    });

    console.log(newTodoArray);
    this.setState({todoList: newTodoArray});
  }

  render() {
    return (
      <div className="app">
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            changeHandler = {this.changeHandler}
            name = {this.state.name}  
            task = {this.state.task}
            submit = {this.submit}
            clear = {this.clear}
          />
        </div>
        <TodoList todoList = {this.state.todoList} completeTodo={this.completeTodo} 
        id={this.id}/>
      </div>
    );
  }
}

export default App;
