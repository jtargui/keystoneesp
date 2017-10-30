# Project Name

PRO Service - CMS

see: http://keystonejs.com/

## Get repository
1) Get repository from: https://github.com/jtargui/keystoneesp.git<br>
   Itellij VCS->Git->Clone
   
   Execute:
        npm install

## Install docker
   
	sudo apt-get update
	sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
	sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
	sudo apt-get update
	apt-cache policy docker-engine
	sudo apt-get install -y docker-engine
	sudo systemctl status docker

Complete guide: 
https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-16-04-es

## mongoDB installation
App needs mongoDB to run. Execute in dockers/mongo directory:
       
       sudo docker build -t mongoimage . 

#### Development environment
Execute mongoDB:

    sudo docker run  -d -p 27017:27017 mongoimage --noauth --bind_ip=0.0.0.0 

Init and execute:

    ./init.sh
    ./run.sh   
    
##### Notes
- option --net=host is used to connecting mongo container

#### Execute test
    npm test
            
## Contributing

TODO: Write contributing

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
