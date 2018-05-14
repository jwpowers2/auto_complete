import csv
import json
import pandas as pd
import sys, getopt, pprint
from pymongo import MongoClient

csvfile = open('world-cities.csv', 'r')
reader = csv.DictReader( csvfile )
mongo_client=MongoClient() 
db=mongo_client.users
db.segment.drop()
header = ["name","country","subcountry","geonameid"]

for each in reader:

    row={}
    for field in header:
    
        row[field]=each[field]

    db.segment.insert(row)
