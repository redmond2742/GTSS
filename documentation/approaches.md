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

#### free_right

free_right indicates number of free right lanes, if a pedestrian crossing is present and includes the option to indicate if improvements have been made to the pedestrian crossings.

<style>
  table {
    width: 50%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    font-size: 14px;
    margin: 20px 0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  thead {
    background: #2c3e50;
    color: #fff;
    text-align: left;
  }

  th, td {
    padding: 12px 16px;
  }

  tbody tr:nth-child(even) {
    background: #f9f9f9;
  }

  tbody tr:hover {
    background: #eaf2f8;
  }

  th:first-child, td:first-child {
    font-weight: bold;
    text-align: center;
    width: 100px;
  }
</style>
<center>
<table>
  <thead>
    <tr>
      <th>Free Right Encoding</th>
      <th>Explination</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>#-FR</td><td>Free Right for Vehicles</td></tr>
    <tr><td>#-FR-P</td><td>Free Right with Pedestrian Crossing</td></tr>
    <tr><td>#-FR-PI</td><td>Free Right with Pedestrian Improvements</td></tr>
  </tbody>
</table>
</center>

<br>
<br>

<hr>
<br>

### Example

```csv
approach_id,signal_id,street_name,compass_bearing,posted_speed, free_right
1,1,main street,90,35,1-FR-P
```
