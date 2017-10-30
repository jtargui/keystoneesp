import java.text.DecimalFormat
import java.text.DecimalFormatSymbols

node {
	try {
        stage('Build') {
            steps{
                sh 'npm install'
            }
        }
        stage ('Docker Build & Push') {
            steps{
                sh 'docker build -t keystoneesp_image .'
                sh 'docker push keystoneesp_image'
            }
        }
	}
}
