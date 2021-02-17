import json, breeze, macros

const data = staticRead("example.json")
static:
  var x = parseJson(data)
  echo x["csvFile"][0]["hdr"]
