# Dogger Logger

A simple remote logging platform.

## Setup

1. `git clone`
2. `cd` to this repository
3. `npm install`
4. Set the `DOGGER_LOGGER_KEY` environment variable to the key that will be used to validate requests.
5. `npm start`

## Usage
POST to `/log` with a body that looks like:
```
{
    "key": <YOUR KEY>
    "data": <DATA TO LOG>
}
```