---
layout: documentation
title: Documentation
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
permalink: /documentation/approaches/
---

## approaches.txt

approaches.txt defines the physical approaches to an intersection, including street names, compass bearing, and posted speed limits. Approaches represent real-world geometry with associations with one or more phases in phases.txt.

<br>
<br>

<hr>
<br>

#### approach_id

approach_id is a unique signal specific identifier number associated with an approach of a traffic signal. 

<br>

#### signal_id

signal_id is a unique agency specific identifier for each traffic signal. It is used to reference the signal in other GTSS files.

<br>


#### street_name

street_name is the name of the street for this approach of the intersection.

<br>

#### compass_bearing

compass_bearing indicates the compass bearing of the approach to the intersection, expressed in degrees (0-360).

<br>

#### posted_speed

posted_speed indicates the posted speed limit for the approach to the intersection, expressed in miles per hour (mph).

<br>
<br>

<hr>
<br>

### Example

```csv
approach_id,signal_id,street_name,compass_bearing, posted_speed
1,1,main street,90,35
```