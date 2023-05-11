/**
 *
 * @param {*} value
 * @returns Boolean
 */
export const isAttributeValueTruthy = value =>
  [null, 'false'].includes(value) === false;

export const debounce = (callback, delay = 20) => {
  let time;

  return (...args) => {
    clearTimeout(time);
    time = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
