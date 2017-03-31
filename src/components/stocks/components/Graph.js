import React, { Component } from 'react'
import Chart from 'chart.js'

class Graph extends Component {

  componentDidMount() {

    function customTooltip(tooltip) {
      // Tooltip Element
			let tooltipEl = document.getElementById('chartjs-tooltip');
			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = "<table></table>"
				this._chart.canvas.parentNode.appendChild(tooltipEl);
			}

			if (tooltip.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			// Set Text
			if (tooltip.body) {
				tooltipEl.textContent = `${tooltip.dataPoints[0].xLabel}: ${tooltip.body[0].lines[0].split(':')[1]}`;
			}

      // Display, position, and set styles for font
			let positionY = this._chart.canvas.offsetTop;
			let positionX = this._chart.canvas.offsetLeft;
			tooltipEl.style.opacity = 1;
			tooltipEl.style.left = positionX + tooltip.caretX + 'px';
			tooltipEl.style.top = positionY + tooltip.caretY - 40 + 'px';
			tooltipEl.style.fontFamily = tooltip._fontFamily;
			tooltipEl.style.fontSize = tooltip.fontSize;
			tooltipEl.style.fontStyle = tooltip._fontStyle;
			tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
    }

    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.props.prices.labels,
        datasets: [{

          data: this.props.prices.price,
          fill: false,
          pointRadius: 1,
          borderColor: [
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        title:{
          display: false
        },
        tooltips: {
          enabled: false,
          mode: 'index',
          position: 'nearest',
          backgroundColor: 'rgba(54, 162, 235, 1)',
          custom: customTooltip
        },
        hover: {
          mode: 'nearest',
          intersect: false
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }]
        }
      }
    });
  }

  render() {

    if ( window.innerWidth <= 550 ) {
      return (
        <div className='center inline'>
          <canvas id="myChart" width="350" height="150"></canvas>
          <div id="chartjs-tooltip"></div>
        </div>
      )
    }

    if ( window.innerWidth <= 1015 ) {
      return (
        <div className='center inline'>
          <canvas id="myChart" width="450" height="200"></canvas>
          <div id="chartjs-tooltip"></div>
        </div>
      )
    }

    return (
      <div className='center inline'>
        <canvas id="myChart" width="550" height="200"></canvas>
        <div id="chartjs-tooltip"></div>
      </div>
    )
  }
}



export default Graph
