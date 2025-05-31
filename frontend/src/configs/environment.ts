export const EnvironmentVariables: Record<string, string> = {
  BACKEND_API_URL: import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:3000',
};
