import nltk
from opinionOrFactSentenceClassifier.quick_tests.py import * 

#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
print('In parse.py')

def splitArticle():
    tokenizer = nltk.data.load('./english.pickle')
    data = open('Article.txt').read()
    return nltk.tokenize.sent_tokenize(data, language='english')

    splitArticle = tokenizer.tokenize(data)

    return splitArticle

print('TEST')

articleArray = splitArticle()
for sentence in articleArray:
    test_sent = 'This donut is quite possibly the best tasting donut in the entire world.'
    curr = sample(test_sent, nn_classifier_scaled, scaler)
    count_f = 0
    count_d = 0
    if curr:
        count_f += 1
    else:
        count_d += 1
    
