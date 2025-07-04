---
layout: default
title: WebFinger
---

## What is WebFinger?

A way to attach information to an email address, or other online resource.

From [the official spec](https://tools.ietf.org/html/rfc7033):

> WebFinger is used to discover information about people or other entities on
> the Internet that are identified by a URI using standard Hypertext Transfer
> Protocol (HTTP) methods over a secure transport. A WebFinger resource
> returns a JavaScript Object Notation (JSON) object describing the entity that
> is queried. The JSON object is referred to as the JSON Resource Descriptor
> (JRD).
>
> For a person, the type of information that might be discoverable via
> WebFinger includes a personal profile address, identity service, telephone
> number, or preferred avatar. For other entities on the Internet, a WebFinger
> resource might return JRDs containing link relations that enable a client to
> discover, for example, that a printer can print in color on A4 paper, the
> physical location of a server, or other static information.
