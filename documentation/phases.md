---
layout: documentation
title: "Documentation: phases.txt"
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
permalink: /documentation/phases/
---

## phases.txt

phases.txt defines phases and the lane and movement type through the intersection, number of lanes, and links to an approach ID as defined in approaches.txt.

<br>
<br>

<hr>
<br>

#### phase

phase is a unique identifier for each phase of a traffic signal. It is used to reference the phase in other GTSS files.

<br>

#### approach_id

approach_id is an ID number associated with a specific approach for each traffic signal. It is defined in approaches.txt.

<br>

#### signal_id

signal_id is a unique agency specific identifier for each traffic signal. It is used to reference the traffic signal in other GTSS files.

<br>

#### movement_type

movement_type describes the type of movement allowed during the phase, such as "L" for Left Turn, "T" for through. Additional Encodings shown in table below.

<center>
<table>
  <thead>
    <tr>
      <th>Encoding</th>
      <th>Phase Movement</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>T</td><td>Through</td></tr>
    <tr><td>L</td><td>Left</td></tr>
    <tr><td>LT</td><td>Left Through Shared Lane</td></tr>
    <tr><td>TL</td><td>Permissive Left</td></tr>
    <tr><td>LPP</td><td>Protected-Permissive Left</td></tr>
    <tr><td>FYA</td><td>Flashing Yellow Arrow</td></tr>
    <tr><td>U</td><td>U-Turn</td></tr>
    <tr><td>R</td><td>Right Turn</td></tr>
    <tr><td>TR</td><td>Through Right</td></tr>
    <tr><td>PED</td><td>Pedestrian</td></tr>
  </tbody>
</table>
</center>

<br>

#### num_of_lanes

num_of_lanes indicates the number of lanes available at the stop bar for the movement during the phase.

<br>

#### pedX

pedX is an integer value indicating whether the defined phase includes a pedestrian phase and the approach it corresponds to as shown in the table below.

<center>
<table>
  <thead>
    <tr>
      <th>PedX Integer</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>No Crosswalk</td></tr>
    <tr><td>1</td><td>One Crosswalk on the same approach as the phase assigned</td></tr>
    <tr><td>2</td><td>Two Crosswalks show, one on the phase approach and one 180 degrees from the approach phase</td></tr>
    <tr><td>3</td><td>One Crosswalk, 180 degrees from approach</td></tr>
    <tr><td>4</td><td>One Diagonal Crosswalk</td></tr>
    <tr><td>5</td><td>One Diagonal Crosswalk, 180 degrees from approach</td></tr>
    <tr><td>6</td><td>2 Diagonal Crosswalks</td></tr>
    <tr><td>7</td><td>All Crosswalks in all Directions</td></tr>

  </tbody>
</table>
</center>

<br>

#### crosswalk_length

crosswalk_length provides estimated or actual distance values for pedestrian crosswalks. Refer to table below for types of estimation methods if available.

<center>
<table>
  <thead>
    <tr>
      <th>Crosswalk_Length Encoding</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>LE-#</td><td>Lane Estimated crosswalk distance (automatically calculated)</td></tr>
    <tr><td>TE-#</td><td>Time Estimated crosswalk distance (if available, prefer to select the shorter of LE and TE)</td></tr>
    <tr><td>#</td><td>Measured crosswalk distance in feet. This overrides lane and time estimated lengths</td></tr>

  </tbody>
</table>
</center>

<br>
<br>

<hr>
<br>

### Example

```csv
phase,approach_id,signal_id,movement_type,num_of_lanes,pedX,crosswalk_length
2,1,1,T,2,1,60
```
