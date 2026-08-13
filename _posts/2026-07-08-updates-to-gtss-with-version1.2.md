---  
layout: post  
title: "GTSS Version 1.2 \- Enabling Safety Analysis"  
date: 2026-07-08  
author: "GTSS Team"  
tags: \["release"\]  
description: "Slip Lanes, Leading Pedestrian Intervals, Crosswalk Lengths and Orientations of Pedestrian Phases."  
---

The [General Traffic Signal Specification (GTSS)](https://redmond2742.github.io/GTSS/) was created with a simple goal:

\> Make traffic signal and intersection configuration easier, more consistent, and simpler to share. This will allow agencies, researchers, and developers to rapidly prototype new software tools and analytics.

This latest update adds additional configuration related to traffic safety analysis and countermeasure evaluation. GTSS provides a simple, open, and machine-readable standard that will enable AI-enabled developers to rapidly understand traffic signal configurations without custom data translation, accelerating the development of interoperable tools that improve safety and operations.

The following five updates are included in this Version 1.2 release.

1. ## Free Right Lanes in approaches.txt

GTSSv1.2 adds an encoding for “slip lanes” or Free Right lanes approaching an intersection. They are not phased so they have been added to the approaches.txt file and encoded with “FR”.

This encoding allows for the number of lanes (\#), and whether there is a pedestrian crosswalk or not (FR-P). In some cases, these free-right treatments include additional pedestrian safety improvements, such as raised crosswalks or modified approach angles designed to slow approaching vehicles. This can be indicated with the I added for Pedestrian Improvement (\#-FR-PI). The goal here is to quickly determine where safety improvements have been made.

| Free Right Encoding | Explination                             |
| :------------------ | :-------------------------------------- |
| \#-FR               | Free Right for Vehicles                 |
| \#-FR-P             | Free Right with Pedestrian Crossing     |
| \#-FR-PI            | Free Right with Pedestrian Improvements |

2. ## Protected-Permissive Left Turns in phases.txt

Adding the ability to encode phased left turns as Protected-Permissive lefts. This is done by setting the phase to LPP and is displayed accordingly in the phase diagram.

3. ## Leading Pedestrian Interval in timing.txt

The Leading pedestrian interval (LPI) allows pedestrians to have a few seconds of walk time before the vehicle's green light. [LPI’s have been shown to be a cost-effective countermeasure to improve pedestrian safety and reduce vehicle and pedestrian conflicts](https://bellevuewa.gov/sites/default/files/media/pdf_document/2022/leading-pedestrian-intervals-research-paper-010322.pdf). Now timing.txt includes the option to include a duration for this LPI variable as a number represented in seconds.

4. ## Pedestrian Crossing Types in phases.txt

Configuring pedestrian crossings is another aspect that needs attention with the last release of GTSS. Previously, this was simply a boolean value (0 or 1). However, many intersections have pedestrian crossings that don’t always align with the approach, and other intersections have diagonal crossings. To account for this, in phases.txt, PedX has been updated to allow for integers. This allows for backwards compatibility with the previously accepted 0 and 1, and now extends to multiple other types of crossings. Below is a table of these numbered selections.

| PedX Integer | Meaning                                                                                    |
| :----------- | :----------------------------------------------------------------------------------------- |
| 0            | No Crosswalk                                                                               |
| 1            | One crosswalk on the same approach as the phase assigned                                   |
| 2            | Two crosswalks show, one on the phase approach and one 180 degrees from the approach phase |
| 3            | One crosswalk, 180 degrees from approach                                                   |
| 4            | One diagonal crosswalk                                                                     |
| 5            | One diagonal Crosswalk, 180 degrees                                                        |
| 6            | Both Diagonal Crosswalks                                                                   |
| 7            | All Crosswalks in all directions (Full Pedestrian Scramble)                                |

5. ## Crosswalk Length, Estimated from lanes, Estimated from Time, and entered value (phases.txt)

Knowing the crosswalk distance is an important aspect of intersection safety. This includes knowing where the longest crosswalks are, to cross-checking timing values, and making sure they meet timing standards.

| Crosswalk Code | Code Explanation                                                                       |
| :------------- | :------------------------------------------------------------------------------------- |
| LE-\#          | Lane Estimated crosswalk distance (automatically calculated)                           |
| TE-\#          | Time Estimated crosswalk distance (If available, will select the shorter of LE and TE) |
| \#             | Measured crosswalk distance in feet (Overrides Lane and Time estimated lengths)        |

With this crosswalk estimation method, it builds off existing information from the approach phases and timing values to estimate the crosswalk length if one is not provided. If a measured crosswalk length is provided, this supersedes the estimated lengths.

## An Extensible Framework for Traffic Signals

Each of these changes are updated in the [GTSS Documentation](https://redmond2742.github.io/GTSS/documentation/) and [GTSS Builder App](https://app.gtss.dev/) ([app.gtss.dev](https://app.gtss.dev/)), making it straightforward to modify existing GTSS text files with these updated parameters.

Even with these Version 1.2 updates, GTSS continues to serve as a simple way to create simplified real-world traffic signal layouts, configuration, and timing in a structured machine-digestible format. Since GTSS is extendable with human-readable text files, [just like GTFS](https://redmond2742.github.io/GTSS/2025/08/16/history-of-GTFS.html), it has potential for anyone to adopt new categories of structured traffic signal data for whatever purpose you desire.

- Do you wish you could map all your traffic signals that include a battery backup?
  - Make an `equipment.txt` file.
- Looking to analyze collision data with your signal timing?
- Make a `collisions.txt` file with timestamps and directions.
- Prefer to analyze countermeasures implemented?
- Make a `countermeasures.txt` file showing various improvements.
- Looking to see where countermeasures have been effective?
  - Overlay your `collisions.txt` file with the `countermeasures.txt` file, and it’s possible to see what changes are working and what’s not.

The goal of GTSS is not to define every possible piece of traffic signal data—it is to provide a simple foundation that makes it easy to define, share, and build upon that data.
