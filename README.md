## Production
For production you only need `docker-compose.yml` and `.env` files
```sh
docker pull ghcr.io/neyrowz/neyrowz.dev:latest
docker compose up -d
```
```dotenv
EMAIL=contact@example.dev
DOMAIN=example.dev
```