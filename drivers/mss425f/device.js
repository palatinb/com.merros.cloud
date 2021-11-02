'use strict';

const Homey = require('homey');
const Device = require('../../lib/device.js')

const capabilityMap = {
    "onoff": {
        "channel": 1,
        "key": "STATE",
        "set": {
            "key": "STATE",
            "channel": 1
        },
        "channel": 2,
        "key": "STATE",
        "set": {
            "key": "STATE",
            "channel": 1
        },
        "channel": 3,
        "key": "STATE",
        "set": {
            "key": "STATE",
            "channel": 1
        },
        "channel": 4,
        "key": "STATE",
        "set": {
            "key": "STATE",
            "channel": 1
        },
        "channel": 5,
        "key": "STATE",
        "set": {
            "key": "STATE",
            "channel": 1
        },
    }
}

class MerossDevice extends Device {

    onInit() {
        super.onInit(capabilityMap);
    }
}

module.exports = MerossDevice;
