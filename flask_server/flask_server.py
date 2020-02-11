#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask
import flask
from flask import request, send_from_directory
from flask import Response
import argparse
import sys

import lyrics_api

# artist = None
# song_title = None


app = Flask(__name__)


# @app.route('/')
# def root_info():
#     return 'Endpoint nor recognized'

@app.route('/index')
def my_index():
    return flask.render_template("index.html", flask_token="Hello react  world")


@app.route('/getquery')
def getquery():
    artist = request.args.get('artist', None)
    song_title = request.args.get('song_title', None)
    if artist is None or song_title is None:
        return 'invalid parameters', 400

    lyrics = lyrics_api.get_lyrics(artist, song_title)
    if lyrics is None:
        return 'Lyrics not available :/', 500

    lyrics_analysis = lyrics_api.analyse_lyrics(lyrics)

    return {'artist': artist, 'song_title': song_title, 'analysed_lyrics': lyrics_analysis}


@app.route('/public/<path:path>')
def send_js(path):
    return send_from_directory('public', path)


if __name__ == '__main__':
    app.run(host="0.0.0.0")
