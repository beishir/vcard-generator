# vcard-generator
This is a TypeScript written for [Deno Deploy](https://deno.com/deploy/) which provides an endpoint which accepts a JSON `POST` request and returns a vCard file.

The endpoint replies to any path to allow easier control of the output file name.

## Running

Although this project is indented to run with Deno Deploy, it may be ran anywhere with [Deno](https://deno.land) and [deployctl](https://deno.com/deploy/docs/deployctl/)

```bash
deployctl run mod.ts
```

## Development Mode
`deployctl` allows running in 'watch' mode, automatically restarting when files are changed
```bash
deployctl run --watch mod.ts
```

## License

This project is licensed 