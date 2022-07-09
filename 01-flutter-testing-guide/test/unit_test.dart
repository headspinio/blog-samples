// This is a basic Flutter unit test.

import 'package:test/test.dart';

import 'package:testing_guide/example.dart';

void main() {
  test('this is a test', () {
    expect(1, 1);
  });

  test('this is a failing test', () {
    expect(1, 2);
  });

  test('this is a failing test', () {
    fail('this test fails');
  });

  test('calls test method', () {
    var cal = MyTestClass();
    expect(cal.add(1, 2), 3);
  });
}
