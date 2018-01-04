#!/bin/bash
import re
import zlib

pdf = open("./files/test.pdf", "r+b").read()
stream = re.compile(r'.*?FlateDecode.*?stream(.*?)endstream', re.S)

for s in stream.findall(pdf):
    s = s.strip('\r\n')
    print(s)
    try:
        f= open("unzippedPDF.pdf","w+")
        f.write(zlib.decompress(s))
        f.close()
        print("")
    except:
        pass