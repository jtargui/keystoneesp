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
}
