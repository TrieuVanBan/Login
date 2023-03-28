import Languages from '../commons/languages'
import Validate from './validate';

const validatePhone = (username: string) => {
    const reg = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return reg.test(username);
};

function passConFirmPhone(phone: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(phone)) {
        errMsg = Languages.errorMsg.userPhoneEmpty;
    } else if (!validatePhone(phone)) {
        errMsg = Languages.errorMsg.phoneRegex;
    } else if (phone.length < 10 || phone.length > 10) {
        errMsg = Languages.errorMsg.phoneCount;
    }
    return errMsg;
}

function passValidate(pwd: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(pwd)) {
        errMsg = Languages.errorMsg.userPasswordNull;
    } else if (pwd.length < 8) {
        errMsg = Languages.errorMsg.passwordCheck;
    }
    return errMsg;
}

export default {
    passValidate,
    passConFirmPhone
};