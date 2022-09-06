#!/bin/bash

aws s3 sync ./build/ s3://soundlab.archimedes.digital --acl public-read --delete
