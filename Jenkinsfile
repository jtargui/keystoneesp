import java.text.DecimalFormat
import java.text.DecimalFormatSymbols

node {
	def microservice = 'keystoneesp'
	def registryurl = 'hub.docker.com'
	def namespace = 'jtargui'
	def config = 'keystoneesp'
	def emailList = 'jtargui@gmail.com'
    def app

	try {
		stage('Checkout') {
			checkout scm
			sh """
				git config user.email "jtargui@gmail.com"
				git config user.name "jtargui"
				git config push.default simple
			"""
		}

        stage ('Docker Build & Push') {
            steps{
                app = docker.build(${namespace}/${microservice})
            }
        }

        stage('Test image') {
            app.inside {
                sh 'echo "Tests passed"'
            }
        }

	} catch (e) {
		currentBuild.result = "FAILED"
		throw e
	} finally {

	}
}

def getShell() {
	return new GroovyShell()
}

