import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// API 응답 데이터의 타입을 지정
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Axios를 사용하여 API 호출을 담당하는 함수
async function api<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axios(config);
    const apiResponse: ApiResponse<T> = response.data;
    if (response.status >= 200 && response.status < 300) {
      // API 호출이 성공한 경우 응답 데이터를 반환
      return apiResponse.data;
    } else {
      // API 호출이 실패한 경우 오류를 throw
      throw new Error(apiResponse.message);
    }
  } catch (error: any) {
    // API 호출 중에 발생한 오류를 처리
    throw new Error('API request failed: ', error.message);
  }
}

export default api;
