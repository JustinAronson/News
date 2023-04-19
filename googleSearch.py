import requests

def gSearch(query):
    # Input: string (appends "news articles" after the input)
    # Output: list of 10 article URLs

    API_KEY = "AIzaSyDcBDCirLkIEsiVaSO-C39O7-TMFJeqA_w"
    CSE_ID = "35774e8a76e004093"

    index = 1

    # Set up the API endpoint URL and parameters
    amountOfArticlesToGet = 10
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
            print('Error:', response.status_code)
    return articleURLs[:amountOfArticlesToGet]
