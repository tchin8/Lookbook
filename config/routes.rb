Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update] do 
      member do 
        get 'posts'
      end 
    end 

    resource :session, only: [:create, :destroy]

    resources :posts, only: [:index, :create, :show, :update, :destroy] do 
      resources :comments, only: [:index, :create]
    end 

    resources :comments, only: [:update, :destroy]

    resources :friend_requests, only: [:create, :update, :destroy]
  end
end
