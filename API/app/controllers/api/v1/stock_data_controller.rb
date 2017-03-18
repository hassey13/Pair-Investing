require 'rest-client'
require 'json'

class Api::V1::StockDataController < ApplicationController
  # before_action :set_stock, only: [:show, :update, :destroy]

  def index
    @stocks = User.find_by(email: params[:email]).stocks
    if @stocks.length > 0
      stock_list = @stocks.collect {|stock|

    # => API INTRINO
      # date = "2017-02-16"
      # url = "https://api.intrinio.com/prices?ticker=#{stock.ticker}&start_date=#{date}&end_date=#{date}"
      #
      # response = api_call(url)
      # response[:company_name] = stock.company_name
      # response[:ticker] = stock.ticker
      #
      # url = "https://api.intrinio.com/historical_data?ticker=#{stock.ticker}&item=marketcap&start_date=#{date}&end_date=#{date}"
      # market_cap = api_call(url)
      #
      # response["data"][0][:market_cap] = market_cap["data"][0]["value"]
      #
      # response
    #   END OF API

    # => FAKE DATA TO AVOID API CALL
        stock_data = {
          ticker: "#{stock.ticker}",
          company_name: "#{stock.company_name}",
          # data: [{
          #   open: 1,
          #   close: 1,
          #   high: 1,
          #   low: 1,
          #   market_cap: 1
          # }]
          data: [{
            last_price: "#{stock.last_price}"
          }]
        }
        stock_data
      #  END OF FAKE DATA
      }

      render json: stock_list
    else
      render json: {na: 'no stocks'}
    end
  end

  def show
    query = params[:ticker].upcase
    url = "https://api.intrinio.com/companies?identifier=#{query}"
    response = api_call(url)

    # PRICES include date range
    # https://api.intrinio.com/prices?identifier=AAPL

    # INFO
    # https://api.intrinio.com/companies?identifier=AA

    stock_data = {
      ticker: "#{response["ticker"]}",
      name: "#{response["name"]}",
    }
    render json: stock_data
  end

  #news endpoint
  # https://api.intrinio.com/news?ticker=AAPL&ticker=MSFT

  private

end
