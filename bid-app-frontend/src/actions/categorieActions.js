import { INIT_CATEGORIES } from '../actions/types';

const iterateTheKids = (kid, all, depth) => {
  all.push({ name: kid.name, depth });
  kid.childs.forEach(item => {
    iterateTheKids(item, all, depth + 1);
  });
};

export const createTheOptions = categories => {
  let all = [];
  categories.forEach(item => {
    iterateTheKids(item, all, 0);
  });
  return all;
};

export const initAllCategories = dispatch => () => {
  dispatch({
    type: INIT_CATEGORIES
  });
};
