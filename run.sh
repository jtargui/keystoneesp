#!/usr/bin/env bash
IMAGE_NAME="keystoneesp_image"
VOLUME_NAME="keystoneesp_volume"
DOCKER_INSTANCE_NAME="keystoneesp_instance"

#--volumes-from $VOLUME_NAME
docker stop $DOCKER_INSTANCE_NAME
docker rm -f $DOCKER_INSTANCE_NAME
docker run -d --net=host -i --name $DOCKER_INSTANCE_NAME -p 80:80 $IMAGE_NAME
