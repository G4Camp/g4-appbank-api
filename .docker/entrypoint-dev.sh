#!/bin/bash

# INSTALL DEPENDENCIES
npm install

# RUN MIGRATIONS
npm run typeorm migration:run

# START API WITH WATCH
npm run start:dev