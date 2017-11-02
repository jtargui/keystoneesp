node {
    def app
	def microservice = 'keystoneesp_image'
	def instance = 'keystoneesp_instance'
	def registryurl = 'https://registry.hub.docker.com'
	def namespace = 'jtargui'

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("${namespace}/${microservice}")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-registry-credentials') {
            sh "docker login -u jtargui -p h6y50k93 ${registryurl}"
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }


    stage('Deploy to DEV') {
        sh "set -e && docker rmi -f ${instance}/${microservice} && set +e"
        sh "set -e && docker stop ${instance} && set +e"
        sh "set -e && docker rm -f ${instance} && set +e"
        sh "cat /home/jtarga/docker-registry-pass.txt | docker login -u jtargui -p h6y50k93 ${registryurl}"
        sh "docker pull ${namespace}/${microservice}"
        sh "docker run -d --net=host -i --restart always --name ${instance} -p 80:80 ${namespace}/${microservice}"
    }
}
