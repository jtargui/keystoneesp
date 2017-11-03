node {
    def app
	def microservice = 'keystoneesp_image'
	def instance = 'keystoneesp_instance'
	def registryurl = 'localhost:5000'
	def namespace = 'jtargui'

    stage('Clone repository') {
        checkout scm
    }


    stage('Build image') {
        app = docker.build("${registryurl}/${namespace}/${microservice}")
    }

    stage('Test image') {
        app.inside {
            sh 'npm install --only=dev'
            sh 'npm test'
        }
    }

    stage('Push image') {
        sh "cat /home/jtarga/docker-registry-pass.txt | docker login -u jtargui -p h6y50k93 ${registryurl}"
        sh "docker tag ${registryurl}/${namespace}/${microservice} ${registryurl}/${namespace}/${microservice}:${env.BUILD_NUMBER}"
        sh "docker push ${registryurl}/${namespace}/${microservice}:${env.BUILD_NUMBER}"

        sh "docker tag ${registryurl}/${namespace}/${microservice} ${registryurl}/${namespace}/${microservice} "
        sh "docker push ${registryurl}/${namespace}/${microservice}"


        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused.
        docker.withRegistry(${registryurl}) {
            //sh "docker login -u jtargui -p h6y50k93 ${registryurl}"
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
        */
    }

    stage('Deploy to DEV') {
        sh "docker rmi -f ${registryurl}/${namespace}/${microservice}"
        sh "docker rm -f ${instance}"
        sh "cat /home/jtarga/docker-registry-pass.txt | docker login -u jtargui -p h6y50k93 ${registryurl}"
        sh "docker pull ${registryurl}/${namespace}/${microservice}"
        sh "docker run -d --net=host -i --restart always --name ${instance} -p 80:80 ${registryurl}/${namespace}/${microservice}"
    }

     stage ('Run JMeter Test') {
        sh 'java -Dfile.encoding=UTF-8 -classpath /opt/apache-jmeter-3.3/bin/ApacheJMeter.jar org.apache.jmeter.NewDriver --testfile /media/jtarga/MainDisk/DevTutorials/keystoneesp/tests/tests.jmx -n'
     }
}
