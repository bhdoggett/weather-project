const apiKey = "6427275c4ee8b157888fdf144b2fc5ca";
const units = "imperial";

const getCurrentLocation = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lon: pos.coords.longitude,
          lat: pos.coords.latitude,
        });
      },
      (error) => reject(console.warn(`ERROR(${error.code}): ${error.message}`)),
      options
    );
  });
};

async function fetchCurrentLocationData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=${units}`;

  const fetchedData = await fetch(url, {
    method: "GET",
    data: "json",
  });

  const currentLocationData = await fetchedData.json();

  return currentLocationData;
}

async function addCurrentLocation() {
  try {
    const location = await getCurrentLocation();
    const locationData = await fetchCurrentLocationData(location);
    addNow(locationData);

    const fiveDayData = await fetchFiveDayData(location);
    const processedData = await processFiveDayData(fiveDayData);
    addFiveDay(processedData);

    addFiveDay;
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

addCurrentLocation();

async function getNow() {
  try {
    const nowData = await fetchNow();
    addNow(nowData);
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

async function fetchNow() {
  const query = document.querySelector("#query").value.replace(/\s+/g, "%20");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}$&limit=1&appid=${apiKey}&units=${units}`;

  const fetchedData = await fetch(url, {
    method: "Get",
    dataType: "json",
  });

  const nowData = await fetchedData.json();

  return nowData;
}

async function addNow(data) {
  const nowSection = document.querySelector("#now");
  nowSection.replaceChildren();

  const template = `      
    <div class="row justify-content-center forecast-today my-3" id="now">
      <div class="col-md-6">
        <h3 class="text-center">${data.main.temp.toFixed(1)}°</h3>
        <h4 class="text-center">${data.name}</h4>
        <h5 class="text-center">${data.weather[0].main}</h5>
      </div>
      <div class="col-md-6">
        <img
          class="img-fluid mx-auto d-block"
          src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" )
          alt="unable to load image"
        />
      </div>
    </div>
  `;

  nowSection.insertAdjacentHTML("beforeend", template);
}

async function getFiveDay() {
  try {
    const coordinates = await fetchCoordinates();
    const fiveDayData = await fetchFiveDayData(coordinates);
    const processedData = await processFiveDayData(fiveDayData);
    addFiveDay(processedData);
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

async function fetchCoordinates() {
  const query = document.querySelector("#query").value.replace(/\s+/g, "%20");

  const coordinatesCall = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}
    `,
    {
      method: "GET",
      dataType: "json",
    }
  );

  const coordinatesArray = await coordinatesCall.json();
  const coordinates = coordinatesArray[0];

  return coordinates;
}

async function fetchFiveDayData(coordinates) {
  const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;

  const fetchFiveDay = await fetch(fiveDayURL, {
    method: "GET",
    dataType: "json",
  });

  const fiveDayData = await fetchFiveDay.json();

  console.log("Five Day Data:", fiveDayData);

  return fiveDayData;
}

async function processFiveDayData(data) {
  // create an array for each of the five days

  const dividedDayData = [];

  // process information in each array to produce the correct temperature estimate and the most commonly listed icon code and the name of the day. This information could be stored in an object that summarizes the information. This would make it easier to reference in the html tempalate.

  // update html template with each day's information

  function processDayData(day) {
    const dayData = {
      avgTemp: 0,
      iconSummary: null,
      weatherSummary: null,
      dayName: "",
    };

    let tempAcc = 0;
    let icons = {};
    let weatherDescriptions = {};

    // identify the appropriate data range
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

    // loop through the identified data range to accumulte data
    for (let i = indexRange[0]; i <= indexRange[1]; i++) {
      const time = data.list[i];

      // accumulate temperature values to calculate average after the fact
      tempAcc += time.main.temp;

      // accumulate weather descriptions
      if (weatherDescriptions.hasOwnProperty(time.weather[0].main)) {
        weatherDescriptions[time.weather[0].main]++;
      } else {
        weatherDescriptions[time.weather[0].main] = 1;
      }

      // accumulate weather icons
      if (icons.hasOwnProperty(time.weather[0].icon)) {
        icons[time.weather[0].icon]++;
      } else {
        icons[time.weather[0].icon] = 1;
      }
    }

    // calculate average by dividing accumulated temperatures by 8
    dayData.avgTemp = (tempAcc / 8).toFixed(1);

    // find the day of the week by creating a new Date, and the processessing that with Intl.DateTimeFormat.

    const dt_txt = new Date(data.list[indexRange[0]].dt_txt);

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    });

    dayData.dayName = dateFormatter.format(dt_txt);

    // find most common weather description. if all weather descriptions are equal, leave the first one.
    let weatherDescriptionsMaxCount = 0;

    for (let key in weatherDescriptions) {
      if (weatherDescriptions[key] > weatherDescriptionsMaxCount) {
        weatherDescriptionsMaxCount = weatherDescriptions[key];
        dayData.weatherSummary = key;
      }
    }

    // find most common icon. if all icons are equal, leave the first icon.
    let iconMaxCount = 0;

    for (let key in icons) {
      if (icons[key] > iconMaxCount) {
        iconMaxCount = icons[key];
        dayData.iconSummary = key;
      }
    }

    return dayData;
  }

  //loop through all days to return a summary data object or each day
  for (let i = 1; i <= 5; i++) {
    const processedDayData = processDayData(i);
    dividedDayData.push(processedDayData);
  }

  return dividedDayData;
}

async function addFiveDay(summaryData) {
  const fiveDaySection = document.querySelector(".forecast-5-day");
  fiveDaySection.replaceChildren();

  console.log("Summary Data:", summaryData);
  const template = `
    <div class="row justify-content-center">
      <h2>Five Day Forecast</h2>
    </div>


    <div class="row justify-content-center my-2">
      <div class="col-md-2 container-fluid border justify-content-center" id="day-1">
        <p class="text-center mt-2">
          <span class="text-center">${summaryData[0].weatherSummary}</span>
          <br />
          <span class="text-center"><strong>${summaryData[0].avgTemp}°</strong></span>
          <br />
          <img src="https://openweathermap.org/img/wn/${summaryData[0].iconSummary}@2x.png" alt="" />
          <br />
          <span>${summaryData[0].dayName}</span>
        </p>
      </div>

      <div class="col-md-2 container-fluid border justify-content-center" id="day-2">
        <p class="text-center mt-2">
          <span class="text-center">${summaryData[1].weatherSummary}</span>
          <br />
          <span class="text-center"><strong>${summaryData[1].avgTemp}°</strong></span>
          <br />
          <img src="https://openweathermap.org/img/wn/${summaryData[1].iconSummary}@2x.png" alt="" />
          <br />
          <span>${summaryData[0].dayName}</span>
        </p>
      </div>

      <div class="col-md-2 container-fluid border justify-content-center" id="day-3">
        <p class="text-center mt-2">
          <span class="text-center">${summaryData[2].weatherSummary}</span>
          <br />
          <span class="text-center"><strong>${summaryData[2].avgTemp}°</strong></span>
          <br />
          <img src="https://openweathermap.org/img/wn/${summaryData[2].iconSummary}@2x.png" alt="" />
          <br />
          <span>${summaryData[2].dayName}</span>
        </p>
      </div>

      <div class="col-md-2 container-fluid border justify-content-center" id="day-4">
        <p class="text-center mt-2">
          <span class="text-center">${summaryData[3].weatherSummary}</span>
          <br />
          <span class="text-center"><strong>${summaryData[3].avgTemp}°</strong></span>
          <br />
          <img src="https://openweathermap.org/img/wn/${summaryData[3].iconSummary}@2x.png" alt="" />
          <br />
          <span>${summaryData[3].dayName}</span>
        </p>
      </div>

      <div class="col-md-2 container-fluid border justify-content-center" id="day-5">
        <p class="text-center mt-2">
          <span class="text-center">${summaryData[4].weatherSummary}</span>
          <br />
          <span class="text-center"><strong>${summaryData[4].avgTemp}°</strong></span>
          <br />
          <img src="https://openweathermap.org/img/wn/${summaryData[4].iconSummary}@2x.png" alt="" />
          <br />
          <span>${summaryData[4].dayName}</span>
        </p>
      </div>    
    </div>
      `;

  fiveDaySection.insertAdjacentHTML("beforeend", template);
}

const searchButton = document.querySelector(".search");
searchButton.addEventListener("click", () => {
  getNow();
  getFiveDay();
  document.querySelector("#query").value = "";
});
