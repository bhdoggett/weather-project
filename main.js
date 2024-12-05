const apiKey = "6427275c4ee8b157888fdf144b2fc5ca";
const units = "imperial";

const fetchNow = () => {
  const query = document.querySelector("#query").value.replace(/\s+/g, "%20");

  console.log(query);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}$&limit=1&appid=${apiKey}&units=${units}`;
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
    <h3 class="text-center">${data.main.temp.toFixed(1)}</h3>
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

async function fetchFiveDay() {
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
    console.log(coordinatesArray);

    console.log("Coordinates:", coordinates);

    return coordinates;
  }

  async function getFiveDayData(coordinates) {
    const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;

    console.log("Five Day URL:", fiveDayURL);

    const fetchFiveDay = await fetch(fiveDayURL, {
      method: "GET",
      dataType: "json",
    });

    const fiveDayData = await fetchFiveDay.json();

    console.log("Five Day Data:", fiveDayData);

    return fiveDayData;
  }

  async function processFiveDayForecast(data) {
    // create an array for each of the five days

    const dividedDayData = [];

    // process information in each array to produce the correct temperature estimate and the most commonly listed icon code. This information could be stored in an object that summarizes the information. this would make it easier to reference in the html tempalate.

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
        // console.log(data.list[i]);
        const time = data.list[i];
        const dt_text = data.list[indexRange[0]];

        console.log("Temp:", time.main.temp);

        // accumulate temperature values to calculate average after the fact
        tempAcc += time.main.temp;

        console.log(time.weather[0].main);

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

        // console.log("Icons:", icons);
      }

      const dt_txt = new Date(data.list[indexRange[0]].dt_txt);
      console.log("dt_txt:", dt_txt);

      const dateFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      });

      dayData.dayName = dateFormatter.format(dt_txt);
      // console.log(dayName);

      // console.log("Day 1:", dayName);
      // calculate temp average
      dayData.avgTemp = (tempAcc / 8).toFixed(1);

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

      // use date-fns to convert date information into datys of the week. Find most common day

      // console.log("Average Temp:", dayData.avgTemp);
      // dayData.push()
      // console.log(`Day ${day}:`, dayData);
      // console.log("Icons:", icons);
      // console.log("Weather Descriptons:", weatherDescriptions);
      // console.log(dayData);

      dividedDayData.push(dayData);
    }

    //loop through all days to return a summary data object or each day
    for (let i = 1; i <= 5; i++) {
      processDayData(i);
    }
    console.log(dividedDayData);
    return dividedDayData;
  }

  async function addFiveDay(summaryData) {
    const fiveDaySection = document.querySelector(".forecast-5-day");
    fiveDaySection.replaceChildren();

    console.log("Summary Data:", summaryData);
    const template = `
        <div class="col-md-2 container-fluid" id="day-1">
          <div class="day-container justify-content-center">
            <p class="text-center">
              <span class="text-center">${summaryData[0].weatherSummary}</span>
              <br />
              <span class="text-center"><strong>${summaryData[0].avgTemp}°</strong></span>
              <br />
              <img src="https://openweathermap.org/img/wn/${summaryData[0].iconSummary}@2x.png" alt="" />
              <br />
              <span>${summaryData[0].dayName}</span>
            </p>
          </div>
        </div>

        <div class="col-md-2 container-fluid" id="day-2">
          <div class="day-container justify-content-center">
            <p class="text-center">
              <span class="text-center">${summaryData[1].weatherSummary}</span>
              <br />
              <span class="text-center"><strong>${summaryData[1].avgTemp}°</strong></span>
              <br />
              <img src="https://openweathermap.org/img/wn/${summaryData[1].iconSummary}@2x.png" alt="" />
              <br />
              <span>${summaryData[1].dayName}</span>
            </p>
          </div>
        </div>

        <div class="col-md-2 container-fluid" id="day-3">
          <div class="day-container justify-content-center">
            <p class="text-center">
              <span class="text-center">${summaryData[2].weatherSummary}</span>
              <br />
              <span class="text-center"><strong>${summaryData[2].avgTemp}°</strong></span>
              <br />
              <img src="https://openweathermap.org/img/wn/${summaryData[2].iconSummary}@2x.png" alt="" />
              <br />
              <span>${summaryData[2].dayName}</span>
            </p>
          </div>
        </div>

        <div class="col-md-2 container-fluid" id="day-4">
          <div class="day-container justify-content-center">
            <p class="text-center">
              <span class="text-center">${summaryData[3].weatherSummary}</span>
              <br />
              <span class="text-center"><strong>${summaryData[3].avgTemp}°</strong></span>
              <br />
              <img src="https://openweathermap.org/img/wn/${summaryData[3].iconSummary}@2x.png" alt="" />
              <br />
              <span>${summaryData[3].dayName}</span>
            </p>
          </div>
        </div>

        <div class="col-md-2 container-fluid" id="day-5">
          <div class="day-container justify-content-center">
            <p class="text-center">
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

  // try {
  //   const data = await fetchData(); // fetch coordinates funciton called

  //   const step1Result = await processStep1(data); // fetch five day data funciton called

  //   const step2Result = await processStep2(step1Result); // update templates function called

  //   console.log(step2Result);
  // } catch (error) {
  //   console.error("Error processing data:", error);
  // }

  try {
    const coordinates = await fetchCoordinates();

    const fiveDayData = await getFiveDayData(coordinates);

    const processedData = await processFiveDayForecast(fiveDayData);

    addFiveDay(processedData);
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

const searchButton = document.querySelector(".search");
searchButton.addEventListener("click", () => {
  fetchNow();
  fetchFiveDay();
});
