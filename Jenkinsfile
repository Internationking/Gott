pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image
                    docker.build('getaidapp')
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run a container from the image
                    docker.image('getaid_container').inside {
                        sh 'echo "Running tests..."'
                        // You can run your tests here
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Push to Docker Hub or run the container
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        docker.image('getaidapp').push('latest')
                    }
                }
            }
        }
    }
}