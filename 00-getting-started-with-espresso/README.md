## Getting Started with Espresso

This project is a sample Espresso project for _Getting Started with Espresso_.

## What this project does

An Android project to run an Espresso test.

## How to run

### On macOS or Linux

1. Start an Android emulator or connect an Android device 
2. Run `./gradlew connectedAndroidTest`

### On Windows

1. Start an Android emulator or connect an Android device
2. Run `gradlew.bat connectedAndroidTest`

## Run with HeadSpin

1. Connect to a device over `hs connect`
2. Run `connectedAndroidTest`

Note:
`Unknown platform error occurred when running the UTP test suite. Please check logs for details.` error could happen when the gradle command does not handle the device detection automatically. Then, please try out another device in this repository.

Another way:

1. Connect to a device over `hs connect`
2. Run `./gradlew installDebug installDebugAndroidTest`
3. Run `adb shell am instrument -w io.headspin.helloworld.test/androidx.test.runner.AndroidJUnitRunner`

## Requirement
- Java 11
