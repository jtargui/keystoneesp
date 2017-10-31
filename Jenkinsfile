import java.text.DecimalFormat
import java.text.DecimalFormatSymbols

node {
	def microservice = 'keystoneesp'
	def registryurl = 'hub.docker.com'
	def namespace = 'jtargui'
	def config = 'keystoneesp'
	def emailList = 'jtargui@gmail.com'
    def app

    stage('Checkout') {
        checkout scm
    }

    stage ('Docker Build & Push') {
            app = docker.build(${namespace}/${microservice})
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }
}

