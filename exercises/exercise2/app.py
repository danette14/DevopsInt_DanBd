from flask import Flask, request, jsonify, render_template
from check import checkUrl

# Initialize Flask app
app = Flask(__name__)


@app.route('/')
def index():
    print('hello')
    return render_template('index.html')

@app.route('/checkurl', methods=['GET'])
def check():
    url = request.args.get('url', default=None)
    if url:
        result = checkUrl(url)
        print(result)
        return jsonify(result)
    else:
        return jsonify({"error": "No URL provided"})


# Run the Flask app
if __name__ == '__main__':
    app.run(port=5000)
