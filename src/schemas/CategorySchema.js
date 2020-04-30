const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    color: {type: 'string', default: '#fff'},
    isDefault: {type: 'boll', default: false},
    isCredit: {type: 'boll', default: false},
    isDebit: {type: 'boll', default: false},
    order: {type: 'int', default: 0},
    entries: 'Entry[]',
  },
};

export default CategorySchema;
