import { SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import MyInput from "./input";
import Button from "./button";
import axios from "axios";

function App() {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValidation, setisValidation] = useState({
    phone: '',
    password: ''
  });

  function isPhone(number: string) {
    return /^0+[3,5,7,8,9]{1}[0-9]{1}[1-9]{1}[0-9]{6}$/.test(number);
  }

  const isValid = () => {

    let isValid = true;
    let errors = { ...isValidation };
    // const phoneRegex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

    if (phone.trim() == '') {
      errors.phone = 'Số điện thoại không để trống !';
      console.log("Số điện thoại không để trống !");
    } else if (!isPhone(phone)) {
      errors.phone = 'Số điện thoại không đúng định dạng !';
    } else {
      errors.phone = '';
      console.log("Không lỗi số điện thoại");
    }

    if (password.trim() == '') {
      errors.password = 'Mật khẩu không để trống !';
      console.log("Mật khẩu không để trống !");
    } else if (password.length < 8) {
      errors.password = 'Mật khẩu ít nhất 8 kí tự';
    } else {
      errors.password = '';
      console.log("Không lỗi");
    }

    setisValidation(errors);
    return isValid;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isValid()) {
      axios.get("http://localhost:4000/users")
        .then((res) => {
          const isValidUser = res.data.find(
            (item: any) => {
              return item.phone == phone && item.password == password
            }
      );
          isValidUser ? alert("Đăng nhập thành công") : alert("Tài khoản hoặc mật khẩu không chính xác");
          ;
    });
    }
  };


  const onChange = useCallback(({ value, name }: { value: string, name: string }) => {
    switch (name) {
      case 'phone':
        setPhone(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }

  }, [])

  const InputPhone = useMemo(() => {
    return (
      <MyInput
        type="text"
        value={phone}
        label="Phone"
        name="phone"
        onChange={onChange}
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
        onChange={onChange}
      />
    );
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {InputPhone}
        {isValidation.phone && <span style={{ color: "red", fontSize: "14px" }}>{isValidation.phone}</span>}
        {InputPassWord}
        {isValidation.password && <span style={{ color: "red", fontSize: "14px", display: "block" }}>{isValidation.password}</span>}
        <Button primary label="Login" />
      </form>
    </div>
  );
}

export default App;
