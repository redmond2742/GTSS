---
layout: post
title: "GTSS: Building the Future of Traffic Signals from First Principles"
date: 2025-09-20
author: "GTSS Team"
tags: ["Future Focused Vision, Explore GTSS"]
icon: "🚌"
description: "Explore GTSS: the General Traffic Signal Specification that standardizes traffic signal data. Learn how first principles, open formats, and consistent intersection information can improve safety, efficiency, and innovation in traffic engineering."
---

> Stretch your Vision. See what can be, not just what is. -David J Schwartz

Aristotle believed that all knowledge begins with first principles—the most basic truths from which everything else can be built. If we apply that thinking to traffic signals assets, the first principles are clear: the configuration parameters behind the traffic signal.

Phase numbers, detector locations, speed limits, street names—these are the building blocks of every tool, model, and decision we make in traffic engineering.

In developing traffic tools such as [Safe Sightings of Signs and Signals (SSOSS)](https://github.com/redmond2742/SSOSS) and [Traffic Signal Kit](https://www.trafficsignalkit.com/), it becomes clear they all rely on one constant: accurate intersection configuration data. And every single time, it became clear how challenging it is to gather, format, and share this information in a way that works across different systems. That’s why [GTSS (General Traffic Signal Specification)](https://redmond2742.github.io/GTSS/) was created.

![Intersection Configuration in www.TrafficSignalKit.com]({{ "/assets/images/TrafficSignalKit.com-ConfigurationInput.png" | relative_url }})

## GTSS Basics

The 1.0 release of GTSS includes four foundational files:

**agencies.txt** – Who owns or manages the signals

**signals.txt** – Where the signals are

**phasing.txt** – How the signals operate

**detectors.txt** – How vehicles, bicycles, and pedestrians are detected

Optionally, all this information can be [made public similar to GTFS](https://transitfeeds.com/feeds). Fundamentally, these files are simple, but powerful—allowing agencies and developers to describe intersections in a consistent, open format. But this is just the beginning!

## A Vision for GTSS

The roadmap for GTSS extends well beyond these four files. By building on the v1.0 foundation, GTSS can enable a new generation of tools, checks, and services that are currently cost-prohibitive. Here are just a few possibilities:

### Safety Checks

Today, GTSS can already identify permissive phasing—highlighting where left-turn movements may create conflict. But with timing data added to GTSS, tools could automatically check for safety events at the intersection.

### Coordination Across Agencies

Signals don’t operate in isolation—they are part of corridors and networks. Yet today, coordination parameters such as cycle lengths, offsets, and splits often stay locked inside local systems.

If GTSS expands to include these timing parameters and schedules, agencies could compare coordination settings across jurisdictional boundaries. This would identify gaps or mismatches in synchronization to provide smoother travel for all users, regardless of city or county lines.

This is the next step toward true responsible cross-regional traffic management.

### Efficiency

Using an expanded version of GTSS that includes timing and phasing information, agencies can identify and address the factors that cause unnecessary delays and improve traffic flow through traffic signals.

Gap settings reflecting traffic demand
Identify locations where broken detectors are causing the most delays.

Each of these features would help pinpoint inefficiencies, prioritize maintenance, and provide insightful data-driven decision-making.

## Smarter Apps for the Public

One of the most exciting possibilities for GTSS lies in how it can unlock an ecosystem of apps and tools—just as [GTFS transformed public transit.](https://gtfs.org/resources/using-data/) With a clean, universal foundation of signal data, developers no longer have to reinvent the wheel every time they want to analyze or visualize traffic signals.

Imagine a navigation app that doesn’t just avoid congestion, but actually knows the signal timing ahead for accurate traffic estimates and real-time information to drivers. With timing, coordination, and schedule information included in GTSS, apps could:

- Estimate green time availability at upcoming signals for bikes and vehicles
- Integrate with navigation tools to reduce delays and emissions.
- Help transit vehicles and freight optimize their routes in real time.

This is more than just convenience—it’s acceleration. Instead of months of procurement, training, and setup, agencies could spin up decision-support tools in hours. Small cities without dedicated technical teams could benefit as much as large agencies. Private developers, traffic modelers, and researchers would be able to experiment and innovate faster, lowering barriers to entry and accelerating real progress.

## Why It Matters

This vision is all about making streets safer, more efficient, and more sustainable for everyone. Agencies save money by reducing redundant work and avoiding vendor lock-in. Planners and researchers gain insights that were once buried in proprietary, inaccessible systems. The public benefits from smoother travel, safer crossings, and smarter apps.

Just as GTFS became the foundation for an entire ecosystem of transit tools, GTSS can become the foundation for the next generation of traffic signal innovation.
