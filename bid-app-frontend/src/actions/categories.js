const categories = [
  {
    name: 'Electronics',
    childs: [
      {
        name: 'Phone',
        childs: []
      },
      {
        name: 'Computers & Tables',
        childs: []
      }
    ]
  },
  {
    name: 'Fashion',
    childs: [
      {
        name: "Women's Clothing",
        childs: []
      },
      {
        name: "Men's Clothing",
        childs: []
      }
    ]
  },
  {
    name: 'Toys & Hobbies',
    childs: [
      {
        name: 'Action Figures',
        childs: []
      },
      {
        name: 'Toy Models',
        childs: []
      }
    ]
  },
  {
    name: 'Sporting Goods',
    childs: [
      {
        name: 'Water Sports',
        childs: []
      },
      {
        name: 'Winter Sports',
        childs: []
      }
    ]
  },
  {
    name: 'Other Categories',
    childs: [
      {
        name: 'Musical Instruments',
        childs: []
      },
      {
        name: 'Art',
        childs: []
      },
      {
        name: 'Toys & Hobbies',
        childs: []
      }
    ]
  }
];

const iterateTheKids = (kid, all, depth) => {
  all.push({ name: kid.name, depth });
  kid.childs.forEach(item => {
    iterateTheKids(item, all, depth + 1);
  });
};

const createTheOptions = categories => {
  let all = [];
  categories.forEach(item => {
    iterateTheKids(item, all, 0);
  });
  return all;
};

export default createTheOptions(categories);
