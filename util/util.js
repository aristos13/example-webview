import fetch from 'cross-fetch';

const crypto = require('crypto');

export const fetcher = async (...args) => {
  try {
    const res = await fetch(...args);

    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error(JSON.stringify(error.message));
  }
};
