from articleScraper import getArticle
from anecdotal import *
import re
from googleSearch import gSearch
import nltk

def getStatistics(article):
    # Regex for in-text citations
    inTextCitations = r"\([^\)]*,[^\)]*\)"
    bibliographyCitations = r"\[[0-9]+\].*(\n|$)"

    # Count the number of citations in the article
    numCitations = len(re.findall(bibliographyCitations, article['text']))

    # Remove sources or references from bottom
    article['text'] = re.sub(inTextCitations, '', article['text'])
    article['text'] = re.sub(bibliographyCitations, '', article['text'])

    # Regex finds numbers, floating point numbers including exponents, and percent signs
    regEx = r"[0-9]+|([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?|%|percent"

    # Find numbers, percentage symbols in article
    numStats = len(re.findall(regEx, article['text']))
    return numStats, numCitations

def categorizeSearch(search):
    # Get Article URL based on a search query
    articles = gSearch(search)

    articleIndexList = {}

    for articleURL in articles:
        # Get information from an Article URL
        article = getArticle(articleURL)

        if not article:
            continue

        numStats, numCitations = getStatistics(article)
        
        tokenizer = nltk.data.load('./english.pickle')
        numSentences = len(nltk.tokenize.sent_tokenize(article['text'], language='english'))

        if numSentences == 0:
            continue

        dataDrivenIndex = (numStats+(numCitations*3))/numSentences

        # Anecdotal stuff
        anecdotalIndex = 0
        x = re.findall(anecdotalRegex, article['text'])
        for phrase in x:
            anecdotalIndex += anecdotalDict[phrase]

        anecdotalIndex/=numSentences
        
        # saving data driven & anecdotal score
        
        articleIndexList[article['title']] = {"url": articleURL,
                                                "dataDrivenIndex": dataDrivenIndex, 
                                                "anecdotalIndex": anecdotalIndex}
        
        

    for articleTitle in articleIndexList.keys():
        scores = articleIndexList[articleTitle]
        print(f"{articleTitle} \n Data: {str(scores[0])} Anecdotal: {str(scores[1])} \n")


    print("Number of articles: " + str(len(articleIndexList)))

    return articleIndexList
