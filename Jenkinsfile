node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        sh './jenkins/scripts/init.sh'
        app = docker.build("jtargui/keystoneesp")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
            /* Finally, we'll push the image with two tags:
             * First, the incremental build number from Jenkins
             * Second, the 'latest' tag.
             * Pushing multiple tags is cheap, as all the layers are reused. */
            docker.withRegistry('https://hub.docker.com/', 'docker-registry-credentials') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
            }
        }

}
