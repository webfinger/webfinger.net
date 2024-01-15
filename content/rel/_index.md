---
title: "Link Relations"
---

## Link Relations

All WebFinger links have a `rel` property that identifies the type of the link relation.
Values can be URIs or a [registered relation type](https://www.iana.org/assignments/link-relations/).
Any valid rel value can be used in WebFinger links.

The following rel values have been defined in the webfinger.net namespace to address common WebFinger use cases.

### `http://webfinger.net/rel/avatar` {#avatar}

The link relation `http://webfinger.net/rel/avatar` identifies a person's
avatar and may be in any standard image format (e.g., PNG, JPEG, GIF).

### `http://webfinger.net/rel/profile-page` {#profile-page}

The link relation `http://webfinger.net/rel/profile-page` identifies the main
home/profile page that a human should visit when getting info about that
webfinger account. It says nothing about the content-type (or microformats),
but it's likely text/html if it's for users.

## Additional references:

* [WebFinger section 4.4.4.1](https://www.rfc-editor.org/rfc/rfc7033#section-4.4.4.1) defines the rel property
* [Web Linking (RFC 8288)](https://www.rfc-editor.org/rfc/rfc8288.html) defines the Link Relation Type Registry and provides more detail on links in general.
* The microformats.org wiki maintains a page of [existing rel values](https://microformats.org/wiki/existing-rel-values) used in the wild.
