# vcard-generator
A TypeScript project for [Deno Deploy](https://deno.com/deploy/) that provides an endpoint which accepts a JSON `POST` request and returns a vCard file.

The endpoint replies to any path to allow easier control of the output file name.

## Running Locally

Although this project is indented to run with Deno Deploy, it may be ran anywhere with [Deno](https://deno.land) and [deployctl](https://deno.com/deploy/docs/deployctl/)

```bash
deployctl run mod.ts
```

## Running In Development Mode
`deployctl` allows running in 'watch' mode, automatically restarting when files are changed
```bash
deployctl run --watch mod.ts
```

## Usage
Send a post request to the endpoint with a JSON object containing one or more of the following items:
  - cellPhone
  - pagerPhone
  - email
  - workEmail
  - firstName
  - formattedName
  - gender
  - homePhone
  - homeFax
  - lastName
  - middleName
  - namePrefix
  - nameSuffix
  - nickname
  - note
  - organization
  - otherEmail
  - otherPhone
  - role
  - source
  - title
  - url
  - workUrl
  - workPhone
  - workFax

  ### Example POST DATA:
  ```json
  {
    "firstName":"Robert",
    "lastName":"Smith",
    "nickname":"Bob",
    "title":"Owner",
    "organization":"BobCo",
    "cellPhone":"+1 555-555-5555",
    "note":"Has 3 kids named Bob"
  }
  ```
  ### Example Returned Body
  ```
  BEGIN:VCARD
  VERSION:4
  FN:Robert Smith
  N:Smith;Robert;;;
  NICKNAME:Bob
  TEL;VALUE=uri;TYPE="voice,cell":tel:+1 555-555-5555
  TITLE:Owner
  ORG:BobCo
  NOTE:Has 3 kids named Bob
  REV:2021-10-03T02:16:47.133Z
  X-ABShowAs:COMPANY
  END:VCARD
  ```

## Status
All items listed above are implimented.  Several attributes not yet implemented:
  - anniversary
  - birthday
  - homeAddress
  - workAddress
  - photo
  - logo
  - socialUrls
