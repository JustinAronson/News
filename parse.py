import nltk
from opinionOrFactSentenceClassifier.quick_tests.py import * 

#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
print('In parse.py')

# Parse article into sentences (issues with quotes and some abbreviations)
def splitArticle():
    tokenizer = nltk.data.load('./english.pickle')
    data = open('Article.txt').read()
    return nltk.tokenize.sent_tokenize(data, language='english')

    splitArticle = tokenizer.tokenize(data)

    return splitArticle

print('TEST')



# Categorize each sentence in an article as fact or opinion. Not usable because GitHub repo does not have models
# articleArray = splitArticle()
# count_f = 0
# count_d = 0
# for sentence in articleArray:
#     test_sent = 'This donut is quite possibly the best tasting donut in the entire world.'
#     curr = sample(test_sent, nn_classifier_scaled, scaler)
#     if curr:
#         count_f += 1
#     else:
#         count_d += 1
    
