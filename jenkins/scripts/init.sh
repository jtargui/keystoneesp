#!/usr/bin/env bash

IMAGE_NAME="keystoneesp_image"
VOLUME_NAME="keystoneesp_volume"
DOCKER_INSTANCE_NAME="keystoneesp_instance"

echo $IMAGE_NAME
set -x
docker build -t $IMAGE_NAME .
set +x

RESULT_CONTAINER_ID="$(docker ps -a | grep $DOCKER_INSTANCE_NAME | tr -s " " | cut -d' ' -f1 | tr '\n' ' ')"
if [ "$RESULT_CONTAINER_ID" != '' ]
then
    echo "Container exist"
    set -x
    docker rm -f $RESULT_CONTAINER_ID
    set +x
else
    echo "Create container"
    #set -x
    #docker run -d --name $VOLUME_NAME $IMAGE_NAME echo "keystoneesp"
    #set +x
fi
