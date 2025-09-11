---
layout: documentation
title: Documentation
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
---

### GTSS Overview

Welcome to the comprehensive documentation for the General Traffic Signal Specification. Whether you're a traffic engineer, system integrator, or city planner, this guide will help you understand and implement GTSS-compliant traffic signal information. GTSS Consits of 4 text (.txt) files each with their own set of parameters seperated by a comma.
<br>
<br>

<hr>
<br>

#### agency.txt

agency.txt identifies the agency information associated with the traffic signals defined in the other GTSS files. Parameters include the agency ID, name, web address, timezone and email contact.
<br>
<br>

#### signals.txt

signals.txt lists signal ID, latitude and longitude information for the center of the intersection, and street names associated with each direction.
<br>
<br>

#### phases.txt

phases.txt defines phases and the lane and movement type through the intersection, number of lanes, compass bearing of the approach and the posted speed limit.
<br>
<br>

#### detectors.txt

detectors.txt defines channels associated with phases for a specific signal, where these detection areas are in relation to stop bar and size, and expected objects are detected.
