from articleScraper import getArticle
import re
from googleSearch import gSearch

# Get Article URL based on a search query
articles = gSearch("oil spill ohio train derailment")
print(articles)

# Get information from an Article URL
article = getArticle("https://ohiorivervalleyinstitute.org/an-overview-of-the-norfolk-southern-train-derailment-and-hazardous-chemical-spill-in-east-palestine-ohio/")

# Regex for in-text citations
inTextCitations = r"\([^\)]*,[^\)]*\)"
bibliographyCitations = r"\[[0-9]+\].*(\n|$)"

# Count the number of citations in the article
numCitations = re.findall(bibliographyCitations, article['text'])

# Remove sources or references from bottom
article['text'] = re.sub(inTextCitations, '', article['text'])
article['text'] = re.sub(bibliographyCitations, '', article['text'])

# Regex finds numbers, floating point numbers including exponents, and percent signs
regEx = r"[0-9]+|([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?|%|percent"

# Find numbers, percentage symbols in article
numStats = re.findall(regEx, article['text'])
print('Num stats: ' + str(len(numStats)))