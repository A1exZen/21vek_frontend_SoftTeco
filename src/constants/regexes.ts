/* eslint-disable no-useless-escape */
type RegexsType = {
  EMAIL: RegExp;
  NAME: RegExp;
  PHONE: RegExp;
  PASSWORD: RegExp;
};

const Regexs: RegexsType = {
  EMAIL:
    /(?!.*(-|_)\1)^(([^<>()\[\]\\!?@#=^$%&*.,;:\/\s@"]+(\.[^<>()\[\]\\!?@#=^$%&*.,;:\/\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-\_0-9]+\.)+[a-zA-Z]{2,}))$/,
  NAME: /(^[а-яА-Яa-zA-Z .-]+$)/,
  PHONE: /^\+[\d]{11,15}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
};

export default Regexs;
