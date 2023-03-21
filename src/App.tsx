import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyInput from './input'
import { Form } from 'reactstrap'
import Button from './button'

function App() {
  const [inputValue, setInputValue] = useState({ phone: "", password: "" });
  const { phone, password } = inputValue;

  const handleChange = useCallback((inputValue:any) => {
    setInputValue({ phone: inputValue, password: inputValue });
    console.log(inputValue.phone);
  },[phone, password])

  const InputPhone = useMemo(() =>{
    return (
        <MyInput
          type="text"
          value={phone}
          label="Phone"
          onChange={handleChange}
        />
    )
  },[])

  const InputPassWord = useMemo(() =>{
    return (
      <MyInput
      type="text"
      value={password}
      label="Password"
      onChange={handleChange}
    />
    )
  },[])

  return (
    <div className="App">
      <Form>
      {InputPhone}
      {InputPassWord}
      
      <Button primary label="Login"/>
    </Form>
    </div>
  )
}

export default App
