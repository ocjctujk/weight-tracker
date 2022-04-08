import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';
import {
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import { utils } from 'protractor';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor() {}
  labels = [
    'April',
    'May',
    'June',
    'July',
  ];

  data = {
    labels: this.labels,
    datasets: [
      {
        label: 'Your weight',
        data: [94,93 ],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Target',
        data: [94,91,88,86],
        fill: false,
        borderColor: 'rgb(51, 204, 51)',
        tension: 0.1,
      }
    ],
  };
  ngOnInit(): void {
    var ctx = document.getElementById('myChart') as ChartItem;
    var myChart = new Chart(ctx, {
      type: 'line',
      data: this.data,
    });
    Chart.register(...registerables);
  }

  
}
