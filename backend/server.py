# Import flask and datetime module for showing date and time
from flask import Flask
from categorizer import *
  
# Initializing flask app
app = Flask(__name__)
  
  
# Route for getting article information from google search
@app.route('/<search>')
def getArticleData(search):

    # Returning the dictionary of article indices
    return categorizeSearch(search)
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)