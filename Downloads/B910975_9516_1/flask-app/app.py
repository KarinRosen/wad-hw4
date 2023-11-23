#Flask imports
from flask import Flask, render_template, send_file, make_response, url_for
from flask import Response

# Influx
from influxdb_client import InfluxDBClient, Point, WriteOptions
from influxdb_client.client.write_api import SYNCHRONOUS
from influxdb_client.client.exceptions import InfluxDBError

#Pandas 
import pandas as pd


import io
import random
import os

# Read the data 
INFLUX_HOST_ADD=os.getenv('INLUX_HOST_ADD','http://172.17.88.218:8086')
INFLUX_ORG= os.getenv('INFLUX_ORG', 'UT')
INFLUX_TOKEN=os.getenv('INFLUX-TOKEN', '4ss4_i9ErzMgvY_-JD1oZzPM8Qk0jw0o7fKOokPfPEXrYngPiZYu3tZp2_2abRkALl0AGcwY7Qx9BfDjc6TLUA==')


#Connect to Influxdb database server

_db_client = InfluxDBClient(url=INFLUX_HOST_ADD, token=INFLUX_TOKEN, org=INFLUX_ORG, debug=True)

# The following query retrieve the temp data of Tartu City for previous 60minutes
# Database name=weather_data
# Measurement name=weather

query= '''
        from(bucket: "weather_data")
        |> range(start:-60m, stop: now())
        |> filter(fn: (r) => r._measurement == "weather")
        |> filter(fn: (r) => r._field == "temp")'''
result  = _db_client.query_api().query_data_frame(org='UT', query=query)
df=result[result.columns[4:]]

# Create a flask app
app = Flask(__name__)

# main route
@app.route('/')
@app.route('/pandas', methods=("POST", "GET"))
def GK():
    return render_template('home.html',
                           PageTitle = "weather",table=[df.to_html(classes='data', index = False)], titles=df.columns.values)

if __name__ == '__main__':
    app.run(debug = True,host='0.0.0.0',port=5000)

