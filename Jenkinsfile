#    stages {
#}

pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }
    environment {
        AZURE_FUNCTIONAPP_NAME = 'farzanapashastoragefunc'
        RESOURCE_GROUP = 'MyResourceGroup'
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${env.NODE_HOME}/bin:${env.PATH}"
    }

    stage('Test Node') {
        steps {
            sh 'node -v'
            sh 'npm -v'
        }
    }

    stages {
	stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy to Azure') {
            steps {
                withCredentials([azureServicePrincipal('AZURE_CREDENTIALS_ID')]) {
                    sh '''
                        az login --service-principal \
                          -u $AZURE_CLIENT_ID \
                          -p $AZURE_CLIENT_SECRET \
                          --tenant $AZURE_TENANT_ID

                        func azure functionapp publish $AZURE_FUNCTIONAPP_NAME
                    '''
                }
            }
        }
    }
}
