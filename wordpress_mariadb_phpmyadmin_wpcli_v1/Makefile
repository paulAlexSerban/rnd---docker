include .env
# Start containers, no theme files will be included
start:
	docker-compose up -d --build

febuild: 
	@sudo npm run build

build: febuild
	@sh ./shell/get_src_files.sh

down: bkp
	docker-compose down -v 

bkp: 
	@sudo sh ./shell/backup_plugins.sh
	@sudo sh ./shell/backup_uploads.sh
	 
bkp-plugins:
	@sudo sh ./shell/backup_plugins.sh

bkp-uploads:
	@sudo sh ./shell/backup_uploads.sh

configure:
	docker-compose -f docker-compose.yml -f ./docker/config/wp-auto-config.yml run --rm .wp-auto-config

install: start
	docker-compose -f docker-compose.yml -f ./docker/config/wp-auto-config.yml run --rm wp-auto-config && make build

clean: down
	@echo "💥 Removing related folders/files..."
	@sudo rm -rf  mysql/* wordpress/*
