node('master') {
    stage ('Checkout') {
        checkout scm
    }
    stage ('Build') {
        sh "docker build --build-arg SERVER_PORT=${SERVER_PORT} -m 3g -t appbank_api:B${BUILD_NUMBER} -f Dockerfile.prod ."
    }
    stage ('Deployment') {
        try {
            sh "docker stop appbank_api"
            sh "docker rm appbank_api"
        } catch (Exception e) {
            sh "echo 'container not running'"
        }
        sh "docker run -d -e TYPEORM_CONNECTION='${TYPEORM_CONNECTION}' -e TYPEORM_DATABASE='${TYPEORM_DATABASE}' -e TYPEORM_ENTITIES='${TYPEORM_ENTITIES}' -e TYPEORM_ENTITIES_DIR='${TYPEORM_ENTITIES_DIR}' -e TYPEORM_HOST='${TYPEORM_HOST}' -e TYPEORM_MIGRATIONS='${TYPEORM_MIGRATIONS}' -e TYPEORM_MIGRATIONS_DIR='${TYPEORM_MIGRATIONS_DIR}' -e TYPEORM_PASSWORD='${TYPEORM_PASSWORD}' -e TYPEORM_PORT='${TYPEORM_PORT}' -e TYPEORM_USERNAME='${TYPEORM_USERNAME}' -e WEB_MEMORY='${WEB_MEMORY}' -e YARN_PRODUCTION='${YARN_PRODUCTION}'  -p ${SERVER_PORT}:${SERVER_PORT} --name appbank_api appbank_api:B${BUILD_NUMBER}"
        
    }
}
