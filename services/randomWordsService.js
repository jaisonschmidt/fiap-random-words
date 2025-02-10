/**
 * @module randomWordsService
 * @description Service responsible for fetching random words from an external API
 * @param {number} numberOfWords - The number of random words to fetch
 * @returns {Promise<Array<string>>} - An array of random words
 * @throws {Error} - If the request fails
 * @example
 * const randomWordsService = require('./services/randomWordsService');
 * 
 * try {
 *  const randomWords = await randomWordsService(5);
 * console.log(randomWords);
 * } catch (error) {
 *  console.error(error.message);
 * }
 * */
const randomWordsService = async (numberOfWords = 5) => {
  try {
    const response = await fetch(
      `${process.env.RANDOM_WORDS_API_URL}=${numberOfWords}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch random words");
  }
};

module.exports = { randomWordsService };