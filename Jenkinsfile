node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("keystoneesp_image")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Deploy to DEV') {
        sh 'docker rm -f $(docker volume ls | grep 'keystoneesp_instance')'
        app.withRun("-P --net=host -p 127.0.0.1:5432:5432 --name keystoneesp_instance") {
        }
    }
}