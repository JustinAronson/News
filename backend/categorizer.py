from articleScraper import getArticle
from anecdotal import *
import APIKeys
import re
from googleSearch import gSearch
import nltk
import openai
import os

openai.api_key = APIKeys.api_key
openai.organization = APIKeys.organization

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

def getGPTDimensions(text, dimensionList):
    # print(generate_prompt(text, dimensionList))
    # print("\n\n\n")
    try:
        response = openai.Completion.create(
                model="text-davinci-003",
                prompt=generate_prompt(text, dimensionList),
                temperature=0.6,
            )
        print('Response: ' + response.choices[0].text)
        return response.choices[0].text
    
    except:
        print('Unable to get GPT response')
        

#     return """The score for the article along each dimension is as follows:

# Historical: 60
# Statistical: 90
# Anecdotal: 50"""

def generate_prompt(text, dimensionList):
    dimensionString = ""
    for dimension in dimensionList:
        dimensionString += "Score the article from 1-10 based on how much " + dimension + " context it provides."
#     return """The text following the colon is a news article. Give it a score from 1-100 for how it falls along \
# each of the following dimensions, separated by spaces. """ + dimensionString + """. Return each score followed \
# by a space in order. Article: """ + text
    return """The text following the colon is a news article. """ + dimensionString + """. Return each score followed \
by a space in order. Article: """ + text

def categorizeSearch(search, dimensionList):
    # Get Article URL based on a search query
    articles = gSearch(search)

    articleIndexList = {}

    maxddIndex = 0
    maxanecIndex = 0

    for articleURL in articles:
        # Get information from an Article URL
        article = getArticle(articleURL)

        if not article:
            continue

        numStats, numCitations = getStatistics(article)
        
        # tokenizer = nltk.data.load('./english.pickle')
        # numSentences = len(nltk.tokenize.sent_tokenize(article['text'], language='english'))

        numSentences = len(article['text'].split('.'))

        if numSentences == 0:
            continue

        dataDrivenIndex = (numStats+(numCitations*3))/numSentences

        # Anecdotal stuff
        anecdotalIndex = 0
        x = re.findall(anecdotalRegex, article['text'])
        for phrase in x:
            anecdotalIndex += anecdotalDict[phrase]

        anecdotalIndex/=numSentences
        
        articleIndexList[article['title']] = {"url": articleURL,
                                        "dataDrivenIndex": dataDrivenIndex, 
                                        "anecdotalIndex": anecdotalIndex}

        if dataDrivenIndex > maxddIndex:
            maxddIndex = dataDrivenIndex
        if anecdotalIndex > maxanecIndex:
            maxanecIndex = anecdotalIndex

        # saving data driven & anecdotal score
        if len(dimensionList) > 0:
            gptScores = getGPTDimensions(article['text'], dimensionList)
            if gptScores: 
                gptList = re.findall(r'\b\d+\b', gptScores)
                print(gptList)
                if len(gptList) >= len(dimensionList):
                    for i in range(0, len(dimensionList)):
                        dimensionDict = {dimensionList[i] + "Index": gptList[i]}
                        print("DimensionDict: ")
                        print(dimensionDict)
                        articleIndexList[article['title']].update(dimensionDict)
            
        

    # for articleTitle in articleIndexList.keys():
    #     scores = articleIndexList[articleTitle]
    #     print(f"{articleTitle} \n Data: {str(scores['dataDrivenIndex'])} Anecdotal: {str(scores['anecdotalIndex'])} \n")
    #     print(f"Historical: {str(scores['historicalIndex'])} Statistical: {str(scores['statisticalIndex'])} Anecdotal: {str(scores['anecdotalIndex'])}")


    print("Number of articles: " + str(len(articleIndexList)))
    print(articleIndexList)

    if maxddIndex == 0:
        maxddIndex += 1
    ddRoundingFactor = 100/maxddIndex
    if maxanecIndex == 0:
        maxanecIndex += 1
    anecRoundingFactor = 100/maxanecIndex

    for article in articleIndexList:
        print(articleIndexList[article]["anecdotalIndex"])
        articleIndexList[article]["dataDrivenIndex"] = round(articleIndexList[article]["dataDrivenIndex"] * ddRoundingFactor)
        articleIndexList[article]["anecdotalIndex"] = round(articleIndexList[article]["anecdotalIndex"]*anecRoundingFactor)

    return articleIndexList

# categorizeSearch("Election", ["historical", "statistical", "theoretical"])