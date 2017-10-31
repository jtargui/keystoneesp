import java.text.DecimalFormat
import java.text.DecimalFormatSymbols

node {
	def microservice = 'keystoneesp'
	def registryurl = 'hub.docker.com'
	def namespace = 'jtargui'
	def config = 'keystoneesp'
	def emailList = 'jtargui@gmail.com'

	try {
		stage('Checkout') {
			checkout scm
			sh """
				git config user.email "jtargui@gmail.com"
				git config user.name "jtargui"
				git config push.default simple
			"""
		}

		stage('Checkout Config') {
			checkout changelog: false, poll: false, scm: [$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: "${config}"]], submoduleCfg: [], userRemoteConfigs: [[url: "https://github.com/${jtargui}/${config}.git"]]]
			dir ("${config}") {
				sh """
				git config user.email "jtargui@gmail.com"
				git config user.name "jtargui"
				git config push.default simple
				"""
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

