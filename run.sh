#!/usr/bin/env bash
IMAGE_NAME="jtargui/keystoneesp_image"
VOLUME_NAME="keystoneesp_volume"
DOCKER_INSTANCE_NAME="keystoneesp_instance"

docker run --rm -P --net=host --volumes-from $VOLUME_NAME -p 127.0.0.1:5432:5432 --name $DOCKER_INSTANCE_NAME $IMAGE_NAME
