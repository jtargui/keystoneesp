pipeline {
    agent {
        docker {
            image 'node:6.9.4-onbuild'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage ('Docker Build & Push') {
            steps {
                sh 'sudo docker build -t keystoneesp_image .'
                sh 'sudo docker push keystoneesp_image'
            }
        }
    }
}