// utilities for extracting data from the scrapped data

/**
 * Extracts the price from a list of elements.
 * @param {...any} elements - The elements to extract the price from.
 * @returns {string} - The extracted price.
 */
export function extractPrice(...elements: any) {
  for (const element of elements) {
    const priceText = element.text().trim();

    if (priceText) {
      const cleanPrice = priceText.replace(/[^\d.]/g, ""); // remove all non-numeric characters

      let firstPrice;

      if (cleanPrice) {
        firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0]; // match the first price with 2 decimal places
      }

      return firstPrice || cleanPrice;
    }
  }

  return "";
}
