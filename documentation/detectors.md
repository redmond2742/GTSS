---
layout: docs
title: Documentation
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
permalink: /documentation/detectors/
---

## detectors.txt

detectors.txt defines channels associated with phases for a specific signal, where these detection areas are in relation to stop bar and size, and expected objects being detected.

<br>
<br>

<hr>
<br>

#### channel

channel is a unique identifier for each detection channel associated with a traffic signal phase.

<br>

#### signal_id

signal_id is a unique agency specific identifier for each traffic signal. It is used to reference the signal in other GTSS files.

<br>

#### phase

phase is a unique identifier for each phase of a traffic signal. It is used to reference the phase in other GTSS files.

<br>

#### description

description provides a brief explanation of the detection channel's purpose or function.

<br>

#### purpose

purpose indicates the intended use of the detection channel, such as "stop bar", "advanced" for detecting vehicles or "count" for counting vehicles.

<br>

#### vehicle_type

vehicle_type specifies the type of vehicle expected to be detected by the channel, such as "car", "truck", "bus", or "bicycle".

<br>

#### lane

lane indicates the lane number where the detection channel is located, relative to the stop bar. Counting starts from the inside lane near center of roadway at 1 and moves outward.

<br>

#### technology_type

technology_type specifies the type of detection technology used, such as "inductive_loop", "radar", "microwave", "lidar", "magnetometer", "hybrid" or "video".

<br>

#### mode

mode indicates the operational mode of the detection channel, such as "pulse", or "Presence".

#### length

length defines the length of the detection area in feet, measured between the start and end of the detector in the path of travel.

<br>

#### stopbar_setback_dist

stopbar_setback_dist indicates the distance in feet from the stop bar to the start of the detection area. This is used to define how far back from the stop bar the detection begins.

<br>
<br>

<hr>
<br>

### Example

```csv
channel,signal_id,phase,description,purpose,vehicle_type,lane,technology_type,mode,length,stopbar_setback_dist
1,1,1,"Main St Stop Bar detection","stop bar","car",1,"inductive loop","pulse",6,0
```
