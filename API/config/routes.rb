Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      post 'signup', to: 'users#create'
      post 'login', to: 'users#login'
      get 'user', to: 'users#fetch_user'
      get 'user/:username', to: 'users#show_by_username'

      post 'unfollow_stock', to: 'stocks#destroy'
      get 'stockdata/:ticker', to: 'stock_data#data'
      get 'stocknews/:ticker', to: 'stock_data#news'
      get 'stockprices/:ticker', to: 'stock_data#prices'
      get 'stocksocial/:ticker', to: 'stock_data#social'
      get 'stocks/:ticker', to: 'stock_data#show'

      get 'searchstocks/:id', to: 'search#stocks'
      get 'searchusers/:id', to: 'search#users'

      post 'unfollow_user', to: 'friends#destroy'
      post 'follow_user', to: 'friends#create'
      get 'friends/:username', to: 'friends#fetch_following'

      resources :comments
      resources :stocks
      resources :users
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
