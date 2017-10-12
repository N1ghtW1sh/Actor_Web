'use strict';

exports.__esModule = true;

var _utils = require('flux/utils');

var _ActorAppDispatcher = require('../dispatcher/ActorAppDispatcher');

var _ActorAppDispatcher2 = _interopRequireDefault(_ActorAppDispatcher);

var _ActorAppConstants = require('../constants/ActorAppConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DraftStore = function (_ReduceStore) {
  _inherits(DraftStore, _ReduceStore);

  function DraftStore() {
    _classCallCheck(this, DraftStore);

    return _possibleConstructorReturn(this, _ReduceStore.apply(this, arguments));
  }

  DraftStore.prototype.getInitialState = function getInitialState() {
    return null;
  };

  DraftStore.prototype.getDraft = function getDraft() {
    return this.getState();
  };

  DraftStore.prototype.reduce = function reduce(state, action) {
    switch (action.type) {
      case _ActorAppConstants.ActionTypes.DRAFT_LOAD:
      case _ActorAppConstants.ActionTypes.DRAFT_CHANGE:
        return action.draft;

      default:
        return state;
    }
  };

  return DraftStore;
}(_utils.ReduceStore);

exports.default = new DraftStore(_ActorAppDispatcher2.default);
//# sourceMappingURL=DraftStore.js.map