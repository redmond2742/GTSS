---
layout: documentation
title: Documentation
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
permalink: /documentation/signals/
---

## signals.txt

signals.txt provides basic location and street name information and assigns a unique signal ID for identification within GTSS. Parameters are listed below.

<br>
<br>

<hr>
<br>

#### signal_id

signal_id is a unique agency specific identifier for each traffic signal. It is used to reference the signal in other GTSS files.

<br>

#### agency_id

agency_id is a self-assigned unique identifier that distinctly identifies each agency. It is referenced in other GTSS files to associate signals and data with the corresponding agency.

<br>



#### latitude

latitude is the geographic latitude of the center of the intersection, formatted as a decimal degree value.

<br>

#### longitude

longitude is the geographic longitude of the center of the intersection, formatted as a decimal degree value.

<br>
<br>

<hr>
<br>

### Example

```csv
signal_id,agency_id,latitude,longitude
1,1,40.712776,-74.005974
```
