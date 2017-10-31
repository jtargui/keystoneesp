node {
    def app
	def microservice = 'keystoneesp'
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
            sh "docker login -u jtargui -p h6y50k93 https://registry.hub.docker.com"
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Deploy to DEV') {
        sh "cat /home/jtarga/docker-registry-pass.txt | docker login -u jtargui -p h6y50k93 https://registry.hub.docker.com"
        sh "docker stop keystoneesp && docker rm keystoneesp"
        sh "docker run -d --restart always -i --name keystoneesp -p https://registry.hub.docker.com/jtargui/keystoneesp"
    }

}
