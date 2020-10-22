interface ISignUp {
  cnpj: string,
  email: string,
  nome: string,
  password: string,
  role: string[],
  username: string
}

interface ISignUpStatus {
  id: number;
  username: string;
  email: string;
  roles: string[];
  accessToken: string;
  tokenType: string;
  hash: string;
}

interface ISignUpError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
}

interface IInputRef {
  value: string;
}

interface ICheckBoxRef {
  value: string[];
}
