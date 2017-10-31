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

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Deploy to DEV') {
        steps{
            sh './jenkins/script/run.sh'
        }
    }
}