import re
from robobrowser import RoboBrowser
from bs4 import BeautifulSoup

URL = "https://www.goodreads.com/quotes"

browser = RoboBrowser(parser="html.parser")
browser.open(URL)

htmlpage = str(browser.parsed)
bsoup = BeautifulSoup(htmlpage, "html.parser")

continut = bsoup.find_all("div", {"class": "quoteText"})

with open('quotes.txt', 'w') as f:
    for quote in continut :
        autor = quote.find("span", {"class": "authorOrTitle"})
        quote = quote.contents[0].strip()
        quote += " — " + autor.text
        quote = quote.replace("\n", "")
        quote = quote.replace("   ", "")
        quote += '\n'
        f.write(quote)
