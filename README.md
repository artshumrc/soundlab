# soundlab

## About
The Sound Lab is a studio for students to experiment with sound production equipment and techniques. This repo supercedes several previous repos for soundlab-wordpress (and soundlab-wordexpress) for headless CMS, soundlab-client for the React frontend, soundlab-api for the GraphQL API, and mixtape-maker for the clientside mixtape creation tool.

Visit the site at [soundlab.fas.harvard.edu/](https://soundlab.fas.harvard.edu/)

## TODO
- [x] Get client to run with hot reload for local dev
- [x] Move everything into one repo - ~~maybe using git submodules?~~ submodules are not a great option as I'd need many deploy keys
- [X] Include the Mixtape Maker app
- [x] Consolidate docker-compose into one file
- [ ] Include a MySQL database setup in docker compose
- [ ] Include a scrubbed DB dump and startup script so all you need to do is `composer install` and `docker compose up`
- [ ] Upgrade Node as far as possible for both client and API
- [ ] Add AWS CDK for deploy
- [ ] Ansible provisioning script
- [ ] Use Cloudfront for frontend and Mixtape Maker? Maybe a future enhancement

## Contents
This repo contains:
- bedrock: a 12-factor app template for Wordpress
    - Originally at: https://github.com/artshumrc/soundlab-wordpress
    - Custom Plugins
        - soundlab
        - forked copy of old acf-repeater
    - Custom Theme: orpheus
- api: a GraphQL API connected to the Wordpress database
    - Originally at: https://github.com/artshumrc/soundlab-api
- frontend: a React app that consumes the GraphQL API
    - Originally at: https://github.com/artshumrc/soundlab-client
- mixtape-maker: a Svelte app for clientside mixtape creation
    - Originally at: https://github.com/artshumrc/mixtape-maker
- aws-soundlab-cdk (todo): CDK infrastructure as code for deploying to aws
- ansible (todo): playbooks for provisioning on AWS

## Getting Started
- Clone the repo
- Copy media assets to bedrock/web/app/uploads
- Export existing database from VM / RDS using mysqldump, or use a scrubbed backup from database-backups
- Set up the database
    - You can use either local MySQL or the docker compose MySQL
    - Gotchas:
- Local networking setup (brew httpd)
    - Edit /opt/homebrew/etc/httpd/httpd.conf and uncomment `Include etc/extra/httpd-vhosts.conf` if not already using virtual hosts
    - Link the Bedrock directory to your sites folder: `ln -s /Users/username/path/to/soundlab/bedrock ~/Sites/soundlab`
    - Add a virtual host to httpd-vhosts.conf:
    - Edit /private/etc/hosts and include `127.0.0.1 slab.local`
- Edit `bedrock/.env` to include the new local domain name and database credentials
    - Gotchas:
- Install composer dependencies within `bedrock`: `composer install`
- Restart httpd (`brew services restart httpd`)
- Head to `http://slab.local` and update the database if needed
- `docker compose up` to start the API, frontend, mixtape-maker, and MySQL containers
    - Gotcha: the link on the homepage to mixtape-maker is hardcoded
