import { Category } from './category';
import { validate as validateUUID } from 'uuid';
import { omit } from 'lodash';

describe('Category Unit Tests', () => {
  test('Constructor of category', async () => {
    let category = new Category({ name: 'Name' });
    let props = omit(category.props, 'created_at');
    expect(props).toStrictEqual({
      name: 'Name',
      is_active: true,
      description: null
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: 'Name',
      description: 'description',
      is_active: false,
      created_at
    });
    expect(category.props).toStrictEqual({
      name: 'Name',
      is_active: false,
      description: 'description',
      created_at
    });

    category = new Category({ name: 'Name', description: 'description' })
    expect(category.props).toMatchObject({
      name: 'Name',
      description: 'description',
    });

    category = new Category({ name: 'Name', is_active: false });
    expect(category.props).toMatchObject({
      name: 'Name',
      is_active: false,
    });

    created_at = new Date();
    category = new Category({ name: 'Name', created_at });
    expect(category.props).toMatchObject({
      name: 'Name',
      created_at,
    });
  });

  test('id field', async () => {
    let category = new Category({ name: 'Name' });
    expect(category.id).not.toBeNull();
    expect(validateUUID(category.id)).toBeTruthy();

    category = new Category({ name: 'Name' }, null);
    expect(category.id).not.toBeNull();
    expect(validateUUID(category.id)).toBeTruthy();

    category = new Category({ name: 'Name' }, undefined);
    expect(category.id).not.toBeNull();
    expect(validateUUID(category.id)).toBeTruthy();

    category = new Category({ name: 'Name' }, '357d6749-4c0c-4eca-a95d-dd46e3513a6d');
    expect(category.id).not.toBeNull();
    expect(validateUUID(category.id)).toBeTruthy();

    category = new Category({ name: 'Name' }, 'invalid-uuid');
    expect(category.id).not.toBeNull();
    expect(validateUUID(category.id)).toBeFalsy();
  });

  test('getter of name field', async () => {
    const category = new Category({ name: 'Name' });
    expect(category.name).toBe('Name');
  });

  test('getter and setter of description field', async () => {
    let category = new Category({ name: 'Name' });
    expect(category.description).toBeNull();
    category = new Category({ name: 'Name', description: 'description' });
    expect(category.description).toBe('description');
    category["description"] = 'new description';
    expect(category.description).toBe('new description');
    category["description"] = undefined;
    expect(category.description).toBeNull();
  });

  test('getter and setter of is_active field', async () => {
    let category = new Category({ name: 'Name', is_active: true });
    expect(category.is_active).toBeTruthy();
    category = new Category({ name: 'Name', is_active: false });
    expect(category.is_active).toBeFalsy();
    category = new Category({ name: 'Name' });
    expect(category.is_active).toBeTruthy();
  });

  test('getter and setter of created_at field', async () => {
    let created_at = new Date();
    let category = new Category({ name: 'Name', created_at });
    expect(category.created_at).toBe(created_at);
    category = new Category({ name: 'Name' });
    expect(category.created_at).toBeInstanceOf(Date);
  });
});
