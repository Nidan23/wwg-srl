docker stop wwg_wwg-backend_1 wwg_wwg-frontend_1

docker network rm wwg_default

docker rm wwg_wwg-backend_1 wwg_wwg-frontend_1

docker image rm wwg_wwg-backend wwg_wwg-frontend

docker-compose up -d