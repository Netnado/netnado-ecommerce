export interface ApiResponse<T = unknown> {
  error_code: number;
  status: number;
  message: string;
  data?: T;
  meta?: Record<string, unknown>;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  meta: {
    count: number;
    total: number;
    page: number;
    limit: number;
    total_page: number;
  };
}
