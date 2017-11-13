var config = {}

config.host = process.env.HOST || "https://orion.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "wv7jNnC2Dmz4vFl9kAAIa3Le3IhQHuf9tDqXfkm9wyKNxKS4fC9WvKh9bMNSy0GVV2omWIBWzoAkt4EwGWVLSA==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
