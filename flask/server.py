# Import flask and datetime module for showing date and time
from flask import Flask
from ..categorizer import *
  
# Initializing flask app
app = Flask(__name__)
  
  
# Route for seeing a data
@app.route('/data')
def getArticleData(search):
  
  
    # Returning an api for showing in reactjs
    return {
        categorizeSearch(search)
        }
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)