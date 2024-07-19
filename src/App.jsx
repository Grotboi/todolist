import { useState, useEffect } from 'react'
import './App.css'
import img from './free-icon-bin-484611 (1).png'

//[{ text:'Text Array'}]
function App() {

  const [state, setState] = useState(JSON.parse(localStorage.getItem('save')) || [{text: 'Тренеровка 5:30'}])

  const onClickAdd = () => {
    const text = prompt('Добавить Задачу');
    setState([...state, {text}]);
    localStorage.setItem('save', JSON.stringify([...state, {text}]));
  
  }

  const onClickEdit = (index) => {
const text = prompt('Изменить Задачу');
setState(
  state.map((obj, i) => {
    if(index === i) {
      obj.text = text;
    }
    localStorage.setItem('save', JSON.stringify([...state, {text}]));
    return obj;
  })
)
  }


  const onClickRemove = (index) => {
setState(state.filter((_, i) => i
!== index))
localStorage.removeItem('save', JSON.stringify( ...state));
  }

  return (
     <div>

<h1>Список дел</h1>
      <ul>

        {state.map((task, i) => 
        <li key={i}>
          {task.text}

          <button onClick={ () =>
          onClickEdit(i)}>Изменить</button>

          <button onClick={ () =>
          onClickRemove(i)}><img src={img} /></button>
        </li>
        )}

      </ul>

      <button onClick={
          onClickAdd}>Добавить</button>

     </div>
  )
}

export default App