#!/bin/bash
set -e

PROJECT_ID="860220177367"
ENV_FILE="/.env"

echo "# Environment Variables" > $ENV_FILE

gcloud secrets list --project="$PROJECT_ID" --format="value(name)" | while read -r secret_name; do
    # Extract just the secret name without the full path
    secret_base=$(basename "$secret_name")
    
    # Set environment variable and write to .env
    export "$secret_base"=$(gcloud secrets versions access latest --secret="$secret_base" --project="$PROJECT_ID")
    echo "${secret_base}=${!secret_base}" >> $ENV_FILE
done

chmod 600 $ENV_FILE
echo "Secrets loaded into environment"

# Start the application
exce node src/index.js