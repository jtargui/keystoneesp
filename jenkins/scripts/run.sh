#!/usr/bin/env bash
IMAGE_NAME="keystoneesp_image"
VOLUME_NAME="keystoneesp_volume"
DOCKER_INSTANCE_NAME="keystoneesp_instance"

set -x
docker run --rm -P --net=host --volumes-from $VOLUME_NAME -p 127.0.0.1:5432:5432 --name $DOCKER_INSTANCE_NAME $IMAGE_NAME
set -x