import newspaper
import json

def getArticle(url):
    article = newspaper.Article(url=url, language='en')
    article.download()
    article.parse()

    article = {
        "title": str(article.title),
        "text": str(article.text),
        "authors": article.authors,
        "published_date": str(article.publish_date),
        "top_image": str(article.top_image),
        "images" : article.images,
        "videos": article.movies,
        "keywords": article.keywords,
        "summary": str(article.summary)
    }

    return article

# article = getArticle()

# print(article["title"] \
#      + "\n\t\t" + article["published_date"] \
#      + "\n\n"\
#      + "\n" + article["text"]\
#      + "\n\n")

