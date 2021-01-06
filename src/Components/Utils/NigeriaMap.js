import React, { useEffect } from "react";
// const Highcharts = window.Highcharts;
import Highcharts from "highcharts/highmaps";
import exporting from 'highcharts/modules/exporting'
// require('highcharts/modules/exporting')(Highcharts);
exporting(Highcharts)

function NigeriaMap() {
  useEffect(() => {
    let mapContainer = document.querySelector(".ng-map-container");

    var data = [
      ["ng-ri", 0],
      ["ng-kt", 1],
      ["ng-so", 2],
      ["ng-za", 3],
      ["ng-yo", 4],
      ["ng-ke", 5],
      ["ng-ad", 6],
      ["ng-bo", 7],
      ["ng-ak", 8],
      ["ng-ab", 9],
      ["ng-im", 10],
      ["ng-by", 11],
      ["ng-be", 12],
      ["ng-cr", 13],
      ["ng-ta", 14],
      ["ng-kw", 15],
      ["ng-la", 16],
      ["ng-ni", 17],
      ["ng-fc", 18],
      ["ng-og", 19],
      ["ng-on", 20],
      ["ng-ek", 21],
      ["ng-os", 22],
      ["ng-oy", 23],
      ["ng-an", 24],
      ["ng-ba", 25],
      ["ng-go", 26],
      ["ng-de", 27],
      ["ng-ed", 28],
      ["ng-en", 29],
      ["ng-eb", 30],
      ["ng-kd", 31],
      ["ng-ko", 32],
      ["ng-pl", 33],
      ["ng-na", 34],
      ["ng-ji", 35],
      ["ng-kn", 36],
    ];
  
    Highcharts.mapChart(mapContainer, {
      chart: {
        map: "countries/ng/ng-all",
      },
  
      title: {
        text: "",
      },
  
      subtitle: {
        text:
        // ''
          'Source map: <a href="http://code.highcharts.com/mapdata/countries/ng/ng-all.js">Nigeria</a>',
      },
  
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },
  
      colorAxis: {
        min: 0,
      },
  
      series: [
        {
          data: data,
          name: "{point.name}",
          states: {
            hover: {
              color: "#BADA55",
            },
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      ],
    });  
  }, [])

  console.log(Highcharts);
  
  
  return <div className="ng-map-container"></div>;
}

export default NigeriaMap;
