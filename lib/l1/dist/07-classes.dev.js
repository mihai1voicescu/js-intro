// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict'; // class syntax in JS is similar to other OOP languages
// unfortunately JS does not have concepts such as abstract classes and interfaces
// export exports the class so we can import it in other files

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dog = exports.Animal = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal =
/*#__PURE__*/
function () {
  function Animal() {
    var birthDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unknown';
    var species = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';

    _classCallCheck(this, Animal);

    // usually private fields are marked with _
    this._birthDate = birthDate;
    this._name = name;
    this._species = species;
  }

  _createClass(Animal, [{
    key: "run",
    value: function run() {
      // manual exception :)
      throw new Error("Not implemented");
    }
  }, {
    key: "greet",
    value: function greet() {
      console.log("Hi, I am ".concat(this._name));
    } // hide the set with a getter

  }, {
    key: "birthDate",
    get: function get() {
      return this._birthDate;
    } // hide the get with a setter

  }, {
    key: "name",
    set: function set(name) {
      this._name = name;
    } // getter and setters may contain function logic

  }, {
    key: "age",
    get: function get() {
      return Date.now() - this._birthDate;
    } // we also have class methods

  }], [{
    key: "create",
    value: function create() {
      return new Array(Math.floor(Math.random() * 10)).fill(undefined).map(function (_) {
        return new Animal();
      });
    }
  }]);

  return Animal;
}();

exports.Animal = Animal;
var animal = new Animal(); // the big advantage in js for setters and getter is that it looks like you are operating directly on the property
// this means you can easily change to a setter and getter afterwards if needed

console.log(animal.age); // taking properties works too

console.log(animal._birthDate);
animal.name = "Rex";
animal.greet();
console.log(Animal.create());

var Dog =
/*#__PURE__*/
function (_Animal) {
  _inherits(Dog, _Animal);

  function Dog(birthDate, name) {
    _classCallCheck(this, Dog);

    // super calls the parent constructor
    return _possibleConstructorReturn(this, _getPrototypeOf(Dog).call(this, birthDate, name, 'dog'));
  } // override greet


  _createClass(Dog, [{
    key: "greet",
    value: function greet() {
      console.log("Bark"); // call first greet method from the parent up (Animal)

      _get(_getPrototypeOf(Dog.prototype), "greet", this).call(this); // call first run method from this up (Dog)


      this.run(); // by default all objects are decedents of Object class

      console.log(this.valueOf());
    }
  }, {
    key: "run",
    value: function run() {// do dog running
    }
  }]);

  return Dog;
}(Animal);

exports.Dog = Dog;
var dog = new Dog();
dog.greet();