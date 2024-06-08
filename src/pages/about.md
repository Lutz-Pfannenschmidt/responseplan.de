---
layout: "../layouts/Markdown.astro"
title: "About"
---

# About ResponsePlan
ResponsePlan is my "Projektkurs" for my Abitur (high-school diploma). It is a web application that allows users to create and manage network scans taken using [Nmap](https://nmap.org/). The application is built using [Go (Golang)](https://golang.org/) and [HTMX](https://htmx.org/). The backend is built using [httprouter](https://github.com/julienschmidt/httprouter) and the frontend is built using [Tailwind CSS](https://tailwindcss.com/).

## Features
- [x] Create and manage network scans
- [x] View detailed information about each machine
- [x] Network Scanning
  - [x] Simple configuration
    - [x] IP Range
    - [x] Port Range / Top Ports
    - [x] OS Detection
  - [x] Advanced configuration
- [ ] Export Network Map
  - [ ] As SVG
  - [ ] As PDF
  - [x] As JSON
- [x] Read and write data to a file for persistence
- [x] WebSSH