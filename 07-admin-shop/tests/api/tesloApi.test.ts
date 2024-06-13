import { tesloApi } from '@/api/tesloApi';

describe('tesloApi axios instance', () => {
  test('should have baseURL set to VITE_TESLO_API_URL', () => {
    expect(tesloApi.defaults.baseURL).toEqual(import.meta.env.VITE_TESLO_API_URL);
  });

  test('should set authorization header with token from localhost', async () => {
    const token = 'myAuthToken';
    localStorage.setItem('token', token);

    const resp = await tesloApi.get('/api/');
    expect(resp.config.headers.Authorization).toBe(`Bearer ${token}`);
  });

  test('should not set authorization header if token is not in local storage', async () => {
    localStorage.clear();

    const resp = await tesloApi.get('/api/');
    expect(resp.config.headers.Authorization).toBeUndefined();
  });
});
