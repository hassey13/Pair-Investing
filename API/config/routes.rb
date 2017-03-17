Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :comments
      resources :stocks
      resources :users

      post 'signup', to: 'users#create', as: 'signup'
      post 'login', to: 'users#login', as: 'login'
      get 'user', to: 'users#fetch_user'
      get 'user/:username', to: 'users#show_by_username'

      post 'unfollow_stock', to: 'stocks#destroy', as: 'unfollow'
      get 'fetchstocks/:email', to: 'stock_data#index', as: 'fetchstocks'

      get 'searchstocks/:id', to: 'search#stocks', as: 'searchstocks'
      get 'searchusers/:id', to: 'search#users', as: 'searchusers'

      post 'unfollow_user', to: 'friends#destroy'
      post 'follow_user', to: 'friends#create'
      get 'friends/:username', to: 'friends#fetch_following'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
