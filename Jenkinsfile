pipeline {
    agent any

    environment {
        AZURE_FUNCTIONAPP_NAME = 'MyFuncAppFarzana'
        RESOURCE_GROUP = 'MyResourceGroup'
        NODE_HOME = tool name: 'NodeJS 18', type: 'NodeJSInstallation'
        PATH = "${env.NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/your-username/HelloWorldApp.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Function (if needed)') {
            steps {
                echo 'No build step required for basic JS function'
            }
        }

        stage('Deploy to Azure') {
            steps {
                withCredentials([azureServicePrincipal('AZURE_CREDENTIALS_ID')]) {
                    sh '''
                        az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID
                        func azure functionapp publish $AZURE_FUNCTIONAPP_NAME
                    '''
                }
            }
        }
    }
}

