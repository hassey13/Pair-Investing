class Api::V1::StocksController < ApplicationController
  # before_action :set_stock, only: [:show, :update]

  def index
    @stocks = Stock.all
    render json: @stocks
  end

  def show
    @stock = Stock.all
    render json: @stock
  end

  def create
    @stock = Stock.create_with(company_name: stock_params[:company_name]).find_or_create_by(ticker: params[:ticker])

    if @stock.save
      date = "2017-02-16"
      get_current_user.stocks << @stock

      # url = "https://api.intrinio.com/prices?ticker=#{@stock.ticker}&start_date=#{date}&end_date=#{date}"
      # response = api_call(url)

      render json: {user: get_current_user.stocks, stock: @stock.users}
    end
  end

  def destroy
    @stock = Stock.find_by(ticker: params[:ticker])
    get_current_user.stock_users.find_by(stock_id: @stock.id).delete
    render json: {user: get_current_user.stocks, stock: @stock.users}
  end

  private
    def set_stock
      @stock = Stock.find(params[:id])
    end

    def stock_params
      params.require(:stock).permit(:ticker, :company_name)
    end
end
