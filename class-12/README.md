# Adding a chart to the Vote Tracker App

## Overview

In this class you will learn how to utilize a 3rd party library so that you can provide a graphical representation of the click data that is being collected from your vote tracker.

## Class 12 Outline

- Reading 12
  - Discussion
- Code review of previous lab assignment- Salmon Cookies- LAB 9
- Demo
  - canvas
- Lab 12 preview and prep
  - Odd Duck pt 2 *branch-* **dataviz**
- Review Quiz #5
- Learning Journal 12

## Learning Objectives

### Students will be able to

#### Describe and Define

- Use of the `<canvas />` element
- 3rd party libraries

#### Execute

- Read and understand 3rd party documentation.
- Integrate data with a 3rd party library.
- Demonstrate use of `<canvas />` in conjunction with Chart.js.

## Reading

[JavaScript Canvas](https://www.javascripttutorial.net/web-apis/javascript-canvas/){:target="_blank"}

1. What does the `<canvas>` allow a developer to acheive?
2. What is the importance of the closing `</canvas> tag?
3. Explain what the `getContext()` method does.

[Chart.js Documentation](http://www.chartjs.org/docs/){:target="_blank"}:

1. What is Chart.js and how it can be brought into your project?
2. List 3 different Chart types you can create using Chart.js.

[Easily Create Stunning Animated Charts with Chart.js](https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/){:target="_blank"}

1. What are some advantages to displaying data via a chart over a table?
2. How could Chart.js aid your previously created applications visually?

## Bookmark and Review

[Drawing Shapes With Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes){:target="_blank"}

[Applying Style and Colors - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors){:target="_blank"}

[Drawing Text - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text){:target="_blank"}


## End of Class Review

1. What is HTML `<canvas />`?

1. What is a CDN?

1. What are some ways we can bring in third party libraries into our projects?


# Chart.js -- Simple Steps to Create a Chart

This guide explains the basic steps to build a chart using Chart.js.

------------------------------------------------------------------------

## 1. Add Chart.js to Your Project

Include the Chart.js library in your HTML file.

``` html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

------------------------------------------------------------------------

## 2. Create a Canvas Element

Charts are drawn inside a `<canvas>` element.

``` html
<canvas id="myChart"></canvas>
```

------------------------------------------------------------------------

## 3. Get the Canvas in JavaScript

Select the canvas so JavaScript can draw the chart.

``` javascript
const ctx = document.getElementById('myChart');
```

------------------------------------------------------------------------

## 4. Create a New Chart

Use the `Chart` constructor to create the chart.

``` javascript
const myChart = new Chart(ctx, {
});
```

------------------------------------------------------------------------

## 5. Choose the Chart Type

Specify what type of chart you want.

Examples:

-   bar
-   line
-   pie
-   doughnut

``` javascript
type: 'bar'
```

------------------------------------------------------------------------

## 6. Add Data

Charts need labels and values.

``` javascript
data: {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'Votes',
    data: [12, 19, 3]
  }]
}
```

------------------------------------------------------------------------

## 7. Add Colors (Optional)

You can style the chart with colors.

``` javascript
backgroundColor: ['red', 'blue', 'yellow']
```

------------------------------------------------------------------------

## 8. Add Options (Optional)

Options control things like axes and formatting.

Example: start the Y-axis at zero.

``` javascript
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
```

------------------------------------------------------------------------

# Basic Chart Structure

A Chart.js chart has three main parts:

Chart ├─ type\
├─ data\
│ ├─ labels\
│ └─ datasets\
└─ options

------------------------------------------------------------------------

# Example Complete Chart

``` javascript
const myChart = new Chart(ctx, {
  type: 'bar',

  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'Votes',
      data: [12, 19, 3],
      backgroundColor: ['red', 'blue', 'yellow']
    }]
  },

  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
```

------------------------------------------------------------------------

# Quick Checklist for Students

✔ Add Chart.js library\
✔ Create a `<canvas>` element\
✔ Get the canvas in JavaScript\
✔ Create a `new Chart()`\
✔ Set the `type`\
✔ Add `data` (labels + values)\
✔ Add `options` if needed

------------------------------------------------------------------------

Tip: Start simple. Once the chart works, try changing:

-   chart type
-   colors
-   data values
-   labels

