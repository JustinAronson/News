# Import flask and datetime module for showing date and time
from flask import Flask
from categorizer import *
from flask_cors import CORS, cross_origin
  
# Initializing flask app

app = Flask(__name__)
CORS(app)  
app.config['CORS_HEADERS'] = 'Content-Type'
# Route for getting article information from google search
@app.route('/<search>')
@cross_origin()
def getArticleData(search):
    
    # Returning the dictionary of article indices
    return categorizeSearch(search)
  
  
# Running app
if __name__ == '__main__':
    app.run(port=8000, debug=True)