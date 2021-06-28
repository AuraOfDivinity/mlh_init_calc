import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';


export default class Graph extends Component {
    render() {
        const {labels, results} = this.props
        console.log(this.props.label,'labels' )
        console.log(this.props.results, 'reselts')
        const data = {
            labels: labels,
            datasets: [
              {
                label: this.props.func,
                data: results,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                lineTension: 0.5
              },
            ],
        };

        const options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                  },
                },
              ],
            },
          };


        return (
            <div className="graph-container" style={{ display: !this.props.showGraph && 'none' }}>
                <div className="graph">
                    <Line data={data} options={options} />
                </div>
            </div>
        )
    }
}
