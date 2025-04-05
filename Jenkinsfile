pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        AZURE_FUNCTIONAPP_NAME = 'MyFuncAppFarzana'
        RESOURCE_GROUP = 'MyResourceGroup'
    }

    stages {
        stage('Test Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

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
                withCredentials([azureServicePrincipal('e649048f-b49b-4d7e-93b5-7cab92e8df4d')]) {
                    sh '''
                        /opt/homebrew/bin/az login --service-principal \
                          -u $AZURE_CLIENT_ID \
                          -p $AZURE_CLIENT_SECRET \
                          --tenant $AZURE_TENANT_ID

                        /Users/farzanapashajahangeer/.nvm/versions/node/v22.14.0/bin/func azure functionapp publish $AZURE_FUNCTIONAPP_NAME
                    '''
                }
            }
        }
    }
}

