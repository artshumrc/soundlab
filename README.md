# soundlab-wordpress
The Sound Lab is a studio for students to experiment with sound production equipment and techniques.

This repo contains the WP site code as of 9 March 2021. The original repo is at https://github.com/artshumrc/soundlab-wordpress-archimedes, but the deployed prod was disconnected from version control.

## TODO
- [x] Get client to run with hot reload for local dev
- [ ] Move everything into one repo - ~~maybe using git submodules?~~ submodules are not a great option as I'd need many deploy keys
- [ ] Consolidate docker-compose
- [ ] Include a MySQL database setup in docker compose and scrubbed DB dump so all you need to do is `composer install` and `docker compose up`
- [ ] Also take care of the Mixtape Maker app
- [ ] Upgrade Node as far as possible for both client and API
- [ ] Figure out deploy
- [ ] Use Cloudfront for frontend and Mixtape Maker? Maybe a future enhancement
