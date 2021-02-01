/**
 * Dummy data provider for nivo charts
 */

// data for Bar Chart
const barChartData = [
  {
    "id": "2020年1月",
    "肉": 30,
    "魚": 38,
    "野菜": 87,
  },
  {
    "id": "2020年2月",
    "肉": 24,
    "魚": 20,
    "野菜": 43,
  },
  {
    "id": "2020年3月",
    "肉": 38,
    "魚": 29,
    "野菜": 85,
  },
  {
    "id": "2020年4月",
    "肉": 59,
    "魚": 24,
    "野菜": 66,
  },
  {
    "id": "2020年5月",
    "肉": 31,
    "魚": 48,
    "野菜": 90,
  },
];

// Data for Line Chart
const lineChartData = [
  {
    "id": '日経平均株価',
    "data": [
      {"x": "1月","y": 23656},
      {"x": "2月","y": 23872},
      {"x": "3月","y": 20794},
      {"x": "4月","y": 17820},
      {"x": "5月","y": 19619},
      {"x": "6月","y": 21877},
      {"x": "7月","y": 22306},
      {"x": "8月","y": 22329},
      {"x": "9月","y": 23205},
      {"x": "10月","y": 23029},
      {"x": "11月","y": 24325},
      {"x": "12月","y": 26751},
    ]
  }
];

// Data for Pie Chart
const pieChartData = [
  {
    "id": "apple",
    "label": "リンゴ",
    "value": 35,
  },
  {
    "id": "tomato",
    "label": "トマト",
    "value": 12,
  },
  {
    "id": "lemon",
    "label": "レモン",
    "value": 24,
  },
  {
    "id": "orange",
    "label": "オレンジ",
    "value": 48,
  },
  {
    "id": "watermelon",
    "label": "スイカ",
    "value": 76,
  },
  {
    "id": "mango",
    "label": "マンゴー",
    "value": 14,
  }
];




// Fake async method to get the data from A server
export const obtainData = async (chartType) => {
  let data = null;
  if (chartType === 'bar') {
    data = barChartData;
  } else if (chartType === 'line') {
    data = lineChartData;
  } else if (chartType === 'pie') {
    data = pieChartData;
  } else {
    data = null;
  }
  return data;
}
