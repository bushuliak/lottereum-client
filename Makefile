.PHONY: pull build up down stop rm logs bash test

pull:
	docker compose pull

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

stop:
	docker compose stop

rm:
	docker compose rm

logs:
	docker compose logs

bash:
	docker exec -it lottereum-client bash

test:
	docker exec -it lottereum-client npm test
