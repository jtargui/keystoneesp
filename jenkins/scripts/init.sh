#!/usr/bin/env bash
set -x
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
set +x
npm install
MOCHA_FILE=./jenkins-test-results.xml /var/jenkins/home/workspace/keystoneesp/node_modules/.bin/mocha tests/** --reporter mocha-junit-reporter