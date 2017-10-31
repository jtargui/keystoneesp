node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        sh './jenkins/scripts/init.sh'
        app = docker.build("keystoneesp_image")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Deploy to DEV') {
        app.withRun("-P --net=host -p 127.0.0.1:5432:5432 --name keystoneesp_instance") {
        }
    }
}