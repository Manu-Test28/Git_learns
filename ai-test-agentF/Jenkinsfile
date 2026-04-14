pipeline {
    agent any

    parameters {
        text(name: 'SCENARIO', defaultValue: 'Login test', description: 'Enter test scenario')
    }

    environment {
        OPENAI_API_KEY = credentials('openai-api-key')
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
                sh 'npx playwright install'
            }
        }

        stage('Generate Test') {
            steps {
                sh 'SCENARIO="${SCENARIO}" npm run generate'
            }
        }

        stage('Run Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Report') {
            steps {
                sh 'npm run report'
            }
        }
    }
}
