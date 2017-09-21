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
s7sdk.pkg("s7sdk.common");s7sdk.Util.require("s7sdk.common.Thumb");if(!s7sdk.common.Button){s7sdk.common.Button=function(g,b,f,a,e,c,d){s7sdk.Logger.log(s7sdk.Logger.FINER,"s7sdk.common.Button %0 %1 %2 %3 %4 %5 ",g,b,f,a,e,c);arguments.callee.superclass.call(this,g,b,"div",null,d);this.w=a;this.h=e;this.hint="";this.css=(typeof c!="undefined"?c:"");this.currentState=0;this.activated=true;this.init();this.makeToolTip();this.changeState(this.currentState)};s7sdk.Class.inherits("s7sdk.common.Button","s7sdk.UIComponent");s7sdk.common.Button.prototype.init=function(){this.hint=this.getLocalizedText("TOOLTIP");var a=this.getParent();this.createElement();if(typeof this.obj!="undefined"){this.obj.className="s7button "+this.css;this.obj.button=this;this.resize(this.w,this.h);a.appendChild(this.obj);this.addEventListener("mouseover",function(d){var c=(this.button?this.button:d.srcElement.button);b.call(c,2)});this.addEventListener("mouseout",function(d){var c=(this.button?this.button:d.srcElement.button);b.call(c,0)});this.addEventListener("mousedown",function(d){var c=(this.button?this.button:d.srcElement.button);b.call(c,1)});this.addEventListener("mouseup",function(d){var c=(this.button?this.button:d.srcElement.button);b.call(c,2)});this.addEventListener("touchstart",function(f){f.preventDefault();f.stopPropagation();var d=s7sdk.Event.getTarget(f);if(d&&d.hasOwnProperty("button")){var c=d.button;c.inTouch=true;c.touchX=f.targetTouches[0].clientX;c.touchY=f.targetTouches[0].clientY;b.call(c,1);d.button.enableEvent("click")}});this.addEventListener("touchmove",function(f){f.preventDefault();f.stopPropagation();if(f.targetTouches.length>0){var d=s7sdk.Event.getTarget(f);if(d&&d.hasOwnProperty("button")){var c=d.button;c.inTouch=true;c.touchX=f.targetTouches[0].clientX;c.touchY=f.targetTouches[0].clientY}}});this.addEventListener("touchend",function(g){g.preventDefault();g.stopPropagation();var f=s7sdk.Event.getTarget(g);if(f&&f.hasOwnProperty("button")){var d=f.button;if(d.inTouch){if(g.targetTouches.length>0){var f=s7sdk.Event.getTarget(g);if(f&&f.hasOwnProperty("button")){var d=f.button;d.inTouch=true;d.touchX=g.targetTouches[0].clientX;d.touchY=g.targetTouches[0].clientY}}var c={x:s7sdk.Util.getObjPos(f).x,y:s7sdk.Util.getObjPos(f).y,ofs:s7sdk.Util.getScrollXY()};if((d.touchX+c.ofs.x>c.x&&d.touchX+c.ofs.x<c.x+f.offsetWidth&&d.touchY+c.ofs.y>c.y&&d.touchY+c.ofs.y<c.y+f.offsetHeight)||("android"==s7sdk.browser.device.name&&s7sdk.browser.name==="chrome")){s7sdk.Event.dispatch(f,"click");f.button.disableEvent("click")}b.call(d,0);d.inTouch=false}}});this.addEventListener("touchcancel",function(f){f.preventDefault();f.stopPropagation();var d=s7sdk.Event.getTarget(f);if(d&&d.hasOwnProperty("button")){var c=d.button;c.inTouch=false}});function b(c){this.currentState=c;if(this.activated){this.changeState(c)}}}else{s7sdk.Logger.log(s7sdk.Logger.WARNING,'s7sdk.common.Button - Cannot initialize "%0" due to lack of button skins',this.id)}};s7sdk.common.Button.prototype.addEventListener=function(c,b,a){s7sdk.Base.prototype.addEventListener.apply(this,[c,b,a])};s7sdk.common.Button.prototype.makeToolTip=function(){if(this.hint&&this.hint.length){this.toolTip_=new s7sdk.SimpleToolTip(this.obj,this.hint)}};s7sdk.common.Button.prototype.activate=function(){if(!this.activated){this.activated=true;this.currentState=0;this.changeState(this.currentState);this.enableEvent(null)}};s7sdk.common.Button.prototype.deactivate=function(){if(this.activated){this.activated=false;this.changeState(3);this.disableEvent(null)}};s7sdk.common.Button.prototype.resize=function(a,b){if(a>0&&b>0){this.w=a;this.h=b;this.obj.style.height=this.h+"px";this.obj.style.width=this.w+"px"}s7sdk.UIComponent.prototype.resize.apply(this,[a,b])};s7sdk.common.Button.prototype.changeState=function(a){var b=["up","down","over","disabled"];s7sdk.Util.css.setCSSAttributeSelector(this.obj,"state",b[a])};s7sdk.common.Button.prototype.hide=function(){s7sdk.Util.fade(this.obj,true,0.3,"block")};s7sdk.common.Button.prototype.show=function(){s7sdk.Util.fade(this.obj,false,0.3,"block")};s7sdk.common.Button.prototype.reposition=function(){this.obj.className="s7button "+this.css};s7sdk.common.Button.buttonsDefaultCSS=function(e,a,f,b){var h=s7sdk.Util.css.createCssRuleText;var d=s7sdk.Util.css.createCssImgUrlText;b=(typeof b==="string")?b:"";var g="";if(f){g+=f[0]?h(a+"[state='up']",{"background-image":d(f[0])}):"";g+=f[1]?h(a+"[state='over']",{"background-image":d(f[1])}):"";g+=f[2]?h(a+"[state='down']",{"background-image":d(f[2])}):"";g+=f[3]?h(a+"[state='disabled']",{"background-image":d(f[3])}):""}g+=b;var c=h(a,{width:"25px",height:"25px","background-size":"contain","background-repeat":"no-repeat","background-position":"center","-webkit-touch-callout":"none","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)"})+g;s7sdk.Util.css.addDefaultCSS(c,e)};s7sdk.Button=s7sdk.common.Button}if(!s7sdk.common.CloseButton){s7sdk.common.CloseButton=function CloseButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.CloseButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7closebutton",c])};s7sdk.Class.inherits("s7sdk.common.CloseButton","s7sdk.common.Button");s7sdk.common.CloseButton.prototype.symbols={TOOLTIP:"Close"};s7sdk.CloseButton=s7sdk.common.CloseButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("CloseButton",".s7closebutton",["close_up.png","close_over.png","close_down.png","close_disabled.png"],s7sdk.Util.css.createCssRuleText(".s7closebutton",{width:"32px",height:"32px"}))})()}if(!s7sdk.common.ZoomResetButton){s7sdk.common.ZoomResetButton=function ZoomResetButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.ZoomResetButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7zoomresetbutton",c]);this.obj.zoomResetObj=this};s7sdk.Class.inherits("s7sdk.common.ZoomResetButton","s7sdk.common.Button");s7sdk.common.ZoomResetButton.prototype.symbols={TOOLTIP:"Reset Zoom"};s7sdk.ZoomResetButton=s7sdk.common.ZoomResetButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("ZoomResetButton",".s7zoomresetbutton",["zoomreset_up.png","zoomreset_over.png","zoomreset_down.png","zoomreset_disabled.png"])})()}if(!s7sdk.common.ZoomInButton){s7sdk.common.ZoomInButton=function ZoomInButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.ZoomInButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7zoominbutton",c]);this.obj.zoomInObj=this};s7sdk.Class.inherits("s7sdk.common.ZoomInButton","s7sdk.common.Button");s7sdk.common.ZoomInButton.prototype.symbols={TOOLTIP:"Zoom In"};s7sdk.ZoomInButton=s7sdk.common.ZoomInButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("ZoomInButton",".s7zoominbutton",["zoomin_up.png","zoomin_over.png","zoomin_down.png","zoomin_disabled.png"])})()}if(!s7sdk.common.ZoomOutButton){s7sdk.common.ZoomOutButton=function ZoomOutButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.ZoomOutButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7zoomoutbutton",c]);this.obj.zoomOutObj=this};s7sdk.Class.inherits("s7sdk.common.ZoomOutButton","s7sdk.common.Button");s7sdk.common.ZoomOutButton.prototype.symbols={TOOLTIP:"Zoom Out"};s7sdk.ZoomOutButton=s7sdk.common.ZoomOutButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("ZoomOutButton",".s7zoomoutbutton",["zoomout_up.png","zoomout_over.png","zoomout_down.png","zoomout_disabled.png"])})()}if(!s7sdk.common.PanUpButton){s7sdk.common.PanUpButton=function PanUpButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.PanUpButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7panupbutton",c]);this.obj.panObj=this};s7sdk.Class.inherits("s7sdk.common.PanUpButton","s7sdk.common.Button");s7sdk.common.PanUpButton.prototype.symbols={TOOLTIP:"Pan up"};s7sdk.PanUpButton=s7sdk.common.PanUpButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("PanUpButton",".s7panupbutton",["panup_up.png","panup_over.png","panup_down.png","panup_disabled.png"])})()}if(!s7sdk.common.PanDownButton){s7sdk.common.PanDownButton=function PanDownButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.PanDownButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7pandownbutton",c]);this.obj.panObj=this};s7sdk.Class.inherits("s7sdk.common.PanDownButton","s7sdk.common.Button");s7sdk.common.PanDownButton.prototype.symbols={TOOLTIP:"Pan down"};s7sdk.PanDownButton=s7sdk.common.PanDownButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("PanDownButton",".s7pandownbutton",["pandown_up.png","pandown_over.png","pandown_down.png","pandown_disabled.png"])})()}if(!s7sdk.common.PanLeftButton){s7sdk.common.PanLeftButton=function PanLeftButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.PanLeftButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7panleftbutton",c]);this.obj.panObj=this};s7sdk.Class.inherits("s7sdk.common.PanLeftButton","s7sdk.common.Button");s7sdk.common.PanLeftButton.prototype.symbols={TOOLTIP:"Pan left"};s7sdk.PanLeftButton=s7sdk.common.PanLeftButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("PanLeftButton",".s7panleftbutton",["panleft_up.png","panleft_over.png","panleft_down.png","panleft_disabled.png"])})()}if(!s7sdk.common.PanRightButton){s7sdk.common.PanRightButton=function PanRightButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.PanRightButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7panrightbutton",c]);this.obj.panObj=this};s7sdk.Class.inherits("s7sdk.common.PanRightButton","s7sdk.common.Button");s7sdk.common.PanRightButton.prototype.symbols={TOOLTIP:"Pan right"};s7sdk.PanRightButton=s7sdk.common.PanRightButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("PanRightButton",".s7panrightbutton",["panright_up.png","panright_over.png","panright_down.png","panright_disabled.png"])})()}if(!s7sdk.common.ScrollLeftButton){s7sdk.common.ScrollLeftButton=function ScrollLeftButton(a,c,b){arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7scrollleftbutton",c]);this.obj.arrowObj=this};s7sdk.Class.inherits("s7sdk.common.ScrollLeftButton","s7sdk.common.Button");s7sdk.common.ScrollLeftButton.prototype.symbols={TOOLTIP:"Scroll left"};s7sdk.ScrollLeftButton=s7sdk.common.ScrollLeftButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("ScrollLeftButton",".s7scrollleftbutton",["scroll_left_up.png","scroll_left_over.png","scroll_left_down.png","scroll_left_disabled.png"],s7sdk.Util.css.createCssRuleText(".s7scrollleftbutton",{width:"20px",height:"20px"}))})()}if(!s7sdk.common.ScrollRightButton){s7sdk.common.ScrollRightButton=function ScrollRightButton(a,c,b){arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7scrollrightbutton",c]);this.obj.arrowObj=this};s7sdk.Class.inherits("s7sdk.common.ScrollRightButton","s7sdk.common.Button");s7sdk.common.ScrollRightButton.prototype.symbols={TOOLTIP:"Scroll right"};s7sdk.ScrollRightButton=s7sdk.common.ScrollRightButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("ScrollRightButton",".s7scrollrightbutton",["scroll_right_up.png","scroll_right_over.png","scroll_right_down.png","scroll_right_disabled.png"],s7sdk.Util.css.createCssRuleText(".s7scrollrightbutton",{width:"20px",height:"20px"}))})()}if(!s7sdk.common.ScrollUpButton){s7sdk.common.ScrollUpButton=function ScrollUpButton(a,c,b){arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7scrollupbutton",c]);this.obj.arrowObj=this};s7sdk.Class.inherits("s7sdk.common.ScrollUpButton","s7sdk.common.Button");s7sdk.common.ScrollUpButton.prototype.symbols={TOOLTIP:"Scroll up"};s7sdk.ScrollUpButton=s7sdk.common.ScrollUpButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("ScrollUpButton",".s7scrollupbutton",["scroll_up_up.png","scroll_up_over.png","scroll_up_down.png","scroll_up_disabled.png"],s7sdk.Util.css.createCssRuleText(".s7scrollupbutton",{width:"20px",height:"20px"}))})()}if(!s7sdk.common.ScrollDownButton){s7sdk.common.ScrollDownButton=function ScrollDownButton(a,c,b){arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7scrolldownbutton",c]);this.obj.arrowObj=this};s7sdk.Class.inherits("s7sdk.common.ScrollDownButton","s7sdk.common.Button");s7sdk.common.ScrollDownButton.prototype.symbols={TOOLTIP:"Scroll down"};s7sdk.ScrollDownButton=s7sdk.common.ScrollDownButton;(function addDefaultCSS(){s7sdk.common.Button.buttonsDefaultCSS("ScrollDownButton",".s7scrolldownbutton",["scroll_down_up.png","scroll_down_over.png","scroll_down_down.png","scroll_down_disabled.png"],s7sdk.Util.css.createCssRuleText(".s7scrolldownbutton",{width:"20px",height:"20px"}))})()}if(!s7sdk.common.InfoPanelCloseButton){s7sdk.common.InfoPanelCloseButton=function InfoPanelCloseButton(a,c,b){arguments.callee.superclass.apply(this,[b,a,null,0,0,"s7closebutton",c])};s7sdk.Class.inherits("s7sdk.common.InfoPanelCloseButton","s7sdk.common.Button");s7sdk.common.InfoPanelCloseButton.prototype.symbols={TOOLTIP:"Close"};s7sdk.InfoPanelCloseButton=s7sdk.common.InfoPanelCloseButton}if(!s7sdk.common.TwoStateButton){s7sdk.common.TwoStateButton=function(i,c,b,f,d,e,a){s7sdk.Logger.log(s7sdk.Logger.FINER,"s7sdk.common.TwoStateButton %0 %1 %2 %3 %4 ",i,c,b,f,d);arguments.callee.superclass.call(this,i,c,"div",null,null,d,e);this.selected=false;this.changeState(this.currentState);if(typeof(a)!="undefined"&&a){return}var g=this;if(s7sdk.browser.name==="ie"&&s7sdk.browser.version.major<9){this.stateChanged=false;this.addEventListener("mousedown",function(){g.stateChanged=true},false);this.addEventListener("mouseup",function(){if(g.stateChanged){g.setSelected(!g.selected)}g.stateChanged=false},false)}else{this.addEventListener("click",function(){g.setSelected(!g.selected)},false)}};s7sdk.Class.inherits("s7sdk.common.TwoStateButton","s7sdk.common.Button");s7sdk.common.TwoStateButton.prototype.symbols={};s7sdk.common.TwoStateButton.prototype.makeToolTip=function(){this.toolTipSelected=this.getLocalizedText("TOOLTIP_SELECTED");this.toolTipUnselected=this.getLocalizedText("TOOLTIP_UNSELECTED");if(this.toolTipSelected||this.toolTipUnselected){this.toolTip_=new s7sdk.SimpleToolTip(this.obj,this.toolTipSelected)}};s7sdk.common.TwoStateButton.prototype.changeState=function(a){s7sdk.common.Button.prototype.changeState.apply(this,[a]);s7sdk.Util.css.setCSSAttributeSelector(this.obj,"selected",this.selected);if(this.toolTip_){if(this.selected){this.toolTip_.setContent(this.toolTipSelected)}else{this.toolTip_.setContent(this.toolTipUnselected)}}};s7sdk.common.TwoStateButton.prototype.isSelected=function(){return this.selected};s7sdk.common.TwoStateButton.prototype.setSelected=function(a){if(a!=this.selected){this.selected=a;this.obj.className=this.css;this.changeState(this.currentState)}};s7sdk.TwoStateButton=s7sdk.common.TwoStateButton}if(!s7sdk.common.PlayPauseButton){s7sdk.common.PlayPauseButton=function PlayPauseButton(a,c,b){this.replayEnabled=false;s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.PlayPauseButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,0,0,"s7playpausebutton",c])};s7sdk.common.PlayPauseButton.prototype.enableReplay=function(a){if(a!=this.replayEnabled){this.replayEnabled=a;this.obj.className=this.css;s7sdk.Util.css.setCSSAttributeSelector(this.obj,"replay",this.replayEnabled);this.changeState(this.currentState)}};s7sdk.common.PlayPauseButton.prototype.makeToolTip=function(){this.toolTipSelected=this.getLocalizedText("TOOLTIP_SELECTED");this.toolTipUnselected=this.getLocalizedText("TOOLTIP_UNSELECTED");this.toolTipReplay=this.getLocalizedText("TOOLTIP_REPLAY");if(this.toolTipSelected||this.toolTipUnselected||this.toolTipReplay){this.toolTip_=new s7sdk.SimpleToolTip(this.obj,this.toolTipSelected)}};s7sdk.common.PlayPauseButton.prototype.changeState=function(a){s7sdk.common.Button.prototype.changeState.apply(this,[a]);s7sdk.Util.css.setCSSAttributeSelector(this.obj,"selected",this.selected);if(this.toolTip_){var b="";if(this.selected){b=this.toolTipSelected}else{b=this.toolTipUnselected}if(this.replayEnabled&&this.selected){b=this.toolTipReplay}this.toolTip_.setContent(b)}};s7sdk.Class.inherits("s7sdk.common.PlayPauseButton","s7sdk.common.TwoStateButton");s7sdk.common.PlayPauseButton.prototype.symbols={TOOLTIP_SELECTED:"Play",TOOLTIP_UNSELECTED:"Pause",TOOLTIP_REPLAY:"Replay"};s7sdk.PlayPauseButton=s7sdk.common.PlayPauseButton;(function addDefaultCSS(){var c=s7sdk.Util.css.createCssRuleText;var b=s7sdk.Util.css.createCssImgUrlText;var a=c(".s7playpausebutton",{position:"absolute",width:"25px",height:"25px"})+c(".s7playpausebutton[selected='true'][state='up']",{"background-image":b("play_up.png")})+c(".s7playpausebutton[selected='true'][state='over']",{"background-image":b("play_over.png")})+c(".s7playpausebutton[selected='true'][state='down']",{"background-image":b("play_down.png")})+c(".s7playpausebutton[selected='true'][state='disabled']",{"background-image":b("play_disabled.png")})+c(".s7playpausebutton[selected='false'][state='up']",{"background-image":b("pause_up.png")})+c(".s7playpausebutton[selected='false'][state='over']",{"background-image":b("pause_over.png")})+c(".s7playpausebutton[selected='false'][state='down']",{"background-image":b("pause_down.png")})+c(".s7playpausebutton[selected='false'][state='disabled'][state='up']",{"background-image":b("pause_disabled.png")})+c(".s7playpausebutton[selected='true'][replay='true'][state='up']",{"background-image":b("replay_up.png")})+c(".s7playpausebutton[selected='true'][replay='true'][state='over']",{"background-image":b("replay_over.png")})+c(".s7playpausebutton[selected='true'][replay='true'][state='down']",{"background-image":b("replay_down.png")})+c(".s7playpausebutton[selected='true'][replay='true'][state='disabled']",{"background-image":b("replay_disabled.png")});s7sdk.common.Button.buttonsDefaultCSS("PlayPauseButton",".s7playpausebutton",[],a)})()}if(!s7sdk.common.FullScreenButton){s7sdk.common.FullScreenButton=function FullScreenButton(a,c,b){s7sdk.Logger.log(s7sdk.Logger.CONFIG,"s7sdk.common.FullScreenButton constructor - containerId: %0, settings: %1 , compId: %2",a,c,b);arguments.callee.superclass.apply(this,[b,a,0,0,"s7fullscreenbutton",c])};s7sdk.Class.inherits("s7sdk.common.FullScreenButton","s7sdk.common.TwoStateButton");s7sdk.common.FullScreenButton.prototype.symbols={TOOLTIP_SELECTED:"Minimize",TOOLTIP_UNSELECTED:"Full Screen"};s7sdk.FullScreenButton=s7sdk.common.FullScreenButton;(function addDefaultCSS(){var c=s7sdk.Util.css.createCssRuleText;var b=s7sdk.Util.css.createCssImgUrlText;var a=c(".s7fullscreenbutton",{position:"absolute",width:"25px",height:"25px"})+c(".s7fullscreenbutton[selected='true'][state='up']",{"background-image":b("fullscreen_up.png")})+c(".s7fullscreenbutton[selected='true'][state='over']",{"background-image":b("fullscreen_over.png")})+c(".s7fullscreenbutton[selected='true'][state='down']",{"background-image":b("fullscreen_down.png")})+c(".s7fullscreenbutton[selected='true'][state='disabled']",{"background-image":b("fullscreen_disabled.png")})+c(".s7fullscreenbutton[selected='false'][state='up']",{"background-image":b("minscreen_up.png")})+c(".s7fullscreenbutton[selected='false'][state='over']",{"background-image":b("minscreen_over.png")})+c(".s7fullscreenbutton[selected='false'][state='down']",{"background-image":b("minscreen_down.png")})+c(".s7fullscreenbutton[selected='false'][state='disabled']",{"background-image":b("minscreen_disabled.png")});s7sdk.common.Button.buttonsDefaultCSS("FullScreenButton",".s7fullscreenbutton",[],a)})()}if(!s7sdk.common.ScrubberSwatchesButton){s7sdk.common.ScrubberSwatchesButton=function ScrubberSwatchesButton(a,c,b){arguments.callee.superclass.apply(this,[b,a,0,0,"s7scrubberswatchesbutton",c])};s7sdk.Class.inherits("s7sdk.common.ScrubberSwatchesButton","s7sdk.common.TwoStateButton");s7sdk.common.ScrubberSwatchesButton.prototype.symbols={TOOLTIP_SELECTED:"Page Scroll",TOOLTIP_UNSELECTED:"Thumbnail Scroll"};(function addDefaultCSS(){var c=s7sdk.Util.css.createCssRuleText;var b=s7sdk.Util.css.createCssImgUrlText;var a=c(".s7scrubberswatchesbutton",{position:"absolute",width:"25px",height:"25px"})+c(".s7scrubberswatchesbutton[selected='true'][state='up']",{"background-image":b("swatches_up.png")})+c(".s7scrubberswatchesbutton[selected='true'][state='over']",{"background-image":b("swatches_over.png")})+c(".s7scrubberswatchesbutton[selected='true'][state='down']",{"background-image":b("swatches_down.png")})+c(".s7scrubberswatchesbutton[selected='true'][state='disabled']",{"background-image":b("swatches_disabled.png")})+c(".s7scrubberswatchesbutton[selected='false'][state='up']",{"background-image":b("scrubber_up.png")})+c(".s7scrubberswatchesbutton[selected='false'][state='over']",{"background-image":b("scrubber_over.png")})+c(".s7scrubberswatchesbutton[selected='false'][state='down']",{"background-image":b("scrubber_down.png")})+c(".s7scrubberswatchesbutton[selected='false'][state='disabled']",{"background-image":b("scrubber_disabled.png")});s7sdk.common.Button.buttonsDefaultCSS("ScrubberSwatchesButton",".s7scrubberswatchesbutton",[],a)})()}if(!s7sdk.common.ThumbnailPageButton){s7sdk.common.ThumbnailPageButton=function ThumbnailPageButton(a,c,b){arguments.callee.superclass.apply(this,[b,a,0,0,"s7thumbnailpagebutton",c])};s7sdk.Class.inherits("s7sdk.common.ThumbnailPageButton","s7sdk.common.TwoStateButton");s7sdk.common.ThumbnailPageButton.prototype.symbols={TOOLTIP_SELECTED:"Page View",TOOLTIP_UNSELECTED:"Grid View"};(function addDefaultCSS(){var c=s7sdk.Util.css.createCssRuleText;var b=s7sdk.Util.css.createCssImgUrlText;var a=c(".s7thumbnailpagebutton",{position:"absolute",width:"25px",height:"25px"})+c(".s7thumbnailpagebutton[selected='true'][state='up']",{"background-image":b("thumb_up.png")})+c(".s7thumbnailpagebutton[selected='true'][state='over']",{"background-image":b("thumb_over.png")})+c(".s7thumbnailpagebutton[selected='true'][state='down']",{"background-image":b("thumb_down.png")})+c(".s7thumbnailpagebutton[selected='true'][state='disabled']",{"background-image":b("thumb_disabled.png")})+c(".s7thumbnailpagebutton[selected='false'][state='up']",{"background-image":b("page_up.png")})+c(".s7thumbnailpagebutton[selected='false'][state='over']",{"background-image":b("page_over.png")})+c(".s7thumbnailpagebutton[selected='false'][state='down']",{"background-image":b("page_down.png")})+c(".s7thumbnailpagebutton[selected='false'][state='disabled']",{"background-image":b("page_disabled.png")});s7sdk.common.Button.buttonsDefaultCSS("ThumbnailPageButton",".s7thumbnailpagebutton",[],a)})()}if(!s7sdk.common.ClosedCaptionButton){s7sdk.common.ClosedCaptionButton=function ClosedCaptionButton(a,c,b){arguments.callee.superclass.apply(this,[b,a,0,0,"s7closedcaptionbutton",c])};s7sdk.Class.inherits("s7sdk.common.ClosedCaptionButton","s7sdk.common.TwoStateButton");s7sdk.common.ClosedCaptionButton.prototype.symbols={TOOLTIP_SELECTED:"Disable Closed Captioning",TOOLTIP_UNSELECTED:"Enable Closed Captioning"};(function addDefaultCSS(){var c=s7sdk.Util.css.createCssRuleText;var b=s7sdk.Util.css.createCssImgUrlText;var a=c(".s7closedcaptionbutton",{position:"absolute",width:"25px",height:"25px"})+c(".s7closedcaptionbutton[selected='true'][state='up']",{"background-image":b("closedcaptions_up.png")})+c(".s7closedcaptionbutton[selected='true'][state='over']",{"background-image":b("closedcaptions_over.png")})+c(".s7closedcaptionbutton[selected='true'][state='down']",{"background-image":b("closedcaptions_down.png")})+c(".s7closedcaptionbutton[selected='true'][state='disabled']",{"background-image":b("closedcaptions_disabled.png")})+c(".s7closedcaptionbutton[selected='false'][state='up']",{"background-image":b("closedcaptions_disabled.png")})+c(".s7closedcaptionbutton[selected='false'][state='over']",{"background-image":b("closedcaptions_over.png")})+c(".s7closedcaptionbutton[selected='false'][state='down']",{"background-image":b("closedcaptions_down.png")})+c(".s7closedcaptionbutton[selected='false'][state='disabled']",{"background-image":b("closedcaptions_disabled.png")});s7sdk.common.Button.buttonsDefaultCSS("ClosedCaptionButton",".s7closedcaptionbutton",[],a)})()};