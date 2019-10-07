console.log('client side javascript loaded')
let mychart = document.getElementById('mychart').getContext('2d');
fetch("/finance").then((response)=>{
  console.log(response.json().then((data)=>{
    console.log(data)
    let massPopChart = new Chart(mychart, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: data.datasets
      },
      options: {}
    });
  }))
})
