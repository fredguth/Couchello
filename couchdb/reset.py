# resets couchdb
import os
from dotenv import load_dotenv

load_dotenv()
user = os.getenv('COUCHDB_USER')
password = os.getenv('COUCHDB_PASSWORD')
os.system('rm -rf /opt/homebrew/var/couchdb/data')
# os.system(f'couchdb-bootstrap http://{user}:{password}@localhost:5984 bootstrap.js')
# os.system(f'couchdb-bootstrap http://{user}:{password}:5984 bootstrap.js')

