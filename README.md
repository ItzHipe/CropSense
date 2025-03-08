# **CropSense: Revolutionizing Agriculture with AI**

CropSense is an innovative project designed to detect soil quality and provide recommendations on which crops to grow and when. Utilizing advanced AI algorithms, CropSense aims to optimize agricultural productivity and sustainability.

## Aim and Objective of the Arduino Based Crop and Weather Suitability Station

This project aims to create a comprehensive weather station that monitors various environmental parameters and analyzes their suitability for crop growth. 
Here's a breakdown of the objectives:

* **Environmental Data Collection:** 
    * Measures temperature, humidity, atmospheric pressure, altitude, air quality, soil moisture, and rainfall.
    * Employs sensors like DHT22, BME280, rain sensor, soil moisture sensor and a MQ-135 for air quality.
* **Data Processing and Analysis:**
    * Calculates heat index based on temperature and humidity.
    * Accesses a JSON database containing crop-specific requirements for temperature, humidity, and soil moisture.
    * Analyzes the collected data against the crop database to determine suitable crops for the current conditions.
* **Data Display and Storage:**
    * Presents the collected sensor data on an OLED display.
    * Logs the data to an SD card for later analysis which also serves as a data backup in case WiFi is not available or we lose connection to the server.
* **Web Connectivity and Data Transmission:**
    * Connects to a Wi-Fi network.
    * Transmits the collected weather data along with crop suitability information to a web server at regular intervals.

## Working of the Arduino Code

The code can be segmented into several key functionalities:

1. **Initialization:**
    * Sets up communication with various sensors like DHT22, BME280, rain sensor, and analog air quality sensor.
    * Connects to the specified Wi-Fi network and synchronizes time with an NTP server.
    * Initializes the OLED display and SD card for data visualization and storage.

2. **Sensor Data Acquisition:**
    * Reads sensor values for temperature, humidity, pressure, altitude, air quality, soil moisture, and rainfall.
    * Calculates heat index based on temperature and humidity.

3. **Crop Suitability Analysis:**
    * Accesses a JSON database containing information on various crops and their specific requirements for temperature, humidity, and soil moisture.
    * Compares the collected sensor data with the crop requirements in the database.
    * Identifies crops that fall within the suitable range for the current conditions.

4. **Data Display and Storage:**
    * Presents the collected sensor data, heat index, and identified suitable crops on the OLED display.
    * Logs the sensor data, timestamp, crop suitability information, and Wi-Fi signal strength to an SD card file.

5. **Web Connectivity and Data Transmission:**
    * Connects to a specified web server over Wi-Fi.
    * Converts the collected weather data and crop suitability information into a JSON format.
    * Sends the JSON data to the web server at regular intervals.

This continuous cycle of data acquisition, analysis, display, storage, and transmission allows the Arduino station to function as a comprehensive weather monitoring and crop suitability assessment tool.

# **Getting Started**

CropSense was built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

**1. Clone the repository**
```bash
git clone https://github.com/ItzHipe/CropSense
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the development server**
```bash
npm run dev
```

# **Features**

## **Soil Analysis**
- Soil quality detection 
- Recommendations for optimal crop growth

## **Data Visualization**
- Detailed graphs
- Historical data tracking
