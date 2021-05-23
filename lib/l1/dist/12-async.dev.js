// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
/*
 _    _      _                            _          _          _ _
| |  | |    | |                          | |        | |        | | |
| |  | | ___| | ___ ___  _ __ ___   ___  | |_ ___   | |__   ___| | |
| |/\| |/ _ \ |/ __/ _ \| '_ ` _ \ / _ \ | __/ _ \  | '_ \ / _ \ | |
\  /\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | | | |  __/ | |
 \/  \/ \___|_|\___\___/|_| |_| |_|\___|  \__\___/  |_| |_|\___|_|_|

 */
// JS is an event driven language, it's async by nature
// callbacks used to be the norm, which made for a very bad developer experience
// fortunately now the async/await syntax exists in combination with Promises
// lets see the legacy version
// nodeJS file system

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

fs.readFile('../../package.json', {
  encoding: 'utf8'
}, readFileCb); // the rest of the code will be executed before the callback is called

function readFileCb(err, data) {
  // this function will be called after the file is read
  if (err) {
    console.error("Error", err); // very important

    return;
  }

  console.log(data.slice(0, 10)); // if I want to write smth I have to do it in the callback

  fs.writeFile('./joke1.json', data, {
    encoding: 'utf8'
  }, function (err) {
    if (err) {
      console.error("Failed to write", err); // very important

      return;
    }

    console.log("wrote");
  });
} // as you can see this is pretty ugly, fortunately we have Promises now


fs.promises.readFile('../../package.json', {
  encoding: 'utf8'
}).then(function (data) {
  fs.promises.writeFile('./joke2.json', data, {
    encoding: 'utf8'
  }).then(function () {
    console.log("wrote");
  })["catch"](function (err) {
    console.error("Failed to write", err);
  });
})["catch"](function (err) {
  console.error("Error", err);
}); // well, not that more readable no ?
// fortunately we have async await which make Promise async code human readable and makes it look like sequential code

function ez() {
  var data;
  return regeneratorRuntime.async(function ez$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fs.promises.readFile('../../package.json', {
            encoding: 'utf8'
          }));

        case 3:
          data = _context.sent;
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Error", err);
          return _context.abrupt("return");

        case 10:
          _context.prev = 10;
          _context.next = 13;
          return regeneratorRuntime.awrap(fs.promises.writeFile('./joke3.json', data, {
            encoding: 'utf8'
          }));

        case 13:
          console.log("wrote");
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t1 = _context["catch"](10);
          console.error("Failed to write", err);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6], [10, 16]]);
}

ez(); // be very careful, if an async call was made in a non async function the try/catch will work ONLY on the sequential code
// with Promises it's also very easy to sync async operations

Promise.all([Promise.resolve(3), Promise.resolve(3), Promise.resolve(3), Promise.resolve(3)]).then(function (res) {
  console.log(res);
});