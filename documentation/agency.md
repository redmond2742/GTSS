---
layout: docs
title: Documentation
description: Complete guide to implementing and working with the General Traffic Signal Specification (GTSS).
permalink: /documentation/agency/
---

## agency.txt

agency.txt defines the agency information associated with the traffic signals defined in the other GTSS files. Parameters are listed below.

<br>
<br>

<hr>
<br>

#### agency_id

agency_id is a self-assigned unique identifier that distinctly identifies each agency. It is referenced in other GTSS files to associate signals and data with the corresponding agency.

<br>

#### agency_name

agency_name is the name of the agency responsible for the traffic signals.

<br>

#### agency_url

agency_url is the web address to learn more about the agency.

<br>

#### agency_timezone

agency_timezone is the timezone in which the agency operates, formatted as per IANA Time Zone Database (e.g., "America/New_York").

<br>

#### agency_email

agency_email is the contact email for the agency, used for inquiries related to GTSS configuration.

<br>
<br>

<hr>
<br>

### Example

```csv
agency_id,agency_name,agency_url,agency_timezone,agency_email
1,whooville,http://www.city-of-whooville.gov,America/New_York,contact@
whooville.gov
```
