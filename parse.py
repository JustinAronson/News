import nltk

def splitArticle():
    tokenizer = nltk.data.load('./english.pickle')
    data = open('Article.txt').read()
    splitArticle = tokenizer.tokenize(data)

    return splitArticle

print('TEST')

articleArray = splitArticle()
for sentence in articleArray:
    print('Sentence: ' + sentence)