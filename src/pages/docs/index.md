---
layout: "../../layouts/Markdown.astro"
title: "Docs"
---

# ResponsePlan Documentation
This is the documentation for the ResponsePlan project. It is a work in progress and will be updated as the project progresses.

## Table of Contents

## Installation
1. Download the latest release for your os from the [Releases](https://github.com/Lutz-Pfannenschmidt/ResponsePlan/releases) page.
   1. If your os is not listed, you can build from source by following the instructions in the [Building from Source](#building-from-source) section.
2. Move the executable anywhere you like on your system.
3. ***[Optional]*** Rename the executable to `ResponsePlan` if you like.

## Building from Source
1. Clone the repository to your system.
2. Install the latest version of the [Go programming language](https://golang.org/).
3. Navigate to the root of the repository.
4. Run the following command:
```bash
make build
```
5. The executable for your system will be created in the dist folder.

## Usage
```bash
./ResponsePlan
```
That's it! The program will start and you can begin using it.

### Advanced Usage
You can pass the following flags to the program to change its behavior:
- `-m` / `--memory` - Memory only mode. This will disable file storage.
- `-d` / `--debug` - Enable debug mode. This will print additional information to the console.
- `-h` / `--help` - Print the help message.
- `-p` / `--port` `<port>` - Change the port the server listens on. Default is 1337.
- `-e` / `--expose` - Expose the server to the lan. This will allow other devices to connect to the server. ***[Warning]*** This can be a security risk.
- `-o` / `--out` `<filename>` - The file to save the data to. Default is `data.responseplan`.
- `-i` / `--in` `<filename>` - The file to load the data from. Default is `data.responseplan`.