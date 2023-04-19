import os

import openai
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        sentence = request.form["animal"]
        print(sentence)
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=generate_prompt(sentence),
            temperature=0.6,
        )
        return redirect(url_for("index", result=response.choices[0].text))

    result = request.args.get("result")
    print('result: ' + result)
    return render_template("index.html", result=result)

def generate_prompt(sentence):
    print("""Is this sentence editoral based or data supported?
    Sentence:""" + sentence)
    return """Is this sentence editoral based or data supported?
    Sentence: """ + sentence 



