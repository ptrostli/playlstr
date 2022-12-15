# config/initializers/omniauth.rb

require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "a9b02aefeb5f4fba8796911337e2713b>", "a8d5866b10f5476f8cda96118a865025", 
    scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end
# Adjust as needed.

OmniAuth.config.allowed_request_methods = [:post, :get]