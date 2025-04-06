import { useState } from "react"

export default function LoginForm1() {
  const [data, setData] = useState({ username: "", password: "" })

  // действия при нажатии submit
  function handleFormSubmit(event) {
    event.preventDefault() // Чтобы не вызывать обновления страницы при submit

    console.log(data)
    alert(JSON.stringify(data))
  }

  // Функция обноваления объекта
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value }) // перезаписываем нужное свойство объекта через синтаксис создания свойства [], передавая название  name
  }

  return (
    <>
      <h1>Login Form</h1>

      {/* Указываем что надо вызывать при нажатии submit */}
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username} // Отображение актуального значения на странице
            onChange={(e) => handleInputChange(e, "username")} // вызываем функцию для обновления свойства в объекте data
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password} // Отображение актуального значения на странице
            onChange={(e) => handleInputChange(e, "password")} // вызываем функцию для обновления свойства в объекте data
          />
        </label>

        {/* Submit button привязанная к form */}
        <button type="submit">Login</button>
      </form>
    </>
  )
}
