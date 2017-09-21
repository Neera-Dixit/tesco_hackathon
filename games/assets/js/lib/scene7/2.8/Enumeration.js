/*!************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2011 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
if(!s7sdk.Enum){s7sdk.Enum={TILE:{SIZE:256},TRANSITION_EASING:{AUTO:0,LINEAR:1,QUADRATIC:2,CUBIC:3,QUARTIC:4,QUINTIC:5},CLICK_STATE:{CLICK_TO_ZOOM:1,CLICK_TO_RESET:2,DOUBLE_CLICK_TO_ZOOM:4,DOUBLE_CLICK_TO_RESET:8},SPIN_DIRECTION:{EAST:0,WEST:1,NORTH_WEST:2,NORTH_EAST:3,SOUTH_WEST:4,SOUTH_EAST:5,SOUTH:6,NORTH:7}}}if(!s7sdk.CapabilityState){s7sdk.CapabilityState=function CapabilityState(a){this.state=(typeof a=="number")?a:0};s7sdk.CapabilityState.prototype.setCapability=function(a){this.state|=a};s7sdk.CapabilityState.prototype.removeCapability=function(a){this.state&=~a};s7sdk.CapabilityState.prototype.hasCapability=function(a){return Boolean(this.state&a)};s7sdk.CapabilityState.prototype.clone=function(){return new this.constructor(this.state)};s7sdk.CapabilityState.prototype.toString=function(){var a=[],c,b;for(c in this.constructor){b=this.constructor[c];if(this.constructor.hasOwnProperty(c)&&typeof b=="number"&&this.hasCapability(b)){a.push(c)}}return a.toString()}}if(!s7sdk.SpinCapabilityState){s7sdk.SpinCapabilityState=function SpinCapabilityState(a){arguments.callee.superclass.apply(this,[a])};s7sdk.Class.inherits("s7sdk.SpinCapabilityState","s7sdk.CapabilityState");s7sdk.SpinCapabilityState.ZOOM_IN=1;s7sdk.SpinCapabilityState.ZOOM_OUT=2;s7sdk.SpinCapabilityState.ZOOM_RESET=4;s7sdk.SpinCapabilityState.ZOOM_IN_CONT=8;s7sdk.SpinCapabilityState.PAN_LEFT=16;s7sdk.SpinCapabilityState.PAN_RIGHT=32;s7sdk.SpinCapabilityState.PAN_UP=64;s7sdk.SpinCapabilityState.PAN_DOWN=128;s7sdk.SpinCapabilityState.SPIN_WEST=256;s7sdk.SpinCapabilityState.SPIN_EAST=512;s7sdk.SpinCapabilityState.SPIN_NORTH=1024;s7sdk.SpinCapabilityState.SPIN_SOUTH=2048}if(!s7sdk.ZoomCapabilityState){s7sdk.ZoomCapabilityState=function ZoomCapabilityState(a){arguments.callee.superclass.apply(this,[a])};s7sdk.Class.inherits("s7sdk.ZoomCapabilityState","s7sdk.CapabilityState");s7sdk.ZoomCapabilityState.ZOOM_IN=1;s7sdk.ZoomCapabilityState.ZOOM_OUT=2;s7sdk.ZoomCapabilityState.ZOOM_RESET=4;s7sdk.ZoomCapabilityState.ZOOM_IN_CONT=8;s7sdk.ZoomCapabilityState.PAN_LEFT=16;s7sdk.ZoomCapabilityState.PAN_RIGHT=32;s7sdk.ZoomCapabilityState.PAN_UP=64;s7sdk.ZoomCapabilityState.PAN_DOWN=128}if(!s7sdk.VideoCapabilityState){s7sdk.VideoCapabilityState=function VideoCapabilityState(a){arguments.callee.superclass.apply(this,[a])};s7sdk.Class.inherits("s7sdk.VideoCapabilityState","s7sdk.CapabilityState");s7sdk.VideoCapabilityState.PAUSE=1;s7sdk.VideoCapabilityState.PLAY=2;s7sdk.VideoCapabilityState.STOP=4;s7sdk.VideoCapabilityState.MUTE=8;s7sdk.VideoCapabilityState.UNMUTE=16;s7sdk.VideoCapabilityState.REPLAY=32}if(!s7sdk.PageViewCapabilityState){s7sdk.PageViewCapabilityState=function PageViewCapabilityState(a){arguments.callee.superclass.apply(this,[a])};s7sdk.Class.inherits("s7sdk.PageViewCapabilityState","s7sdk.CapabilityState");s7sdk.PageViewCapabilityState.ZOOM_IN=1;s7sdk.PageViewCapabilityState.ZOOM_OUT=2;s7sdk.PageViewCapabilityState.ZOOM_RESET=4;s7sdk.PageViewCapabilityState.ZOOM_IN_CONT=8;s7sdk.PageViewCapabilityState.PAN_LEFT=16;s7sdk.PageViewCapabilityState.PAN_RIGHT=32;s7sdk.PageViewCapabilityState.PAN_UP=64;s7sdk.PageViewCapabilityState.PAN_DOWN=128;s7sdk.PageViewCapabilityState.FIRST_PAGE=256;s7sdk.PageViewCapabilityState.LAST_PAGE=512};