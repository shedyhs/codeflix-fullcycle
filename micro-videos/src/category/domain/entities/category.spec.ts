import { omit } from 'lodash';

import { Category } from './category';

describe('Category Unit Test', () => {
  test('constructor of category', () => {
    let category = new Category({ name: 'Movie' });

    const props = omit(category.props, 'created_at');

    expect(props).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: true,
    });
    expect(category.created_at).toBeInstanceOf(Date);

    const createdAt = new Date();
    category = new Category({
      name: 'Movie',
      description: 'some description',
      is_active: false,
      created_at: createdAt,
    });

    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'some description',
      is_active: false,
      created_at: createdAt,
    });
  });

  test('getter of name field', () => {
    const category = new Category({ name: 'Movie' });
    expect(category.name).toBe('Movie');
  });
  test('getter and setter of description field', () => {
    let category = new Category({
      name: 'Movie',
      description: 'some description',
    });
    expect(category.description).toBe('some description');

    category = new Category({ name: 'Movie' });
    expect(category.description).toBeNull();
  });
  test('getter and setter of is_active field', () => {
    let category = new Category({ name: 'Movie', is_active: false });
    expect(category.is_active).toBeFalsy();
    category = new Category({ name: 'Movie' });
    expect(category.is_active).toBeTruthy();
  });
  test('getter and setter of created_at field', () => {
    const category = new Category({ name: 'Movie' });
    expect(category.created_at).toBeInstanceOf(Date);
  });
});
