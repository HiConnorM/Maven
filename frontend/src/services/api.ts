import axios, { AxiosError } from 'axios';

interface ApiError {
  message: string;
  status: number;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

export const handleApiError = (error: AxiosError): ApiError => {
  if (error.response) {
    return {
      message: error.response.data.message || 'An error occurred',
      status: error.response.status,
    };
  }
  return {
    message: error.message || 'Network error',
    status: 500,
  };
};

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const response = await api.post('/auth/login', payload);
    return response.data;
  } catch (error) {
    throw handleApiError(error as AxiosError);
  }
};