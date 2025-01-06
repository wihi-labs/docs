---
title: API Overview
outline: deep
---

WiHi exposes a RESTful API for programmatic access to the platform.

## **Base URL**

All API endpoints are prefixed with the base URL: `https://api.wihi.cc`

## **Authentication**

WiHi API employs **API key**--based authentication to ensure secure access. To interact with the API, you must include your API key in the request headers.

**Header Format:**

```sh
Authorization: Bearer YOUR_API_KEY
```

Obtain your API key by signing up on [wihi.cc](https://www.wihi.cc)

## Routes

[`/stations`](/api/stations): station management and station data submission

[`/users`](/api/users): user management
