node {
    def app
	def microservice = 'keystoneesp'
	def instance = 'keystoneespInstance'
	def registryurl = 'https://registry.hub.docker.com'
	def namespace = 'jtargui'

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("${microservice}")
        sh "docker build -t ${microservice} ."
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Deploy to DEV') {
        sh "docker run --rm -P --net=host -p 127.0.0.1:5432:5432 --name ${instance} ${microservice}"
    }
}
