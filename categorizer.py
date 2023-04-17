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

# anectodatal stuff ahhhhh
# ['I': 1, 'me': 1, 'we': 1, 'our': 1, 'Personally': 2, 'In my experience': 3, 'As far as I know': 2, 'From what I've seen': 3, 'Based on what I've heard': 4, 'According to a friend of mine': 5, 'It seems to me': 2, 'I believe': 2, 'As I understand it': 3, 'Allegedly': 4, 'Apparently': 3, 'Supposedly': 3, 'Rumor has it': 5, 'I've heard that': 4, 'Some people say': 3, 'It's been said': 4, 'It's possible': 2, 'It's likely': 3, 'It's plausible': 4, 'In my opinion': 2, 'To me, it seems': 3, 'As I see it': 2, 'From my point of view': 3, 'Personally, I believe': 2, 'I feel that': 2, 'I suppose': 2, 'It appears to me': 2, 'I guess': 1, 'As far as I'm concerned': 2]



