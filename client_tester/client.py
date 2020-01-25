#!/usr/bin/env python
# -*- coding: utf-8 -*-

# http://127.0.0.1:5000/echo?artist=beatles&song_title=birthday

import requests
import argparse

# insert at 1, 0 is the script path (or '' in REPL)


parser = argparse.ArgumentParser()
parser.add_argument('artist')
parser.add_argument('song_title')
args = parser.parse_args()


if __name__=='__main__':
   r = requests.get(f'http://127.0.0.1:5000/getquery?artist={args.artist}&song_title={args.song_title}')


   if r.status_code == 200:
       payload = r.json()
       print(f'Data: {payload}.')

   else:
       print(f' ERROR: the request returned status {r.status_code}')


