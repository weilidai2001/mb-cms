import { extractCategories, getProductsByCategory } from './products-util';
import type { Products } from './schemas/product-explore';

describe('extractCategories', () => {
  it('should extract unique categories from products', () => {
    const products: Products = [
      { id: 1, category: 'Books', title: 'Book A', icon: 'icon1', description: 'desc1' },
      { id: 2, category: 'Electronics', title: 'Gadget', icon: 'icon2', description: 'desc2' },
      { id: 3, category: 'Books', title: 'Book B', icon: 'icon3', description: 'desc3' },
      { id: 4, category: 'Clothing', title: 'Shirt', icon: 'icon4', description: 'desc4' }
    ];
    const result = extractCategories(products);
    expect(result).toEqual(['Books', 'Electronics', 'Clothing']);
  });
});

describe('getProductsByCategory', () => {
  const products: Products = [
    { id: 1, category: 'Books', title: 'Book A', icon: 'icon1', description: 'desc1' },
    { id: 2, category: 'Electronics', title: 'Gadget', icon: 'icon2', description: 'desc2' },
    { id: 3, category: 'Books', title: 'Book B', icon: 'icon3', description: 'desc3' },
    { id: 4, category: 'Clothing', title: 'Shirt', icon: 'icon4', description: 'desc4' }
  ];

  it('should return only products in the given category', () => {
    const result = getProductsByCategory(products, 'Books');
    expect(result).toEqual([
      { id: 1, category: 'Books', title: 'Book A', icon: 'icon1', description: 'desc1' },
      { id: 3, category: 'Books', title: 'Book B', icon: 'icon3', description: 'desc3' }
    ]);
  });

  it('should return an empty array if no products match the category', () => {
    const result = getProductsByCategory(products, 'Toys');
    expect(result).toEqual([]);
  });
});
