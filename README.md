# Sound Lab Website

[![pipeline status](http://gitlab.archimedes.digital/archimedes/soundlab-api/badges/develop/pipeline.svg)](http://gitlab.archimedes.digital/archimedes/soundlab-api/commits/develop)
[![coverage report](http://gitlab.archimedes.digital/archimedes/soundlab-api/badges/develop/coverage.svg)](http://gitlab.archimedes.digital/archimedes/soundlab-api/commits/develop)


Soundlab-API

The API for the soundlab application.


## Email
Configure SMTP email service:
- see section `EMAIL CONFIG` in `.env`


## S3 access

In order to enable s3 upload access for the API, configure the following variables in your `.env` file:

```
AWS_ACCESS_KEY_ID=x
AWS_SECRET_ACCESS_KEY=x
AWS_BUCKET=x
AWS_REGION=us-east-1
```


## Wordpress

To configure the connection to the Wordpress backend, configure the `ADMIN_URL` parameters in the `.env` file:

```
ADMIN_URL=http://soundlab.local:8888
```
