/* global describe beforeEach expect it */

var assert = require('assert');
var common = require('./common');

var run = common.run;
var describe = common.describe;
var it = common.it;

var getIsMain = function () {
    return (
        typeof module !== 'undefined' && !module.parent
    ) || (
        typeof require !== 'undefined' && require.main === module
    );
};

run(getIsMain(), describe("How Strings work and the methods available", function () {
    it("Can uppercase a string", function () {
        var testString = "a lowercased string",
            transformedString = testString.toUpperCase();
        assert.strictEqual(transformedString, "A LOWERCASED STRING");
    });

    it("Can lowercase a string", function () {
        var testString = "AN UPPERCASED STRING",
            transformed = testString.toLowerCase();
        assert.strictEqual(transformed, "an uppercased string");
    });
    /**
     * Note that the beginning index is always 0.
     */
    it("Can reference a single character", function () {
        var testString = 'a random string',
            char = testString[0];
        assert.strictEqual(char, 'a');
    });

    it("Can find the position of a set of characters", function () {
        var testString = "Hey there",
            therePosition = testString.indexOf("there");
        assert.strictEqual(therePosition, 4);
    });

    it("Will show -1 for values that are not found in a set of characters", function () {
        var testString = "Hey there",
            nonExistentPosition = testString.indexOf("unknown");
        assert.strictEqual(nonExistentPosition, -1);
    });

    it("Can get a substring of characters", function () {
        var testString = "Hey there",
            tPosition = testString.indexOf("t"),
            thereSubString = testString.substr(tPosition);
        assert.strictEqual(thereSubString, "there");
    });

    it("Can show the length of characters in a string", function () {
        var testString = '1234',
            testLen = testString.length;
        assert.strictEqual(testLen, 4);
    });

    it("Can concatenate two strings", function (){
        var string1 = "Hello ",
            string2 = "World",
            newString = string1 + string2;
        assert.strictEqual(newString, "Hello World");
    });
    /**
     * This is the source of many JavaScript errors
     */
    it("Will give an unexpected result if you concatenate a string and a number", function () {
        var stringOne = '1',
            numberOne = 1,
            combinedString = stringOne + numberOne;
        assert.strictEqual(combinedString, '11');
    });

    it("Shows how to explicitly coerce values into strings", function () {
        var stringOne = String(1),
            stringTwo = 1 + '';
        assert.strictEqual(stringOne, '1');
        assert.strictEqual(stringTwo, '1');
    });

    it("Can convert a string to an array", function () {
        var string = 'one two three four',
            arr = string.split(' ');
        assert.strictEqual(arr[0], 'one');
        assert.strictEqual(arr.length, 4);
    });
    /**
     * Trimming whitespace is often used when you have users enter their username or other information
     * where they may accidentally press the spacebar.
     * JavaScript has no rTrim or lTrim methods, these are usually added in libraries.
     */
    it("Can trim leading whitespace", function () {
        var whitespace = " This is an example of unnecessary whitespace ";
        assert.strictEqual(whitespace.trim(), "This is an example of unnecessary whitespace");
    });

    /**
     * String replace will replace either a string or a regular expression.  Regular expressions are covered in
     * Chapter Two.
     */
    it("Can replace a string", function () {
        var newString = "cat".replace("cat", "dog");
        assert.strictEqual(newString, "dog");
    });

    it("Can do multi-line strings", function () {
        var string = "One and two " +
                "three and four",
            secondString = "One and two \
                three and four";
            /* This works because the backslash key will escape the empty space.
             * It will also add whitespace as part of the string
             * It is not recommended to do this.
             * The second string is very fragile, adding one space will make the test fail.
             */
        assert.strictEqual(string, "One and two three and four");
        assert.strictEqual(secondString, "One and two                 three and four");
    });
}));