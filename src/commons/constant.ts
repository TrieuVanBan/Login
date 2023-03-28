export const PHONE_PREFIX = '+84';

export const PHONE_REGEX = /^0+[3,5,7,8,9]{1}[0-9]{1}[1-9]{1}[0-9]{6}$/;
export const NUMBER_REGEX = /^[0-9]*$/;
export const EMAIL_REGEX = /^[\w+][\w\.\-]+@[\w\-]+(\.\w{2,10})+$/;
export const PASSWORD_REGEX = /^\w{6,20}$/;

export const SECONDS_IN_DAY = 864e5;
export const DELAY_CLICK = 3e2;
export const MIN_MONEY = 1e5;
export const ZERO = '0';


//'radio' | 'email' | 'phone' | 'text' | 'number' | 'password' | 'date'| 'tel',
export enum TYPE_INPUT {
    TEXT = 'text',
    RADIO = 'radio',
    EMAIL = 'email',
    PHONE = 'phone',
    NUMBER = 'number',
    PASSWORD = 'password',
    DATE = 'date',
    TEL = 'tel'
}




