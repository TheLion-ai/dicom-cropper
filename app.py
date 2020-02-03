import os

from flask import *
import jsonlines

i = 0
app = Flask(__name__, static_url_path='/static')
# Create a directory in a known location to save files to.
uploads_dir = os.path.join(app.instance_path, 'database')
app.config['UPLOAD_FOLDER'] = uploads_dir
ALLOWED_EXTENSIONS = {'json'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/send', methods=['POST'])
def send():
    message = 'Data uploaded succesfully'
    data = request.json
    # data_folder = os.path.join(app.config['UPLOAD_FOLDER'], data['Tumor Type'])
    # if not os.path.exists(data_folder):
    #     os.mkdir(data_folder)
    data_file = os.path.join(app.config['UPLOAD_FOLDER'], f'test.json')
    if os.path.exists(data_file):
        with jsonlines.open(data_file, 'a') as file:
            file.write(data)
    else:
        with jsonlines.open(data_file, 'w') as file:
            file.write(data)
    return message


@app.route('/')
def viewer():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=False)
