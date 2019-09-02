import { SHOW_CATEGORY, INIT_CATEGORIES } from '../actions/types';

const initialCategories = [
  {
    name: 'Electronics',
    childs: [
      {
        name: 'Phone',
        childs: []
      },
      {
        name: 'Computers & Tablets',
        childs: []
      }
    ],
    show: false
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
    ],
    show: false
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
    ],
    show: false
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
    ],
    show: false
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
      }
    ],
    show: false
  }
];

const initialState = {
  categories: [...initialCategories]
};

const categorieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(item =>
          item.name === action.payload ? { ...item, show: !item.show } : item
        )
      };
    case INIT_CATEGORIES:
      return { ...state, categories: [...initialCategories] };
    default:
      return state;
  }
};

export default categorieReducer;
