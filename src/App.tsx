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
import { TextFieldActions } from "./input/types";
import formValidate from "./utils/form-validate";
import Languages from "./commons/languages";
import { TYPE_INPUT } from "./commons/constant";

function App() {

  const refPhone = useRef<TextFieldActions>(null);
  const refPassword = useRef<TextFieldActions>(null);

  const isValidForm = () => {
    const _phone = refPhone.current?.getValue();
    const _password = refPassword.current?.getValue();

    const errMsgPhone = formValidate.passConFirmPhone(_phone);
    const errMsgPwd = formValidate.passValidate(_password);

    refPhone.current?.setErrorMsg(errMsgPhone);
    refPassword.current?.setErrorMsg(errMsgPwd);

    return !errMsgPhone && !errMsgPwd
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (isValidForm()) {
      axios.get("http://localhost:4000/users")
        .then((res) => {
          const isValidUser = res.data.find(
            (item: any) => {
              return item.phone == refPhone.current?.getValue() && item.password == refPassword.current?.getValue()
            }
          );

          alert(isValidUser ? "Đăng nhập thành công" : "Tài khoản hoặc mật khẩu không chính xác");
        });
    }
  };

  const renderInput = useCallback((_ref: any, _type: any, _label: any) => {
    return (
      <MyInput
        ref={_ref}
        type={_type}
        // name="phone"
        label={_label}
        maxLength={_type === TYPE_INPUT.PHONE ? 10 : 50}
      />
    );
  }, [])

  // const InputPhone = useMemo(() => {
  //   return (
  //     <MyInput
  //       ref={refPhone}
  //       type="text"
  //       name="phone"
  //       label={Languages.auth.phone}
  //       // value={refPhone.current.getValue()}
  //       // onChange={onChange}
  //     />
  //   );
  // }, []);

  // const InputPassWord = useMemo(() => {
  //   return (
  //     <MyInput
  //       ref={refPassword}
  //       type="text"
  //       name="password"
  //       label={Languages.auth.password}
  //       // value={password}
  //       // onChange={onChange}
  //     />
  //   );
  // }, []);

  console.log("render app");

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {renderInput(refPhone, TYPE_INPUT.PHONE, Languages.auth.phone)}
        {renderInput(refPassword, TYPE_INPUT.PASSWORD, Languages.auth.password)}
        <Button primary label={Languages.auth.login} />
      </form>
    </div>
  );
}

export default App;
