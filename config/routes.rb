Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/polls/new', to: 'home#index'

  resources :users, only: [:create]
  resource :sessions, only: [:create, :destroy]
  resources :polls, only: [:create, :index, :show]
  resource :votes, only: [:create]

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
