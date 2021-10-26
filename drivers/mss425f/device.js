'use strict';

const Homey = require('homey');
const Device = require('../../lib/device.js')

const capabilityMap = {
    "onoff": {
        "channel": 5,
        "key": "STATE",
        "set": {
            "key": "STATE",
            "channel": 5
        }
    }
}

class MerossDevice extends Device {

    onInit() {
        super.onInit(capabilityMap);
    }
}

module.exports = MerossDevice;
