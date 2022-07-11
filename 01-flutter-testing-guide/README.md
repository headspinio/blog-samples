# Flutter Testing Guide

A Flutter project for _Flutter Testing Guide_

## Requirement
- [Install Flutter environment](https://docs.flutter.dev/get-started/install)
- A device (real device or simulator/emulator for integration tests)

## Install dependencies
1. Git clone this repository
2. Runs `flutter pub get`

## Run a unit test

```
$ flutter test test/unit_test.dart
```

## Run a widget test

```
$ flutter test test/widget_test.dart
```

## Run a integration test

This command requires a device to run on.

1. Start a device
    - A real device or a simulator/emulator
2. Run test command below
    ```
    $ flutter test integration_test/integration_test.dart
    ```
