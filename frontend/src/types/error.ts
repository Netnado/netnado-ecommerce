import { ERROR_TYPES } from "../constants/errorType";

// API error types
export interface ApiError {
  type: typeof ERROR_TYPES.API;
  status: number;
  message: string;
  data?: unknown;
  meta?: unknown;
}

export type BadRequestError = ApiError & { status: 400 };
export type UnauthorizedError = ApiError & { status: 401 };
export type ForbiddenError = ApiError & { status: 403 };
export type NotFoundError = ApiError & { status: 404; };
export type ConflictError = ApiError & { status: 409 };
export type UnprocessableEntityError = ApiError & { status: 422; };
export type TooManyRequestsError = ApiError & { status: 429 };
export type InternalServerError = ApiError & { status: 500; };
export type BadGatewayError = ApiError & { status: 502; };
export type ServiceUnavailableError = ApiError & { status: 503; };

// Validation error (e.g., form validation)
export interface ValidationError {
  type: typeof ERROR_TYPES.VALIDATION;
  field: string;
  message: string;
}

// Network error (e.g., failed fetch)
export interface NetworkError {
  type: typeof ERROR_TYPES.NETWORK;
  message: string;
  originalError?: unknown;
}

// Unknown or unexpected error
export interface UnknownError {
  type: typeof ERROR_TYPES.UNKNOWN;
  message: string;
  originalError?: unknown;
}

// Union of all error types
export type AppError =
  | ValidationError
  | NetworkError
  | BadRequestError
  | UnknownError
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | ConflictError
  | UnprocessableEntityError
  | TooManyRequestsError
  | InternalServerError
  | BadGatewayError
  | ServiceUnavailableError;
