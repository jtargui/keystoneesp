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
            sh "sudo docker build -t keystoneesp_image ."
            sh "sudo docker push keystoneesp_image"
        }

        stage ('Run') {
            sh "sudo docker run --rm -P --net=host --volumes-from keystoneesp_volume -p 127.0.0.1:5432:5432 --name keystoneesp_instance keystoneesp_image"
        }
    }
}