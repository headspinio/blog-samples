# Testing with Puppeteer- A Complete Guide

This directory is sample code for Testing with Puppeteer- A Complete Guide

## Setup

1. Setup Nodejs environment
    - e.g. https://nodejs.dev/learn/how-to-install-nodejs
2. Clone this repository
    1. `git clone git@github.com:headspinio/blog-samples.git`
    2. `cd blog-samples/02-testing-with-puppeteer`
3. Install dependencies
    - `npm install`

## Run the local server

In `blog-samples/02-testing-with-puppeteer`

1. `cd server`
2. `node server.js`

## Run tests

In `blog-samples/02-testing-with-puppeteer` on another terminal

- `node test/fill-form.js`
    - Fill texts in input fields
- `node test/title.js`
    - Print the title command result
- `node test/login.js`
    - Fill email and password in input fields
- `node test/github-headspinio.js`
    - Open `https://github.com/headspinio`

## Run tests on HeadSpin

1. Start a browser session via `hs connect browser` command
2. Run `node test/github-headspinio.js`
    - `github-headspinio.js` scenario will open `https://github.com/headspinio` on the remote browser, and take a screenshot.
