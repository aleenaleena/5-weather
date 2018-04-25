# AR589 Weather App

This weather app uses the [OpenWeatherMap](https://openweathermap.org) API. To get started [sign up](https://home.openweathermap.org/users/sign_up) for an account and [generate an API Key](https://home.openweathermap.org/api_keys). Once you've obtained your key, set it as the value of the `APIKEY` variable on line 10 of the `/javascript/weather.js` file.

## CSS Classes applied to Body

`weather.js` applies classes to the `body` element that you can use to style your weather app. The classes on `body` are reset every time the form is submitted, so DO NOT set your own classes on that element.

Based on the weather conditions provided by the OpenWeatherMap API, `weather.js` will apply one class to the `body` element from each of the following categories:

### Temperature

- `cold`
- `warm`
- `hot`

### Weather

- `thunderstorm`
- `drizzle`
- `rain`
- `snow`
- `atmosphere`
- `clear`
- `clouds`

### Wind

- `calm`
- `breezy`
- `windy`