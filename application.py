#from cs50 import SQL
from flask import Flask, render_template, request, session , flash, redirect
#from flask_session import Session
#from tempfile import mkdtemp
#from werkzeug.exceptions import default_exceptions
#from werkzeug.security import check_password_hash, generate_password_hash

#import pdb

#from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)

# Ensure responses aren't cached
if app.config["DEBUG"]:
    @app.after_request
    def after_request(response):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Expires"] = 0
        response.headers["Pragma"] = "no-cache"
        return response

# Custom filter
#app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
#app.config["SESSION_FILE_DIR"] = mkdtemp()
#app.config["SESSION_PERMANENT"] = False
#Session(app)

# Configure CS50 Library to use SQLite database
# db = SQL("sqlite:///finance.db")


@app.route("/")
# need to edit
def welcome():
    return render_template("welcome.html")

@app.route("/values")
# need to edit
def values():
    return render_template("values.html")

@app.route("/projects")
# need to edit
def projects():
    return render_template("projects.html")

@app.route("/partners")
# need to edit
def partners():
    return render_template("partners.html")

@app.route("/contact")
# need to edit
def contact():
    return render_template("contact.html")

@app.route("/design")
# need to edit
def design():
    return render_template("design.html")



if __name__ == '__main__':
    app.run(debug=True)




def errorhandler(e):
    """Handle error"""
    return render_template("apology.html")


# listen for errors
#for code in default_exceptions:
    #app.errorhandler(code)(errorhandler)
