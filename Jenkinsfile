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
        sh "docker build -t ${microservice} ."
    }

    stage('Deploy to DEV') {
        sh "docker run --rm -P --net=host -p 127.0.0.1:5432:5432 --name ${instance} ${microservice}"
    }
}
