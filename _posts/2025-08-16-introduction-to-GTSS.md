---
layout: post
title: "Introducing a General Traffic Signal Specification (GTSS)"
date: 2025-08-16
author: "GTSS Team"
tags: ["release"]
icon: "🚀"
description: "GTSS introduces a simple, consistent format to standardize and share traffic signal configuration data."
---

Configuring traffic signals shouldn’t feel like reinventing the wheel every time. Information like phasing, detector channels, and the physical location of each signal is currently stored and managed in countless incompatible formats across different traffic systems. This patchwork approach makes setup slow, error-prone, and difficult to scale. While standards such as [UTDF](https://ops.fhwa.dot.gov/arterial_mgmt/rpt/sig_tim_proc/sect_3.htm#:~:text=UTDF%20can%20be%20used%20to,and%20traffic%20signal%20controller%20hardware.) and [SPaT](https://www.aldridgetrafficcontrollers.com.au/products/traffic-signal-controllers/atsc4/spat-data) address specific use cases, they don’t provide a universal, widely adopted format for sharing and managing core traffic signal configuration. It’s time for a simpler, more consistent way to handle signal data.

Imagine if there was a general specification -- one that could serve all these needs, cut vendor lock-in, eliminate repetitive work ([Do Not Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)), and provide a simplified, unified view of traffic signal data.

We’ve seen this transformation before in transit with the [General Transit Feed Specification](https://gtfs.org/) ([GTFS](https://en.wikipedia.org/wiki/GTFS)). This simple set of seven text files gave transit agencies a standard way to publish routes, stops, and schedules. The result? Massive time, cost, and effort savings for agencies, a thriving ecosystem of developers building free apps, and tools that benefit transit agencies and riders alike. Publicly publishing and following an open standard turned out to be a huge value add for everyone involved.

[GTFS proved something powerful](https://etatransit.com/blog/navigating-the-transit-revolution-unveiling-the-power-of-gtfs/): a simple, open, text-based format can unify an entire industry. Before GTFS, transit data was trapped in proprietary formats or unpublished, making it expensive and time-consuming to share routes, stops, and schedules. After GTFS, agencies could publish their data once, in a standard format, and instantly make it usable by hundreds of tools and millions of people. That same winning formula can be applied to traffic signals — and that’s exactly the vision behind the General Traffic Signal Specification (GTSS).

The initial v1.0 of GTSS is intentionally simple. Only four text files are required:

- **agency.txt** — identifies the agnecy information associated with the traffic signals defined in the other GTSS files. Parameters include the agency ID, name, web address, timezone and email contact.
- **signals.txt** — lists signal ID, latitude and longitude information for the center of the intersection, and street names associated with each direction.
- **phases.txt** — defines phases and the lane and movement type through the intersection, number of lanes, compass bearing of the approach and the posted speed limit.
- **detectors.txt** — defines channels associated with phases for a specific signal, where these detection areas are in relation to stop bar and size, and expected objects are detected.

With just these four files, the potential for rapid implementation and the development of entirely new tools becomes possible. What once required complex systems can now be built with simple, accessible data. Some of the improvements this enables include:

- [Automated Traffic Signal Performance Measures](https://ops.fhwa.dot.gov/publications/fhwahop20002/ch2.htm) ([ATSPM](https://traffic.dot.ga.gov/ATSPM)) — GTSS provides standardized intersection configuration, making ATSPM setup faster, more accurate, and easier to maintain.

* Mapping and visualization tools — Every signal can be geolocated and displayed on interactive maps without extra work.

* Instant intersection diagrams — The phase and approach files allow for auto-generated phase and movement diagrams, revealing protected and permissive phasing.

* Innovation ecosystem — With an open, common format, third parties can build analytics dashboards, simulation tools, and safety applications without reinventing the wheel for each agency.

The goal of GTSS isn’t just to make life easier for traffic engineers — it’s to create a universal foundation for sharing and using traffic signal data across agencies, vendors, researchers, and even connected and autonomous vehicles. Just as GTFS transformed how the world interacts with public transit, GTSS has the potential to do the same for traffic signals: breaking down silos, enabling interoperability, and accelerating innovation. For those who want to dive deeper into the technical details, the GTSS Docs provide a comprehensive guide to the specification and its files.
