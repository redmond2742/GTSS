---
layout: documentation
title: Documentation
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
permalink: /documentation/basic_timings/
---


## basic_timings.txt

basic_timings.txt defines core signal timing parameters for each phase, including minimum green, yellow, all-red, pedestrian timings, and leading pedestrian intervals (LPIs).

<br>
<br>

<hr>
<br>

#### phase

phase is a unique identifier for each phase of a traffic signal. It is used to reference the phase in other GTSS files.

<br>

#### signal_id

signal_id is a unique agency specific identifier for each traffic signal. It is used to reference the signal in other GTSS files.

<br>

#### ped_walk

ped_walk is the pedestrian walk during which the WALK indication is displayed and pedestrians are permitted to begin crossing.

<br>

#### ped_clearance

ped_clearance is the pedesrian clearance interval defined for the flashing DON"T WALK time provided for pedestrians to finish crossing safely.

<br>

#### leading_ped_interval

leading_ped_interval is the Leading Pedestrian Interval (LPI) time to provide a head start for pedestrians before conflicting vehicle movements recive a green.

<br>

#### min_green

min_green is the minimum green time served for a phase once it is activated.

<br>

#### max_green

max_green is the maximum allowable green time a phase can receive before it must terminate.

<br>

#### yellow

yellow is the change interval following green that warns users of an impending red indication.

<br>

#### all_red

all_red is the clearance interval after yellow when all approaches are red to allow vehicles to safely clear the intersection

<br>

#### veh_recall_type

veh_recall_type defines whether a phase is placed in recall to serve vehicles without requiring detection. See table for options.


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
      <th>Encoding</th>
      <th>Vehicle Recall Types Defined</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>None</td><td>The phase is not automatically served and will only run when a vehicle call is detected</td></tr>
    <tr><td>Min</td><td>The phase is automatically served and will run to its minimum green time if no vehicle call is present</td></tr>
    <tr><td>Max</td><td>The phase is automatically served and will run up to its maximum green time regardless of vehicle detection</td></tr>
    <tr><td>Soft</td><td>The phase is eligible to be served without detection but may be skipped or terminated early based on controller logic.</td></tr>

  </tbody>
</table>
</center>

<br>

### Example

```csv
phase,signal_id,ped_walk,ped_clearance,leading_ped_interval,min_green,max_green,yellow,all-red,veh_recall_type,ped_recall
1,1,7,25,3,8,40,4,2,Min,true
```
