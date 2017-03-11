class Api::V1::StocksController < ApplicationController
  before_action :set_stock, only: [:show, :update]

  def index
    @stocks = Stock.all
    render json: @stocks
  end

  def show
    render json: @stock
  end

  def create
    @stock = Stock.create_with(company_name: stock_params[:company_name]).find_or_create_by(ticker: params[:ticker])

    if @stock.save
      date = "2017-02-16"
      get_current_user.stocks << @stock

      url = "https://api.intrinio.com/prices?ticker=#{@stock.ticker}&start_date=#{date}&end_date=#{date}"
      response = api_call(url)

      response[:company_name] = @stock.company_name
      response[:ticker] = @stock.ticker
      response[:last_price] = @stock.last_price
      render json: response
    end
  end

  # def user_stocks
  #   @stocks = get_current_user.stocks
  #   if @stocks.length > 0
  #     stock_list = @stocks.collect {|stock|
  #       stock.ticker
  #     }
  #   end
  #   render json: stock_list
  # end

  def destroy
    @stock = Stock.find_by(ticker: params[:ticker])
    get_current_user.stock_users.find_by(stock_id: @stock.id).delete
    render json: @stock.ticker
  end

  private
    def set_stock
      @stock = Stock.find(params[:id])
    end

    def stock_params
      params.require(:stock).permit(:ticker, :company_name)
    end
end
