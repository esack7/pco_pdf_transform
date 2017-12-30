#!/bin/bash
import re
import zlib

pdf = open("./files/Beautiful - G.pdf", "r+b").read()
stream = re.compile(r'.*?FlateDecode.*?stream(.*?)endstream', re.S)
print(stream)

for s in stream.findall(pdf):
    s = s.strip('\r\n')
    try:
        f= open("newPDF.pdf","w+")
        f.write(zlib.decompress(s))
        f.close()
        print("")
    except:
        pass