pipeline {
    agent any
    tools {
        nodejs 'NodeJS 18'
    }
    stages {
        stage('Test Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }
}
