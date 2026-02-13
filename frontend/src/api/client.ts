import { ApiResponse, ApiError } from '@/types/api';

const API_BASE_URL = '/api';

class ApiClient {
  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`);
    return this.handleResponse<T>(response);
  }

  async post<T>(path: string, body: object): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return this.handleResponse<T>(response);
  }

  async put<T>(path: string, body: object): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return this.handleResponse<T>(response);
  }

  async delete(path: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Delete failed: ${response.statusText}`);
    }
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json() as ApiResponse<T> | ApiError;

    if (!response.ok) {
      const error = data as ApiError;
      throw new Error(error.message || `Request failed: ${response.statusText}`);
    }

    const apiResponse = data as ApiResponse<T>;
    if (!apiResponse.success) {
      throw new Error(apiResponse.message || 'Request failed');
    }

    return apiResponse.data as T;
  }
}

export const apiClient = new ApiClient();
