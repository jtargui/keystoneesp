import java.text.DecimalFormat
import java.text.DecimalFormatSymbols

node {
	try {
        stage('Build') {
            sh 'npm install'
        }
        stage ('Docker Build & Push') {
            sh 'docker build -t keystoneesp_image .'
            sh 'docker push keystoneesp_image'
        }
	}
}
