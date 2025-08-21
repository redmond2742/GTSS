---
layout: post
title: "GTSS: Building the Future of Traffic Signals from First Principles"
date: 2025-08-16
author: "Matt"
tags: ["GTSS"]
icon: "🔮"
description: "This post lays out a vision for GTSS as a simple, open standard for traffic signal data that enables safer, more efficient, and interoperable streets while fostering innovation in traffic management tools and applications."
---

Aristotle believed that all knowledge begins with first principles—the most basic truths from which everything else can be built. If we apply that thinking to traffic signals, the first principles are clear: the configuration parameters behind the traffic signal.

Phase numbers, detector locations, speed limits, offsets—these are the building blocks of every tool, model, and decision we make in traffic engineering.

In developing traffic tools such as [Safe Sightings of Signs and Signals](https://caltap.org/ssoss) ([SSOSS](https://www.youtube.com/watch?v=VbKtDvSXblM)) and [Traffic Signal Kit](https://www.trafficsignalkit.com/), I’ve learned that they all rely on one constant: accurate intersection configuration data. And every single time, it became clear how challenging it is to gather, format, and share this information in a way that works across different systems. That’s why GTSS (General Traffic Signal Specification) was created.

![][image1]

## GTSS Basics

The 1.0 release of GTSS includes four foundational files:

- **agency.txt** — identifies the agnecy information associated with the traffic signals defined in the other GTSS files. Parameters include the agency ID, name, web address, timezone and email contact.
- **signals.txt** — lists signal ID, latitude and longitude information for the center of the intersection, and street names associated with each direction.
- **phases.txt** — defines phases and the lane and movement type through the intersection, number of lanes, compass bearing of the approach and the posted speed limit.
- **detectors.txt** — defines channels associated with phases for a specific signal, where these detection areas are in relation to stop bar and size, and expected objects are detected.

They are simple, but powerful—allowing agencies and developers to describe intersections in a consistent, open format. But this is just the beginning\!

## A Vision for GTSS

> _Stretch your Vision. See what can be, not just what is._ \-David J Schwartz

The roadmap for GTSS extends well beyond these four files. Building off v1.0, GTSS can enable a new generation of tools, checks, and services that are currently cost-prohibitive or only offered by a single vendor. Here are just a few possibilities:

**Safety Checks**

Today, GTSS can already identify permissive phasing—highlighting where left-turn movements may create conflict. But with timing data added to GTSS and high-resolution data analyzed, GTSS-enabled tools could automatically check for:

- Determining where yellow and red light runners are most frequently occurring
- Permissive phasing with a high volume of pedestrian crossings
- Checking Green, Yellow, and Red time values to ensure safety for all users

Similar to ATSPM, agencies could quickly scan their system for hidden safety issues—before crashes reveal them.

**Coordination Across Agencies**

Signals don’t operate in isolation—they are part of corridors and networks. Yet today, coordination parameters such as cycle lengths, offsets, and splits often stay locked inside local systems.

If GTSS expands to include these, agencies could automatically compare coordination settings across jurisdictional boundaries. This would identify gaps or mismatches in synchronization to provide smoother travel for all users, regardless of city or county lines.

This is the next step toward true responsible cross-regional traffic management.

**Efficiency**

Using an expanded version of GTSS that includes timing and phasing information, while also analyzing high-resolution controller logs, agencies can identify and address the factors that cause unnecessary delays and improve traffic flow through traffic signals.

- Gap settings reflecting traffic demand
- Identify locations where broken detectors are causing the most delays
- Optimizing phase sequences

Each of these features would help pinpoint inefficiencies, prioritize maintenance and provide insightful data-driven decision making.

## Smarter Apps for the Public

One of the most exciting possibilities for GTSS lies in how it can unlock an ecosystem of apps and tools—just as GTFS transformed public transit. With a clean, universal foundation of signal data, developers no longer have to reinvent the wheel every time they want to analyze or visualize traffic signals.

Imagine a navigation app that doesn’t just avoid congestion, but actually knows the signal timing ahead for accurate traffic estimates and real-time information to drivers. With timing, coordination, and schedule information included, apps could:

1. Estimate green time availability at upcoming signals.
2. Integrate with navigation tools to reduce delays and emissions.
3. Help transit vehicles and freight optimize their routes in real time.

This is more than just convenience—it’s acceleration. Instead of months of procurement, training, and setup, agencies could spin up decision-support tools in hours. Small cities without dedicated technical teams could benefit as much as large agencies. Private developers and researchers would be able to experiment and innovate faster, lowering barriers to entry.

## Why It Matters

This vision is all about making streets safer, more efficient, and more sustainable for everyone. Agencies save money by reducing redundant work and avoiding vendor lock-in. Planners and researchers gain insights that were once buried in proprietary, inaccessible systems. The public benefits from smoother travel, safer crossings, and smarter apps.

Just as GTFS became the foundation for an entire ecosystem of transit tools, GTSS can become the foundation for the next generation of traffic signal innovation.
