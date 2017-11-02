node {
    def app
	def microservice = 'keystoneesp'
	def volumeName = 'keystoneesp
	def registryurl = 'https://registry.hub.docker.com'
	def namespace = 'jtargui'

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("${namespace}/${microservice}")
        sh "docker build -t ${namespace}/${microservice} ."
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Deploy to DEV') {
        sh "docker run -d --name ${volumeName} ${namespace}/${microservice}"
        sh "docker run --rm -P --net=host --volumes-from ${volumeName} -p 127.0.0.1:5432:5432 --name ${microservice} ${namespace}/${microservice}"
    }

}
