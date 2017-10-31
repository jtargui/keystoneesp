#!/usr/bin/env bash

npm install
MOCHA_FILE=./jenkins-test-results.xml /var/jenkins/home/workspace/keystoneesp/node_modules/.bin/mocha tests/** --reporter mocha-junit-reporter