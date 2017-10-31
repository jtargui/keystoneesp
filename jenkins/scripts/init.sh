#!/usr/bin/env bash

IMAGE_NAME="keystoneesp_image"
VOLUME_NAME="keystoneesp_volume"
DOCKER_INSTANCE_NAME="keystoneesp_instance"

#echo $IMAGE_NAME
#docker build -t $IMAGE_NAME .

RESULT_CONTAINER_ID="$(docker ps -a | grep $DOCKER_INSTANCE_NAME | tr -s " " | cut -d' ' -f1 | tr '\n' ' ')"
if [ "$RESULT_CONTAINER_ID" != '' ]
then
    echo "Container exist"
    set -x
    docker rm -f $RESULT_CONTAINER_ID
    set +x
else
    echo "Create container"
    #docker run --rm -P --net=host --volumes-from $VOLUME_NAME -p 127.0.0.1:5432:5432 --name $DOCKER_INSTANCE_NAME $IMAGE_NAME
    #docker run -d --name $VOLUME_NAME $IMAGE_NAME echo "keystoneesp"
    #docker run -d --name keystoneesp_volume keystoneesp_image echo "keystoneesp"
fi
