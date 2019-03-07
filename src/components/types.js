import T from 'prop-types';

export const itemType = T.shape({
  text: T.string,
  id: T.number,
  checked: T.bool
});
