---
layout: post
title: "GTSS Version 1.1 - Flexible Foundation for Every Intersection"
date: 2025-01-04
author: "GTSS Team"
tags: ["release"]
description: "New approaches.txt and basic_timings.txt to add flexibility and improved pedestrian safety functionality."
---

The [General Traffic Signal Specification (GTSS)](https://redmond2742.github.io/GTSS/) was created with a simple goal:

> make intersection configuration easier and more consistent to rapidly prototype new software tools.

As GTSS was peer reviewed and used by practitioners, it became clear that scaling it across many agencies and intersection types requires some modifications for greater flexibility.

**GTSS v1.1 is the first step in that direction.**

This release introduces two important additions:

- [approaches.txt](https://redmond2742.github.io/GTSS/documentation/approaches/)

- [basic_timings.txt](https://redmond2742.github.io/GTSS/documentation/basic_timings/)

Together, they make GTSS more expressive, more general, and better aligned with how traffic engineers actually think about intersections.

---

## **Introducing approaches.txt**

In GTSS v1.1, intersection street approaches are now explicitly defined in a dedicated file: approaches.txt

Instead of assigning street names and speed limits directly to phases, GTSS now assigns them to approaches, which better reflects the physical world.

This unlocks several key improvements:

- An intersection can have multiple approaches with different street names

- Street names, street compass bearings and posted speeds are defined once, consistently

- Multiple phases can be assigned detailed approach information

### The approaches.txt Format

Each row in approaches.txt describes a physical approach to the intersection. Fields include:

- Approach ID
- Signal ID
- Street name
- Compass bearing
- Posted speed limit

#### Approaches.txt format

> approach_id, signal_id, street_name, compass_bearing, posted_speed

Where, approach_id is now linked in phases.txt.

---

## **Introducing basic_timings.txt**

GTSS v1.1 also introduces a new optional file, basic_timings.txt. This file adds essential timing parameters without turning GTSS into a full timing specification. Its goal is not to replace detailed timing sheets, but to enable safety checks, support analytics, allow real-time estimation, and open the door to pedestrian-focused tools.

### The basic_timings.txt File

Each row describes a single phase basic timing parameters. These include:

- Phase
- Signal_ID
- Minimum Green
- Maximum Green
- Yellow Change Interval
- All Clearance Interval
- Pedestrian Walk Interval
- Pedestrian Clearance Interval
- Leading Pedestrian Interval
- Vehicle Recall Type
- Pedestrian Recall

#### basic_timing.txt format

> phase, signal_id, ped_walk, ped_clearance, lpi, min_green, max_green, yellow, all_red, veh_recall_type

With basic_timings.txt, GTSS can now support simplified pedestrian safety audits, [red and yellow clearance analysis](https://onlinepubs.trb.org/onlinepubs/nchrp/docs/NCHRP03-95_FR.pdf), timing sanity checks, and timing simulations. Including [Leading Pedestrian Intervals](https://highways.dot.gov/safety/proven-safety-countermeasures/leading-pedestrian-interval) is intentional, as pedestrian safety is increasingly central to signal operations.

---

## **The Benefits of GTSS v1.1**

Early versions of GTSS leaned heavily on phases as the primary organizing structure. While effective, this approach showed limitations when applied to Multi-phase approaches and complex street naming conventions.

GTSS v1.1 shifts the focus slightly from phases alone to approaches as first-class objects, while preserving compatibility with phase-based control logic. Adding basic timing values further expands GTSS into a more capable and [pedestrian safety-focused](https://en.wikipedia.org/wiki/Vision_Zero) specification.
