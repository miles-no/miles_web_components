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

export const safeUrl = url => {
  // Only allow absolute URLs starting with https://www.miles.no and relative URLs
  if (url && url.startsWith('https://www.miles.no' || url.startsWith('/'))) {
    console.log(encodeURI(url));
    return encodeURI(url);
  }
  throw new Error('Invalid URL.');
};
