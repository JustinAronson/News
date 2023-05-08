import requests

def gSearch(query):
    # Input: string (appends "news articles" after the input)
    # Output: list of 10 article URLs

    # justinaronson@gmail.com
    # API_KEY = "AIzaSyCfdDhKLD5NA_eDP0zWsA8QGYEX9aQfuDY"
    # CSE_ID = "92ab39f94f2fe4747"

    # gabewhite2222@gmail.com, password = 92ab39f94f2fe4747
    API_KEY = "AIzaSyCrxzkrKk3ZyTfvsTYjZ7dfAws1QQGTn54"
    CSE_ID = "e757073b889c14bae"

    index = 1

    # Set up the API endpoint URL and parameters
    amountOfArticlesToGet = 10
    whileLoopLimiter = 10 #after 10 requests it breaks
    articleURLs = [] 
    while len(articleURLs) < amountOfArticlesToGet:
        # Make the GET request to the API
        url = 'https://www.googleapis.com/customsearch/v1'
        params = {
            'q': query + ' news articles',
            'cx': CSE_ID,
            'key': API_KEY,
            'start': index
        }
        response = requests.get(url, params=params)
        index += 10
        # Parse the JSON response to extract the URLs of the articles
        if response.status_code == 200:
            data = response.json()
            for item in data['items']:
                link = item['link']
                if(len(link)>=75 and not ("/tag" in link or "/hub" in link or "/topic" in link)):
                    articleURLs.append(item['link'])
        else:
            print('Error from Google API:', response.status_code)
            break
        if whileLoopLimiter <= 0:
            print('Not enough articles gathered, but stopping to limit Google Search API calls')
            break
        whileLoopLimiter -= 1

    return articleURLs[:amountOfArticlesToGet]
