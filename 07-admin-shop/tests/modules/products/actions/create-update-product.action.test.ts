import { tesloApi } from '@/api/tesloApi';
import { loginAction } from '@/modules/auth/actions';
import { createUpdateProductAction } from '@/modules/products/actions';
import type { Product } from '@/modules/products/interfaces/product.interface';

describe('createUpdateProductAction', () => {
  beforeAll(async () => {
    const resp = await loginAction('test1@google.com', 'Abc123');

    if (!resp.ok) {
      throw new Error('Failed to login');
    }

    localStorage.setItem('token', resp.token);
  });

  test('should create a new product', async () => {
    const product: Product = {
      id: '',
      title: 'Nuevo producto 21',
      price: 100,
      description: 'Test description',
      slug: 'test-Product_21',
      stock: 10,
      sizes: [],
      gender: 'kid',
      tags: [],
      images: [],
      user: {} as any,
    };

    const resp = await createUpdateProductAction(product);

    await tesloApi.delete(`/products/${resp.id}`);

    expect(resp).toEqual({
      description: 'Test description',
      gender: 'kid',
      id: expect.any(String),
      images: [],
      price: 100,
      sizes: [],
      slug: 'test-product_21',
      stock: 10,
      tags: [],
      title: 'Nuevo producto 21',
      user: {
        email: 'test1@google.com',
        fullName: 'Test One',
        id: '8fa917a4-7e66-410e-822d-173fb6648e1b',
        isActive: true,
        roles: expect.any(Array),
      },
    });
  });

  test('should update a product', async () => {
    const products = await tesloApi.get<Product[]>('/products');
    const product = products.data[0];

    const productId = product.id;

    const updatedProduct = {
      ...product,
      title: 'Updated Product',
      description: 'Updated Description',
      stock: 10,
    };

    const resp = await createUpdateProductAction(updatedProduct);

    expect(resp).toEqual(
      expect.objectContaining({
        title: 'Updated Product',
        description: 'Updated Description',
        stock: 10,
      }),
    );
  });
});
