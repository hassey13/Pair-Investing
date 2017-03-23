class StockSerializer < ActiveModel::Serializer
  attributes :ticker, :company_name, :last_price

  has_many :users, through: :stock_users
end
