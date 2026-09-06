---
layout: documentation
title: Documentation
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
permalink: /documentation/gtss-library/
---

## gtss-library.json

gtss-library.json defines a list of GTSS files. This is used for aggregating GTSS files from multiple locations. Parameters are listed below.

<br>
<br>

<hr>
<br>

#### title *[string|required]*

this is a title shown to users for this library

#### description *[string|optional]*

this is a description of this library file, what it is used for and contains

#### originUrl *[string|required]*

this is the canonical url for this json file.

#### originEmail *[string|optional]*

provide a way for users to contact the owner via email

#### originUrl *[string|optional]*

provide a way for users to contact the owner via web

#### gtssLibrary *[array of gtss|required]*

this is an array of gtssLibraryItems

--

### gtssLibraryItem - this describes a gtssFile

#### title *[string|required]*

title is a unique title that distinctly identifies the name of the gtss file. This will be shown to users to differentiate different gtss files.

#### gtss-url *[string|required]*

gtss-url is the full canonical url to the gtss.zip file. Do not use relative urls. 

#### official *[boolean|required]*

official is a boolean indicating if this gtss file comes from an official source

#### date-added *[date|required]*

date-added is the date this gtss was added to the gtss-library.json file

#### owner-email *[string|optional]*

owner-email how to get in touch via email with the creator of the gtss.zip file.

#### owner-url *[string|optional]*

owner-url how to get in touch via web with the creator of the gtss.zip file.

#### bounds *[location|required]*
  * min *[location|required]*
    * lat,lon *[float|required]*
      The minimum bounds of the gps locations found in the gtss.zip file - used for filtering in maps
  * max *[location|required]*
    * lat,lon *[float|required]*
      The maximum bounds of the gps locations found in the gtss.zip file - used for filtering in maps

<br>
<br>

<hr>
<br>

### Example

```json
{
  "description":"List of test gtss.zip files",
  "originUrl":"https://example.com/gtss-library.json",
  "originEmail":"example@example.com",
  "originUrl":"https://example.com/info.html",
  "gtssLibrary":[
      {
          "title": "Example City DOT Signals",
          "gtss-url": "https://example.com/gtss/example-city.zip",
          "official": true,
          "date-added": "2026-01-15T00:00:00.000Z",
          "owner-email": "signals@example.com",
          "owner-url": "https://example.com",
          "bounds": {
            "min":{
              "lat":40.4774,
              "lon":-74.2591
            },
            "max": {
              "lat": 40.9176,
              "lon": -73.7004
            }
          }
      }
  ]
}
```
