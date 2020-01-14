import os

from flask import *
import jsonlines
import json
i = 0
app = Flask(__name__, static_url_path='/static')
# Create a directory in a known location to save files to.
uploads_dir = os.path.join(app.instance_path, 'database')
app.config['UPLOAD_FOLDER'] = uploads_dir
ALLOWED_EXTENSIONS = {'json'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/sent', methods=['POST'])
def sent():
    data = request.json
    if(os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'], f'test.json'))):
        with jsonlines.open(os.path.join(app.config['UPLOAD_FOLDER'], f'test.json'), 'a') as file:
            file.write(data)
    else:
        with jsonlines.open(os.path.join(app.config['UPLOAD_FOLDER'], f'test.json'), 'w') as file:
            file.write(data)
    return jsonify(data)


@app.route('/viewer')
def viewer():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=False)
