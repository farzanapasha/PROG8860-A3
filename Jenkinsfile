pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        AZURE_FUNCTIONAPP_NAME = 'MyFuncAppFarzana'
        RESOURCE_GROUP = 'MyResourceGroup'
	PATH = "/opt/homebrew/bin/:/Users/farzanapashajahangeer/.nvm/versions/node/v22.14.0/bin/:$PATH"
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
			echo "CLIENT_ID: $AZURE_CLIENT_ID"
	                echo "CLIENT_SECRET: $AZURE_CLIENT_SECRET"
        	        echo "TENANT_ID: $AZURE_TENANT_ID"
                	echo "SUBSCRIPTION_ID: $AZURE_SUBSCRIPTION_ID"
 			echo "$AZURE_FUNCTIONAPP_NAME: $AZURE_FUNCTIONAPP_NAME"

                        az login --service-principal \
                          -u $AZURE_CLIENT_ID \
                          -p $AZURE_CLIENT_SECRET \
                          --tenant $AZURE_TENANT_ID

			az account set --subscription $AZURE_SUBSCRIPTION_ID

			az account show
			
			echo "Directory: $(pwd)"
			ls -lh

			func azure functionapp publish $AZURE_FUNCTIONAPP_NAME
                    '''
                }
            }
        }
    }
}

