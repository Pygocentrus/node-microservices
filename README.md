# Miscroservices architecture using Seneca & Docker

### Getting started

- `$ npm run deps`: installs all the dependencies
- `$ npm run start`: starts all the miscroservices - alternatively use `serve` for watch mode
- `$ npm run stop`: stops all the miscroservices

You can watch every MS logs using their own script `$ npm run logs`, individually.

Then, you can try to send a basic request to the API:

```bash
curl -s "localhost:3000/?left=5&right=3"
```
