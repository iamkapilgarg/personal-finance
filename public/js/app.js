console.log('client side javascript loaded')
let mychart = document.getElementById('mychart').getContext('2d');
      let massPopChart = new Chart(mychart,{
        type:'line',
        data:{
          labels:['Ludhiana', 'Chandigarh', 'Jalandhar'],
          datasets:[{
            label: 'Population',
            data:[100000, 200000, 250000]
          },
          {
            label: 'Income',
            data:[10000, 20000, 25000]
          }]
        },
        options:{}
      });