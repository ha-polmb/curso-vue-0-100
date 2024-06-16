import { getProductsAction } from '@/modules/products/actions';

describe('getProductsAction', async () => {
  const products = await getProductsAction(1, 10);

  test('should return expected', async () => {
    expect(products.length).toBe(10);
  });

  test('products should have a full image url', () => {
    products.forEach((product) => {
      product.images.forEach((image) => {
        expect(image).toContain(`${import.meta.env.VITE_TESLO_API_URL}/files/product`);
      });
    });
  });
});
