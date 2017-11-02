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
        sh "docker stop ${instance}"
        sh "docker rm -f ${instance}"
        sh "docker run -d -i --restart --net=host --name ${instance} -p 80:80 ${microservice}"
    }
}
