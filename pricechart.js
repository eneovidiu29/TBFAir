const xArray = ["Our Prices", "Other travelling agencies"];
const yArray = [75, 100];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"#4a9878"},
  width: [0.6, 0.6]
}];

const layout = {title:"Aiming to have the lowest price", paper_bgcolor: "#0a191e", plot_bgcolor: "#0a191e", font: {
    
    size: 15,
    color: '#4a9878' 
  }};

Plotly.newPlot("pricechart", data, layout);