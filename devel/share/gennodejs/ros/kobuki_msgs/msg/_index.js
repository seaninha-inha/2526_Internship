
"use strict";

let PowerSystemEvent = require('./PowerSystemEvent.js');
let VersionInfo = require('./VersionInfo.js');
let ControllerInfo = require('./ControllerInfo.js');
let BumperEvent = require('./BumperEvent.js');
let CliffEvent = require('./CliffEvent.js');
let ScanAngle = require('./ScanAngle.js');
let SensorState = require('./SensorState.js');
let MotorPower = require('./MotorPower.js');
let DigitalOutput = require('./DigitalOutput.js');
let KeyboardInput = require('./KeyboardInput.js');
let WheelDropEvent = require('./WheelDropEvent.js');
let ButtonEvent = require('./ButtonEvent.js');
let DigitalInputEvent = require('./DigitalInputEvent.js');
let ExternalPower = require('./ExternalPower.js');
let RobotStateEvent = require('./RobotStateEvent.js');
let Led = require('./Led.js');
let DockInfraRed = require('./DockInfraRed.js');
let Sound = require('./Sound.js');
let AutoDockingAction = require('./AutoDockingAction.js');
let AutoDockingActionGoal = require('./AutoDockingActionGoal.js');
let AutoDockingFeedback = require('./AutoDockingFeedback.js');
let AutoDockingActionFeedback = require('./AutoDockingActionFeedback.js');
let AutoDockingGoal = require('./AutoDockingGoal.js');
let AutoDockingResult = require('./AutoDockingResult.js');
let AutoDockingActionResult = require('./AutoDockingActionResult.js');

module.exports = {
  PowerSystemEvent: PowerSystemEvent,
  VersionInfo: VersionInfo,
  ControllerInfo: ControllerInfo,
  BumperEvent: BumperEvent,
  CliffEvent: CliffEvent,
  ScanAngle: ScanAngle,
  SensorState: SensorState,
  MotorPower: MotorPower,
  DigitalOutput: DigitalOutput,
  KeyboardInput: KeyboardInput,
  WheelDropEvent: WheelDropEvent,
  ButtonEvent: ButtonEvent,
  DigitalInputEvent: DigitalInputEvent,
  ExternalPower: ExternalPower,
  RobotStateEvent: RobotStateEvent,
  Led: Led,
  DockInfraRed: DockInfraRed,
  Sound: Sound,
  AutoDockingAction: AutoDockingAction,
  AutoDockingActionGoal: AutoDockingActionGoal,
  AutoDockingFeedback: AutoDockingFeedback,
  AutoDockingActionFeedback: AutoDockingActionFeedback,
  AutoDockingGoal: AutoDockingGoal,
  AutoDockingResult: AutoDockingResult,
  AutoDockingActionResult: AutoDockingActionResult,
};
