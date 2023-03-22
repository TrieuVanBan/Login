import { SetStateAction, useCallback, useMemo, useState } from "react";
import "./App.css";
import MyInput from "./input";
import Button from "./button";
import axios from "axios";

function App() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [vali, setVali] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(phone, password);
    //check
    axios.get("http://localhost:3000/users").then((res) => {
      const string = "";
      if (string.trim() == "" || string.trim() == null) {
        console.log("False");
        setVali(false);
      }
      const validUser = res.data.find(
        (item: any) => item.phone == phone && item.password == password
      );
      console.log(validUser);

      console.log("is valid user = ", validUser ? "true" : "false");
    });
  };

  const InputPhone = useMemo(() => {
    return (
      <MyInput
        type="text"
        value={phone}
        label="Phone"
        name="phone"
        onChange={(e: any) => setPhone(e)}
      />
    );
  }, []);

  const InputPassWord = useMemo(() => {
    return (
      <MyInput
        type="text"
        name="password"
        value={password}
        label="Password"
        onChange={(e: any) => setPassword(e)}
      />
    );
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {InputPhone}
        <p>{vali ? "" : "K de trong"}</p>
        {InputPassWord}
        <Button primary label="Login" />
      </form>
    </div>
  );
}

export default App;
