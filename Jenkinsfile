pipeline {
  agent any

  environment {
    SSH_CREDENTIALS_ID = 'ec2-ssh-key'
    EC2_USER = 'ec2-user'
    EC2_IP = 'ec2-13-60-90-18.eu-north-1.compute.amazonaws.com'
    APP_PATH = '/path/to/your/app'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/Internationking/Gott.git'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install' // Adjust this command to suit your app's build steps
      }
    }

    stage('Test') {
      steps {
        sh 'npm test' // Adjust to fit your app's testing framework
      }
    }

    stage('Deploy') {
      steps {
        sshagent (credentials: [SSH_CREDENTIALS_ID]) {
          sh """
          scp -o StrictHostKeyChecking=no -r . ${EC2_USER}@'13.60.90.18':${APP_PATH}
          ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_IP} << EOF
          cd ${APP_PATH}
          npm install  # Or other setup commands for your app
          pm2 restart all  # Restart using PM2, if applicable
          EOF
          """
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline completed.'
    }
    success {
      echo 'Deployment successful!'
    }
    failure {
      echo 'Deployment failed.'
    }
  }
}
