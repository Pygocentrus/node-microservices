# Miscroservices architecture using Seneca & Docker

### Getting started

- `$ yarn deps`: installs all the dependencies
- `$ yarn start`: starts all the miscroservices - alternatively use `serve` for watch mode
- `$ yarn stop`: stops all the miscroservices

You can watch every MS logs using their own script `$ yarn logs`, individually.

Then, you can try to send a basic request to the API:

```bash
curl -s "localhost:3000/?left=5&right=3"
```
