export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  timestamp?: string;
}

export interface ApiError {
  success: false;
  message: string;
  timestamp?: string;
}
