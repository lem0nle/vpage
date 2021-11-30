---
title: Project | HOME
meta:
  - name: description
    content: Project home page
layout: home
---

Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

* Secure by default. No file, network, or environment access, unless explicitly enabled.
* Supports TypeScript out of the box.
* Ships only a single executable file.
* Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
* Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: deno.land/std
* Has a number of companies interested in using and exploring Deno

## Installation
Deno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from the releases page.

Shell (Mac, Linux):
```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
```

PowerShell (Windows):
```bash
$ iwr https://deno.land/x/install/install.ps1 -useb | iex
```

Homebrew (Mac):
```bash
$ brew install deno
```

## Getting Started
Try running a simple program:

```bash
$ deno run https://deno.land/std/examples/welcome.ts
```

Or a more complex one:
```ts
import { serve } from "https://deno.land/std@0.116.0/http/server.ts";

console.log("http://localhost:8000/");
serve((req) => new Response("Hello World\n"), { addr: ":8000" });
```

You can find a more in depth introduction, examples, and environment setup guides in the manual.

## Runtime Documentation
The basic runtime documentation for Deno can be found on doc.deno.land.

Deno comes with a manual which contains more in depth explanations about the more complex functions of the runtime, an introduction to the concepts that Deno is built on, details about the internals of Deno, how to embed Deno in your own application and how to extend Deno using Rust plugins.

The manual also contains information about the built in tools that Deno provides.
