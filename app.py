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

@app.route('/view_database/<name>')
def view_database(name):
    ids = []
    with open(name) as file:
        while(True):
            line = file.readline()
            if not line:
                break
            ids.append(json.loads(line)['Study Instance UID'])
    ids = set(ids)
    return render_template('view_database.html',ids = ids, filename = name)

@app.route('/view_id/<filename>/<id>')
def view_id(filename,id):
    records = []
    with open(filename) as file:
        idx = 0
        while(True):
            line = file.readline()
            if not line:
                break
            line = json.loads(line)
            if(line['Study Instance UID'] == id):
                records.append({'Idx': idx,'Timestamp': line['Timestamp'],'Tumor Type': line['Tumor Type'],'Tumor Size': line['Tumor Size'],'Phase': line['Phase']})
            idx+=1
    return render_template('view_id.html',ids = records,file = filename)
@app.route('/preview/<file>/<record_idx>')

def preview(file,record_idx):
    global record
    record = {}
    with open(file) as file:
        idx = 0
        while(True):
            line = file.readline()
            if not line:
                break
            if(int(idx) == int(record_idx)):
                record = json.loads(line)
                break
            idx+=1
    return render_template('preview.html',record = json.dumps(record))

@app.route('/')
def viewer():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=False)
