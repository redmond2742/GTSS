---
layout: documentation
title: Documentation
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
permalink: /documentation/phases/
---

## phases.txt

phases.txt defines phases and the lane and movement type through the intersection, number of lanes, compass bearing of the approach and the posted speed limit.

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

#### movement_type

movement_type describes the type of movement allowed during the phase, such as "L" for Left Turn, "T" for through, or "TL" for shared through-left, "R" for right_turn, or "FYA" for flashing yellow arrow or "U" for U-turn.

<br>

#### num_of_lanes

num_of_lanes indicates the number of lanes available at the stop bar for the movement during the phase.

<br>

#### compass_bearing

compass_bearing indicates the compass bearing of the approach to the intersection, expressed in degrees (0-360).

<br>

#### posted_speed

posted_speed indicates the posted speed limit for the approach to the intersection, expressed in miles per hour (mph).

<br>

#### is_overlap

is_overlap is a boolean value indicating whether the phase overlaps with another phase. It is used to manage simultaneous movements at the intersection.

<br>
<br>

<hr>
<br>

### Example

```csv
phase,signal_id,movement_type,num_of_lanes,compass_bearing,posted_speed,is_overlap
1,1,L,2,90,35,false
```
