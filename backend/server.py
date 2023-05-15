# Import flask and datetime module for showing date and time
from flask import Flask, redirect, render_template, request, url_for
from categorizer import *
from flask_cors import CORS, cross_origin
import openai
  
# Initializing flask app

app = Flask(__name__)
CORS(app)  
app.config['CORS_HEADERS'] = 'Content-Type'
# Route for getting article information from google search
@app.route('/<search>')
@cross_origin()
def getArticleData(search):
    params = request.args.to_dict(flat=False)

    # Returning the dictionary of article indices
    return categorizeSearch(search, params['dimension'])
  
# # Running app
# if __name__ == '__main__':
#     app.run(port=8000, debug=True)