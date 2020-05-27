Rails.application.routes.draw do

  get 'groups/new'
  get 'groups/create'
  devise_for :users
  root "messages#index"
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create]
end
