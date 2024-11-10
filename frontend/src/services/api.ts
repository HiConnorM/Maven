import axios from 'axios';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post('/auth/login', payload);
  return response.data;
};