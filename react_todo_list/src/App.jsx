import { useState } from 'react'

function App() {
  const [allTODOCounter, setAllTODOCounter] = useState(0);
  const [doneTODOCounter, setDoneTODOCounter] = useState(0);
  const [notDoneTODOCounter, setNotDoneTODOCounter] = useState(0);

  const handleTodoCheckbox = () => {

  }

  const [isModalOpen, setIsModalOpen] = useState(Boolean);

  const [todos, setTodos] = useState([]); // こんなイメージ {id: "hoge", name: "hoge"}
  const [newTODOName, setNewTODOName] = useState({});


  const handleTODOInput = (e) => {
    setNewTODOName(e.target.value)
    console.log(e.target.value)
  };

  const handleTODOs = () => {
    setTodos((prevTODOs) => {
      const randomID = crypto.randomUUID()
      const newTODO = {id: randomID, name: newTODOName}
      setNewTODOName("");
      return [...prevTODOs, newTODO]; // 更新関数内でゴニョニョする場合（単純に引数で更新するのではなくコールバック関数を与えて御にょった上で更新する場合）はreturn必須ね当然
    })
  }

  const handleEdit = (id) => {
    
  }

  const openDeleteModal = (TODOName) => {
    setIsModalOpen(true);
  }

  const handleDeleteModal = (todo) => {
    openDeleteModal(todo.name)
  }

  return (
    <>
      <h1>TODOアプリ</h1>

      <div className='counter-field'>
        <h2>TODOカウント</h2>
        <p>全てのタスク:{allTODOCounter}</p>
        <p >完了済み:{doneTODOCounter}</p>
        <p>未完了:{notDoneTODOCounter}</p>
      </div>

      <div className='todo-add-field'>
        <h2>TODO追加</h2>
        <input type="text" name='add-todo' value={newTODOName} onChange={handleTODOInput}/>
        <button onClick={handleTODOs}>追加</button>
      </div>

      <div className='todo-list'>
        <h2>TODO一覧</h2>
        {/* 配列の中身を描画 */}
        <ul>
          {todos.map((todo) => {
            return (
                <li key={todo.id}>
                  <p>{todo.name}</p>
                  <button onClick={() => handleEdit(todo)}>編集</button>
                  <button onClick={() => openDeleteModal(todo)}>削除</button>
                </li>
            )
          })}
        </ul>
      </div>

      {isModalOpen ? 
        <div>
          <p>本当に削除しますか?</p>
          <button onClick={deleteTODO}></button>
        </div>
      :""}
    </>
  )
}

export default App
