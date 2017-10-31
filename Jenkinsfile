node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        steps {
            sh './jenkins/scripts/init.sh'
        }
    }

    stage('Deploy to DEV') {
        steps{
            sh './jenkins/script/run.sh'
        }
    }
}