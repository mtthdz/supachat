
# supachat

Supachat is a chat service built with React Native and Supabase. This project will not be published to a production environment. To test the functionality, please follow the startup steps listed below.

## Local setup

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
# install dependencies
npm install
cd ios && pod install

# within root dir, startup metro
# metro will provide instructions to startup either iOS or Android simulators if you prefer to run both
# the bundler and installer in one window
npm start

# alternatively, open another window and run the following prompts to startup either iOS or Android simulators
npm run android
npm run ios

```
