require 'rest-client'
require 'json'

class Api::V1::StockDataController < ApplicationController
  # before_action :set_stock, only: [:show, :update, :destroy]

  def social
    query = params[:ticker].upcase
    @stock = Stock.find_by(ticker: query)
    if @stock
      response["data"] = {
        social: {
          likes: @stock.likes,
          dislikes: @stock.dislikes
        }
      }

    else
      response["data"] = {
        social: {
          likes: 0,
          dislikes: 0
        }
      }
    end
    render json: response 
  end

  def data
    query = params[:ticker].upcase
    @stock = Stock.find_by(ticker: query)
    if @stock && false
        # => API INTRINO
      date = Date.today.to_s(:db)
      url = "https://api.intrinio.com/prices?ticker=#{@stock.ticker}&start_date=#{date}&end_date=#{date}"

      response = api_call(url)
      response[:stock] = {}
      response[:stock][:company_name] = @stock.company_name
      response[:stock][:ticker] = @stock.ticker

      url = "https://api.intrinio.com/data_point?identifier=#{@stock.ticker}&item=marketcap,52_week_low,52_week_high,dividendyield"
      secondary_response = api_call(url)

      response["data"][0][:market_cap] = secondary_response["data"][0]["value"]
      response["data"][0][:low_52_week] = secondary_response["data"][1]["value"]
      response["data"][0][:high_52_week] = secondary_response["data"][2]["value"]
      response["data"][0][:dividendyield] = secondary_response["data"][3]["value"]
      render json: response
    else
      stock_data = {
        data: [{
          open: "n/a",
          close: "n/a",
          day: "n/a",
          week: "n/a",
          market_cap: "n/a"
        }]
      }
      render json: stock_data
    end
  end

  def news
    query = params[:ticker].upcase

    @stock = Stock.find_by( ticker: query )

    if @stock && false

      url = "https://api.intrinio.com/news?ticker=#{query}"
      response = api_call(url)

    else
      response = {
        data: [{
          url: "#",
          title: "Eric is the greatest!"
        }]
      }
      render json: response and return
    end

    render json: { data: response["data"][0..2]}

  end

  def show
    query = params[:ticker].upcase
    @stock = Stock.find_by( ticker: query )

    unless @stock
      #QUERY TO CONFIRM STOCK IS VALID -> NEEDED B/C API_CALL WILL ERROR OUT IF STOCK NOT VALID
      page = 1
      url = "https://api.intrinio.com/companies?query=#{query}&page_number=#{page}"
      exact_match = false

      until exact_match
        response = api_call(url)
        response_data = response['data']

        i = 0
        until i == response_data.length
          ticker = response_data[i]["ticker"].upcase.strip

          if ticker == query && ticker.length == query.length
            exact_match = true
          end
          i += 1
        end

        page += 1
        break if page > response['total_pages']
      end

      if exact_match
        url = "https://api.intrinio.com/companies?identifier=#{query}"
        response = api_call(url)

        @stock = Stock.create(ticker: query)
        @stock.company_name = response["name"]
        @stock.save
      else
        data = { ticker: "#{query}",
                 company_name: "Stock does not exist or is not supported."
               }
        render json: data and return
      end
    end
    render json: @stock
  end

  # PRICES include date range
  # https://api.intrinio.com/prices?identifier=AAPL

  # INFO
  # https://api.intrinio.com/companies?identifier=AA

  #news endpoint
  # https://api.intrinio.com/news?ticker=AAPL

  private

end
