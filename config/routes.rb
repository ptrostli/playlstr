Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/playlists', to: "homes#index"
  get '/playlists/new', to: "homes#authenticated"
  get '/playlists/:id', to: "homes#index"
  get '/playlists/:id/edit', to: "homes#index"
  get '/users/:id', to: "homes#index"
  
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :search, only: [:index]
      resources :playlists, only: [:index, :show, :create, :destroy, :update, :edit] do
        resources :tracks, only: [:create, :destroy]
      end
      post '/playlists/search', to: "playlists#search"
    end
  end
end
