pipeline {
    agent any
    
    environment {
        APP_NAME = 'jenkins-pr-test'
    }
    
    options {
        timeout(time: 10, unit: 'MINUTES')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    echo "╔════════════════════════════════════════════╗"
                    echo "║           BUILD INFORMATION                ║"
                    echo "╠════════════════════════════════════════════╣"
                    echo "║ Branch: ${env.BRANCH_NAME}"
                    echo "║ Build #: ${env.BUILD_NUMBER}"
                    echo "║ PR Number: ${env.CHANGE_ID ?: 'N/A'}"
                    echo "║ PR Title: ${env.CHANGE_TITLE ?: 'N/A'}"
                    echo "║ PR Target: ${env.CHANGE_TARGET ?: 'N/A'}"
                    echo "║ PR Author: ${env.CHANGE_AUTHOR ?: 'N/A'}"
                    echo "╚════════════════════════════════════════════╝"
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh '''
                    if [ -f package.json ]; then
                        echo "Found package.json"
                        echo "Dependencies installed successfully!"
                    else
                        echo "No package.json found, skipping..."
                    fi
                '''
            }
        }
        
        stage('Build') {
            steps {
                echo '🔨 Building application...'
                sh '''
                    echo "Starting build process..."
                    echo "Compiling source files..."
                    sleep 2
                    echo "Build completed successfully!"
                '''
            }
        }
        
        stage('Unit Tests') {
            steps {
                echo '🧪 Running unit tests...'
                sh '''
                    echo "Running test suite..."
                    echo "Test 1: Check application startup... PASSED ✓"
                    echo "Test 2: Check database connection... PASSED ✓"
                    echo "Test 3: Check API endpoints... PASSED ✓"
                    sleep 2
                    echo "All tests passed!"
                '''
            }
        }
        
        stage('Code Quality') {
            when { changeRequest() }
            steps {
                echo '🔍 Running code quality checks for PR...'
                sh '''
                    echo "Checking code style..."
                    echo "Checking for security vulnerabilities..."
                    echo "Running static analysis..."
                    sleep 2
                    echo "Code quality checks passed!"
                '''
            }
        }
        
        stage('Integration Tests') {
            when { changeRequest() }
            steps {
                echo '🔗 Running integration tests for PR...'
                sh '''
                    echo "Setting up test environment..."
                    echo "Running integration tests..."
                    sleep 2
                    echo "Integration tests passed!"
                '''
            }
        }
        
        stage('Deploy to Dev') {
            when {
                allOf {
                    branch 'dev'
                    not { changeRequest() }
                }
            }
            steps {
                echo '🚀 Deploying to DEV environment...'
                sh '''
                    echo "Connecting to dev server..."
                    echo "Uploading build artifacts..."
                    echo "Restarting services..."
                    sleep 2
                    echo "Deployment to DEV completed!"
                '''
            }
        }
        
        stage('Deploy to Staging') {
            when {
                allOf {
                    branch 'main'
                    not { changeRequest() }
                }
            }
            steps {
                echo '🚀 Deploying to STAGING environment...'
                sh '''
                    echo "Deploying to staging..."
                    sleep 2
                    echo "Deployment to STAGING completed!"
                '''
            }
        }
        
        stage('Deploy to Production') {
            when {
                allOf {
                    branch 'main'
                    not { changeRequest() }
                }
            }
            steps {
                echo '🚀 Production deployment would happen here...'
                echo 'Skipping for demo purposes'
            }
        }
    }
    
    post {
        success {
            echo 'Build successful'
        }
        failure {
            echo 'Build failed'
        }
        always {
            cleanWs()
        }
    }
}
