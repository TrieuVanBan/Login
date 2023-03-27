import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";
import MyInput from "./input";
import Button from "./button";
import axios from "axios";

function App() {
  // const [phone, setPhone] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [isValidation, setisValidation] = useState({
  //   phone: '',
  //   password: ''
  // });
  const refPhone = useRef(null);
  const refPassword = useRef(null);

  function isPhone(number: string) {
    return /^0+[3,5,7,8,9]{1}[0-9]{1}[1-9]{1}[0-9]{6}$/.test(number);
  }

  const isValid = () => {
    let isValid = true;
    let errors = { phone: "", password: "" };

    const phone = refPhone.current?.getValue();
    const password = refPhone.current?.getValue();

    if (phone.trim() == "") {
      errors.phone = "Số điện thoại không để trống !";
      console.log("Số điện thoại không để trống !");
    } else if (!isPhone(phone)) {
      errors.phone = "Số điện thoại không đúng định dạng !";
    } else {
      errors.phone = "";
      console.log("Không lỗi số điện thoại");
    }

    if (password.trim() == "") {
      errors.password = "Mật khẩu không để trống !";
      console.log("Mật khẩu không để trống !");
    } else if (password.length < 8) {
      errors.password = "Mật khẩu ít nhất 8 kí tự";
    } else {
      errors.password = "";
      console.log("Không lỗi");
    }

    // setisValidation(errors);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    refPhone.current?.getValue();
    refPassword.current?.getValue();
    console.log("Value Phone: ", refPhone.current.getValue());
    console.log("Value Pass: ", refPassword.current.getValue());

    if (isValid()) {
      //   axios.get("http://localhost:4000/users")
      //     .then((res) => {
      //       const isValidUser = res.data.find(
      //         (item: any) => {
      //           return item.phone == phone && item.password == password
      //         }
      //   );
      //       isValidUser ? alert("Đăng nhập thành công") : alert("Tài khoản hoặc mật khẩu không chính xác");
      //       ;
      // });
    }
  };

  // const onChange = useCallback(({ value, name }: { value: string, name: string }) => {
  //   switch (name) {
  //     case 'phone':
  //       setPhone(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       break;
  //   }

  // }, [])

  const InputPhone = useMemo(() => {
    return (
      <MyInput
        ref={refPhone}
        type="text"
        // value={refPhone.current.get}
        label="Phone"
        name="phone"
        // onChange={onChange}
      />
    );
  }, []);

  const InputPassWord = useMemo(() => {
    return (
      <MyInput
        ref={refPassword}
        type="text"
        name="password"
        // value={password}
        label="Password"
        // onChange={onChange}
      />
    );
  }, []);

  console.log("render app");

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {InputPhone}
        {/* {validate.phone && (
          <span style={{ color: "red", fontSize: "14px" }}>
            {validate.phone}
          </span>
        )} */}
        {InputPassWord}
        {/* {isValidation.password && (
          <span style={{ color: "red", fontSize: "14px", display: "block" }}>
            {isValidation.password}
          </span>
        )} */}
        <Button primary label="Login" />
      </form>
    </div>
  );
}

export default App;
