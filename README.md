\## Difference between WebCrawlers and WebScrapers

| Feature           | Web Scraper                          | Web Crawler                            |
| ----------------- | ------------------------------------ | -------------------------------------- |
| **Purpose**       | Extracts specific data from websites | Navigates and indexes web content      |
| **Functionality** | Focuses on a specific set of data    | Explores the web broadly               |
| **Use Case**      | Data harvesting, analysis            | Search engine indexing, SEO analysis   |
| **Data Handling** | Extracts and processes targeted data | Collects data from many sources        |
| **Complexity**    | Can be complex depending on the data | Generally simpler in design            |
| **Speed**         | Varies based on the data complexity  | Usually faster at covering more ground |
| **Customization** | Highly customizable for data needs   | Less need for customization            |

## Open Source Web Scrapers

1.  Puppeteer
2.  Cheerio
3.  brightData

## Problems

1. Website block you by doing IP blocking and rate limiting, if sent too many requests
2. Dynamic content
3. Traditional web scralers are not able to handle dynamic content
4. Complex navigation is not always possible
5. IP rotation is not possible
6. Captcha
7. Human intrepretation while scraping

# Steps to develop this web scrapper

1. Develop the UI

2. Create actions `/lib/actions`

```
export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
  } catch (error: any) {
    console.log(error);
  }
}
```

3. Install packages axios `npm i axios` and cheerio `npm i cheerio`

4. Make scraper function `/lib/scraper`

```
"use server";
```

```
import axios from "axios";
import * as cheerio from "cheerio";
export async function scrapeAmazonProduct(url: string) {
if (!url) return;



const username = String(process.env.BRIGHT_DATA_USERNAME);
const password = String(process.env.BRIGHT_DATA_PASSWORD);
const port = 22225;
const session_id = (100000 * Math.random()) | 0;
const options = {
auth: {
username: `${username}-session-${session_id}`,
password,
},
host: "brd.superproxy.io",
port,
rejectUnauthorized: false,
};
try {
        const response = await axios.get(url, options);
        console.log(response.data);
    } catch (error: any) {
     console.log(error);
    }
}

```

Now after copying a link of the amazon product to the search bar, the scrapped html should display on the console.

5. Setting up `cheerio` for parsing the scrapped html content
