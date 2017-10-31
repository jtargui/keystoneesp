#!/usr/bin/env bash
IMAGE_NAME="keystoneesp_image"
VOLUME_NAME="keystoneesp_volume"
DOCKER_INSTANCE_NAME="keystoneesp_instance"

set -x
docker pull keystoneesp
set +x
set -x
docker run --rm -P --net=host -p 127.0.0.1:5432:5432 --name $DOCKER_INSTANCE_NAME keystoneesp
set +x