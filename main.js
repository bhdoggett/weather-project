const apiKey = "e6196781453b20093c744c7e5848630d";

// const locationExample = {
//   name: "Springfield",
//   lat: 38.7780946,
//   lon: -77.1807462,
//   country: "US",
//   state: "Virginia",
// };

const todayExample = {
  coord: {
    lon: -93.2982,
    lat: 37.2153,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 276.47,
    feels_like: 272.07,
    temp_min: 275.87,
    temp_max: 277.59,
    pressure: 1023,
    humidity: 65,
    sea_level: 1023,
    grnd_level: 975,
  },
  visibility: 10000,
  wind: {
    speed: 5.66,
    deg: 310,
    gust: 9.26,
  },
  clouds: {
    all: 75,
  },
  dt: 1732823683,
  sys: {
    type: 2,
    id: 2016620,
    country: "US",
    sunrise: 1732799173,
    sunset: 1732834613,
  },
  timezone: -21600,
  id: 4409896,
  name: "Springfield",
  cod: 200,
};

const fiveDayExample = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1732816800,
      main: {
        temp: 51.26,
        feels_like: 50.04,
        temp_min: 51.06,
        temp_max: 51.26,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 994,
        humidity: 84,
        temp_kf: 0.11,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 75 },
      wind: { speed: 11.12, deg: 290, gust: 26.71 },
      visibility: 10000,
      pop: 0.33,
      rain: { "3h": 0.17 },
      sys: { pod: "d" },
      dt_txt: "2024-11-28 18:00:00",
    },
    {
      dt: 1732827600,
      main: {
        temp: 49.68,
        feels_like: 44.55,
        temp_min: 46.49,
        temp_max: 49.68,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 79,
        temp_kf: 1.77,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 65 },
      wind: { speed: 13.73, deg: 297, gust: 29.97 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-11-28 21:00:00",
    },
    {
      dt: 1732838400,
      main: {
        temp: 46.89,
        feels_like: 41.09,
        temp_min: 44.69,
        temp_max: 46.89,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1003,
        humidity: 68,
        temp_kf: 1.22,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 72 },
      wind: { speed: 13.38, deg: 311, gust: 26.98 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-29 00:00:00",
    },
    {
      dt: 1732849200,
      main: {
        temp: 42.31,
        feels_like: 37.45,
        temp_min: 42.31,
        temp_max: 42.31,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1005,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 67 },
      wind: { speed: 7.92, deg: 299, gust: 20.8 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-29 03:00:00",
    },
    {
      dt: 1732860000,
      main: {
        temp: 40.73,
        feels_like: 34.97,
        temp_min: 40.73,
        temp_max: 40.73,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1005,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 42 },
      wind: { speed: 9.04, deg: 299, gust: 23.51 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-29 06:00:00",
    },
    {
      dt: 1732870800,
      main: {
        temp: 38.75,
        feels_like: 34.11,
        temp_min: 38.75,
        temp_max: 38.75,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1006,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 3 },
      wind: { speed: 6.24, deg: 297, gust: 18.01 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-29 09:00:00",
    },
    {
      dt: 1732881600,
      main: {
        temp: 37.02,
        feels_like: 33.48,
        temp_min: 37.02,
        temp_max: 37.02,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1007,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 2 },
      wind: { speed: 4.43, deg: 276, gust: 12.03 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-29 12:00:00",
    },
    {
      dt: 1732892400,
      main: {
        temp: 44.13,
        feels_like: 39.52,
        temp_min: 44.13,
        temp_max: 44.13,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1008,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 2 },
      wind: { speed: 8.19, deg: 246, gust: 18.03 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-11-29 15:00:00",
    },
    {
      dt: 1732903200,
      main: {
        temp: 47.21,
        feels_like: 42.06,
        temp_min: 47.21,
        temp_max: 47.21,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1006,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 38 },
      wind: { speed: 11.52, deg: 280, gust: 19.04 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-11-29 18:00:00",
    },
    {
      dt: 1732914000,
      main: {
        temp: 44.26,
        feels_like: 38.55,
        temp_min: 44.26,
        temp_max: 44.26,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1007,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 80 },
      wind: { speed: 10.96, deg: 292, gust: 19.35 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-11-29 21:00:00",
    },
    {
      dt: 1732924800,
      main: {
        temp: 38.01,
        feels_like: 31.51,
        temp_min: 38.01,
        temp_max: 38.01,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1009,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 42 },
      wind: { speed: 9.28, deg: 281, gust: 19.95 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-30 00:00:00",
    },
    {
      dt: 1732935600,
      main: {
        temp: 34.48,
        feels_like: 27.95,
        temp_min: 34.48,
        temp_max: 34.48,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1010,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 7.85, deg: 275, gust: 21.52 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-30 03:00:00",
    },
    {
      dt: 1732946400,
      main: {
        temp: 31.87,
        feels_like: 24.89,
        temp_min: 31.87,
        temp_max: 31.87,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1010,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 7.67, deg: 273, gust: 22.55 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-30 06:00:00",
    },
    {
      dt: 1732957200,
      main: {
        temp: 30.63,
        feels_like: 22.21,
        temp_min: 30.63,
        temp_max: 30.63,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1011,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 9.66, deg: 276, gust: 20.18 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-30 09:00:00",
    },
    {
      dt: 1732968000,
      main: {
        temp: 28.51,
        feels_like: 20.01,
        temp_min: 28.51,
        temp_max: 28.51,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1013,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 8.93, deg: 285, gust: 21.09 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-11-30 12:00:00",
    },
    {
      dt: 1732978800,
      main: {
        temp: 32.54,
        feels_like: 23.85,
        temp_min: 32.54,
        temp_max: 32.54,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1014,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 0 },
      wind: { speed: 11.14, deg: 293, gust: 18.21 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-11-30 15:00:00",
    },
    {
      dt: 1732989600,
      main: {
        temp: 38.21,
        feels_like: 32.04,
        temp_min: 38.21,
        temp_max: 38.21,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1012,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 2 },
      wind: { speed: 8.72, deg: 266, gust: 16.28 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-11-30 18:00:00",
    },
    {
      dt: 1733000400,
      main: {
        temp: 39.7,
        feels_like: 35.19,
        temp_min: 39.7,
        temp_max: 39.7,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1012,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 6 },
      wind: { speed: 6.33, deg: 254, gust: 14.45 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-11-30 21:00:00",
    },
    {
      dt: 1733011200,
      main: {
        temp: 33.75,
        feels_like: 29.89,
        temp_min: 33.75,
        temp_max: 33.75,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1013,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 30 },
      wind: { speed: 4.18, deg: 299, gust: 11.39 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-01 00:00:00",
    },
    {
      dt: 1733022000,
      main: {
        temp: 31.71,
        feels_like: 27.01,
        temp_min: 31.71,
        temp_max: 31.71,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1014,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 71 },
      wind: { speed: 4.7, deg: 289, gust: 11.74 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-01 03:00:00",
    },
    {
      dt: 1733032800,
      main: {
        temp: 30.96,
        feels_like: 27.27,
        temp_min: 30.96,
        temp_max: 30.96,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1013,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 81 },
      wind: { speed: 3.67, deg: 272, gust: 9.26 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-01 06:00:00",
    },
    {
      dt: 1733043600,
      main: {
        temp: 31.44,
        feels_like: 28.06,
        temp_min: 31.44,
        temp_max: 31.44,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1014,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.47, deg: 253, gust: 7.05 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-01 09:00:00",
    },
    {
      dt: 1733054400,
      main: {
        temp: 31.1,
        feels_like: 31.1,
        temp_min: 31.1,
        temp_max: 31.1,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1014,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.37, deg: 253, gust: 3.69 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-01 12:00:00",
    },
    {
      dt: 1733065200,
      main: {
        temp: 36.46,
        feels_like: 36.46,
        temp_min: 36.46,
        temp_max: 36.46,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1014,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.71, deg: 269, gust: 4.99 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-12-01 15:00:00",
    },
    {
      dt: 1733076000,
      main: {
        temp: 39.56,
        feels_like: 35.2,
        temp_min: 39.56,
        temp_max: 39.56,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1013,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.04, deg: 277, gust: 10.16 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-12-01 18:00:00",
    },
    {
      dt: 1733086800,
      main: {
        temp: 40.21,
        feels_like: 38.55,
        temp_min: 40.21,
        temp_max: 40.21,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1012,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      clouds: { all: 74 },
      wind: { speed: 3.04, deg: 219, gust: 9.35 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-12-01 21:00:00",
    },
    {
      dt: 1733097600,
      main: {
        temp: 34.59,
        feels_like: 29.07,
        temp_min: 34.59,
        temp_max: 34.59,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1014,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 46 },
      wind: { speed: 6.35, deg: 314, gust: 17.38 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-02 00:00:00",
    },
    {
      dt: 1733108400,
      main: {
        temp: 32.94,
        feels_like: 26.69,
        temp_min: 32.94,
        temp_max: 32.94,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1015,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      clouds: { all: 58 },
      wind: { speed: 6.91, deg: 308, gust: 19.13 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-02 03:00:00",
    },
    {
      dt: 1733119200,
      main: {
        temp: 29.14,
        feels_like: 22.75,
        temp_min: 29.14,
        temp_max: 29.14,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1014,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 29 },
      wind: { speed: 6.08, deg: 291, gust: 17.67 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-02 06:00:00",
    },
    {
      dt: 1733130000,
      main: {
        temp: 28.45,
        feels_like: 21,
        temp_min: 28.45,
        temp_max: 28.45,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1015,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 2 },
      wind: { speed: 7.31, deg: 288, gust: 21.21 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-02 09:00:00",
    },
    {
      dt: 1733140800,
      main: {
        temp: 27.84,
        feels_like: 20.55,
        temp_min: 27.84,
        temp_max: 27.84,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1016,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
      ],
      clouds: { all: 18 },
      wind: { speed: 6.91, deg: 287, gust: 20.51 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-02 12:00:00",
    },
    {
      dt: 1733151600,
      main: {
        temp: 33.6,
        feels_like: 26.06,
        temp_min: 33.6,
        temp_max: 33.6,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1016,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 6 },
      wind: { speed: 9.31, deg: 308, gust: 15.86 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-12-02 15:00:00",
    },
    {
      dt: 1733162400,
      main: {
        temp: 38.8,
        feels_like: 32.41,
        temp_min: 38.8,
        temp_max: 38.8,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1015,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 5 },
      wind: { speed: 9.44, deg: 309, gust: 13.78 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-12-02 18:00:00",
    },
    {
      dt: 1733173200,
      main: {
        temp: 38.39,
        feels_like: 32.74,
        temp_min: 38.39,
        temp_max: 38.39,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1015,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 41 },
      wind: { speed: 7.81, deg: 302, gust: 14.45 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-12-02 21:00:00",
    },
    {
      dt: 1733184000,
      main: {
        temp: 33.66,
        feels_like: 26.56,
        temp_min: 33.66,
        temp_max: 33.66,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1017,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 36 },
      wind: { speed: 8.52, deg: 296, gust: 21.12 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-03 00:00:00",
    },
    {
      dt: 1733194800,
      main: {
        temp: 31.14,
        feels_like: 23.7,
        temp_min: 31.14,
        temp_max: 31.14,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1018,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 5 },
      wind: { speed: 8.14, deg: 292, gust: 26.84 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-03 03:00:00",
    },
    {
      dt: 1733205600,
      main: {
        temp: 30.79,
        feels_like: 23.14,
        temp_min: 30.79,
        temp_max: 30.79,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1018,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 4 },
      wind: { speed: 8.39, deg: 287, gust: 27.89 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-03 06:00:00",
    },
    {
      dt: 1733216400,
      main: {
        temp: 30.4,
        feels_like: 23.05,
        temp_min: 30.4,
        temp_max: 30.4,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1018,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 7.76, deg: 288, gust: 28.21 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-03 09:00:00",
    },
    {
      dt: 1733227200,
      main: {
        temp: 30.43,
        feels_like: 22.96,
        temp_min: 30.43,
        temp_max: 30.43,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1019,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 7.96, deg: 291, gust: 26.46 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2024-12-03 12:00:00",
    },
    {
      dt: 1733238000,
      main: {
        temp: 36.16,
        feels_like: 28.69,
        temp_min: 36.16,
        temp_max: 36.16,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1019,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 0 },
      wind: { speed: 10.4, deg: 295, gust: 18.77 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-12-03 15:00:00",
    },
  ],
  city: {
    id: 4787117,
    name: "Springfield",
    coord: { lat: 38.7781, lon: -77.1807 },
    country: "US",
    population: 30484,
    timezone: -18000,
    sunrise: 1732795544,
    sunset: 1732830505,
  },
};

const city = "Springfield";
const state = "VA";
const country = "US";
const limit = `&limit=1`;
const todayURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}${limit}&appid=${apiKey}`;
// replace the search query with ${query}

// const geoLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}${limit}&appid=${apiKey}`;

// let lat = locationExample.lat;
// let long = locationExample.lon;

const listAllTemps = (object) => {
  object.list.for();
};
const temp = fiveDayExample.list[0].main.temp;
const allTemps1 = [];

const getAllTemps1 = (fiveDayData) =>
  fiveDayData.list.forEach((dt) => allTemps1.push(dt.main.temp));
getAllTemps1(fiveDayExample);

const getDayData = (day) => {
  const dayData = [];
  let indexRange = [];
  if (day === 1) {
    indexRange = [0, 7];
  }
  if (day === 2) {
    indexRange = [8, 15];
  }
  if (day === 3) {
    indexRange = [16, 23];
  }
  if (day === 4) {
    indexRange = [24, 31];
  }
  if (day === 5) {
    indexRange = [32, 39];
  }

  for (let i = indexRange[0]; i <= indexRange[1]; i++) {
    const element = fiveDayExample.list[i];
    dayData.push(element);
  }
  return dayData;

  // 0-7 = day1
  // 8-15 = day2
  // 16-23 = day3
  // 24-31 = day4
  // 32-39 = day5
};

// const getAllTemps2 = (fiveDayData) => {
//   array = [];
//   fiveDayData.list.forEach((dt) => array.push(dt.main.temp));
//   return array;
// };

// const allTemps2 = getAllTemps2(fiveDayExample);

// const timestamp = fiveDayExample.list[0].dt; // Unix timestamp in seconds
// const date = new Date(timestamp * 1000); // Convert to milliseconds
// console.log(date.toUTCString()); // Outputs date in UTC format
// console.log(date.toLocaleString()); // Outputs date in local timezone format

const fetchNow = () => {
  const query = document.querySelector("#query").value.replace(/\s+/g, "%20");

  console.log(query);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}${limit}&appid=${apiKey}&units=imperial`;
  console.log(url);

  fetch(url, {
    method: "Get",
    dataType: "json",
  })
    .then((data) => data.json())
    .then((data) => addNow(data));
};

const addNow = (data) => {
  const nowSection = document.querySelector("#now");
  nowSection.replaceChildren();

  const template = `
  <div class="col-md-2">
    <h3 class="text-center">${data.main.temp}</h3>
    <h4 class="text-center">${data.name}</h4>
    <h5 class="text-center">${data.weather[0].main}</h5>
  </div>
  <div class="col-md-2">
    <img
      src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
      alt="unable to load image"
    />
  </div>
  `;

  nowSection.insertAdjacentHTML("beforeend", template);
};

const fetchFiveDay = () => {
  const weatherFiveDayURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
};

const searchButton = document.querySelector(".search");
searchButton.addEventListener("click", () => fetchNow());
