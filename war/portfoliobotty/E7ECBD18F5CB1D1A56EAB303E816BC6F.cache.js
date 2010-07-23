(function(){
var $gwt_version = "2.0.4";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = 'E7ECBD18F5CB1D1A56EAB303E816BC6F';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'portfoliobotty',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var _, N8000000000000000_longLit = [0, -9223372036854775808], P0_longLit = [0, 0], P3e8_longLit = [1000, 0], P1000000_longLit = [16777216, 0], P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];
function nullMethod(){
}

function equals(other){
  return this === (other == null?null:other);
}

function getClass_0(){
  return Ljava_lang_Object_2_classLit;
}

function hashCode_0(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_0(){
  return (this.typeMarker$ == nullMethod || this.typeId$ == 2?this.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + '@' + toPowerOfTwoString(this.typeMarker$ == nullMethod || this.typeId$ == 2?this.hashCode$():this.$H || (this.$H = ++sNextHashId), 4);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals;
_.getClass$ = getClass_0;
_.hashCode$ = hashCode_0;
_.toString$ = toString_0;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
_.typeId$ = 1;
function $ClientStackTraceElement(this$static, declaringClass, methodName, fileName, lineNumber){
  this$static.declaringClass = declaringClass;
  this$static.methodName = methodName;
  this$static.fileName = fileName;
  this$static.lineNumber = lineNumber;
  return this$static;
}

function getClass_1(){
  return Lcom_allen_1sauer_gwt_log_client_ClientStackTraceElement_2_classLit;
}

function ClientStackTraceElement(){
}

_ = ClientStackTraceElement.prototype = new Object_0;
_.getClass$ = getClass_1;
_.typeId$ = 3;
_.declaringClass = null;
_.fileName = null;
_.lineNumber = 0;
_.methodName = null;
function clear(){
}

function getClass_2(){
  return Lcom_allen_1sauer_gwt_log_client_ConsoleLogger_2_classLit;
}

function isSupported(){
  return $wnd.console != null && !$wnd.console.firebug && typeof $wnd.console.log == 'function';
}

function log_0(record){
  var i, lines;
  lines = $split((record.level == 2147483647?record.message_0:$format(levelToString(record.level), record.message_0)) + stackTraceToString(record.throwable?record.throwable:getInstanceOrNull(record.wrappedClientThrowable)), '\n', 0);
  for (i = 0; i < lines.length; ++i) {
    $wnd.console.log(lines[i]);
  }
}

function setCurrentLogLevel(level){
}

function ConsoleLogger(){
}

_ = ConsoleLogger.prototype = new Object_0;
_.clear = clear;
_.getClass$ = getClass_2;
_.isSupported = isSupported;
_.log_0 = log_0;
_.setCurrentLogLevel = setCurrentLogLevel;
_.typeId$ = 4;
function $clinit_2(){
  $clinit_2 = nullMethod;
  levels = initValues(_3I_classLit, 142, -1, [5000, 10000, 20000, 30000, 40000, 50000, 2147483647]);
}

function $DivLogger(this$static){
  var headerPanel, resizePanel, parent_0;
  $clinit_2();
  this$static.logDockPanel = $DivLogger$LogDockPanel(new DivLogger$LogDockPanel, this$static);
  this$static.logTextArea = $HTML(new HTML);
  this$static.scrollPanel = $DivLogger$ScrollPanelImpl(new DivLogger$ScrollPanelImpl);
  setStyleName(this$static.logDockPanel.element, (!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , 'log-panel'), true);
  setStyleName(this$static.logTextArea.element, (!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , 'Gxh4pkcI'), true);
  setStyleName(this$static.scrollPanel.element, (!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , 'Gxh4pkcG'), true);
  headerPanel = $makeHeader(this$static);
  resizePanel = $Image(new Image_0, $moduleBase + 'gwt-log-triangle-10x10.png');
  setStyleName(resizePanel.element, (!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , 'Gxh4pkcF'), true);
  $DivLogger$MouseResizeHandler(new DivLogger$MouseResizeHandler, resizePanel, this$static);
  $add_0(this$static.logDockPanel, headerPanel, ($clinit_14() , NORTH));
  $add_0(this$static.logDockPanel, this$static.scrollPanel, CENTER);
  $add_0(this$static.logDockPanel, resizePanel, SOUTH);
  (parent_0 = ($clinit_101() , resizePanel.element).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).style['lineHeight'] = '1px';
  $setCellHorizontalAlignment_0(resizePanel, ($clinit_272() , ALIGN_RIGHT));
  $setWidget(this$static.scrollPanel, this$static.logTextArea);
  $setVisible_(this$static.logDockPanel, false);
  $add_3(($clinit_289() , get_0(null)), this$static.logDockPanel, 0, 0);
  this$static.timer = $DivLogger$1(new DivLogger$1, this$static);
  return this$static;
}

function $addLogText(this$static, logTest){
  this$static.logText += logTest;
  if (!this$static.dirty) {
    this$static.dirty = true;
    $schedule(this$static.timer, 500);
  }
}

function $getColor(logLevel){
  if (logLevel == 2147483647) {
    return '#000';
  }
  if (logLevel >= 50000) {
    return '#F00';
  }
  if (logLevel >= 40000) {
    return '#C11B17';
  }
  if (logLevel >= 30000) {
    return '#E56717';
  }
  if (logLevel >= 20000) {
    return '#2B60DE';
  }
  if (logLevel >= 10000) {
    return '#20b000';
  }
  return '#F0F';
}

function $makeHeader(this$static){
  var aboutButton, buttonPanel, clearButton, header, i, level, masterPanel, titleLabel, td, td_1, td_3, td_5, td_7, td_8, td_9;
  header = $FocusPanel(new FocusPanel);
  masterPanel = $HorizontalPanel(new HorizontalPanel);
  masterPanel.element.style['width'] = '100%';
  $add_1(header, masterPanel);
  titleLabel = $Label(new Label, 'gwt-log', false);
  setStylePrimaryName(titleLabel.element, (!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , 'Gxh4pkcJ'));
  buttonPanel = $HorizontalPanel(new HorizontalPanel);
  this$static.levelButtons = initDim(_3Lcom_google_gwt_user_client_ui_Button_2_classLit, 128, 2, levels.length, 0);
  for (i = 0; i < levels.length; ++i) {
    level = levels[i];
    this$static.levelButtons[i] = $Button_0(new Button, levelToString(level));
    $add_4(buttonPanel, this$static.levelButtons[i]);
    $addDomHandler(this$static.levelButtons[i], $DivLogger$2(new DivLogger$2, level), ($clinit_120() , $clinit_120() , TYPE_0));
  }
  clearButton = $Button_0(new Button, 'Clear');
  setStyleName(clearButton.element, (!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , 'Gxh4pkcB'), true);
  clearButton.element.style['color'] = '#00c';
  $addDomHandler(clearButton, new DivLogger$3, ($clinit_120() , $clinit_120() , TYPE_0));
  td = $createAlignedTd(buttonPanel);
  buttonPanel.tableRow.appendChild(td);
  $removeFromParent(clearButton);
  $add_6(buttonPanel.children, clearButton);
  td.appendChild(clearButton.element);
  $setParent(clearButton, buttonPanel);
  aboutButton = $Button_0(new Button, 'About');
  setStyleName(aboutButton.element, (!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , 'Gxh4pkcA'), true);
  $addDomHandler(aboutButton, new DivLogger$4, TYPE_0);
  td_1 = $createAlignedTd(masterPanel);
  masterPanel.tableRow.appendChild(td_1);
  $removeFromParent(titleLabel);
  $add_6(masterPanel.children, titleLabel);
  td_1.appendChild(titleLabel.element);
  $setParent(titleLabel, masterPanel);
  td_3 = $createAlignedTd(masterPanel);
  masterPanel.tableRow.appendChild(td_3);
  $removeFromParent(buttonPanel);
  $add_6(masterPanel.children, buttonPanel);
  td_3.appendChild(buttonPanel.element);
  $setParent(buttonPanel, masterPanel);
  masterPanel.horzAlign = ($clinit_272() , ALIGN_RIGHT);
  td_5 = $createAlignedTd(masterPanel);
  masterPanel.tableRow.appendChild(td_5);
  $removeFromParent(aboutButton);
  $add_6(masterPanel.children, aboutButton);
  td_5.appendChild(aboutButton.element);
  $setParent(aboutButton, masterPanel);
  td_7 = $getWidgetTd(masterPanel, titleLabel);
  !!td_7 && (td_7['height'] = '100%' , undefined);
  td_8 = $getWidgetTd(masterPanel, titleLabel);
  !!td_8 && (td_8['width'] = '50%' , undefined);
  td_9 = $getWidgetTd(masterPanel, aboutButton);
  !!td_9 && (td_9['width'] = '50%' , undefined);
  $DivLogger$MouseDragHandler(new DivLogger$MouseDragHandler, titleLabel, this$static);
  return header;
}

function clear_0(){
  this.logTextArea.element.innerHTML = '';
}

function getClass_3(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger_2_classLit;
}

function isSupported_0(){
  return true;
}

function log_1(record){
  var element, element$array, element$index, element$max, stackTraceElements, text, throwable, title, message, throwable_0;
  !this.logDockPanel.userHidden && $setVisible(this.logDockPanel, true);
  text = $replaceAll($replaceAll(record.level == 2147483647?record.message_0:$format(levelToString(record.level), record.message_0), '<', '&lt;'), '>', '&gt;');
  title = (message = record.level == 2147483647?record.message_0:$format(levelToString(record.level), record.message_0) , throwable_0 = record.throwable?record.throwable:getInstanceOrNull(record.wrappedClientThrowable) , !!throwable_0 && (throwable_0.getMessage() == null?(message = throwable_0.getClass$().typeName):(message = $replaceAll(throwable_0.getMessage(), $replaceAll(throwable_0.getClass$().typeName, '^(.+\\.).+$', '$1'), ''))) , $replaceAll($replaceAll($replaceAll($replaceAll(message, '\r\n|\r|\n', ' / '), '<', '&lt;'), '>', '&gt;'), "'", '"'));
  throwable = record.throwable?record.throwable:getInstanceOrNull(record.wrappedClientThrowable);
  if (throwable) {
    while (throwable) {
      text += throwable.getClass$().typeName + ':<br><b>' + throwable.getMessage() + '<\/b>';
      stackTraceElements = $getStackTrace(throwable);
      if (stackTraceElements.length > 0) {
        text += "<div class='log-stacktrace'>";
        for (element$array = stackTraceElements , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
          element = element$array[element$index];
          text += '&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;' + element + '<br>';
        }
        text += '<\/div>';
      }
      throwable = throwable.getCause();
      !!throwable && (text += 'Caused by: ');
    }
  }
  text = $replaceAll(text, '\r\n|\r|\n', '<BR>');
  $addLogText(this, "<div class='" + (!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , 'Gxh4pkcC') + "' onmouseover='className+=\" log-message-hover\"' onmouseout='className=className.replace(/ log-message-hover/g,\"\")' style='color: " + $getColor(record.level) + "' title='" + title + "'>" + text + '<\/div>');
}

function setCurrentLogLevel_0(level){
  var active, current, i, levelText;
  for (i = 0; i < levels.length; ++i) {
    if (levels[i] < ($clinit_24() , 10000)) {
      this.levelButtons[i].element['disabled'] = !false;
    }
     else {
      levelText = levelToString(levels[i]);
      current = level == levels[i];
      $setTitle(this.levelButtons[i], current?"Current (runtime) log level is already '" + levelText + "'":"Set current (runtime) log level to '" + levelText + "'");
      active = level <= levels[i];
      this.levelButtons[i].element.style['color'] = active?$getColor(levels[i]):'#ccc';
    }
  }
}

function DivLogger(){
}

_ = DivLogger.prototype = new Object_0;
_.clear = clear_0;
_.getClass$ = getClass_3;
_.isSupported = isSupported_0;
_.log_0 = log_1;
_.setCurrentLogLevel = setCurrentLogLevel_0;
_.typeId$ = 5;
_.dirty = false;
_.levelButtons = null;
_.logText = '';
_.timer = null;
var levels;
function $clinit_3(){
  $clinit_3 = nullMethod;
  timers = $ArrayList(new ArrayList);
  addCloseHandler(new Timer$1);
}

function $cancel(this$static){
  this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
  $remove_9(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'must be positive');
  }
  $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_7(timers, this$static);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

function fire(){
  !this.isRepeating && $remove_9(timers, this);
  this.run();
}

function getClass_4(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}

function Timer(){
}

_ = Timer.prototype = new Object_0;
_.fire = fire;
_.getClass$ = getClass_4;
_.typeId$ = 6;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_4(){
  $clinit_4 = nullMethod;
  $clinit_3();
}

function $DivLogger$1(this$static, this$0){
  $clinit_4();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_5(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$1_2_classLit;
}

function run(){
  this.this$0.dirty = false;
  $setHTML(this.this$0.logTextArea, ($clinit_101() , this.this$0.logTextArea.element).innerHTML + this.this$0.logText);
  this.this$0.logText = '';
  addCommand($DivLogger$1$1(new DivLogger$1$1, this));
}

function DivLogger$1(){
}

_ = DivLogger$1.prototype = new Timer;
_.getClass$ = getClass_5;
_.run = run;
_.typeId$ = 7;
_.this$0 = null;
function $DivLogger$1$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function execute(){
  this.this$1.this$0.scrollPanel.element['scrollTop'] = 107374182;
}

function getClass_6(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$1$1_2_classLit;
}

function DivLogger$1$1(){
}

_ = DivLogger$1$1.prototype = new Object_0;
_.execute = execute;
_.getClass$ = getClass_6;
_.typeId$ = 8;
_.this$1 = null;
function $DivLogger$2(this$static, val$level){
  this$static.val$level = val$level;
  return this$static;
}

function getClass_7(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$2_2_classLit;
}

function onClick(event_0){
  $setFocus(dynamicCast(event_0.source, 2), false);
  $clinit_24();
  $setCurrentLogLevel(impl, this.val$level);
}

function DivLogger$2(){
}

_ = DivLogger$2.prototype = new Object_0;
_.getClass$ = getClass_7;
_.onClick = onClick;
_.typeId$ = 9;
_.val$level = 0;
function getClass_8(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$3_2_classLit;
}

function onClick_0(event_0){
  $setFocus(dynamicCast(event_0.source, 2), false);
  $clinit_24();
  $clear_0(impl);
}

function DivLogger$3(){
}

_ = DivLogger$3.prototype = new Object_0;
_.getClass$ = getClass_8;
_.onClick = onClick_0;
_.typeId$ = 10;
function getClass_9(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$4_2_classLit;
}

function onClick_1(event_0){
  $setFocus(dynamicCast(event_0.source, 2), false);
  diagnostic('\ngwt-log-' + ($clinit_24() , '3.0.1') + ' - Runtime logging for your Google Web Toolkit projects\nCopyright 2007-2008 Fred Sauer\nThe original software is available from:\n\xA0\xA0\xA0\xA0http://allen-sauer.com/gwt/\n', null);
}

function DivLogger$4(){
}

_ = DivLogger$4.prototype = new Object_0;
_.getClass$ = getClass_9;
_.onClick = onClick_1;
_.typeId$ = 11;
function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setPixelSize(this$static, width, height){
  width >= 0 && (this$static.element.style['width'] = width + 'px' , undefined);
  height >= 0 && (this$static.element.style['height'] = height + 'px' , undefined);
}

function $setTitle(this$static, title){
  title == null || title.length == 0?(this$static.element.removeAttribute('title') , undefined):(this$static.element.setAttribute('title', title) , undefined);
}

function getClass_10(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}

function setStyleName(elem, style, add){
  if (!elem) {
    throw $RuntimeException(new RuntimeException, 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Style names cannot be empty');
  }
  add?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw $RuntimeException(new RuntimeException, 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setWidth(width){
  this.element.style['width'] = width;
}

function toString_1(){
  if (!this.element) {
    return '(null handle)';
  }
  return $toString_2(($clinit_101() , this.element));
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = elem.className.split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0;
_.getClass$ = getClass_10;
_.setWidth = setWidth;
_.toString$ = toString_1;
_.typeId$ = 12;
_.element = null;
function $addDomHandler(this$static, handler, type){
  $sinkEvents(this$static, $eventGetTypeInt(type.name_0));
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager, this$static)):this$static.handlerManager, type, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  this$static.element.__listener = this$static;
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && $sinkEvents(this$static, bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(($clinit_101() , event_0).type)) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      this$static.element.__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_289();
    $containsKey_0(widgetsToDetach.map, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 70)) {
    dynamicCast(this$static.parent_0, 70).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw $IllegalStateException_0(new IllegalStateException, "This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement_0(this$static, elem){
  this$static.attached && (this$static.element.__listener = null , undefined);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && (this$static.element.__listener = this$static , undefined);
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw $IllegalStateException_0(new IllegalStateException, 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?$sinkEvents_0(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
}

function doAttachChildren(){
}

function doDetachChildren(){
}

function getClass_11(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}

function isAttached(){
  return this.attached;
}

function onAttach(){
  $onAttach(this);
}

function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}

function onDetach(){
  $onDetach(this);
}

function onLoad(){
}

function onUnload(){
}

function Widget(){
}

_ = Widget.prototype = new UIObject;
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.getClass$ = getClass_11;
_.isAttached = isAttached;
_.onAttach = onAttach;
_.onBrowserEvent = onBrowserEvent;
_.onDetach = onDetach;
_.onLoad = onLoad;
_.onUnload = onUnload;
_.typeId$ = 13;
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.layoutData = null;
_.parent_0 = null;
function $clear(this$static){
  var it;
  it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.children);
  while (it.index_0 < it.this$0.size - 1) {
    $next_2(it);
    $remove_5(it);
  }
}

function doAttachChildren_0(){
  tryCommand(this, ($clinit_243() , attachCommand));
}

function doDetachChildren_0(){
  tryCommand(this, ($clinit_243() , detachCommand));
}

function getClass_12(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}

function onLoad_0(){
}

function onUnload_0(){
}

function Panel(){
}

_ = Panel.prototype = new Widget;
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.getClass$ = getClass_12;
_.onLoad = onLoad_0;
_.onUnload = onUnload_0;
_.typeId$ = 14;
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_6(this$static.children, child);
  container.appendChild(child.element);
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index){
  if (index < 0 || index > this$static.children.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
}

function $insert(this$static, child, container, beforeIndex, domInsert){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_0(this$static.children, child, beforeIndex);
  domInsert?$insertChild(container, child.element, beforeIndex):container.appendChild(child.element);
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    (parent_0 = ($clinit_101() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

function getClass_13(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}

function iterator_0(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this.children);
}

function remove(w){
  return $remove(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel;
_.getClass$ = getClass_13;
_.iterator_0 = iterator_0;
_.remove = remove;
_.typeId$ = 15;
function $CellPanel(this$static){
  this$static.children = $WidgetCollection(new WidgetCollection, this$static);
  this$static.table = ($clinit_101() , $doc).createElement('table');
  this$static.body_0 = $doc.createElement('tbody');
  this$static.table.appendChild(this$static.body_0);
  this$static.element = this$static.table;
  return this$static;
}

function $getWidgetTd(this$static, w){
  var parent_0;
  if (w.parent_0 != this$static) {
    return null;
  }
  return parent_0 = ($clinit_101() , w.element).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0;
}

function $setCellHorizontalAlignment(this$static, w, align){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && (td['align'] = align.textAlignString , undefined);
}

function getClass_14(){
  return Lcom_google_gwt_user_client_ui_CellPanel_2_classLit;
}

function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel;
_.getClass$ = getClass_14;
_.typeId$ = 16;
_.body_0 = null;
_.table = null;
function $clinit_14(){
  $clinit_14 = nullMethod;
  CENTER = new DockPanel$DockLayoutConstant;
  LINE_START = new DockPanel$DockLayoutConstant;
  LINE_END = new DockPanel$DockLayoutConstant;
  EAST = new DockPanel$DockLayoutConstant;
  NORTH = new DockPanel$DockLayoutConstant;
  SOUTH = new DockPanel$DockLayoutConstant;
  WEST = new DockPanel$DockLayoutConstant;
}

function $add_0(this$static, widget, direction){
  var layout;
  if (direction == CENTER) {
    if (widget == this$static.center) {
      return;
    }
     else if (this$static.center) {
      throw $IllegalArgumentException_0(new IllegalArgumentException, 'Only one CENTER widget may be added');
    }
  }
  $removeFromParent(widget);
  $add_6(this$static.children, widget);
  direction == CENTER && (this$static.center = widget);
  layout = $DockPanel$LayoutData(new DockPanel$LayoutData, direction);
  widget.layoutData = layout;
  $setCellHorizontalAlignment_0(widget, this$static.horzAlign);
  $setCellVerticalAlignment(widget, this$static.vertAlign);
  $realizeTable(this$static);
  $setParent(widget, this$static);
}

function $realizeTable(this$static){
  var bodyElem, centerTd, child, colCount, dir, i, it, layout, logicalLeftCol, logicalRightCol, northRow, row, rowCount, rows, southRow, td;
  bodyElem = this$static.body_0;
  while ($getChildCount(bodyElem) > 0) {
    bodyElem.removeChild($getChild(bodyElem, 0));
  }
  rowCount = 1;
  colCount = 1;
  for (it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.children); it.index_0 < it.this$0.size - 1;) {
    child = $next_2(it);
    dir = child.layoutData.direction_0;
    dir == NORTH || dir == SOUTH?++rowCount:(dir == EAST || dir == WEST || dir == LINE_START || dir == LINE_END) && ++colCount;
  }
  rows = initDim(_3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit, 129, 41, rowCount, 0);
  for (i = 0; i < rowCount; ++i) {
    rows[i] = new DockPanel$TmpRow;
    rows[i].tr = ($clinit_101() , $doc).createElement('tr');
    bodyElem.appendChild(rows[i].tr);
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.children); it.index_0 < it.this$0.size - 1;) {
    child = $next_2(it);
    layout = child.layoutData;
    td = ($clinit_101() , $doc).createElement('td');
    layout.td = td;
    layout.td['align'] = layout.hAlign;
    layout.td.style['verticalAlign'] = layout.vAlign;
    layout.td['width'] = '';
    layout.td['height'] = '';
    if (layout.direction_0 == NORTH) {
      $insertChild(rows[northRow].tr, td, rows[northRow].center);
      td.appendChild(child.element);
      td['colSpan'] = logicalRightCol - logicalLeftCol + 1;
      ++northRow;
    }
     else if (layout.direction_0 == SOUTH) {
      $insertChild(rows[southRow].tr, td, rows[southRow].center);
      td.appendChild(child.element);
      td['colSpan'] = logicalRightCol - logicalLeftCol + 1;
      --southRow;
    }
     else if (layout.direction_0 == CENTER) {
      centerTd = td;
    }
     else if ($shouldAddToLogicalLeftOfTable(layout.direction_0)) {
      row = rows[northRow];
      $insertChild(row.tr, td, row.center++);
      td.appendChild(child.element);
      td['rowSpan'] = southRow - northRow + 1;
      ++logicalLeftCol;
    }
     else if ($shouldAddToLogicalRightOfTable(layout.direction_0)) {
      row = rows[northRow];
      $insertChild(row.tr, td, row.center);
      td.appendChild(child.element);
      td['rowSpan'] = southRow - northRow + 1;
      --logicalRightCol;
    }
  }
  if (this$static.center) {
    row = rows[northRow];
    $insertChild(row.tr, centerTd, row.center);
    centerTd.appendChild(this$static.center.element);
  }
}

function $setCellHorizontalAlignment_0(w, align){
  var data;
  data = w.layoutData;
  data.hAlign = align.textAlignString;
  !!data.td && (data.td['align'] = align.textAlignString , undefined);
}

function $setCellVerticalAlignment(w, align){
  var data;
  data = w.layoutData;
  data.vAlign = align.verticalAlignString;
  !!data.td && (data.td.style['verticalAlign'] = align.verticalAlignString , undefined);
}

function $shouldAddToLogicalLeftOfTable(widgetDirection){
  if (widgetDirection == LINE_START) {
    return true;
  }
  $clinit_182();
  return widgetDirection == WEST;
}

function $shouldAddToLogicalRightOfTable(widgetDirection){
  if (widgetDirection == LINE_END) {
    return true;
  }
  $clinit_182();
  return widgetDirection == EAST;
}

function getClass_15(){
  return Lcom_google_gwt_user_client_ui_DockPanel_2_classLit;
}

function remove_0(w){
  var removed;
  removed = $remove(this, w);
  if (removed) {
    w == this.center && (this.center = null);
    $realizeTable(this);
  }
  return removed;
}

function DockPanel(){
}

_ = DockPanel.prototype = new CellPanel;
_.getClass$ = getClass_15;
_.remove = remove_0;
_.typeId$ = 17;
_.center = null;
var CENTER, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
function $clinit_15(){
  $clinit_15 = nullMethod;
  $clinit_14();
}

function $DivLogger$LogDockPanel(this$static, this$0){
  $clinit_15();
  this$static.this$0 = this$0;
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_272() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_276() , ALIGN_TOP);
  this$static.table['cellSpacing'] = 0;
  this$static.table['cellPadding'] = 0;
  this$static.windowResizeListener = $DivLogger$LogDockPanel$1(new DivLogger$LogDockPanel$1, this$static);
  return this$static;
}

function $resize(this$static){
  $setPixelSize_0(this$static.this$0.scrollPanel, max(300, ~~Math.max(Math.min($getClientWidth($doc) * 0.8, 2147483647), -2147483648)), max(100, ~~Math.max(Math.min($getClientHeight($doc) * 0.3, 2147483647), -2147483648)));
}

function $setVisible(this$static, visible){
  this$static.userHidden = !visible;
  $setVisible_(this$static, visible);
}

function $setVisible_(this$static, visible){
  this$static.element.style.display = visible?'':'none';
  if (visible) {
    $checkMinSize(this$static.this$0.scrollPanel);
    $resize(this$static, ($getClientWidth($doc) , $getClientHeight($doc)));
  }
}

function getClass_16(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$LogDockPanel_2_classLit;
}

function onLoad_1(){
  this.resizeRegistration = addResizeHandler(this.windowResizeListener);
}

function onUnload_1(){
  $removeHandler(this.resizeRegistration);
}

function DivLogger$LogDockPanel(){
}

_ = DivLogger$LogDockPanel.prototype = new DockPanel;
_.getClass$ = getClass_16;
_.onLoad = onLoad_1;
_.onUnload = onUnload_1;
_.typeId$ = 18;
_.resizeRegistration = null;
_.this$0 = null;
_.userHidden = false;
function $DivLogger$LogDockPanel$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_17(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$LogDockPanel$1_2_classLit;
}

function DivLogger$LogDockPanel$1(){
}

_ = DivLogger$LogDockPanel$1.prototype = new Object_0;
_.getClass$ = getClass_17;
_.typeId$ = 19;
_.this$1 = null;
function $DivLogger$MouseDragHandler(this$static, dragHandle, this$0){
  this$static.this$0 = this$0;
  this$static.dragHandle = dragHandle;
  $addDomHandler(dragHandle, this$static, ($clinit_145() , $clinit_145() , TYPE_1));
  $addDomHandler(dragHandle, this$static, ($clinit_149() , $clinit_149() , TYPE_3));
  $addDomHandler(dragHandle, this$static, ($clinit_147() , $clinit_147() , TYPE_2));
  return this$static;
}

function getClass_18(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$MouseDragHandler_2_classLit;
}

function onMouseDown(event_0){
  this.dragging = true;
  this.dragStartX = $getRelativeX(event_0, this.dragHandle.element);
  this.dragStartY = $getRelativeY(event_0, this.dragHandle.element);
  setCapture(this.dragHandle.element);
}

function onMouseMove(event_0){
  var absX, absY;
  if (this.dragging) {
    absX = $getRelativeX(event_0, this.dragHandle.element) + $getAbsoluteLeft(($clinit_101() , this.this$0.logDockPanel.element));
    absY = $getRelativeY(event_0, this.dragHandle.element) + $getAbsoluteTop(this.this$0.logDockPanel.element);
    $setWidgetPosition(($clinit_289() , get_0(null)), this.this$0.logDockPanel, absX - this.dragStartX, absY - this.dragStartY);
  }
}

function onMouseUp(event_0){
  this.dragging = false;
  releaseCapture(this.dragHandle.element);
}

function DivLogger$MouseDragHandler(){
}

_ = DivLogger$MouseDragHandler.prototype = new Object_0;
_.getClass$ = getClass_18;
_.onMouseDown = onMouseDown;
_.onMouseMove = onMouseMove;
_.onMouseUp = onMouseUp;
_.typeId$ = 20;
_.dragHandle = null;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.this$0 = null;
function $DivLogger$MouseResizeHandler(this$static, resizePanel, this$0){
  var hamh;
  this$static.this$0 = this$0;
  this$static.resizePanel = resizePanel;
  hamh = resizePanel;
  $addDomHandler(hamh, this$static, ($clinit_147() , $clinit_147() , TYPE_2));
  $addDomHandler(hamh, this$static, ($clinit_145() , $clinit_145() , TYPE_1));
  $addDomHandler(hamh, this$static, ($clinit_149() , $clinit_149() , TYPE_3));
  return this$static;
}

function getClass_19(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$MouseResizeHandler_2_classLit;
}

function onMouseDown_0(event_0){
  this.dragging = true;
  setCapture(this.resizePanel.element);
  this.dragStartX = $getX(event_0);
  this.dragStartY = $getY(event_0);
  ($clinit_101() , currentEvent).preventDefault();
}

function onMouseMove_0(event_0){
  if (this.dragging) {
    $incrementPixelSize(this.this$0.scrollPanel, $getX(event_0) - this.dragStartX, $getY(event_0) - this.dragStartY);
    this.this$0.scrollPanel.element['scrollTop'] = 107374182;
  }
}

function onMouseUp_0(event_0){
  this.dragging = false;
  releaseCapture(this.resizePanel.element);
}

function DivLogger$MouseResizeHandler(){
}

_ = DivLogger$MouseResizeHandler.prototype = new Object_0;
_.getClass$ = getClass_19;
_.onMouseDown = onMouseDown_0;
_.onMouseMove = onMouseMove_0;
_.onMouseUp = onMouseUp_0;
_.typeId$ = 21;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.resizePanel = null;
_.this$0 = null;
function $SimplePanel(this$static, elem){
  this$static.element = elem;
  return this$static;
}

function $add_1(this$static, w){
  if (this$static.widget) {
    throw $IllegalStateException_0(new IllegalStateException, 'SimplePanel can only contain one child widget');
  }
  $setWidget(this$static, w);
}

function $remove_0(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    this$static.getContainerElement().removeChild(w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && $remove_0(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    this$static.getContainerElement().appendChild(this$static.widget.element);
    $setParent(w, this$static);
  }
}

function getClass_20(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}

function getContainerElement(){
  return this.element;
}

function iterator_1(){
  return $SimplePanel$1(new SimplePanel$1, this);
}

function remove_1(w){
  return $remove_0(this, w);
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel;
_.getClass$ = getClass_20;
_.getContainerElement = getContainerElement;
_.iterator_0 = iterator_1;
_.remove = remove_1;
_.typeId$ = 22;
_.widget = null;
function getClass_21(){
  return Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit;
}

function getContainerElement_0(){
  return this.containerElem;
}

function setWidth_0(width){
  this.element.style['width'] = width;
}

function ScrollPanel(){
}

_ = ScrollPanel.prototype = new SimplePanel;
_.getClass$ = getClass_21;
_.getContainerElement = getContainerElement_0;
_.setWidth = setWidth_0;
_.typeId$ = 23;
_.containerElem = null;
function $DivLogger$ScrollPanelImpl(this$static){
  this$static.element = ($clinit_101() , $doc).createElement('div');
  this$static.element.style['overflow'] = 'auto';
  this$static.containerElem = $doc.createElement('div');
  this$static.element.appendChild(this$static.containerElem);
  this$static.element.style['position'] = 'relative';
  this$static.containerElem.style['position'] = 'relative';
  this$static.element.style['zoom'] = '1';
  this$static.containerElem.style['zoom'] = '1';
  return this$static;
}

function $checkMinSize(this$static){
  var $e0;
  if (this$static.minScrollPanelWidth == -1) {
    try {
      this$static.minScrollPanelWidth = parseInt(this$static.element['offsetWidth']) || 0;
      this$static.minScrollPanelHeight = parseInt(this$static.element['offsetHeight']) || 0;
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 3))
        throw $e0;
    }
  }
}

function $incrementPixelSize(this$static, width, height){
  $setPixelSize_0(this$static, this$static.scrollPanelWidth + width, this$static.scrollPanelHeight + height);
}

function $setPixelSize_0(this$static, width, height){
  $setPixelSize(this$static, this$static.scrollPanelWidth = max(width, this$static.minScrollPanelWidth), this$static.scrollPanelHeight = max(height, this$static.minScrollPanelHeight));
}

function getClass_22(){
  return Lcom_allen_1sauer_gwt_log_client_DivLogger$ScrollPanelImpl_2_classLit;
}

function DivLogger$ScrollPanelImpl(){
}

_ = DivLogger$ScrollPanelImpl.prototype = new ScrollPanel;
_.getClass$ = getClass_22;
_.typeId$ = 24;
_.minScrollPanelHeight = -1;
_.minScrollPanelWidth = -1;
_.scrollPanelHeight = 0;
_.scrollPanelWidth = 0;
function $logMessage_0(logLevel, message){
  logLevel >= 40000?$wnd.console.error(message):logLevel >= 30000?$wnd.console.warn(message):logLevel >= 20000?$wnd.console.info(message):$wnd.console.debug(message);
}

function clear_1(){
}

function getClass_23(){
  return Lcom_allen_1sauer_gwt_log_client_FirebugLogger_2_classLit;
}

function isSupported_1(){
  return !!($wnd.console && $wnd.console.firebug);
}

function log_2(record){
  var i, lines;
  lines = $split((record.level == 2147483647?record.message_0:$format(levelToString(record.level), record.message_0)) + stackTraceToString(record.throwable?record.throwable:getInstanceOrNull(record.wrappedClientThrowable)), '\n', 0);
  for (i = 0; i < lines.length; ++i) {
    $logMessage_0(record.level, lines[i]);
  }
}

function setCurrentLogLevel_1(level){
}

function FirebugLogger(){
}

_ = FirebugLogger.prototype = new Object_0;
_.clear = clear_1;
_.getClass$ = getClass_23;
_.isSupported = isSupported_1;
_.log_0 = log_2;
_.setCurrentLogLevel = setCurrentLogLevel_1;
_.typeId$ = 25;
function clear_2(){
}

function getClass_24(){
  return Lcom_allen_1sauer_gwt_log_client_GWTLogger_2_classLit;
}

function isSupported_2(){
  return false;
}

function log_3(record){
  record.level == 2147483647?record.message_0:$format(levelToString(record.level), record.message_0);
  record.throwable?record.throwable:getInstanceOrNull(record.wrappedClientThrowable);
}

function setCurrentLogLevel_2(level){
}

function GWTLogger(){
}

_ = GWTLogger.prototype = new Object_0;
_.clear = clear_2;
_.getClass$ = getClass_24;
_.isSupported = isSupported_2;
_.log_0 = log_3;
_.setCurrentLogLevel = setCurrentLogLevel_2;
_.typeId$ = 26;
function $clinit_24(){
  $clinit_24 = nullMethod;
  impl = $LogImplDebug(new LogImplDebug);
  $init(impl);
}

function diagnostic(message, e){
  $clinit_24();
  $log(impl, 2147483647, message, e);
}

var impl = null;
function $format(logLevelText, message){
  var len;
  message == null && (message = '<null message>');
  return '(-:-) ' + formatDate($Date(new Date_0), 'yyyy-MM-dd HH:mm:ss,SSS') + ' [' + ($clinit_27() , len = logLevelText.length , len < 5?logLevelText + SPACES.substr(0, 5 - len - 0):logLevelText) + '] ' + message + '\n';
}

function $clinit_26(){
  $clinit_26 = nullMethod;
  (new Date).getTime();
}

function $LogRecord(this$static, level, message, throwable){
  $clinit_26();
  this$static.throwable = throwable;
  ++gloablRecordSequence;
  this$static.level = level;
  this$static.message_0 = message;
  this$static.wrappedClientThrowable = !throwable?null:$WrappedClientThrowable(new WrappedClientThrowable, throwable);
  return this$static;
}

function getClass_25(){
  return Lcom_allen_1sauer_gwt_log_client_LogRecord_2_classLit;
}

function LogRecord(){
}

_ = LogRecord.prototype = new Object_0;
_.getClass$ = getClass_25;
_.typeId$ = 27;
_.level = 0;
_.message_0 = null;
_.throwable = null;
_.wrappedClientThrowable = null;
var gloablRecordSequence = 0;
function $clinit_27(){
  $clinit_27 = nullMethod;
  var b, i;
  b = $StringBuffer(new StringBuffer);
  for (i = 0; i < 500; ++i) {
    b.impl.string += ' ';
  }
  SPACES = b.impl.string;
}

function formatDate(date, formatMask){
  $clinit_27();
  return $format_0($DateTimeFormat(new DateTimeFormat, formatMask, $getDateTimeConstants(($clinit_182() , $clinit_182() , instance_0))), date);
}

function levelToString(level){
  $clinit_27();
  switch (level) {
    case 5000:
      return 'TRACE';
    case 10000:
      return 'DEBUG';
    case 20000:
      return 'INFO';
    case 30000:
      return 'WARN';
    case 40000:
      return 'ERROR';
    case 50000:
      return 'FATAL';
    case 2147483647:
      return 'OFF';
    default:throw $IllegalArgumentException(new IllegalArgumentException);
  }
}

function stackTraceToString(throwable){
  $clinit_27();
  var element, element$array, element$index, element$max, stackTraceElements, text, text1;
  text = '';
  if (throwable) {
    while (throwable) {
      text1 = '';
      text1 += throwable.getClass$().typeName + ':\n' + throwable.getMessage() + '\n';
      stackTraceElements = $getStackTrace(throwable);
      for (element$array = stackTraceElements , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
        element = element$array[element$index];
        text1 += '    at ' + element + '\n';
      }
      text += text1;
      throwable = throwable.getCause();
      !!throwable && (text += 'Caused by: ');
    }
  }
  return text;
}

function stringToLevel(logLevelString){
  $clinit_27();
  if ($equals_1('TRACE', logLevelString)) {
    return 5000;
  }
   else if ($equals_1('DEBUG', logLevelString)) {
    return 10000;
  }
   else if ($equals_1('INFO', logLevelString)) {
    return 20000;
  }
   else if ($equals_1('WARN', logLevelString)) {
    return 30000;
  }
   else if ($equals_1('ERROR', logLevelString)) {
    return 40000;
  }
   else if ($equals_1('FATAL', logLevelString)) {
    return 50000;
  }
   else if ($equals_1('OFF', logLevelString)) {
    return 2147483647;
  }
   else {
    throw $IllegalArgumentException(new IllegalArgumentException);
  }
}

var SPACES = null;
function clear_3(){
}

function getClass_26(){
  return Lcom_allen_1sauer_gwt_log_client_NullLogger_2_classLit;
}

function isSupported_3(){
  return false;
}

function log_4(record){
}

function setCurrentLogLevel_4(level){
}

function NullLogger(){
}

_ = NullLogger.prototype = new Object_0;
_.clear = clear_3;
_.getClass$ = getClass_26;
_.isSupported = isSupported_3;
_.log_0 = log_4;
_.setCurrentLogLevel = setCurrentLogLevel_4;
_.typeId$ = 28;
function clear_4(){
}

function getClass_27(){
  return Lcom_allen_1sauer_gwt_log_client_SystemLogger_2_classLit;
}

function isSupported_4(){
  return false;
}

function log_5(record){
  record.level >= 40000?(record.level == 2147483647?record.message_0:$format(levelToString(record.level), record.message_0)) + stackTraceToString(record.throwable?record.throwable:getInstanceOrNull(record.wrappedClientThrowable)):(record.level == 2147483647?record.message_0:$format(levelToString(record.level), record.message_0)) + stackTraceToString(record.throwable?record.throwable:getInstanceOrNull(record.wrappedClientThrowable));
}

function setCurrentLogLevel_5(level){
}

function SystemLogger(){
}

_ = SystemLogger.prototype = new Object_0;
_.clear = clear_4;
_.getClass$ = getClass_27;
_.isSupported = isSupported_4;
_.log_0 = log_5;
_.setCurrentLogLevel = setCurrentLogLevel_5;
_.typeId$ = 29;
function $Throwable(this$static, message, cause){
  this$static.fillInStackTrace();
  this$static.cause = cause;
  this$static.detailMessage = message;
  return this$static;
}

function $getStackTrace(this$static){
  if (this$static.stackTrace == null) {
    return initDim(_3Ljava_lang_StackTraceElement_2_classLit, 149, 58, 0, 0);
  }
  return this$static.stackTrace;
}

function $setStackTrace(this$static, stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 149, 58, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw $NullPointerException(new NullPointerException);
    }
    copy[i] = stackTrace[i];
  }
  this$static.stackTrace = copy;
}

function $toString_0(this$static){
  var className, msg;
  className = this$static.getClass$().typeName;
  msg = this$static.getMessage();
  if (msg != null) {
    return className + ': ' + msg;
  }
   else {
    return className;
  }
}

function fillInStackTrace(){
  return $fillInStackTrace_1(this) , this;
}

function getCause(){
  return this.cause;
}

function getClass_28(){
  return Ljava_lang_Throwable_2_classLit;
}

function getMessage(){
  return this.detailMessage;
}

function toString_2(){
  return $toString_0(this);
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0;
_.fillInStackTrace = fillInStackTrace;
_.getCause = getCause;
_.getClass$ = getClass_28;
_.getMessage = getMessage;
_.toString$ = toString_2;
_.typeId$ = 30;
_.cause = null;
_.detailMessage = null;
_.stackTrace = null;
function $UnwrappedClientThrowable(this$static, wrapped){
  var clientStackTrace, i, stackTrace;
  this$static.originalClassName = wrapped.originalClassName;
  this$static.message_0 = wrapped.message_0;
  clientStackTrace = wrapped.clientStackTrace;
  if (clientStackTrace != null) {
    stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 149, 58, clientStackTrace.length, 0);
    for (i = 0; i < clientStackTrace.length; ++i) {
      stackTrace[i] = $StackTraceElement(new StackTraceElement, clientStackTrace[i].declaringClass, clientStackTrace[i].methodName, clientStackTrace[i].fileName, clientStackTrace[i].lineNumber);
    }
    $setStackTrace(this$static, stackTrace);
  }
  return this$static;
}

function fillInStackTrace_0(){
  return this;
}

function getCause_0(){
  return null;
}

function getClass_29(){
  return Lcom_allen_1sauer_gwt_log_client_UnwrappedClientThrowable_2_classLit;
}

function getInstanceOrNull(wrapped){
  return !wrapped?null:$UnwrappedClientThrowable(new UnwrappedClientThrowable, wrapped);
}

function getMessage_0(){
  return this.message_0;
}

function toString_3(){
  return this.originalClassName + (this.message_0 != null?': ' + this.message_0:'');
}

function UnwrappedClientThrowable(){
}

_ = UnwrappedClientThrowable.prototype = new Throwable;
_.fillInStackTrace = fillInStackTrace_0;
_.getCause = getCause_0;
_.getClass$ = getClass_29;
_.getMessage = getMessage_0;
_.toString$ = toString_3;
_.typeId$ = 31;
_.message_0 = null;
_.originalClassName = null;
function $WrappedClientThrowable(this$static, ex){
  var i, stackTrace;
  if (ex) {
    this$static.originalClassName = ex.getClass$().typeName;
    this$static.message_0 = ex.getMessage();
    stackTrace = $getStackTrace(ex);
    this$static.clientStackTrace = initDim(_3Lcom_allen_1sauer_gwt_log_client_ClientStackTraceElement_2_classLit, 109, 22, stackTrace.length, 0);
    for (i = 0; i < stackTrace.length; ++i) {
      this$static.clientStackTrace[i] = $ClientStackTraceElement(new ClientStackTraceElement, stackTrace[i].className_0, stackTrace[i].methodName, stackTrace[i].fileName, stackTrace[i].lineNumber);
    }
    getInstanceOrNull_0(ex.getCause());
  }
  return this$static;
}

function getClass_30(){
  return Lcom_allen_1sauer_gwt_log_client_WrappedClientThrowable_2_classLit;
}

function getInstanceOrNull_0(ex){
  return !ex?null:$WrappedClientThrowable(new WrappedClientThrowable, ex);
}

function WrappedClientThrowable(){
}

_ = WrappedClientThrowable.prototype = new Object_0;
_.getClass$ = getClass_30;
_.typeId$ = 32;
_.clientStackTrace = null;
_.message_0 = null;
_.originalClassName = null;
function getClass_31(){
  return Lcom_allen_1sauer_gwt_log_client_impl_LogImpl_2_classLit;
}

function LogImpl(){
}

_ = LogImpl.prototype = new Object_0;
_.getClass$ = getClass_31;
_.typeId$ = 0;
function $clinit_36(){
  $clinit_36 = nullMethod;
  levelToString(10000);
  levelToString(40000);
  levelToString(50000);
  levelToString(20000);
  levelToString(2147483647);
  levelToString(5000);
  levelToString(30000);
  $wnd.$GWT_LOG_VERSION = '3.0.1';
  $clinit_113();
  toInjectAtStart.unshift((!css_0 && (css_0 = new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1) , $clinit_182() , '.log-panel{background-color:#ecf2fc;border:1px solid red;margin:0;filter:alpha(opacity\\=95);opacity:0.95;z-index:1000;}.log-panel .Gxh4pkcI{font-size:10pt;margin:0;text-align:left;}.log-panel BUTTON{font-size:10pt;margin:0;}.log-panel .Gxh4pkcJ{cursor:move;font-weight:bold;}.log-panel .Gxh4pkcB{margin:0 1.2em;}.log-panel BUTTON.Gxh4pkcA{color:#444 !important;}.log-panel .Gxh4pkcH{white-space:nowrap;}.log-panel .Gxh4pkcC{white-space:pre;font-family:monospace;cursor:help;}.log-panel .Gxh4pkcD{background-color:#f0f0f0;}.log-panel .Gxh4pkcG{background-color:#fff;}.log-panel .Gxh4pkcF{cursor:se-resize;}'));
  schedule();
}

function $addLogger(this$static, logger){
  logger.isSupported() && $add_7(this$static.loggers, logger);
}

function $clear_0(this$static){
  var $e0, e1, iterator, logger;
  for (iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.loggers); iterator.i < iterator.this$0.size;) {
    logger = dynamicCast($next_5(iterator), 4);
    try {
      logger.clear();
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 5)) {
        e1 = $e0;
        $remove_7(iterator);
        $log(this$static, 2147483647, "Removing '" + (logger.typeMarker$ == nullMethod || logger.typeId$ == 2?logger.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + "' due to unexecpted exception", e1);
      }
       else 
        throw $e0;
    }
  }
}

function $debug(this$static, message, e){
  var record;
  this$static.currentLogLevel <= 10000 && (record = $LogRecord(new LogRecord, 10000, message, e) , $sendToLoggers(this$static, record) , undefined);
}

function $error(this$static, message, e){
  var record;
  this$static.currentLogLevel <= 40000 && (record = $LogRecord(new LogRecord, 40000, message, e) , $sendToLoggers(this$static, record) , undefined);
}

function $fatal(this$static, message, e){
  var record;
  this$static.currentLogLevel <= 50000 && (record = $LogRecord(new LogRecord, 50000, message, e) , $sendToLoggers(this$static, record) , undefined);
}

function $getLogger(this$static, clazz){
  var logger, logger$iterator;
  for (logger$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.loggers); logger$iterator.i < logger$iterator.this$0.size;) {
    logger = dynamicCast($next_5(logger$iterator), 4);
    if ((logger.typeMarker$ == nullMethod || logger.typeId$ == 2?logger.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit) == clazz) {
      return logger;
    }
  }
  return null;
}

function $info(this$static, message, e){
  var record;
  this$static.currentLogLevel <= 20000 && (record = $LogRecord(new LogRecord, 20000, message, e) , $sendToLoggers(this$static, record) , undefined);
}

function $init(this$static){
  var $e0, ex, logLevelString, lowestLogLevel;
  $addLogger(this$static, new GWTLogger);
  $addLogger(this$static, new SystemLogger);
  $addLogger(this$static, new FirebugLogger);
  $addLogger(this$static, new ConsoleLogger);
  $addLogger(this$static, new NullLogger);
  try {
    $addLogger(this$static, $DivLogger(new DivLogger));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 3)) {
      ex = $e0;
      $wnd.alert("WARNING: Unable to instantiate '" + Lcom_allen_1sauer_gwt_log_client_DivLogger_2_classLit + "' due to " + ex.toString$());
    }
     else 
      throw $e0;
  }
  try {
    $addLogger(this$static, new NullLogger);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 3)) {
      ex = $e0;
      $wnd.alert("WARNING: Unable to instantiate '" + Lcom_allen_1sauer_gwt_log_client_WindowLogger_2_classLit + "' due to " + ex.toString$());
    }
     else 
      throw $e0;
  }
  $setCurrentLogLevelLoggers(this$static, (logLevelString = (ensureParameterMap() , dynamicCast($get_4(paramMap, 'log_level'), 1)) , lowestLogLevel = ($clinit_24() , 10000) , logLevelString == null?lowestLogLevel:max(lowestLogLevel, stringToLevel(logLevelString))));
  $clear_0(this$static);
}

function $log(this$static, level, message, e){
  var record;
  record = $LogRecord(new LogRecord, level, message, e);
  $sendToLoggers(this$static, record);
}

function $sendToLoggers(this$static, record){
  var $e0, e1, iterator, logger;
  for (iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.loggers); iterator.i < iterator.this$0.size;) {
    logger = dynamicCast($next_5(iterator), 4);
    try {
      logger.log_0(record);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 5)) {
        e1 = $e0;
        $remove_7(iterator);
        $log(this$static, 2147483647, "Removing '" + (logger.typeMarker$ == nullMethod || logger.typeId$ == 2?logger.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + "' due to unexecpted exception", e1);
      }
       else 
        throw $e0;
    }
  }
}

function $setCurrentLogLevel(this$static, level){
  level = $setCurrentLogLevelLoggers(this$static, level);
  if (level != this$static.currentLogLevel) {
    $log(this$static, 2147483647, "Temporarily setting the current (runtime) log level filter to '" + levelToString(level) + "'", null);
    this$static.currentLogLevel = level;
  }
  return this$static.currentLogLevel;
}

function $setCurrentLogLevelLoggers(this$static, level){
  var $e0, e1, iterator, logger;
  if (level < 10000) {
    $wnd.alert('Unable to lower runtime log level to ' + level + ' due to compile time minimum of 10000');
    level = 10000;
  }
  for (iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.loggers); iterator.i < iterator.this$0.size;) {
    logger = dynamicCast($next_5(iterator), 4);
    try {
      logger.setCurrentLogLevel(level);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 5)) {
        e1 = $e0;
        $remove_7(iterator);
        $log(this$static, 2147483647, "Removing '" + (logger.typeMarker$ == nullMethod || logger.typeId$ == 2?logger.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + "' due to unexecpted exception", e1);
      }
       else 
        throw $e0;
    }
  }
  return level;
}

function $setErrorHandler(){
  $wnd != window && (window.onerror = handleOnError);
  var oldOnError = $wnd.onerror;
  $wnd.onerror = function(msg, url, line){
    var result, oldResult;
    try {
      result = ($clinit_24() , $fatal(impl, 'Uncaught JavaScript exception [' + msg + '] in ' + url + ', line ' + line, null) , true);
    }
     finally {
      oldResult = oldOnError && oldOnError(msg, url, line);
    }
    if (result != null)
      return result;
    if (oldResult != null)
      return oldResult;
  }
  ;
}

function $warn(this$static, message, e){
  var record;
  this$static.currentLogLevel <= 30000 && (record = $LogRecord(new LogRecord, 30000, message, e) , $sendToLoggers(this$static, record) , undefined);
}

function getClass_32(){
  return Lcom_allen_1sauer_gwt_log_client_impl_LogImplBase_2_classLit;
}

function handleOnError(msg, url, line){
  $clinit_24();
  $fatal(impl, 'Uncaught JavaScript exception [' + msg + '] in ' + url + ', line ' + line, null);
  return true;
}

function LogImplBase(){
}

_ = LogImplBase.prototype = new LogImpl;
_.getClass$ = getClass_32;
_.typeId$ = 0;
_.currentLogLevel = 10000;
function getClass_33(){
  return Lcom_allen_1sauer_gwt_log_client_impl_LogImplBase$1_2_classLit;
}

function LogImplBase$1(){
}

_ = LogImplBase$1.prototype = new Object_0;
_.getClass$ = getClass_33;
_.typeId$ = 0;
function $clinit_38(){
  $clinit_38 = nullMethod;
  $clinit_36();
}

function $LogImplDebug(this$static){
  $clinit_38();
  this$static.loggers = $ArrayList(new ArrayList);
  return this$static;
}

function getClass_34(){
  return Lcom_allen_1sauer_gwt_log_client_impl_LogImplDebug_2_classLit;
}

function LogImplDebug(){
}

_ = LogImplDebug.prototype = new LogImplBase;
_.getClass$ = getClass_34;
_.typeId$ = 0;
var css_0 = null;
function getClass_35(){
  return Lcom_allen_1sauer_gwt_log_client_impl_com_1allen_1sauer_1gwt_1log_1client_1impl_1LogClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit;
}

function com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1(){
}

_ = com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1.prototype = new Object_0;
_.getClass$ = getClass_35;
_.typeId$ = 0;
function getClass_36(){
  return Lcom_google_gwt_gadgets_client_Gadget_2_classLit;
}

function Gadget(){
}

_ = Gadget.prototype = new Object_0;
_.getClass$ = getClass_36;
_.typeId$ = 0;
function getClass_37(){
  return Lorg_cobogw_gwt_waveapi_gadget_client_WaveGadget_2_classLit;
}

function initializeFeature(feature){
  this.wave_0 = feature;
}

function WaveGadget(){
}

_ = WaveGadget.prototype = new Gadget;
_.getClass$ = getClass_37;
_.initializeFeature = initializeFeature;
_.typeId$ = 0;
_.wave_0 = null;
function $initRemoteLogger(panel){
  $clinit_24();
  sUncaughtExceptionHandler = new LogImplBase$1;
  $setErrorHandler();
  if (panel) {
    $add_2(panel, dynamicCast($getLogger(impl, Lcom_allen_1sauer_gwt_log_client_DivLogger_2_classLit), 6).logDockPanel);
    $info(impl, 'Logger initialized: ' + Lcom_allen_1sauer_gwt_log_client_Log_2_classLit.typeName, null);
  }
}

function getClass_38(){
  return Lcom_example_portfoliobotty_client_PortfolioBotty_2_classLit;
}

function initializeFeature_0(feature){
  dhFeature = feature;
}

function initializeFeature_1(feature){
  mmFeature = feature;
}

function initializeFeature_2(analyticsFeature){
  analyticsFeature_0 = analyticsFeature;
}

function PortfolioBotty(){
}

_ = PortfolioBotty.prototype = new WaveGadget;
_.getClass$ = getClass_38;
_.initializeFeature_0 = initializeFeature_0;
_.initializeFeature_1 = initializeFeature_1;
_.initializeFeature_2 = initializeFeature_2;
_.typeId$ = 0;
var analyticsFeature_0 = null, dhFeature = null, mmFeature = null, waveFeature = null;
function getClass_39(){
  return Lcom_example_portfoliobotty_client_PortfolioBotty$AnalyticsFeatureProvider_2_classLit;
}

function PortfolioBotty$AnalyticsFeatureProvider(){
}

_ = PortfolioBotty$AnalyticsFeatureProvider.prototype = new Object_0;
_.getClass$ = getClass_39;
_.typeId$ = 0;
function getClass_40(){
  return Lcom_example_portfoliobotty_client_PortfolioBotty$DynamicHeightFeatureProvider_2_classLit;
}

function PortfolioBotty$DynamicHeightFeatureProvider(){
}

_ = PortfolioBotty$DynamicHeightFeatureProvider.prototype = new Object_0;
_.getClass$ = getClass_40;
_.typeId$ = 0;
function getClass_41(){
  return Lcom_example_portfoliobotty_client_PortfolioBotty$MiniMessagesFeatureProvider_2_classLit;
}

function PortfolioBotty$MiniMessagesFeatureProvider(){
}

_ = PortfolioBotty$MiniMessagesFeatureProvider.prototype = new Object_0;
_.getClass$ = getClass_41;
_.typeId$ = 0;
function getClass_42(){
  return Lcom_example_portfoliobotty_client_PortfolioBotty$WaveFeatureProvider_2_classLit;
}

function PortfolioBotty$WaveFeatureProvider(){
}

_ = PortfolioBotty$WaveFeatureProvider.prototype = new Object_0;
_.getClass$ = getClass_42;
_.typeId$ = 0;
function $PortfolioBottyGadgetImpl(this$static){
  var ginjector, widget;
  this$static.initializeFeature_0(new DynamicHeightFeature);
  this$static.initializeFeature_1(new MiniMessagesFeature);
  this$static.initializeFeature_2(new AnalyticsFeature);
  this$static.initializeFeature(new WaveFeature);
  $clinit_24();
  $info(impl, 'init PortfolioBotty', null);
  waveFeature = this$static.wave_0;
  $initMiniMessagesFeature(mmFeature);
  ginjector = new PortfolioGinjectorImpl;
  $ensureInjected($globalCSS(new com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator));
  widget = $PortfolioPanel(new PortfolioPanel, $com$example$portfoliobotty$client$service$PortfolioServiceImpl_PortfolioServiceImpl_methodInjection((!ginjector.singleton_Key$type$com$example$portfoliobotty$client$request$RequestService$_annotation$$none$$ && (ginjector.singleton_Key$type$com$example$portfoliobotty$client$request$RequestService$_annotation$$none$$ = $WaveRequestServiceImpl(new WaveRequestServiceImpl, $get_Key$type$org$cobogw$gwt$waveapi$gadget$client$WaveFeature$_annotation$$none$$(ginjector))) , ginjector.singleton_Key$type$com$example$portfoliobotty$client$request$RequestService$_annotation$$none$$ , new PortfolioConstants_)), (!ginjector.singleton_Key$type$com$example$portfoliobotty$client$utils$PortfolioUtils$_annotation$$none$$ && (ginjector.singleton_Key$type$com$example$portfoliobotty$client$utils$PortfolioUtils$_annotation$$none$$ = $com$example$portfoliobotty$client$utils$PortfolioUtilsImpl_PortfolioUtilsImpl_methodInjection($get_Key$type$org$cobogw$gwt$waveapi$gadget$client$WaveFeature$_annotation$$none$$(ginjector), (!ginjector.singleton_Key$type$com$google$gwt$gadgets$client$DynamicHeightFeature$_annotation$$none$$ && (ginjector.singleton_Key$type$com$google$gwt$gadgets$client$DynamicHeightFeature$_annotation$$none$$ = (new PortfolioBotty$DynamicHeightFeatureProvider , $info(impl, 'Providing DynamicHeightFeature', null) , dhFeature)) , ginjector.singleton_Key$type$com$google$gwt$gadgets$client$DynamicHeightFeature$_annotation$$none$$), (!ginjector.singleton_Key$type$com$example$portfoliobotty$client$feature$minimessages$MiniMessagesFeature$_annotation$$none$$ && (ginjector.singleton_Key$type$com$example$portfoliobotty$client$feature$minimessages$MiniMessagesFeature$_annotation$$none$$ = (new PortfolioBotty$MiniMessagesFeatureProvider , $info(impl, 'Providing MiniMessagesFeature', null) , mmFeature)) , ginjector.singleton_Key$type$com$example$portfoliobotty$client$feature$minimessages$MiniMessagesFeature$_annotation$$none$$), (!ginjector.singleton_Key$type$com$google$gwt$gadgets$client$AnalyticsFeature$_annotation$$none$$ && (ginjector.singleton_Key$type$com$google$gwt$gadgets$client$AnalyticsFeature$_annotation$$none$$ = (new PortfolioBotty$AnalyticsFeatureProvider , $info(impl, 'Providing AnalyticsFeature', null) , analyticsFeature_0)) , ginjector.singleton_Key$type$com$google$gwt$gadgets$client$AnalyticsFeature$_annotation$$none$$))) , ginjector.singleton_Key$type$com$example$portfoliobotty$client$utils$PortfolioUtils$_annotation$$none$$), (new PortfolioConstants_ , new PortfolioMessages_ , new com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator));
  $add_2(get_0('__gwt_gadget_content_div'), widget);
  $initRemoteLogger(($clinit_289() , get_0(null)));
  return this$static;
}

function getClass_43(){
  return Lcom_example_portfoliobotty_client_PortfolioBottyGadgetImpl_2_classLit;
}

function PortfolioBottyGadgetImpl(){
}

_ = PortfolioBottyGadgetImpl.prototype = new PortfolioBotty;
_.getClass$ = getClass_43;
_.typeId$ = 0;
function getClass_44(){
  return Lcom_example_portfoliobotty_client_constants_PortfolioConstants_1_2_classLit;
}

function PortfolioConstants_(){
}

_ = PortfolioConstants_.prototype = new Object_0;
_.getClass$ = getClass_44;
_.typeId$ = 0;
function getClass_45(){
  return Lcom_example_portfoliobotty_client_constants_PortfolioMessages_1_2_classLit;
}

function PortfolioMessages_(){
}

_ = PortfolioMessages_.prototype = new Object_0;
_.getClass$ = getClass_45;
_.typeId$ = 0;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.equals$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

function $dismissAllStaticMessages(this$static){
  while ($wnd.msgCounter > 0) {
    this$static.dismissMessage($wnd.gwtHtmlMsg[$wnd.msgCounter]);
    $wnd.msgCounter = $wnd.msgCounter - 1;
  }
}

function $dismissStaticMessage(this$static){
  if ($wnd.msgCounter > 0) {
    this$static.dismissMessage($wnd.gwtHtmlMsg[$wnd.msgCounter]);
    $wnd.msgCounter = $wnd.msgCounter - 1;
  }
}

function $alert_0(this$static, message){
  var $e0, e;
  try {
    $wnd.msgAlertCounter = $wnd.msgAlertCounter + 1;
    $wnd.gwtAlertHtmlMsg[$wnd.msgAlertCounter] = this$static.messages.createDismissibleMessage(message);
    $wnd.gwtAlertHtmlMsg[$wnd.msgAlertCounter].style.backgroundColor = 'red';
    $wnd.gwtAlertHtmlMsg[$wnd.msgAlertCounter].style.color = 'white';
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $clinit_24();
      $error(impl, '', e);
    }
     else 
      throw $e0;
  }
}

function $createStaticMessage_0(this$static, message){
  var $e0, e;
  try {
    $wnd.msgCounter = $wnd.msgCounter + 1;
    $wnd.gwtHtmlMsg[$wnd.msgCounter] = this$static.messages.createStaticMessage(message);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $clinit_24();
      $error(impl, '', e);
    }
     else 
      throw $e0;
  }
}

function $dismissStaticMessage_0(this$static){
  var $e0, e;
  try {
    $dismissStaticMessage(this$static.messages);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $clinit_24();
      $error(impl, '', e);
    }
     else 
      throw $e0;
  }
}

function $initMiniMessagesFeature(this$static){
  var $e0, e;
  try {
    this$static.messages = ($wnd.msgCounter = 0 , $wnd.gwtHtmlMsg = {} , $wnd.msgAlertCounter = 0 , $wnd.gwtAlertHtmlMsg = {} , new gadgets.MiniMessage('portfoliogadget'));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $clinit_24();
      $error(impl, '', e);
    }
     else 
      throw $e0;
  }
}

function getClass_47(){
  return Lcom_example_portfoliobotty_client_feature_minimessages_MiniMessagesFeature_2_classLit;
}

function MiniMessagesFeature(){
}

_ = MiniMessagesFeature.prototype = new Object_0;
_.getClass$ = getClass_47;
_.typeId$ = 0;
_.messages = null;
function $com$example$portfoliobotty$client$service$PortfolioServiceImpl_PortfolioServiceImpl_methodInjection(){
  return $PortfolioServiceImpl(new PortfolioServiceImpl);
}

function $com$example$portfoliobotty$client$utils$PortfolioUtilsImpl_PortfolioUtilsImpl_methodInjection(_0, _1, _2){
  return $PortfolioUtilsImpl(new PortfolioUtilsImpl, _0, _1, _2);
}

function $get_Key$type$org$cobogw$gwt$waveapi$gadget$client$WaveFeature$_annotation$$none$$(this$static){
  !this$static.singleton_Key$type$org$cobogw$gwt$waveapi$gadget$client$WaveFeature$_annotation$$none$$ && (this$static.singleton_Key$type$org$cobogw$gwt$waveapi$gadget$client$WaveFeature$_annotation$$none$$ = (new PortfolioBotty$WaveFeatureProvider , $clinit_24() , $info(impl, 'Providing WaveFeature', null) , waveFeature));
  return this$static.singleton_Key$type$org$cobogw$gwt$waveapi$gadget$client$WaveFeature$_annotation$$none$$;
}

function getClass_48(){
  return Lcom_example_portfoliobotty_client_inject_PortfolioGinjectorImpl_2_classLit;
}

function PortfolioGinjectorImpl(){
}

_ = PortfolioGinjectorImpl.prototype = new Object_0;
_.getClass$ = getClass_48;
_.typeId$ = 0;
_.singleton_Key$type$com$example$portfoliobotty$client$feature$minimessages$MiniMessagesFeature$_annotation$$none$$ = null;
_.singleton_Key$type$com$example$portfoliobotty$client$request$RequestService$_annotation$$none$$ = null;
_.singleton_Key$type$com$example$portfoliobotty$client$utils$PortfolioUtils$_annotation$$none$$ = null;
_.singleton_Key$type$com$google$gwt$gadgets$client$AnalyticsFeature$_annotation$$none$$ = null;
_.singleton_Key$type$com$google$gwt$gadgets$client$DynamicHeightFeature$_annotation$$none$$ = null;
_.singleton_Key$type$org$cobogw$gwt$waveapi$gadget$client$WaveFeature$_annotation$$none$$ = null;
function $clinit_61(){
  $clinit_61 = nullMethod;
  callbacksMap = $HashMap(new HashMap);
}

function $WaveRequestServiceImpl(this$static, wave){
  $clinit_61();
  this$static.stateUpdateEventHandler = new WaveRequestServiceImpl$1;
  $addStateUpdateEventHandler(wave, this$static.stateUpdateEventHandler);
  return this$static;
}

function $makeRequest(url, callback, params){
  var $e0, $e1, callbackRequestKey, callbackResponseKey, delta, e, paramsStr, timestamp, user;
  $clinit_24();
  $debug(impl, 'entering makeRequest: ' + params, null);
  try {
    if (url == null || !callback) {
      $warn(impl, 'URL OR CALLBACK OR BOTH IS NULL: ' + url + ' : ' + Lcom_example_portfoliobotty_client_ui_PortfolioPanel$4_2_classLit.typeName + '@' + toPowerOfTwoString(callback.$H || (callback.$H = ++sNextHashId), 4), null);
      throw $IllegalArgumentException_0(new IllegalArgumentException, 'URL OR CALLBACK OR BOTH IS NULL: ' + url + ' : ' + Lcom_example_portfoliobotty_client_ui_PortfolioPanel$4_2_classLit.typeName + '@' + toPowerOfTwoString(callback.$H || (callback.$H = ++sNextHashId), 4));
    }
    user = null;
    try {
      user = $wnd.wave.getViewer().getId();
    }
     catch ($e1) {
      $e1 = caught_0($e1);
      if (instanceOf($e1, 7)) {
        $warn(impl, 'no viewer!', null);
        return;
      }
       else 
        throw $e1;
    }
    timestamp = fromDouble($getTime0($Date(new Date_0)));
    callbackResponseKey = 'response#' + user + '#' + toString_13(timestamp);
    callbackRequestKey = 'request#' + user + '#' + toString_13(timestamp);
    $put_1(callbacksMap, callbackResponseKey, callback);
    delta = $HashMap(new HashMap);
    paramsStr = $toString_3($JSONObject_0(new JSONObject, params));
    callbackRequestKey == null?$putNullSlot(delta, paramsStr):callbackRequestKey != null?$putStringValue(delta, callbackRequestKey, paramsStr):$putHashValue(delta, callbackRequestKey, paramsStr, ~~getHashCode_0(callbackRequestKey));
    $debug(impl, 'Sent request: ' + callbackRequestKey + ' : ' + paramsStr, null);
    $submitDelta($wnd.wave.getState(), delta);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warn(impl, 'JavaScriptException in makeRequest', e);
      $onFailure(callback, e);
    }
     else if (instanceOf($e0, 7)) {
      e = $e0;
      $warn(impl, 'Exception in makeRequest', e);
      $onFailure(callback, e);
    }
     else 
      throw $e0;
  }
  $debug(impl, 'exiting makeRequest', null);
}

function getClass_49(){
  return Lcom_example_portfoliobotty_client_request_WaveRequestServiceImpl_2_classLit;
}

function WaveRequestServiceImpl(){
}

_ = WaveRequestServiceImpl.prototype = new Object_0;
_.getClass$ = getClass_49;
_.typeId$ = 0;
var callbacksMap;
function $onUpdate(){
  var $e0, $e1, $e2, callback, e, i, jsonVal, keys, responseStr;
  keys = $wnd.wave.getState().getKeys();
  callback = null;
  try {
    for (i = 0; i < keys.length; ++i) {
      if (keys[i].toLowerCase().indexOf('response') == 0 && $containsKey_0(($clinit_61() , callbacksMap), keys[i].toLowerCase())) {
        try {
          callback = dynamicCast($remove_6(($clinit_61() , callbacksMap), keys[i]), 9);
          responseStr = $wnd.wave.getState().get(keys[i]);
          $clinit_24();
          $debug(impl, 'Response : ' + keys[i] + ' : ' + responseStr, null);
          try {
            jsonVal = parse(responseStr);
            if ('error' in jsonVal.isObject().jsObject) {
              throw $Exception(new Exception, $get_2(jsonVal.isObject(), 'error').isString().value_0);
            }
             else 
              'result' in jsonVal.isObject().jsObject?$onSuccess(callback, $get_2(jsonVal.isObject(), 'result')):'success' in jsonVal.isObject().jsObject && $onSuccess(callback, $get_2(jsonVal.isObject(), 'success'));
          }
           catch ($e2) {
            $e2 = caught_0($e2);
            if (instanceOf($e2, 7)) {
              e = $e2;
              $onFailure(callback, e);
              return;
            }
             else 
              throw $e2;
          }
          $wnd.wave.getState().submitValue(keys[i], null);
        }
         catch ($e1) {
          $e1 = caught_0($e1);
          if (instanceOf($e1, 7)) {
            e = $e1;
            !!callback && $onFailure(callback, e);
            $clinit_24();
            $error(impl, '', e);
          }
           else 
            throw $e1;
        }
        break;
      }
       else if (keys[i].indexOf('response') == 0) {
        $clinit_24();
        $wnd.wave.getState().submitValue(keys[i], null);
        break;
      }
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $clinit_24();
      $error(impl, '', e);
    }
     else 
      throw $e0;
  }
}

function getClass_50(){
  return Lcom_example_portfoliobotty_client_request_WaveRequestServiceImpl$1_2_classLit;
}

function WaveRequestServiceImpl$1(){
}

_ = WaveRequestServiceImpl$1.prototype = new Object_0;
_.getClass$ = getClass_50;
_.typeId$ = 33;
function $globalCSS(){
  !globalCSS && (globalCSS = new com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1);
  return globalCSS;
}

function getClass_51(){
  return Lcom_example_portfoliobotty_client_resources_com_1example_1portfoliobotty_1client_1resources_1GlobalResources_1default_1InlineClientBundleGenerator_2_classLit;
}

function com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator(){
}

_ = com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator.prototype = new Object_0;
_.getClass$ = getClass_51;
_.typeId$ = 0;
var globalCSS = null;
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_113();
    $push_0(toInject, ($clinit_182() , '@CHARSET "UTF-8";.Gxh4pkcDB{color:#b8b8b8;font-style:italic;}.Gxh4pkcP{font-style:italic;}.Gxh4pkcEB{background-color:#f8f8f8;border:solid;border-color:99CCFF;}.Gxh4pkcO{background:#c9e2fc;font-family:fantasy;font-size:13;color:DarkSkyBlue;}.Gxh4pkcFB{background:#a3d1ff;}.Gxh4pkcN{background:#c9e2fc;vertical-align:top;}.Gxh4pkcL{background:#6cf;}.Gxh4pkcM{border-bottom:solid 0 #aaa;margin-bottom:0;}.Gxh4pkcHB{color:#d80000;}.Gxh4pkcAB{color:black;}.Gxh4pkcBB{color:#060;}.Gxh4pkcCB{background-color:#c9e2fc;height:40px;}'));
    schedule();
    return true;
  }
  return false;
}

function getClass_52(){
  return Lcom_example_portfoliobotty_client_resources_com_1example_1portfoliobotty_1client_1resources_1GlobalResources_1default_1InlineClientBundleGenerator$1_2_classLit;
}

function com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1(){
}

_ = com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1.prototype = new Object_0;
_.getClass$ = getClass_52;
_.typeId$ = 0;
_.injected = false;
function $PortfolioServiceImpl(this$static){
  this$static.url = '/command/jsonrpc?cachebust=' + toString_13(fromDouble($getTime0($Date(new Date_0))));
  return this$static;
}

function $retrPortfolios(this$static, user, callback){
  var params, paramsJson, postDataJson;
  $clinit_24();
  $debug(impl, 'enterin retrPortfolios', null);
  paramsJson = $JSONObject(new JSONObject);
  postDataJson = $JSONObject(new JSONObject);
  $put(paramsJson, 'user', $JSONString(new JSONString, user));
  $put(postDataJson, 'params', paramsJson);
  $put(postDataJson, 'method', $JSONString(new JSONString, 'GET_PORTFOLIO_DATA'));
  params = postDataJson.jsObject;
  $makeRequest(this$static.url, callback, params);
  $debug(impl, 'retrPortfolios: made request', null);
}

function getClass_53(){
  return Lcom_example_portfoliobotty_client_service_PortfolioServiceImpl_2_classLit;
}

function PortfolioServiceImpl(){
}

_ = PortfolioServiceImpl.prototype = new Object_0;
_.getClass$ = getClass_53;
_.typeId$ = 0;
_.url = null;
function $initWidget(this$static, widget){
  if (this$static.widget) {
    throw $IllegalStateException_0(new IllegalStateException, 'Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  $setElement(this$static, widget.element);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function getClass_54(){
  return Lcom_google_gwt_user_client_ui_Composite_2_classLit;
}

function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}

function onAttach_0(){
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  this.element.__listener = this;
}

function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}

function onDetach_0(){
  $onDetach(this.widget);
}

function Composite(){
}

_ = Composite.prototype = new Widget;
_.getClass$ = getClass_54;
_.isAttached = isAttached_0;
_.onAttach = onAttach_0;
_.onBrowserEvent = onBrowserEvent_0;
_.onDetach = onDetach_0;
_.typeId$ = 34;
_.widget = null;
function $PortfolioPanel(this$static, service, utils){
  var timer, attachRecord0, choosePortfolioCptn, domId0, domId0Element, f_CaptionPanel6, f_DecoratorPanel3, f_HTMLPanel1, f_HorizontalPanel5, f_VerticalPanel2, f_VerticalPanel4, f_VerticalPanel7, f_VerticalPanel8, portfolioDataPanel, portfoliosList, positionsDataCptn, positionsTableDataPanel, positionsTableHeaderPanel, topCaption, td, td_1;
  this$static.jsonResultMap = $HashMap(new HashMap);
  this$static.utils = utils;
  $initWidget(this$static, (domId0 = $createUniqueId($doc) , portfolioDataPanel = $VerticalPanel(new VerticalPanel) , f_CaptionPanel6 = $CaptionPanel(new CaptionPanel) , portfoliosList = $ListBox(new ListBox) , choosePortfolioCptn = $CaptionPanel(new CaptionPanel) , f_HorizontalPanel5 = $HorizontalPanel(new HorizontalPanel) , positionsTableHeaderPanel = $VerticalPanel(new VerticalPanel) , positionsTableDataPanel = $VerticalPanel(new VerticalPanel) , f_VerticalPanel8 = $VerticalPanel(new VerticalPanel) , positionsDataCptn = $CaptionPanel(new CaptionPanel) , f_VerticalPanel7 = $VerticalPanel(new VerticalPanel) , f_VerticalPanel4 = $VerticalPanel(new VerticalPanel) , topCaption = $CaptionPanel(new CaptionPanel) , f_DecoratorPanel3 = $DecoratorPanel(new DecoratorPanel) , f_VerticalPanel2 = $VerticalPanel(new VerticalPanel) , f_HTMLPanel1 = $HTMLPanel(new HTMLPanel, "<span id='" + domId0 + "'><\/span>") , $add_1(dynamicCast(f_CaptionPanel6.widget, 11), portfolioDataPanel) , $setCaption_0(f_CaptionPanel6.element, f_CaptionPanel6.legend, 'Portfolio level data', false) , td = $createAlignedTd(f_HorizontalPanel5) , f_HorizontalPanel5.tableRow.appendChild(td) , $removeFromParent(f_CaptionPanel6) , $add_6(f_HorizontalPanel5.children, f_CaptionPanel6) , td.appendChild(f_CaptionPanel6.element) , $setParent(f_CaptionPanel6, f_HorizontalPanel5) , $setCellHorizontalAlignment(f_HorizontalPanel5, f_CaptionPanel6, ($clinit_272() , ALIGN_CENTER)) , $add_1(dynamicCast(choosePortfolioCptn.widget, 11), portfoliosList) , $setCaption_0(choosePortfolioCptn.element, choosePortfolioCptn.legend, 'Please choose Portfolio', false) , td_1 = $createAlignedTd(f_HorizontalPanel5) , f_HorizontalPanel5.tableRow.appendChild(td_1) , $removeFromParent(choosePortfolioCptn) , $add_6(f_HorizontalPanel5.children, choosePortfolioCptn) , td_1.appendChild(choosePortfolioCptn.element) , $setParent(choosePortfolioCptn, f_HorizontalPanel5) , $setCellHorizontalAlignment(f_HorizontalPanel5, choosePortfolioCptn, ALIGN_CENTER) , $add_5(f_VerticalPanel4, f_HorizontalPanel5) , $add_5(f_VerticalPanel8, positionsTableHeaderPanel) , $add_5(f_VerticalPanel8, positionsTableDataPanel) , $add_1(dynamicCast(positionsDataCptn.widget, 11), f_VerticalPanel8) , $setCaption_0(positionsDataCptn.element, positionsDataCptn.legend, 'Positions', false) , $add_5(f_VerticalPanel7, positionsDataCptn) , $add_5(f_VerticalPanel4, f_VerticalPanel7) , $add_1(dynamicCast(topCaption.widget, 11), f_VerticalPanel4) , $setCaption_0(topCaption.element, topCaption.legend, 'Google Finance Portfolios', false) , $add_1(f_DecoratorPanel3, topCaption) , $add_5(f_VerticalPanel2, f_DecoratorPanel3) , attachRecord0 = attachToDom(f_HTMLPanel1.element) , domId0Element = $doc.getElementById(domId0) , attachRecord0.origParent?attachRecord0.origParent.insertBefore(attachRecord0.element, attachRecord0.origSibling):orphan(attachRecord0.element) , $removeFromParent(f_VerticalPanel2) , $add_6(f_HTMLPanel1.children, f_VerticalPanel2) , domId0Element.parentNode.replaceChild(f_VerticalPanel2.element, domId0Element) , $setParent(f_VerticalPanel2, f_HTMLPanel1) , this$static.portfolioDataPanel = portfolioDataPanel , this$static.portfoliosList = portfoliosList , this$static.positionsTableDataPanel = positionsTableDataPanel , this$static.positionsTableHeaderPanel = positionsTableHeaderPanel , f_HTMLPanel1));
  $clinit_24();
  $info(impl, 'PortfolioPanel utils: ' + utils, null);
  $addDomHandler(this$static.portfoliosList, $PortfolioPanel$1(new PortfolioPanel$1, this$static), ($clinit_118() , $clinit_118() , TYPE));
  addCommand($PortfolioPanel$2(new PortfolioPanel$2, this$static, service, utils));
  timer = $PortfolioPanel$3(new PortfolioPanel$3, this$static, utils, service);
  $schedule(timer, 5000);
  $schedule(timer, 15000);
  return this$static;
}

function $createPortfolioHeader(){
  var costBasis, currencyCode, gainPercentage, header, i, marketValue, widget, widget$array, widget$index, widget$max, widgets;
  header = $FlexTable(new FlexTable);
  costBasis = $HTML_0(new HTML, 'Cost basis');
  gainPercentage = $HTML_0(new HTML, '% gain');
  marketValue = $HTML_0(new HTML, 'Market value');
  currencyCode = $HTML_0(new HTML, 'Currency code');
  widgets = initValues(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 140, 52, [costBasis, gainPercentage, marketValue, currencyCode]);
  i = 0;
  for (widget$array = widgets , widget$index = 0 , widget$max = widget$array.length; widget$index < widget$max; ++widget$index) {
    widget = widget$array[widget$index];
    widget.setWidth('60px');
    $setWidget_0(header, 0, i, widget);
    ++i;
  }
  $setStylePrimaryName_0(header.rowFormatter, 0, (!globalCSS && (globalCSS = new com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1) , 'Gxh4pkcN'));
  return header;
}

function $createPositionsHeader(){
  var costBasis, daysGain, exchange, gain, gainPercentage, header, i, return1w, shares, symbol, widget, widget$array, widget$index, widget$max, widgets;
  header = $FlexTable(new FlexTable);
  exchange = $HTML_0(new HTML, 'Exchange');
  symbol = $HTML_0(new HTML, 'Symbol');
  shares = $HTML_0(new HTML, 'Shares');
  daysGain = $HTML_0(new HTML, "Day's gain");
  costBasis = $HTML_0(new HTML, 'Cost basis');
  gainPercentage = $HTML_0(new HTML, '% gain');
  gain = $HTML_0(new HTML, 'Gain');
  return1w = $HTML_0(new HTML, '1w return');
  $HTML_0(new HTML, '4w return');
  $HTML_0(new HTML, '1y return');
  $HTML_0(new HTML, 'Overall return');
  widgets = initValues(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 140, 52, [exchange, symbol, shares, daysGain, costBasis, gainPercentage, gain, return1w]);
  i = 0;
  for (widget$array = widgets , widget$index = 0 , widget$max = widget$array.length; widget$index < widget$max; ++widget$index) {
    widget = widget$array[widget$index];
    widget.setWidth('60px');
    $setWidget_0(header, 0, i, widget);
    ++i;
  }
  $setStylePrimaryName_0(header.rowFormatter, 0, (!globalCSS && (globalCSS = new com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1) , 'Gxh4pkcN'));
  return header;
}

function $loadFinanceData(this$static, service, utils, user){
  $createStaticMessage_0(utils.messages, 'Updating..., host: ' + user);
  $retrPortfolios(service, user, $PortfolioPanel$4(new PortfolioPanel$4, this$static, utils));
}

function $loadPortfoliosPanel(this$static){
  var $e0, e, portfolioDataFlexTable, portfolios, positionsDataFlexTable, positionsHeaderFlexTable;
  try {
    $clear(this$static.portfolioDataPanel);
    $clear(this$static.positionsTableHeaderPanel);
    $clear(this$static.positionsTableDataPanel);
    portfolios = dynamicCast($get_4(this$static.jsonResultMap, 'result'), 10);
    portfolioDataFlexTable = $createPortfolioHeader();
    $populatePortfolioData(this$static, portfolioDataFlexTable, portfolios);
    $add_5(this$static.portfolioDataPanel, portfolioDataFlexTable);
    positionsHeaderFlexTable = $createPositionsHeader();
    $add_5(this$static.positionsTableHeaderPanel, positionsHeaderFlexTable);
    positionsDataFlexTable = $FlexTable(new FlexTable);
    $populatePositions(this$static, positionsDataFlexTable, portfolios);
    $add_5(this$static.positionsTableDataPanel, positionsDataFlexTable);
    !!this$static.utils.height_0 && ($wnd._IG_AdjustIFrameHeight() , undefined);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 5)) {
      e = $e0;
      $clinit_24();
      $warn(impl, 'rethrowin exception in loadPortfoliosPanel', null);
      throw e;
    }
     else 
      throw $e0;
  }
}

function $populatePortfolioData(this$static, flexTable, portfolios){
  var $e0, costBasis, currencyCode, e, fmt, gainPercentage, i, id, j, marketValue, portfolioJson, selectedId, size, widget, widget$array, widget$index, widget$max, widgets;
  fmt = ($clinit_186() , $NumberFormat_0(new NumberFormat, '###.##', ['USD', 'US$', 2, 'US$'], true));
  size = portfolios.jsArray.length;
  try {
    for (i = 0; i < size; ++i) {
      portfolioJson = $get_1(portfolios, i).isObject();
      id = $get_2(portfolioJson, 'portfolioId').isString().value_0;
      selectedId = $getValue_0(this$static.portfoliosList, this$static.portfoliosList.element.selectedIndex);
      if ($equals_1(selectedId, id)) {
        costBasis = $HTML_0(new HTML, '' + $format_2(fmt, $get_2(portfolioJson, 'costBasis').isNumber().value_0));
        gainPercentage = $HTML_0(new HTML, '' + $format_2(fmt, $get_2(portfolioJson, 'gainPercentage').isNumber().value_0));
        marketValue = $HTML_0(new HTML, '' + $format_2(fmt, $get_2(portfolioJson, 'marketValue').isNumber().value_0));
        currencyCode = $HTML_0(new HTML, $get_2(portfolioJson, 'currencyCode').isString().value_0);
        widgets = initValues(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 140, 52, [costBasis, gainPercentage, marketValue, currencyCode]);
        j = 0;
        for (widget$array = widgets , widget$index = 0 , widget$max = widget$array.length; widget$index < widget$max; ++widget$index) {
          widget = widget$array[widget$index];
          widget.setWidth('60px');
          $setWidget_0(flexTable, 1, j, widget);
          ++j;
        }
        $setStylePrimaryName_0(flexTable.rowFormatter, 1, (!globalCSS && (globalCSS = new com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1) , 'Gxh4pkcFB'));
        break;
      }
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $clinit_24();
      $error(impl, '', e);
    }
     else 
      throw $e0;
  }
}

function $populatePositions(this$static, flexTable, portfolios){
  var $e0, costBasis, daysGain, e, exchange, fmt, gain, gainPercentage, i, id, j, k, portfolioJson, positionJson, positions, positionsSize, return1w, returnsJson, selectedId, shares, size, symbol, widget, widget$array, widget$index, widget$max, widgets;
  fmt = ($clinit_186() , $NumberFormat_0(new NumberFormat, '###.##', ['USD', 'US$', 2, 'US$'], true));
  size = portfolios.jsArray.length;
  try {
    for (i = 0; i < size; ++i) {
      portfolioJson = $get_1(portfolios, i).isObject();
      id = $get_2(portfolioJson, 'portfolioId').isString().value_0;
      selectedId = $getValue_0(this$static.portfoliosList, this$static.portfoliosList.element.selectedIndex);
      if ($equals_1(selectedId, id)) {
        positions = $get_2(portfolioJson, 'positions').isArray();
        positionsSize = positions.jsArray.length;
        for (j = 0; j < positionsSize; ++j) {
          positionJson = $get_1(positions, j).isObject();
          exchange = $HTML_0(new HTML, $get_2(positionJson, 'exchange').isString().value_0);
          symbol = $HTML_0(new HTML, $get_2(positionJson, 'symbol').isString().value_0);
          shares = $HTML_0(new HTML, '' + ($get_2(positionJson, 'shares').isNumber()?$format_2(fmt, $get_2(positionJson, 'shares').isNumber().value_0):valueOf(0)));
          daysGain = $HTML_0(new HTML, '' + ($get_2(positionJson, 'daysGain').isNumber()?$format_2(fmt, $get_2(positionJson, 'daysGain').isNumber().value_0):valueOf(0)));
          costBasis = $HTML_0(new HTML, '' + ($get_2(positionJson, 'costBasis').isNumber()?$format_2(fmt, $get_2(positionJson, 'costBasis').isNumber().value_0):valueOf(0)));
          gainPercentage = $HTML_0(new HTML, '' + ($get_2(positionJson, 'gainPercentage').isNumber()?$format_2(fmt, $get_2(positionJson, 'gainPercentage').isNumber().value_0):valueOf(0)));
          gain = $HTML_0(new HTML, '' + ($get_2(positionJson, 'gain').isNumber()?$format_2(fmt, $get_2(positionJson, 'gain').isNumber().value_0):valueOf(0)));
          returnsJson = $get_2(positionJson, 'returns').isObject();
          return1w = $HTML_0(new HTML, '' + ($get_2(returnsJson, 'return1w').isNumber()?$format_2(fmt, $get_2(returnsJson, 'return1w').isNumber().value_0):valueOf(0)));
          $HTML_0(new HTML, '' + ($get_2(returnsJson, 'return4w').isNumber()?$format_2(fmt, $get_2(returnsJson, 'return4w').isNumber().value_0):valueOf(0)));
          $HTML_0(new HTML, '' + ($get_2(returnsJson, 'return1y').isNumber()?$format_2(fmt, $get_2(returnsJson, 'return1y').isNumber().value_0):valueOf(0)));
          widgets = initValues(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 140, 52, [exchange, symbol, shares, daysGain, costBasis, gainPercentage, gain, return1w]);
          k = 0;
          for (widget$array = widgets , widget$index = 0 , widget$max = widget$array.length; widget$index < widget$max; ++widget$index) {
            widget = widget$array[widget$index];
            widget.setWidth('60px');
            $setWidget_0(flexTable, j, k, widget);
            ++k;
          }
          j % 2 == 0?$setStylePrimaryName_0(flexTable.rowFormatter, j, (!globalCSS && (globalCSS = new com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1) , 'Gxh4pkcFB')):$setStylePrimaryName_0(flexTable.rowFormatter, j, (!globalCSS && (globalCSS = new com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1) , 'Gxh4pkcO'));
        }
      }
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $clinit_24();
      $error(impl, '', e);
    }
     else 
      throw $e0;
  }
}

function $populateProjectsList(this$static, portfolios){
  var $e0, e, i, id, portfolioJson, portfolioName, size;
  size = portfolios.jsArray.length;
  try {
    for (i = 0; i < size; ++i) {
      portfolioJson = $get_1(portfolios, i).isObject();
      portfolioName = $get_2(portfolioJson, 'title').isString().value_0;
      id = $get_2(portfolioJson, 'portfolioId').isString().value_0;
      $insertItem(this$static.portfoliosList, portfolioName, id, -1);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 7)) {
      e = $e0;
      $clinit_24();
      $error(impl, '', e);
    }
     else 
      throw $e0;
  }
}

function getClass_55(){
  return Lcom_example_portfoliobotty_client_ui_PortfolioPanel_2_classLit;
}

function PortfolioPanel(){
}

_ = PortfolioPanel.prototype = new Composite;
_.getClass$ = getClass_55;
_.typeId$ = 35;
_.portfolioDataPanel = null;
_.portfoliosList = null;
_.positionsTableDataPanel = null;
_.positionsTableHeaderPanel = null;
_.utils = null;
function $PortfolioPanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $onChange(this$static){
  var value, delta;
  $loadPortfoliosPanel(this$static.this$0);
  value = $getValue_0(this$static.this$0.portfoliosList, this$static.this$0.portfoliosList.element.selectedIndex);
  delta = $HashMap(new HashMap);
  $putStringValue(delta, 'portfolioId', value);
  $submitDelta($wnd.wave.getPrivateState(), delta);
}

function getClass_56(){
  return Lcom_example_portfoliobotty_client_ui_PortfolioPanel$1_2_classLit;
}

function PortfolioPanel$1(){
}

_ = PortfolioPanel$1.prototype = new Object_0;
_.getClass$ = getClass_56;
_.typeId$ = 36;
_.this$0 = null;
function $PortfolioPanel$2(this$static, this$0, val$service, val$utils){
  this$static.this$0 = this$0;
  this$static.val$service = val$service;
  this$static.val$utils = val$utils;
  return this$static;
}

function execute_0(){
  $loadFinanceData(this.this$0, this.val$service, this.val$utils, $retrHostId(this.val$utils));
}

function getClass_57(){
  return Lcom_example_portfoliobotty_client_ui_PortfolioPanel$2_2_classLit;
}

function PortfolioPanel$2(){
}

_ = PortfolioPanel$2.prototype = new Object_0;
_.execute = execute_0;
_.getClass$ = getClass_57;
_.typeId$ = 37;
_.this$0 = null;
_.val$service = null;
_.val$utils = null;
function $clinit_73(){
  $clinit_73 = nullMethod;
  $clinit_3();
}

function $PortfolioPanel$3(this$static, this$0, val$utils, val$service){
  $clinit_73();
  this$static.this$0 = this$0;
  this$static.val$utils = val$utils;
  this$static.val$service = val$service;
  return this$static;
}

function getClass_58(){
  return Lcom_example_portfoliobotty_client_ui_PortfolioPanel$3_2_classLit;
}

function run_0(){
  $dismissAllStaticMessages(this.val$utils.messages.messages);
  $loadFinanceData(this.this$0, this.val$service, this.val$utils, $retrHostId(this.val$utils));
}

function PortfolioPanel$3(){
}

_ = PortfolioPanel$3.prototype = new Timer;
_.getClass$ = getClass_58;
_.run = run_0;
_.typeId$ = 38;
_.this$0 = null;
_.val$service = null;
_.val$utils = null;
function $PortfolioPanel$4(this$static, this$0, val$utils){
  this$static.this$0 = this$0;
  this$static.val$utils = val$utils;
  return this$static;
}

function $onFailure(this$static, caught){
  var message;
  $dismissStaticMessage_0(this$static.val$utils.messages);
  message = caught.getMessage().substr(0, min_0(100, caught.getMessage().length) - 0);
  $alert_0(this$static.val$utils.messages, message);
}

function $onSuccess(this$static, result){
  var currValue, i, portfolios, selectedPortfolioId, size;
  $clinit_24();
  $debug(impl, 'entering onSuccess', null);
  $dismissStaticMessage_0(this$static.val$utils.messages);
  $put_1(this$static.this$0.jsonResultMap, 'result', result);
  portfolios = dynamicCast($get_4(this$static.this$0.jsonResultMap, 'result'), 10);
  selectedPortfolioId = $wnd.wave.getPrivateState().get('portfolioId');
  $populateProjectsList(this$static.this$0, portfolios);
  if (selectedPortfolioId != null) {
    size = ($clinit_101() , this$static.this$0.portfoliosList.element).options.length;
    for (i = 0; i < size; ++i) {
      currValue = $getValue_0(this$static.this$0.portfoliosList, i);
      if ($equals_1(currValue, selectedPortfolioId)) {
        this$static.this$0.portfoliosList.element.selectedIndex = i;
        break;
      }
    }
  }
  $loadPortfoliosPanel(this$static.this$0);
}

function getClass_59(){
  return Lcom_example_portfoliobotty_client_ui_PortfolioPanel$4_2_classLit;
}

function PortfolioPanel$4(){
}

_ = PortfolioPanel$4.prototype = new Object_0;
_.getClass$ = getClass_59;
_.typeId$ = 39;
_.this$0 = null;
_.val$utils = null;
function $PortfolioUtilsImpl(this$static, wave, height, messages){
  this$static.wave_0 = wave;
  this$static.height_0 = height;
  this$static.messages = messages;
  return this$static;
}

function $retrHostId(this$static){
  if (!!this$static.wave_0 && !!$wnd.wave.getViewer()) {
    return $wnd.wave.getHost().getId();
  }
   else {
    return '';
  }
}

function getClass_60(){
  return Lcom_example_portfoliobotty_client_utils_PortfolioUtilsImpl_2_classLit;
}

function PortfolioUtilsImpl(){
}

_ = PortfolioUtilsImpl.prototype = new Object_0;
_.getClass$ = getClass_60;
_.typeId$ = 0;
_.height_0 = null;
_.messages = null;
_.wave_0 = null;
var sUncaughtExceptionHandler = null;
function $Exception(this$static, message){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = message;
  return this$static;
}

function getClass_61(){
  return Ljava_lang_Exception_2_classLit;
}

function Exception(){
}

_ = Exception.prototype = new Throwable;
_.getClass$ = getClass_61;
_.typeId$ = 40;
function $RuntimeException(this$static, message){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = message;
  return this$static;
}

function getClass_62(){
  return Ljava_lang_RuntimeException_2_classLit;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception;
_.getClass$ = getClass_62;
_.typeId$ = 41;
function $JavaScriptException(this$static, e){
  $fillInStackTrace_1(this$static);
  this$static.e = e;
  $createStackTrace(this$static);
  return this$static;
}

function getClass_63(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}

function getDescription(e){
  if (e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2) {
    return getDescription0(dynamicCastJso(e));
  }
   else {
    return e + '';
  }
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getMessage_1(){
  this.message_0 == null && (this.name_0 = getName(this.e) , this.description = getDescription(this.e) , this.message_0 = '(' + this.name_0 + '): ' + this.description + getProperties(this.e) , undefined);
  return this.message_0;
}

function getName(e){
  if (e == null) {
    return 'null';
  }
   else if (e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2) {
    return getName0(dynamicCastJso(e));
  }
   else if (e != null && canCast(e.typeId$, 1)) {
    return 'String';
  }
   else {
    return (e.typeMarker$ == nullMethod || e.typeId$ == 2?e.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  }
}

function getName0(e){
  return e == null?null:e.name;
}

function getProperties(e){
  return e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2?getProperties0(dynamicCastJso(e)):'';
}

function getProperties0(e){
  var result = '';
  try {
    for (prop in e) {
      if (prop != 'name' && prop != 'message' && prop != 'toString') {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function JavaScriptException(){
}

_ = JavaScriptException.prototype = new RuntimeException;
_.getClass$ = getClass_63;
_.getMessage = getMessage_1;
_.typeId$ = 42;
_.description = null;
_.e = null;
_.message_0 = null;
_.name_0 = null;
function $push(this$static, value){
  this$static[this$static.length] = value;
}

function $push_0(this$static, value){
  this$static[this$static.length] = value;
}

function $clinit_87(){
  var out;
  $clinit_87 = nullMethod;
  escapeTable = (out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'] , out[34] = '\\"' , out[92] = '\\\\' , out[8232] = '\\u2028' , out[8233] = '\\u2029' , out);
}

function escapeValue(toEscape){
  $clinit_87();
  var s = toEscape.replace(/[\x00-\x1F\u2028\u2029"\\]/g, function(x){
    var lookedUp;
    return lookedUp = escapeTable[x.charCodeAt(0)] , lookedUp == null?x:lookedUp;
  }
  );
  return '"' + s + '"';
}

var escapeTable;
function getClass_64(){
  return Lcom_google_gwt_core_client_Scheduler_2_classLit;
}

function Scheduler(){
}

_ = Scheduler.prototype = new Object_0;
_.getClass$ = getClass_64;
_.typeId$ = 0;
function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
  }
  ;
}

function entry0(jsFunction, thisObj, arguments_0){
  var $e0, initialEntry, t;
  initialEntry = entryDepth++ == 0;
  try {
    if (sUncaughtExceptionHandler) {
      try {
        return jsFunction.apply(thisObj, arguments_0);
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, 3)) {
          t = $e0;
          $clinit_24();
          $fatal(impl, 'Uncaught Exception:', t);
          return undefined;
        }
         else 
          throw $e0;
      }
    }
     else {
      return jsFunction.apply(thisObj, arguments_0);
    }
  }
   finally {
    initialEntry && $flushFinallyCommands(($clinit_92() , INSTANCE));
    --entryDepth;
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

var entryDepth = 0, sNextHashId = 0;
function $clinit_92(){
  $clinit_92 = nullMethod;
  INSTANCE = $SchedulerImpl(new SchedulerImpl);
}

function $SchedulerImpl(this$static){
  $clinit_92();
  this$static.flusher = $SchedulerImpl$1(new SchedulerImpl$1, this$static);
  $SchedulerImpl$2(new SchedulerImpl$2, this$static);
  this$static.deferredCommands = [];
  this$static.incrementalCommands = [];
  this$static.finallyCommands = [];
  return this$static;
}

function $flushFinallyCommands(this$static){
  var oldFinally;
  oldFinally = this$static.finallyCommands;
  this$static.finallyCommands = [];
  runScheduledTasks(oldFinally, this$static.finallyCommands);
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  oldDeferred = this$static.deferredCommands;
  this$static.deferredCommands = [];
  runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  this$static.incrementalCommands = runRepeatingTasks(this$static.incrementalCommands);
}

function $isWorkQueued(this$static){
  return this$static.deferredCommands.length > 0 || this$static.incrementalCommands.length > 0;
}

function execute_1(cmd){
  return cmd.execute_0();
}

function getClass_65(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit;
}

function runRepeatingTasks(tasks){
  var canceledSomeTasks, i, length_0, newTasks, start, t;
  canceledSomeTasks = false;
  length_0 = tasks.length;
  start = (new Date).getTime();
  while ((new Date).getTime() - start < 100) {
    for (i = 0; i < length_0; ++i) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; ++i) {
      if (!tasks[i]) {
        continue;
      }
      newTasks[newTasks.length] = tasks[i];
    }
    return newTasks;
  }
   else {
    return tasks;
  }
}

function runScheduledTasks(tasks, rescheduled){
  var $e0, e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled[rescheduled.length] = t , undefined):$execute(t[0]);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        if (sUncaughtExceptionHandler) {
          $clinit_24();
          $fatal(impl, 'Uncaught Exception:', e);
        }
      }
       else 
        throw $e0;
    }
  }
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_92();
  $wnd.setTimeout(function(){
    var ret = $entry(execute_1)(cmd);
    ret && $wnd.setTimeout(arguments.callee, delayMs);
  }
  , delayMs);
}

function SchedulerImpl(){
}

_ = SchedulerImpl.prototype = new Scheduler;
_.getClass$ = getClass_65;
_.typeId$ = 0;
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
function $SchedulerImpl$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_2(){
  this.this$0.flushRunning = true;
  $flushPostEventPumpCommands(this.this$0);
  this.this$0.flushRunning = false;
  return this.this$0.shouldBeRunning = $isWorkQueued(this.this$0);
}

function getClass_66(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit;
}

function SchedulerImpl$1(){
}

_ = SchedulerImpl$1.prototype = new Object_0;
_.execute_0 = execute_2;
_.getClass$ = getClass_66;
_.typeId$ = 0;
_.this$0 = null;
function $SchedulerImpl$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_3(){
  this.this$0.flushRunning && scheduleFixedDelayImpl(this.this$0.flusher, 1);
  return this.this$0.shouldBeRunning;
}

function getClass_67(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit;
}

function SchedulerImpl$2(){
}

_ = SchedulerImpl$2.prototype = new Object_0;
_.execute_0 = execute_3;
_.getClass$ = getClass_67;
_.typeId$ = 0;
_.this$0 = null;
function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = fnToString.indexOf('(');
  if (index != -1) {
    start = fnToString.indexOf('function') == 0?8:0;
    toReturn = $trim(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:'anonymous';
}

function splice(arr, length_0){
  arr.length >= length_0 && arr.splice(0, length_0);
  return arr;
}

function $createStackTrace(e){
  var i, j, stack, stackTrace;
  stack = $inferFrom(instanceOfJso(e.e)?dynamicCastJso(e.e):null);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 149, 58, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = $StackTraceElement(new StackTraceElement, 'Unknown', stack[i], 'Unknown source', 0);
  }
  $setStackTrace(e, stackTrace);
}

function $fillInStackTrace_1(t){
  var i, j, stack, stackTrace;
  stack = splice($inferFrom($makeException()), 2);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 149, 58, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = $StackTraceElement(new StackTraceElement, 'Unknown', stack[i], 'Unknown source', 0);
  }
  $setStackTrace(t, stackTrace);
}

function $makeException(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function $inferFrom(e){
  var i, j, stack;
  stack = e && e.stack?e.stack.split('\n'):[];
  for (i = 0 , j = stack.length; i < j; ++i) {
    stack[i] = extractNameFromToString(stack[i]);
  }
  return stack;
}

function getClass_68(){
  return Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit;
}

function StringBufferImpl(){
}

_ = StringBufferImpl.prototype = new Object_0;
_.getClass$ = getClass_68;
_.typeId$ = 0;
function $replace(this$static, start, end, toInsert){
  this$static.string = this$static.string.substr(0, start - 0) + toInsert + $substring(this$static.string, end);
}

function getClass_69(){
  return Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit;
}

function StringBufferImplAppend(){
}

_ = StringBufferImplAppend.prototype = new StringBufferImpl;
_.getClass$ = getClass_69;
_.typeId$ = 0;
_.string = '';
function $clinit_101(){
  $clinit_101 = nullMethod;
  $clinit_103();
  new DOMImplMozilla;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getScrollLeft(doc){
  return $getScrollLeft_1(($clinit_101() , $equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body));
}

function $getScrollTop(doc){
  return ($equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0;
}

function getClass_70(){
  return Lcom_google_gwt_dom_client_DOMImpl_2_classLit;
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0;
_.getClass$ = getClass_70;
_.typeId$ = 0;
function $clinit_102(){
  $clinit_102 = nullMethod;
  $clinit_101();
}

function getClass_71(){
  return Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit;
}

function DOMImplStandard(){
}

_ = DOMImplStandard.prototype = new DOMImpl;
_.getClass$ = getClass_71;
_.typeId$ = 0;
function $clinit_103(){
  $clinit_103 = nullMethod;
  $clinit_102();
}

function $eventGetRelatedTarget(evt){
  var relatedTarget = evt.relatedTarget;
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function $getAbsoluteLeft(elem){
  return $getAbsoluteLeftImpl($getViewportElement(elem.ownerDocument), elem);
}

function $getAbsoluteLeftImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().left + viewport.scrollLeft | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenX - doc.getBoxObjectFor(doc.documentElement).screenX;
  }
}

function $getAbsoluteTop(elem){
  return $getAbsoluteTopImpl($getViewportElement(elem.ownerDocument), elem);
}

function $getAbsoluteTopImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().top + viewport.scrollTop | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenY - doc.getBoxObjectFor(doc.documentElement).screenY;
  }
}

function $getScrollLeft_1(elem){
  var style;
  if (!$isGecko19() && (style = elem.ownerDocument.defaultView.getComputedStyle(elem, null) , style.direction == 'rtl')) {
    return (elem.scrollLeft || 0) - ((elem.scrollWidth || 0) - elem.clientWidth);
  }
  return elem.scrollLeft || 0;
}

function $isGecko19(){
  var result = /rv:([0-9]+)\.([0-9]+)/.exec(navigator.userAgent.toLowerCase());
  if (result && result.length == 3) {
    var version = parseInt(result[1]) * 1000 + parseInt(result[2]);
    if (version >= 1009) {
      return true;
    }
  }
  return false;
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $toString_2(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function getClass_72(){
  return Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit;
}

function DOMImplMozilla(){
}

_ = DOMImplMozilla.prototype = new DOMImplStandard;
_.getClass$ = getClass_72;
_.typeId$ = 0;
function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight;
}

function $getClientWidth(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth;
}

function $getViewportElement(this$static){
  return $equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body;
}

function $addClassName(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = $trim(className);
  oldClassName = this$static.className;
  idx = oldClassName.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldClassName.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldClassName.length;
      if (last == lastPos || last < lastPos && oldClassName.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldClassName.indexOf(className, idx + 1);
  }
  if (idx == -1) {
    oldClassName.length > 0 && (oldClassName += ' ');
    this$static.className = oldClassName + className;
  }
}

function $removeClassName(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = $trim(className);
  oldStyle = this$static.className;
  idx = oldStyle.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(className, idx + 1);
  }
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx - 0));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName;
  }
}

function $clinit_113(){
  $clinit_113 = nullMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(which){
  $clinit_113();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_115() , IMPL), css);
    toInjectAtStart == which && (toReturn = maybeReturn);
    toInjectAtStart.length = 0;
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_115() , IMPL), css);
    toInject == which && (toReturn = maybeReturn);
    toInject.length = 0;
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheet(($clinit_115() , IMPL), css);
    toInjectAtEnd == which && (toReturn = maybeReturn);
    toInjectAtEnd.length = 0;
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  if (!needsInjection) {
    needsInjection = true;
    $push(($clinit_92() , INSTANCE).finallyCommands, [flusher, false]);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function $execute(){
  ($clinit_113() , needsInjection) && flush(null);
}

function getClass_73(){
  return Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit;
}

function StyleInjector$1(){
}

_ = StyleInjector$1.prototype = new Object_0;
_.getClass$ = getClass_73;
_.typeId$ = 0;
function $clinit_115(){
  $clinit_115 = nullMethod;
  IMPL = ($clinit_115() , new StyleInjector$StyleInjectorImpl);
}

function $createElement_1(contents){
  var style;
  style = ($clinit_101() , $doc).createElement('style');
  style['language'] = 'text/css';
  style.textContent = contents || '';
  return style;
}

function $getHead(this$static){
  var elt;
  if (!this$static.head) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.head = elt;
  }
  return this$static.head;
}

function $injectStyleSheet(this$static, contents){
  var style;
  style = $createElement_1(contents);
  $getHead(this$static).appendChild(style);
  return style;
}

function $injectStyleSheetAtStart(this$static, contents){
  var style;
  style = $createElement_1(contents);
  $getHead(this$static).insertBefore(style, this$static.head.firstChild);
  return style;
}

function getClass_74(){
  return Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit;
}

function StyleInjector$StyleInjectorImpl(){
}

_ = StyleInjector$StyleInjectorImpl.prototype = new Object_0;
_.getClass$ = getClass_74;
_.typeId$ = 0;
_.head = null;
var IMPL;
function getClass_75(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}

function toString_5(){
  return 'An event type';
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0;
_.getClass$ = getClass_75;
_.toString$ = toString_5;
_.typeId$ = 0;
_.dead = false;
_.source = null;
function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast(registered.map[($clinit_101() , nativeEvent).type], 14);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      typeKey.flyweight.nativeEvent = nativeEvent;
      typeKey.flyweight.relativeElem = relativeElem;
      $fireEvent(handlerSource, typeKey.flyweight);
      typeKey.flyweight.nativeEvent = currentNative;
      typeKey.flyweight.relativeElem = currentRelativeElem;
    }
  }
}

function getAssociatedType(){
  return this.getAssociatedType_0();
}

function getClass_76(){
  return Lcom_google_gwt_event_dom_client_DomEvent_2_classLit;
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent;
_.getAssociatedType = getAssociatedType;
_.getClass$ = getClass_76;
_.typeId$ = 0;
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function $clinit_118(){
  $clinit_118 = nullMethod;
  TYPE = $DomEvent$Type(new DomEvent$Type, 'change', ($clinit_118() , new ChangeEvent));
}

function dispatch(p0){
  $onChange(dynamicCast(p0, 12));
}

function getAssociatedType_0(){
  return TYPE;
}

function getClass_77(){
  return Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit;
}

function ChangeEvent(){
}

_ = ChangeEvent.prototype = new DomEvent;
_.dispatch = dispatch;
_.getAssociatedType_0 = getAssociatedType_0;
_.getClass$ = getClass_77;
_.typeId$ = 0;
var TYPE;
function $clinit_120(){
  $clinit_120 = nullMethod;
  TYPE_0 = $DomEvent$Type(new DomEvent$Type, 'click', ($clinit_120() , new ClickEvent));
}

function dispatch_0(p0){
  dynamicCast(p0, 13).onClick(this);
}

function getAssociatedType_1(){
  return TYPE_0;
}

function getClass_78(){
  return Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit;
}

function ClickEvent(){
}

_ = ClickEvent.prototype = new DomEvent;
_.dispatch = dispatch_0;
_.getAssociatedType_0 = getAssociatedType_1;
_.getClass$ = getClass_78;
_.typeId$ = 0;
var TYPE_0;
function $GwtEvent$Type(this$static){
  this$static.index_0 = ++nextHashCode;
  return this$static;
}

function getClass_79(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}

function hashCode_2(){
  return this.index_0;
}

function toString_6(){
  return 'Event type';
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type.prototype = new Object_0;
_.getClass$ = getClass_79;
_.hashCode$ = hashCode_2;
_.toString$ = toString_6;
_.typeId$ = 0;
_.index_0 = 0;
var nextHashCode = 0;
function $DomEvent$Type(this$static, eventName, flyweight){
  this$static.index_0 = ++nextHashCode;
  this$static.flyweight = flyweight;
  !registered && (registered = $PrivateMap(new PrivateMap));
  registered.map[eventName] = this$static;
  this$static.name_0 = eventName;
  return this$static;
}

function getClass_80(){
  return Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit;
}

function DomEvent$Type(){
}

_ = DomEvent$Type.prototype = new GwtEvent$Type;
_.getClass$ = getClass_80;
_.typeId$ = 43;
_.flyweight = null;
_.name_0 = null;
function $getRelativeX(this$static, target){
  var e;
  e = this$static.nativeEvent;
  return (($clinit_101() , e).clientX || 0) - $getAbsoluteLeftImpl($getViewportElement(target.ownerDocument), target) + $getScrollLeft_1(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  var e;
  e = this$static.nativeEvent;
  return (($clinit_101() , e).clientY || 0) - $getAbsoluteTopImpl($getViewportElement(target.ownerDocument), target) + (target.scrollTop || 0) + $getScrollTop(target.ownerDocument);
}

function $getX(this$static){
  var relativeElem;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return $getRelativeX(this$static, relativeElem);
  }
  return ($clinit_101() , this$static.nativeEvent).clientX || 0;
}

function $getY(this$static){
  var relativeElem;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return $getRelativeY(this$static, relativeElem);
  }
  return ($clinit_101() , this$static.nativeEvent).clientY || 0;
}

function getClass_81(){
  return Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit;
}

function MouseEvent(){
}

_ = MouseEvent.prototype = new DomEvent;
_.getClass$ = getClass_81;
_.typeId$ = 0;
function $clinit_145(){
  $clinit_145 = nullMethod;
  TYPE_1 = $DomEvent$Type(new DomEvent$Type, 'mousedown', ($clinit_145() , new MouseDownEvent));
}

function dispatch_1(p0){
  dynamicCast(p0, 15).onMouseDown(this);
}

function getAssociatedType_2(){
  return TYPE_1;
}

function getClass_82(){
  return Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit;
}

function MouseDownEvent(){
}

_ = MouseDownEvent.prototype = new MouseEvent;
_.dispatch = dispatch_1;
_.getAssociatedType_0 = getAssociatedType_2;
_.getClass$ = getClass_82;
_.typeId$ = 0;
var TYPE_1;
function $clinit_147(){
  $clinit_147 = nullMethod;
  TYPE_2 = $DomEvent$Type(new DomEvent$Type, 'mousemove', ($clinit_147() , new MouseMoveEvent));
}

function dispatch_2(p0){
  dynamicCast(p0, 16).onMouseMove(this);
}

function getAssociatedType_3(){
  return TYPE_2;
}

function getClass_83(){
  return Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit;
}

function MouseMoveEvent(){
}

_ = MouseMoveEvent.prototype = new MouseEvent;
_.dispatch = dispatch_2;
_.getAssociatedType_0 = getAssociatedType_3;
_.getClass$ = getClass_83;
_.typeId$ = 0;
var TYPE_2;
function $clinit_149(){
  $clinit_149 = nullMethod;
  TYPE_3 = $DomEvent$Type(new DomEvent$Type, 'mouseup', ($clinit_149() , new MouseUpEvent));
}

function dispatch_3(p0){
  dynamicCast(p0, 17).onMouseUp(this);
}

function getAssociatedType_4(){
  return TYPE_3;
}

function getClass_84(){
  return Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit;
}

function MouseUpEvent(){
}

_ = MouseUpEvent.prototype = new MouseEvent;
_.dispatch = dispatch_3;
_.getAssociatedType_0 = getAssociatedType_4;
_.getClass$ = getClass_84;
_.typeId$ = 0;
var TYPE_3;
function $PrivateMap(this$static){
  this$static.map = {};
  return this$static;
}

function getClass_85(){
  return Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit;
}

function PrivateMap(){
}

_ = PrivateMap.prototype = new Object_0;
_.getClass$ = getClass_85;
_.typeId$ = 0;
_.map = null;
function dispatch_4(p0){
  dynamicCast(p0, 18).onClose(this);
}

function fire_0(source){
  var event_0;
  if (TYPE_4) {
    event_0 = new CloseEvent;
    $fireEvent_0(source, event_0);
  }
}

function getAssociatedType_5(){
  return TYPE_4;
}

function getClass_86(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}

function CloseEvent(){
}

_ = CloseEvent.prototype = new GwtEvent;
_.dispatch = dispatch_4;
_.getAssociatedType = getAssociatedType_5;
_.getClass$ = getClass_86;
_.typeId$ = 0;
var TYPE_4 = null;
function dispatch_5(p0){
  $setPixelSize_0(dynamicCast(p0, 19).this$1.this$0.scrollPanel, max(300, ~~Math.max(Math.min($getClientWidth($doc) * 0.8, 2147483647), -2147483648)), max(100, ~~Math.max(Math.min($getClientHeight($doc) * 0.3, 2147483647), -2147483648)));
}

function fire_1(source){
  var event_0;
  if (TYPE_5) {
    event_0 = new ResizeEvent;
    $fireEvent_0(source, event_0);
  }
}

function getAssociatedType_6(){
  return TYPE_5;
}

function getClass_87(){
  return Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit;
}

function ResizeEvent(){
}

_ = ResizeEvent.prototype = new GwtEvent;
_.dispatch = dispatch_5;
_.getAssociatedType = getAssociatedType_6;
_.getClass$ = getClass_87;
_.typeId$ = 0;
var TYPE_5 = null;
function $DefaultHandlerRegistration(this$static, manager, type, handler){
  this$static.manager = manager;
  this$static.handler = handler;
  this$static.type_0 = type;
  return this$static;
}

function $removeHandler(this$static){
  $removeHandler_0(this$static.manager, this$static.type_0, this$static.handler);
}

function getClass_88(){
  return Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit;
}

function DefaultHandlerRegistration(){
}

_ = DefaultHandlerRegistration.prototype = new Object_0;
_.getClass$ = getClass_88;
_.typeId$ = 0;
_.handler = null;
_.manager = null;
_.type_0 = null;
function $HandlerManager(this$static, source){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = source;
  this$static.isReverseOrder = false;
  return this$static;
}

function $addHandler(this$static, type, handler){
  this$static.firingDepth > 0?$defer(this$static, $HandlerManager$1(new HandlerManager$1, this$static, type, handler)):$addHandler_0(this$static.registry, type, handler);
  return $DefaultHandlerRegistration(new DefaultHandlerRegistration, this$static, type, handler);
}

function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = $ArrayList(new ArrayList));
  $add_7(this$static.deferredDeltas, command);
}

function $fireEvent_0(this$static, event_0){
  var oldSource;
  if (event_0.dead) {
    event_0.dead = false;
    event_0.source = null;
  }
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    ++this$static.firingDepth;
    $fireEvent_1(this$static.registry, event_0, this$static.isReverseOrder);
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
  if (oldSource == null) {
    event_0.dead = true;
    event_0.source = null;
  }
   else {
    event_0.source = oldSource;
  }
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.deferredDeltas); c$iterator.i < c$iterator.this$0.size;) {
        c = dynamicCast($next_5(c$iterator), 20);
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $removeHandler_0(this$static, type, handler){
  this$static.firingDepth > 0?$defer(this$static, $HandlerManager$2(new HandlerManager$2, this$static, type, handler)):$removeHandler_1(this$static.registry, type, handler);
}

function getClass_89(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}

function HandlerManager(){
}

_ = HandlerManager.prototype = new Object_0;
_.getClass$ = getClass_89;
_.typeId$ = 0;
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
_.registry = null;
_.source = null;
function $HandlerManager$1(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function execute_4(){
  $addHandler_0(this.this$0.registry, this.val$type, this.val$handler);
}

function getClass_90(){
  return Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit;
}

function HandlerManager$1(){
}

_ = HandlerManager$1.prototype = new Object_0;
_.execute = execute_4;
_.getClass$ = getClass_90;
_.typeId$ = 44;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$2(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function execute_5(){
  $removeHandler_1(this.this$0.registry, this.val$type, this.val$handler);
}

function getClass_91(){
  return Lcom_google_gwt_event_shared_HandlerManager$2_2_classLit;
}

function HandlerManager$2(){
}

_ = HandlerManager$2.prototype = new Object_0;
_.execute = execute_5;
_.getClass$ = getClass_91;
_.typeId$ = 45;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$HandlerRegistry(this$static){
  this$static.map = $HashMap(new HashMap);
  return this$static;
}

function $addHandler_0(this$static, type, handler){
  var l;
  l = dynamicCast($get_4(this$static.map, type), 21);
  if (!l) {
    l = $ArrayList(new ArrayList);
    $put_1(this$static.map, type, l);
  }
  setCheck(l.array, l.size++, handler);
}

function $fireEvent_1(this$static, event_0, isReverseOrder){
  var count, handler, i, type, l, l_0, l_1;
  type = event_0.getAssociatedType();
  count = (l = dynamicCast($get_4(this$static.map, type), 21) , !l?0:l.size);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = (l_0 = dynamicCast($get_4(this$static.map, type), 21) , dynamicCast((checkIndex(i, l_0.size) , l_0.array[i]), 60));
      event_0.dispatch(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = (l_1 = dynamicCast($get_4(this$static.map, type), 21) , dynamicCast((checkIndex(i, l_1.size) , l_1.array[i]), 60));
      event_0.dispatch(handler);
    }
  }
}

function $removeHandler_1(this$static, eventKey, handler){
  var l, result;
  l = dynamicCast($get_4(this$static.map, eventKey), 21);
  result = !!l && $remove_9(l, handler);
  result && l.size == 0 && $remove_6(this$static.map, eventKey);
}

function getClass_92(){
  return Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit;
}

function HandlerManager$HandlerRegistry(){
}

_ = HandlerManager$HandlerRegistry.prototype = new Object_0;
_.getClass$ = getClass_92;
_.typeId$ = 0;
function getClass_93(){
  return Lcom_google_gwt_gadgets_client_AnalyticsFeature_2_classLit;
}

function AnalyticsFeature(){
}

_ = AnalyticsFeature.prototype = new Object_0;
_.getClass$ = getClass_93;
_.typeId$ = 0;
function getClass_94(){
  return Lcom_google_gwt_gadgets_client_DynamicHeightFeature_2_classLit;
}

function DynamicHeightFeature(){
}

_ = DynamicHeightFeature.prototype = new Object_0;
_.getClass$ = getClass_94;
_.typeId$ = 0;
function throwIfNull(name_0, value){
  if (null == value) {
    throw $NullPointerException_0(new NullPointerException, name_0 + ' cannot be null');
  }
}

function $DateTimeFormat(this$static, pattern, dateTimeConstants){
  this$static.patternParts = $ArrayList(new ArrayList);
  this$static.pattern = pattern;
  this$static.dateTimeConstants = dateTimeConstants;
  $parsePattern(this$static, pattern);
  return this$static;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.impl.string.length > 0) {
    $add_7(this$static.patternParts, $DateTimeFormat$PatternPart(new DateTimeFormat$PatternPart, buf.impl.string, count));
    oldLength = buf.impl.string.length;
    0 < oldLength?$replace(buf.impl, 0, oldLength, ''):0 > oldLength && $append_3(buf, initDim(_3C_classLit, 108, -1, 0 - oldLength, 1));
  }
}

function $format_0(this$static, date){
  var timeZone;
  timeZone = createTimeZone((date.checkJsDate() , date.jsdate.getTimezoneOffset()));
  return $format_1(this$static, date, timeZone);
}

function $format_1(this$static, date, timeZone){
  var ch, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  diff = ((date.checkJsDate() , date.jsdate.getTimezoneOffset()) - timeZone.standardOffset) * 60000;
  keepDate = $Date_0(new Date_0, add_0(fromDouble((date.checkJsDate() , date.jsdate.getTime())), fromInt(diff)));
  keepTime = keepDate;
  if ((keepDate.checkJsDate() , keepDate.jsdate.getTimezoneOffset()) != (date.checkJsDate() , date.jsdate.getTimezoneOffset())) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = $Date_0(new Date_0, add_0(fromDouble((date.checkJsDate() , date.jsdate.getTime())), fromInt(diff)));
  }
  toAppendTo = $StringBuffer_0(new StringBuffer);
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch = this$static.pattern.charCodeAt(i);
    if (ch >= 97 && ch <= 122 || ch >= 65 && ch <= 90) {
      for (j = i + 1; j < n && this$static.pattern.charCodeAt(j) == ch; ++j) {
      }
      $subFormat(this$static, toAppendTo, ch, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch == 39) {
      ++i;
      if (i < n && this$static.pattern.charCodeAt(i) == 39) {
        toAppendTo.impl.string += "'";
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && this$static.pattern.charCodeAt(j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw $IllegalArgumentException_0(new IllegalArgumentException, "Missing trailing '");
        }
        j + 1 < n && this$static.pattern.charCodeAt(j + 1) == 39?++j:(trailQuote = true);
        $append_5(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      toAppendTo.impl.string += String.fromCharCode(ch);
      ++i;
    }
  }
  return toAppendTo.impl.string;
}

function $formatFractionalSeconds(buf, count, date){
  var time, value;
  time = fromDouble((date.checkJsDate() , date.jsdate.getTime()));
  compare_0(time, P0_longLit) < 0?(value = 1000 - lowBits_0(mod(neg(time), P3e8_longLit))):(value = lowBits_0(mod(time, P3e8_longLit)));
  if (count == 1) {
    value = ~~((value + 50) / 100) < 9?~~((value + 50) / 100):9;
    buf.impl.string += String.fromCharCode(48 + value & 65535);
  }
   else if (count == 2) {
    value = ~~((value + 5) / 10) < 99?~~((value + 5) / 10):99;
    $zeroPaddingNumber(buf, value, 2);
  }
   else {
    $zeroPaddingNumber(buf, value, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(this$static, buf, count, date){
  var value;
  value = (date.checkJsDate() , date.jsdate.getMonth());
  switch (count) {
    case 5:
      $append_5(buf, $narrowMonths(this$static.dateTimeConstants)[value]);
      break;
    case 4:
      $append_5(buf, $months(this$static.dateTimeConstants)[value]);
      break;
    case 3:
      $append_5(buf, $shortMonths(this$static.dateTimeConstants)[value]);
      break;
    default:$zeroPaddingNumber(buf, value + 1, count);
  }
}

function $getNextCharCountInPattern(pattern, start){
  var ch, next;
  ch = pattern.charCodeAt(start);
  next = start + 1;
  while (next < pattern.length && pattern.charCodeAt(next) == ch) {
    ++next;
  }
  return next - start;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.size;
  for (i = 0; i < len; ++i) {
    if ($isNumeric(dynamicCast($get_5(this$static.patternParts, i), 61))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_5(this$static.patternParts, i + 1), 61))) {
        abut = true;
        dynamicCast($get_5(this$static.patternParts, i), 61).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = 'MLydhHmsSDkK'.indexOf(fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $parsePattern(this$static, pattern){
  var buf, ch, count, i, inQuote;
  buf = $StringBuffer_0(new StringBuffer);
  inQuote = false;
  for (i = 0; i < pattern.length; ++i) {
    ch = pattern.charCodeAt(i);
    if (ch == 32) {
      $addPart(this$static, buf, 0);
      buf.impl.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch == 39) {
        if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
          buf.impl.string += String.fromCharCode(ch);
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.impl.string += String.fromCharCode(ch);
      }
      continue;
    }
    if ('GyMLdkHmsSEcDahKzZv'.indexOf(fromCodePoint(ch)) > 0) {
      $addPart(this$static, buf, 0);
      buf.impl.string += String.fromCharCode(ch);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch == 39) {
      if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
        buf.impl.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.impl.string += String.fromCharCode(ch);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $subFormat(this$static, buf, ch, count, adjustedDate, adjustedTime, timezone){
  var value, value_0, value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, value_9, value_10, value_11;
  switch (ch) {
    case 71:
      value = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getFullYear() - 1900) >= -1900?1:0;
      count >= 4?$append_5(buf, $eraNames(this$static.dateTimeConstants)[value]):$append_5(buf, $eras(this$static.dateTimeConstants)[value]);
      break;
    case 121:
      value_0 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getFullYear() - 1900) + 1900;
      value_0 < 0 && (value_0 = -value_0);
      count == 2?$zeroPaddingNumber(buf, value_0 % 100, 2):(buf.impl.string += value_0 , undefined);
      break;
    case 77:
      $formatMonth(this$static, buf, count, adjustedDate);
      break;
    case 107:
      value_1 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours());
      value_1 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value_1, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value_2 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getDay());
      count == 5?$append_5(buf, $narrowWeekdays(this$static.dateTimeConstants)[value_2]):count == 4?$append_5(buf, $weekdays(this$static.dateTimeConstants)[value_2]):$append_5(buf, $shortWeekdays(this$static.dateTimeConstants)[value_2]);
      break;
    case 97:
      (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours()) >= 12 && (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours()) < 24?$append_5(buf, $ampms(this$static.dateTimeConstants)[1]):$append_5(buf, $ampms(this$static.dateTimeConstants)[0]);
      break;
    case 104:
      value_3 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours()) % 12;
      value_3 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value_3, count);
      break;
    case 75:
      value_4 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours()) % 12;
      $zeroPaddingNumber(buf, value_4, count);
      break;
    case 72:
      value_5 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getHours());
      $zeroPaddingNumber(buf, value_5, count);
      break;
    case 99:
      value_6 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getDay());
      count == 5?$append_5(buf, $standaloneNarrowWeekdays(this$static.dateTimeConstants)[value_6]):count == 4?$append_5(buf, $standaloneWeekdays(this$static.dateTimeConstants)[value_6]):count == 3?$append_5(buf, $standaloneShortWeekdays(this$static.dateTimeConstants)[value_6]):$zeroPaddingNumber(buf, value_6, 1);
      break;
    case 76:
      value_7 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getMonth());
      count == 5?$append_5(buf, $standaloneNarrowMonths(this$static.dateTimeConstants)[value_7]):count == 4?$append_5(buf, $standaloneMonths(this$static.dateTimeConstants)[value_7]):count == 3?$append_5(buf, $standaloneShortMonths(this$static.dateTimeConstants)[value_7]):$zeroPaddingNumber(buf, value_7 + 1, count);
      break;
    case 81:
      value_8 = ~~((adjustedDate.checkJsDate() , adjustedDate.jsdate.getMonth()) / 3);
      count < 4?$append_5(buf, $shortQuarters(this$static.dateTimeConstants)[value_8]):$append_5(buf, $quarters(this$static.dateTimeConstants)[value_8]);
      break;
    case 100:
      value_9 = (adjustedDate.checkJsDate() , adjustedDate.jsdate.getDate());
      $zeroPaddingNumber(buf, value_9, count);
      break;
    case 109:
      value_10 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getMinutes());
      $zeroPaddingNumber(buf, value_10, count);
      break;
    case 115:
      value_11 = (adjustedTime.checkJsDate() , adjustedTime.jsdate.getSeconds());
      $zeroPaddingNumber(buf, value_11, count);
      break;
    case 122:
      count < 4?$append_5(buf, timezone.tzNames[0]):$append_5(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_5(buf, timezone.timezoneID);
      break;
    case 90:
      count < 4?$append_5(buf, $getRFCTimeZoneString(timezone)):$append_5(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $zeroPaddingNumber(buf, value, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; ++i) {
    value < b && (buf.impl.string += '0' , undefined);
    b *= 10;
  }
  buf.impl.string += value;
}

function getClass_95(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit;
}

function DateTimeFormat(){
}

_ = DateTimeFormat.prototype = new Object_0;
_.getClass$ = getClass_95;
_.typeId$ = 0;
_.dateTimeConstants = null;
_.pattern = null;
function $DateTimeFormat$PatternPart(this$static, txt, cnt){
  this$static.text_0 = txt;
  this$static.count = cnt;
  this$static.abutStart = false;
  return this$static;
}

function getClass_96(){
  return Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit;
}

function DateTimeFormat$PatternPart(){
}

_ = DateTimeFormat$PatternPart.prototype = new Object_0;
_.getClass$ = getClass_96;
_.typeId$ = 46;
_.abutStart = false;
_.count = 0;
_.text_0 = null;
function $clinit_182(){
  $clinit_182 = nullMethod;
  instance_0 = ($clinit_182() , new LocaleInfo);
}

function $ensureNumberConstants(this$static){
  !this$static.numberConstants && (this$static.numberConstants = new NumberConstantsImpl_);
}

function $getDateTimeConstants(this$static){
  !this$static.dateTimeConstants && (this$static.dateTimeConstants = $DateTimeConstantsImpl_(new DateTimeConstantsImpl_));
  return this$static.dateTimeConstants;
}

function getClass_97(){
  return Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit;
}

function LocaleInfo(){
}

_ = LocaleInfo.prototype = new Object_0;
_.getClass$ = getClass_97;
_.typeId$ = 0;
_.dateTimeConstants = null;
_.numberConstants = null;
var instance_0;
function $clinit_186(){
  $clinit_186 = nullMethod;
  $ensureNumberConstants(($clinit_182() , $clinit_182() , instance_0));
}

function $NumberFormat(this$static, pattern, cdata, userSuppliedPattern){
  $clinit_186();
  if (!cdata) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Unknown currency code');
  }
  this$static.pattern = pattern;
  this$static.currencyCode = cdata[0];
  this$static.currencySymbol = cdata[1];
  $parsePattern_0(this$static, this$static.pattern);
  if (!userSuppliedPattern && this$static.isCurrencyFormat) {
    this$static.minimumFractionDigits = cdata[2] & 7;
    this$static.maximumFractionDigits = this$static.minimumFractionDigits;
  }
  return this$static;
}

function $NumberFormat_0(this$static, pattern, cdata, userSuppliedPattern){
  $clinit_186();
  $NumberFormat(this$static, pattern, cdata, userSuppliedPattern);
  return this$static;
}

function $addExponentPart(this$static, exponent, result){
  var exponentDigits, i, len;
  result.impl.string += 'E';
  if (exponent < 0) {
    exponent = -exponent;
    result.impl.string += '-';
  }
  exponentDigits = '' + exponent;
  len = exponentDigits.length;
  for (i = len; i < this$static.minExponentDigits; ++i) {
    result.impl.string += '0';
  }
  for (i = 0; i < len; ++i) {
    $append_2(result, exponentDigits.charCodeAt(i));
  }
}

function $format_2(this$static, number){
  var isNegative, result;
  result = $StringBuffer(new StringBuffer);
  if (isNaN(number)) {
    result.impl.string += '\uFFFD';
    return result.impl.string;
  }
  isNegative = number < 0 || number == 0 && 1 / number < 0;
  $append_5(result, isNegative?this$static.negativePrefix:this$static.positivePrefix);
  if (!isFinite(number)) {
    result.impl.string += '\u0221';
  }
   else {
    isNegative && (number = -number);
    number *= this$static.multiplier;
    this$static.useExponentialNotation?$subformatExponential(this$static, number, result):$subformatFixed(this$static, number, result, this$static.minimumIntegerDigits);
  }
  $append_5(result, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
  return result.impl.string;
}

function $parseAffix(this$static, pattern, start, affix, inNegativePattern){
  var ch, inQuote, len, pos;
  $replace_0(affix, 0, affix.impl.string.length, '');
  inQuote = false;
  len = pattern.length;
  for (pos = start; pos < len; ++pos) {
    ch = pattern.charCodeAt(pos);
    if (ch == 39) {
      if (pos + 1 < len && pattern.charCodeAt(pos + 1) == 39) {
        ++pos;
        affix.impl.string += "'";
      }
       else {
        inQuote = !inQuote;
      }
      continue;
    }
    if (inQuote) {
      affix.impl.string += String.fromCharCode(ch);
    }
     else {
      switch (ch) {
        case 35:
        case 48:
        case 44:
        case 46:
        case 59:
          return pos - start;
        case 164:
          this$static.isCurrencyFormat = true;
          if (pos + 1 < len && pattern.charCodeAt(pos + 1) == 164) {
            ++pos;
            $append_5(affix, this$static.currencyCode);
          }
           else {
            $append_5(affix, this$static.currencySymbol);
          }

          break;
        case 37:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw $IllegalArgumentException_0(new IllegalArgumentException, 'Too many percent/per mille characters in pattern "' + pattern + '"');
            }
            this$static.multiplier = 100;
          }

          affix.impl.string += '%';
          break;
        case 8240:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw $IllegalArgumentException_0(new IllegalArgumentException, 'Too many percent/per mille characters in pattern "' + pattern + '"');
            }
            this$static.multiplier = 1000;
          }

          affix.impl.string += '\u2030';
          break;
        case 45:
          affix.impl.string += '-';
          break;
        default:affix.impl.string += String.fromCharCode(ch);
      }
    }
  }
  return len - start;
}

function $parsePattern_0(this$static, pattern){
  var affix, pos;
  pos = 0;
  affix = $StringBuffer(new StringBuffer);
  pos += $parseAffix(this$static, pattern, pos, affix, false);
  this$static.positivePrefix = affix.impl.string;
  pos += $parseTrunk(this$static, pattern, pos, false);
  pos += $parseAffix(this$static, pattern, pos, affix, false);
  this$static.positiveSuffix = affix.impl.string;
  if (pos < pattern.length && pattern.charCodeAt(pos) == 59) {
    ++pos;
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativePrefix = affix.impl.string;
    pos += $parseTrunk(this$static, pattern, pos, true);
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativeSuffix = affix.impl.string;
  }
   else {
    this$static.negativePrefix = '-' + this$static.positivePrefix;
    this$static.negativeSuffix = this$static.positiveSuffix;
  }
}

function $parseTrunk(this$static, pattern, start, ignorePattern){
  var ch, decimalPos, digitLeftCount, digitRightCount, effectiveDecimalPos, groupingCount, len, loop, n, pos, totalDigits, zeroDigitCount;
  decimalPos = -1;
  digitLeftCount = 0;
  zeroDigitCount = 0;
  digitRightCount = 0;
  groupingCount = -1;
  len = pattern.length;
  pos = start;
  loop = true;
  for (; pos < len && loop; ++pos) {
    ch = pattern.charCodeAt(pos);
    switch (ch) {
      case 35:
        zeroDigitCount > 0?++digitRightCount:++digitLeftCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 48:
        if (digitRightCount > 0) {
          throw $IllegalArgumentException_0(new IllegalArgumentException, "Unexpected '0' in pattern \"" + pattern + '"');
        }

        ++zeroDigitCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 44:
        groupingCount = 0;
        break;
      case 46:
        if (decimalPos >= 0) {
          throw $IllegalArgumentException_0(new IllegalArgumentException, 'Multiple decimal separators in pattern "' + pattern + '"');
        }

        decimalPos = digitLeftCount + zeroDigitCount + digitRightCount;
        break;
      case 69:
        if (!ignorePattern) {
          if (this$static.useExponentialNotation) {
            throw $IllegalArgumentException_0(new IllegalArgumentException, 'Multiple exponential symbols in pattern "' + pattern + '"');
          }
          this$static.useExponentialNotation = true;
          this$static.minExponentDigits = 0;
        }

        while (pos + 1 < len && pattern.charCodeAt(pos + 1) == 48) {
          ++pos;
          !ignorePattern && ++this$static.minExponentDigits;
        }

        if (!ignorePattern && digitLeftCount + zeroDigitCount < 1 || this$static.minExponentDigits < 1) {
          throw $IllegalArgumentException_0(new IllegalArgumentException, 'Malformed exponential pattern "' + pattern + '"');
        }

        loop = false;
        break;
      default:--pos;
        loop = false;
    }
  }
  if (zeroDigitCount == 0 && digitLeftCount > 0 && decimalPos >= 0) {
    n = decimalPos;
    n == 0 && ++n;
    digitRightCount = digitLeftCount - n;
    digitLeftCount = n - 1;
    zeroDigitCount = 1;
  }
  if (decimalPos < 0 && digitRightCount > 0 || decimalPos >= 0 && (decimalPos < digitLeftCount || decimalPos > digitLeftCount + zeroDigitCount) || groupingCount == 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Malformed pattern "' + pattern + '"');
  }
  if (ignorePattern) {
    return pos - start;
  }
  totalDigits = digitLeftCount + zeroDigitCount + digitRightCount;
  this$static.maximumFractionDigits = decimalPos >= 0?totalDigits - decimalPos:0;
  if (decimalPos >= 0) {
    this$static.minimumFractionDigits = digitLeftCount + zeroDigitCount - decimalPos;
    this$static.minimumFractionDigits < 0 && (this$static.minimumFractionDigits = 0);
  }
  effectiveDecimalPos = decimalPos >= 0?decimalPos:totalDigits;
  this$static.minimumIntegerDigits = effectiveDecimalPos - digitLeftCount;
  if (this$static.useExponentialNotation) {
    this$static.maximumIntegerDigits = digitLeftCount + this$static.minimumIntegerDigits;
    this$static.maximumFractionDigits == 0 && this$static.minimumIntegerDigits == 0 && (this$static.minimumIntegerDigits = 1);
  }
  this$static.groupingSize = groupingCount > 0?groupingCount:0;
  this$static.decimalSeparatorAlwaysShown = decimalPos == 0 || decimalPos == totalDigits;
  return pos - start;
}

function $subformatExponential(this$static, number, result){
  var exponent, i, minIntDigits;
  if (number == 0) {
    $subformatFixed(this$static, number, result, this$static.minimumIntegerDigits);
    $addExponentPart(this$static, 0, result);
    return;
  }
  exponent = round_int(floor(Math.log(number) / Math.log(10)));
  number /= Math.pow(10, exponent);
  minIntDigits = this$static.minimumIntegerDigits;
  if (this$static.maximumIntegerDigits > 1 && this$static.maximumIntegerDigits > this$static.minimumIntegerDigits) {
    while (exponent % this$static.maximumIntegerDigits != 0) {
      number *= 10;
      --exponent;
    }
    minIntDigits = 1;
  }
   else {
    if (this$static.minimumIntegerDigits < 1) {
      ++exponent;
      number /= 10;
    }
     else {
      for (i = 1; i < this$static.minimumIntegerDigits; ++i) {
        --exponent;
        number *= 10;
      }
    }
  }
  $subformatFixed(this$static, number, result, minIntDigits);
  $addExponentPart(this$static, exponent, result);
}

function $subformatFixed(this$static, number, result, minIntDigits){
  var decimal, decimalIndex, digitLen, exponentIndex, fixedString, fracLen, fracPart, fracValue, fractionPresent, grouping, i, intPart, intValue, len, power;
  power = Math.pow(10, this$static.maximumFractionDigits);
  fixedString = number.toFixed(this$static.maximumFractionDigits + 3);
  intValue = 0;
  fracValue = 0;
  exponentIndex = fixedString.indexOf(fromCodePoint(101));
  if (exponentIndex != -1) {
    intValue = Math.floor(number);
  }
   else {
    decimalIndex = fixedString.indexOf(fromCodePoint(46));
    len = fixedString.length;
    decimalIndex == -1 && (decimalIndex = len);
    decimalIndex > 0 && (intValue = __parseAndValidateDouble(fixedString.substr(0, decimalIndex - 0)));
    if (decimalIndex < len - 1) {
      fracValue = __parseAndValidateDouble(fixedString.substr(decimalIndex + 1, fixedString.length - (decimalIndex + 1)));
      fracValue = ~~((~~Math.max(Math.min(fracValue, 2147483647), -2147483648) + 500) / 1000);
      if (fracValue >= power) {
        fracValue -= power;
        ++intValue;
      }
    }
  }
  fractionPresent = this$static.minimumFractionDigits > 0 || fracValue > 0;
  intPart = '' + intValue;
  grouping = this$static.isCurrencyFormat?',':',';
  decimal = this$static.isCurrencyFormat?'.':'.';
  digitLen = intPart.length;
  if (intValue > 0 || minIntDigits > 0) {
    for (i = digitLen; i < minIntDigits; ++i) {
      result.impl.string += '0';
    }
    for (i = 0; i < digitLen; ++i) {
      $append_2(result, intPart.charCodeAt(i));
      digitLen - i > 1 && this$static.groupingSize > 0 && (digitLen - i) % this$static.groupingSize == 1 && (result.impl.string += grouping , undefined);
    }
  }
   else 
    !fractionPresent && (result.impl.string += '0' , undefined);
  (this$static.decimalSeparatorAlwaysShown || fractionPresent) && (result.impl.string += decimal , undefined);
  fracPart = '' + Math.floor(fracValue + power + 0.5);
  fracLen = fracPart.length;
  while (fracPart.charCodeAt(fracLen - 1) == 48 && fracLen > this$static.minimumFractionDigits + 1) {
    --fracLen;
  }
  for (i = 1; i < fracLen; ++i) {
    $append_2(result, fracPart.charCodeAt(i));
  }
}

function getClass_98(){
  return Lcom_google_gwt_i18n_client_NumberFormat_2_classLit;
}

function NumberFormat(){
}

_ = NumberFormat.prototype = new Object_0;
_.getClass$ = getClass_98;
_.typeId$ = 0;
_.currencyCode = null;
_.currencySymbol = null;
_.decimalSeparatorAlwaysShown = false;
_.groupingSize = 3;
_.isCurrencyFormat = false;
_.maximumFractionDigits = 3;
_.maximumIntegerDigits = 40;
_.minExponentDigits = 0;
_.minimumFractionDigits = 0;
_.minimumIntegerDigits = 1;
_.multiplier = 1;
_.negativePrefix = '-';
_.negativeSuffix = '';
_.pattern = null;
_.positivePrefix = '';
_.positiveSuffix = '';
_.useExponentialNotation = false;
function $getRFCTimeZoneString(this$static){
  var data, offset;
  offset = -this$static.standardOffset;
  data = initValues(_3C_classLit, 108, -1, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data[0] = 45;
    offset = -offset;
  }
  data[1] += ~~(~~(offset / 60) / 10);
  data[2] += ~~(offset / 60) % 10;
  data[3] += ~~(offset % 60 / 10);
  data[4] += offset % 10;
  return String.fromCharCode.apply(null, data);
}

function composeGMTString(offset){
  var data;
  data = initValues(_3C_classLit, 108, -1, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data[3] = 43;
    offset = -offset;
  }
  data[4] += ~~(~~(offset / 60) / 10);
  data[5] += ~~(offset / 60) % 10;
  data[7] += ~~(offset % 60 / 10);
  data[8] += offset % 10;
  return String.fromCharCode.apply(null, data);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initDim(_3Ljava_lang_String_2_classLit, 150, 1, 2, 0);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function getClass_99(){
  return Lcom_google_gwt_i18n_client_TimeZone_2_classLit;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = ~~(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + mins;
}

function TimeZone(){
}

_ = TimeZone.prototype = new Object_0;
_.getClass$ = getClass_99;
_.typeId$ = 0;
_.standardOffset = 0;
_.timezoneID = null;
_.tzNames = null;
function $DateTimeConstantsImpl_(this$static){
  this$static.cache = $HashMap(new HashMap);
  return this$static;
}

function $ampms(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'ampms'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['AM', 'PM']);
    $put_1(this$static.cache, 'ampms', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $eraNames(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'eraNames'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Before Christ', 'Anno Domini']);
    $put_1(this$static.cache, 'eraNames', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $eras(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'eras'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['BC', 'AD']);
    $put_1(this$static.cache, 'eras', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $months(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'months'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    $put_1(this$static.cache, 'months', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $narrowMonths(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'narrowMonths'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']);
    $put_1(this$static.cache, 'narrowMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $narrowWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'narrowWeekdays'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['S', 'M', 'T', 'W', 'T', 'F', 'S']);
    $put_1(this$static.cache, 'narrowWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $quarters(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'quarters'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']);
    $put_1(this$static.cache, 'quarters', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortMonths(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'shortMonths'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    $put_1(this$static.cache, 'shortMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortQuarters(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'shortQuarters'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Q1', 'Q2', 'Q3', 'Q4']);
    $put_1(this$static.cache, 'shortQuarters', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $shortWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'shortWeekdays'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    $put_1(this$static.cache, 'shortWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneMonths(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'standaloneMonths'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    $put_1(this$static.cache, 'standaloneMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneNarrowMonths(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'standaloneNarrowMonths'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']);
    $put_1(this$static.cache, 'standaloneNarrowMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneNarrowWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'standaloneNarrowWeekdays'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['S', 'M', 'T', 'W', 'T', 'F', 'S']);
    $put_1(this$static.cache, 'standaloneNarrowWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneShortMonths(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'standaloneShortMonths'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    $put_1(this$static.cache, 'standaloneShortMonths', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneShortWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'standaloneShortWeekdays'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    $put_1(this$static.cache, 'standaloneShortWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $standaloneWeekdays(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'standaloneWeekdays'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    $put_1(this$static.cache, 'standaloneWeekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function $weekdays(this$static){
  var args, writer;
  args = dynamicCast($get_4(this$static.cache, 'weekdays'), 62);
  if (args == null) {
    writer = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    $put_1(this$static.cache, 'weekdays', writer);
    return writer;
  }
   else {
    return args;
  }
}

function getClass_100(){
  return Lcom_google_gwt_i18n_client_constants_DateTimeConstantsImpl_1_2_classLit;
}

function DateTimeConstantsImpl_(){
}

_ = DateTimeConstantsImpl_.prototype = new Object_0;
_.getClass$ = getClass_100;
_.typeId$ = 0;
function getClass_101(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1_2_classLit;
}

function NumberConstantsImpl_(){
}

_ = NumberConstantsImpl_.prototype = new Object_0;
_.getClass$ = getClass_101;
_.typeId$ = 0;
function getClass_102(){
  return Lcom_google_gwt_json_client_JSONValue_2_classLit;
}

function isArray(){
  return null;
}

function isNumber(){
  return null;
}

function isObject(){
  return null;
}

function isString(){
  return null;
}

function JSONValue(){
}

_ = JSONValue.prototype = new Object_0;
_.getClass$ = getClass_102;
_.isArray = isArray;
_.isNumber = isNumber;
_.isObject = isObject;
_.isString = isString;
_.typeId$ = 0;
function $JSONArray(this$static, arr){
  this$static.jsArray = arr;
  return this$static;
}

function $get_1(this$static, index){
  var v = this$static.jsArray[index];
  var func = ($clinit_203() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function equals_1(other){
  if (!(other != null && canCast(other.typeId$, 10))) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 10).jsArray;
}

function getClass_103(){
  return Lcom_google_gwt_json_client_JSONArray_2_classLit;
}

function getUnwrapper(){
  return unwrap;
}

function hashCode_3(){
  return getHashCode(this.jsArray);
}

function isArray_0(){
  return this;
}

function toString_7(){
  var c, i, sb;
  sb = $StringBuffer(new StringBuffer);
  sb.impl.string += '[';
  for (i = 0 , c = this.jsArray.length; i < c; ++i) {
    i > 0 && (sb.impl.string += ',' , undefined);
    $append_4(sb, $get_1(this, i));
  }
  sb.impl.string += ']';
  return sb.impl.string;
}

function unwrap(value){
  return value.jsArray;
}

function JSONArray(){
}

_ = JSONArray.prototype = new JSONValue;
_.equals$ = equals_1;
_.getClass$ = getClass_103;
_.getUnwrapper = getUnwrapper;
_.hashCode$ = hashCode_3;
_.isArray = isArray_0;
_.toString$ = toString_7;
_.typeId$ = 47;
_.jsArray = null;
function $clinit_198(){
  $clinit_198 = nullMethod;
  FALSE = $JSONBoolean(new JSONBoolean, false);
  TRUE = $JSONBoolean(new JSONBoolean, true);
}

function $JSONBoolean(this$static, value){
  $clinit_198();
  this$static.value_0 = value;
  return this$static;
}

function getClass_104(){
  return Lcom_google_gwt_json_client_JSONBoolean_2_classLit;
}

function getInstance(b){
  $clinit_198();
  if (b) {
    return TRUE;
  }
   else {
    return FALSE;
  }
}

function getUnwrapper_0(){
  return unwrap_0;
}

function toString_8(){
  return $clinit_313() , '' + this.value_0;
}

function unwrap_0(value){
  return value.value_0;
}

function JSONBoolean(){
}

_ = JSONBoolean.prototype = new JSONValue;
_.getClass$ = getClass_104;
_.getUnwrapper = getUnwrapper_0;
_.toString$ = toString_8;
_.typeId$ = 0;
_.value_0 = false;
var FALSE, TRUE;
function $JSONException(this$static, message){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = message;
  return this$static;
}

function $JSONException_0(this$static, cause){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = !cause?null:$toString_0(cause);
  this$static.cause = cause;
  return this$static;
}

function getClass_105(){
  return Lcom_google_gwt_json_client_JSONException_2_classLit;
}

function JSONException(){
}

_ = JSONException.prototype = new RuntimeException;
_.getClass$ = getClass_105;
_.typeId$ = 48;
function $clinit_200(){
  $clinit_200 = nullMethod;
  instance_1 = ($clinit_200() , new JSONNull);
}

function getClass_106(){
  return Lcom_google_gwt_json_client_JSONNull_2_classLit;
}

function getUnwrapper_1(){
  return unwrap_1;
}

function toString_9(){
  return 'null';
}

function unwrap_1(){
  return null;
}

function JSONNull(){
}

_ = JSONNull.prototype = new JSONValue;
_.getClass$ = getClass_106;
_.getUnwrapper = getUnwrapper_1;
_.toString$ = toString_9;
_.typeId$ = 0;
var instance_1;
function $JSONNumber(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function equals_2(other){
  if (!(other != null && canCast(other.typeId$, 63))) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 63).value_0;
}

function getClass_107(){
  return Lcom_google_gwt_json_client_JSONNumber_2_classLit;
}

function getUnwrapper_2(){
  return unwrap_2;
}

function hashCode_4(){
  return ~~Math.max(Math.min($Double(new Double, this.value_0).value_0, 2147483647), -2147483648);
}

function isNumber_0(){
  return this;
}

function toString_10(){
  return this.value_0 + '';
}

function unwrap_2(value){
  return value.value_0;
}

function JSONNumber(){
}

_ = JSONNumber.prototype = new JSONValue;
_.equals$ = equals_2;
_.getClass$ = getClass_107;
_.getUnwrapper = getUnwrapper_2;
_.hashCode$ = hashCode_4;
_.isNumber = isNumber_0;
_.toString$ = toString_10;
_.typeId$ = 49;
_.value_0 = 0;
function $JSONObject(this$static){
  $JSONObject_0(this$static, {});
  return this$static;
}

function $JSONObject_0(this$static, jsValue){
  this$static.jsObject = jsValue;
  return this$static;
}

function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_2(this$static, key){
  if (key == null) {
    throw $NullPointerException(new NullPointerException);
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_203() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $put(this$static, key, jsonValue){
  var previous;
  if (key == null) {
    throw $NullPointerException(new NullPointerException);
  }
  previous = $get_2(this$static, key);
  $put0(this$static, key, jsonValue);
  return previous;
}

function $put0(this$static, key, value){
  if (value) {
    var func = value.getUnwrapper();
    this$static.jsObject[key] = func(value);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function $toString_3(this$static){
  var first, key, key$array, key$index, key$max, keys, sb;
  sb = $StringBuffer(new StringBuffer);
  sb.impl.string += '{';
  first = true;
  keys = $computeKeys0(this$static, initDim(_3Ljava_lang_String_2_classLit, 150, 1, 0, 0));
  for (key$array = keys , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
    key = key$array[key$index];
    first?(first = false):(sb.impl.string += ', ' , undefined);
    $append_5(sb, escapeValue(key));
    sb.impl.string += ':';
    $append_4(sb, $get_2(this$static, key));
  }
  sb.impl.string += '}';
  return sb.impl.string;
}

function equals_3(other){
  if (!(other != null && canCast(other.typeId$, 64))) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 64).jsObject;
}

function getClass_108(){
  return Lcom_google_gwt_json_client_JSONObject_2_classLit;
}

function getUnwrapper_3(){
  return unwrap_3;
}

function hashCode_5(){
  return getHashCode(this.jsObject);
}

function isObject_0(){
  return this;
}

function toString_11(){
  return $toString_3(this);
}

function unwrap_3(value){
  return value.jsObject;
}

function JSONObject(){
}

_ = JSONObject.prototype = new JSONValue;
_.equals$ = equals_3;
_.getClass$ = getClass_108;
_.getUnwrapper = getUnwrapper_3;
_.hashCode$ = hashCode_5;
_.isObject = isObject_0;
_.toString$ = toString_11;
_.typeId$ = 50;
_.jsObject = null;
function $clinit_203(){
  $clinit_203 = nullMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject_0, 'function':createObject_0, undefined:createUndefined};
}

function createBoolean(v){
  return getInstance(v);
}

function createNumber(v){
  return $JSONNumber(new JSONNumber, v);
}

function createObject_0(o){
  if (!o) {
    return $clinit_200() , instance_1;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return $JSONArray(new JSONArray, o);
  }
   else {
    return $JSONObject_0(new JSONObject, o);
  }
}

function createString(v){
  return $JSONString(new JSONString, v);
}

function createUndefined(){
  return null;
}

function parse(jsonString){
  var v, func;
  $clinit_203();
  var $e0, ex;
  if (jsonString == null) {
    throw $NullPointerException(new NullPointerException);
  }
  if (jsonString.length == 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'empty argument');
  }
  try {
    return v = eval('(' + jsonString + ')') , func = typeMap[typeof v] , func?func(v):throwUnknownTypeException(typeof v);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 8)) {
      ex = $e0;
      throw $JSONException_0(new JSONException, ex);
    }
     else 
      throw $e0;
  }
}

function throwUnknownTypeException(typeString){
  $clinit_203();
  throw $JSONException(new JSONException, "Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function $JSONString(this$static, value){
  if (value == null) {
    throw $NullPointerException(new NullPointerException);
  }
  this$static.value_0 = value;
  return this$static;
}

function equals_4(other){
  if (!(other != null && canCast(other.typeId$, 65))) {
    return false;
  }
  return $equals_1(this.value_0, dynamicCast(other, 65).value_0);
}

function getClass_109(){
  return Lcom_google_gwt_json_client_JSONString_2_classLit;
}

function getUnwrapper_4(){
  return unwrap_4;
}

function hashCode_6(){
  return getHashCode_0(this.value_0);
}

function isString_0(){
  return this;
}

function toString_12(){
  return escapeValue(this.value_0);
}

function unwrap_4(value){
  return value.value_0;
}

function JSONString(){
}

_ = JSONString.prototype = new JSONValue;
_.equals$ = equals_4;
_.getClass$ = getClass_109;
_.getUnwrapper = getUnwrapper_4;
_.hashCode$ = hashCode_6;
_.isString = isString_0;
_.toString$ = toString_12;
_.typeId$ = 51;
_.value_0 = null;
function createFrom(array, length_0){
  var a, result;
  a = array;
  result = createFromSeed(0, length_0);
  initValues(a.arrayClass$, a.typeId$, a.queryId$, result);
  return result;
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function getClass_110(){
  return this.arrayClass$;
}

function initDim(arrayClass, typeId, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_206();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClass;
  result.typeId$ = typeId;
  result.queryId$ = queryId;
  return result;
}

function initValues(arrayClass, typeId, queryId, array){
  $clinit_206();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.typeId$ = typeId;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
      throw $ArrayStoreException(new ArrayStoreException);
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
      throw $ArrayStoreException(new ArrayStoreException);
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0;
_.getClass$ = getClass_110;
_.typeId$ = 0;
_.arrayClass$ = null;
_.length = 0;
_.queryId$ = 0;
function $clinit_206(){
  $clinit_206 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_0, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_206();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(srcId, dstId){
  return srcId && !!typeIdArray[srcId][dstId];
}

function canCastUnsafe(srcId, dstId){
  return srcId && typeIdArray[srcId][dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
    throw $ClassCastException(new ClassCastException);
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || src.typeId$ == 2)) {
    throw $ClassCastException(new ClassCastException);
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src.typeId$, dstId);
}

function instanceOfJso(src){
  return src != null && src.typeMarker$ != nullMethod && src.typeId$ != 2;
}

function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw $ClassCastException(new ClassCastException);
  }
  return o;
}

var typeIdArray = [{}, {}, {1:1, 53:1, 54:1, 55:1}, {22:1, 53:1}, {4:1}, {4:1, 6:1}, {67:1}, {67:1}, {66:1}, {13:1, 60:1}, {13:1, 60:1}, {13:1, 60:1}, {51:1}, {38:1, 39:1, 51:1, 52:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {19:1, 60:1}, {15:1, 16:1, 17:1, 60:1}, {15:1, 16:1, 17:1, 60:1}, {11:1, 38:1, 39:1, 51:1, 52:1, 70:1}, {11:1, 38:1, 39:1, 51:1, 52:1, 70:1}, {11:1, 38:1, 39:1, 51:1, 52:1, 70:1}, {4:1}, {4:1}, {53:1}, {4:1}, {4:1}, {3:1, 53:1}, {3:1, 53:1}, {53:1}, {60:1, 77:1}, {38:1, 39:1, 51:1, 52:1}, {38:1, 39:1, 51:1, 52:1}, {12:1, 60:1}, {66:1}, {67:1}, {9:1}, {3:1, 7:1, 53:1}, {3:1, 5:1, 7:1, 53:1}, {3:1, 5:1, 7:1, 8:1, 53:1}, {14:1}, {20:1}, {20:1}, {61:1}, {10:1}, {3:1, 5:1, 7:1, 53:1}, {63:1}, {64:1}, {65:1}, {3:1, 5:1, 7:1, 53:1}, {67:1}, {67:1}, {18:1, 60:1}, {38:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {3:1, 5:1, 7:1, 53:1}, {23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 42:1, 43:1, 44:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1}, {23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1}, {2:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {11:1, 38:1, 39:1, 51:1, 52:1, 70:1}, {41:1}, {27:1, 38:1, 39:1, 51:1, 52:1, 70:1}, {27:1, 38:1, 39:1, 51:1, 52:1, 70:1}, {11:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 43:1, 44:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 70:1}, {25:1, 27:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 46:1, 47:1, 50:1, 51:1, 52:1}, {25:1, 27:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 45:1, 46:1, 47:1, 50:1, 51:1, 52:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {25:1, 27:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 47:1, 50:1, 51:1, 52:1}, {23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 42:1, 43:1, 44:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1}, {38:1, 39:1, 51:1, 52:1, 69:1, 70:1}, {18:1, 60:1}, {38:1, 39:1, 51:1, 52:1, 69:1, 70:1}, {38:1, 39:1, 51:1, 52:1, 70:1}, {3:1, 5:1, 7:1, 53:1}, {3:1, 5:1, 7:1, 53:1}, {3:1, 53:1}, {3:1, 53:1}, {53:1, 55:1, 71:1}, {3:1, 5:1, 7:1, 53:1}, {53:1, 57:1}, {53:1, 55:1, 57:1, 72:1}, {3:1, 5:1, 7:1, 53:1}, {3:1, 5:1, 7:1, 53:1}, {3:1, 5:1, 7:1, 53:1}, {53:1, 55:1, 56:1, 57:1}, {3:1, 5:1, 7:1, 53:1}, {3:1, 5:1, 7:1, 53:1}, {53:1, 58:1}, {54:1}, {3:1, 5:1, 7:1, 53:1}, {75:1}, {75:1}, {73:1}, {73:1}, {73:1}, {75:1}, {21:1, 53:1}, {53:1, 55:1, 76:1}, {53:1, 74:1}, {53:1, 75:1}, {73:1}, {3:1, 5:1, 7:1, 53:1}, {38:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1, 59:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1}, {53:1, 62:1}, {53:1, 68:1}, {53:1}];
function init(){
  !!$stats && $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:'com.example.portfoliobotty.client.PortfolioBotty'});
  $PortfolioBottyGadgetImpl(new PortfolioBottyGadgetImpl);
}

function caught_0(e){
  if (e != null && canCast(e.typeId$, 3)) {
    return e;
  }
  return $JavaScriptException(new JavaScriptException, e);
}

function add_0(a, b){
  var newHigh, newLow;
  newHigh = a[1] + b[1];
  newLow = a[0] + b[0];
  return create_0(newLow, newHigh);
}

function addTimes(accum, a, b){
  if (a == 0) {
    return accum;
  }
  if (b == 0) {
    return accum;
  }
  return add_0(accum, create_0(a * b, 0));
}

function compare_0(a, b){
  var nega, negb;
  if (a[0] == b[0] && a[1] == b[1]) {
    return 0;
  }
  nega = a[1] < 0;
  negb = b[1] < 0;
  if (nega && !negb) {
    return -1;
  }
  if (!nega && negb) {
    return 1;
  }
  if (sub(a, b)[1] < 0) {
    return -1;
  }
   else {
    return 1;
  }
}

function create_0(valueLow, valueHigh){
  var diffHigh, diffLow;
  valueHigh %= 1.8446744073709552E19;
  valueLow %= 1.8446744073709552E19;
  diffHigh = valueHigh % 4294967296;
  diffLow = Math.floor(valueLow / 4294967296) * 4294967296;
  valueHigh = valueHigh - diffHigh + diffLow;
  valueLow = valueLow - diffLow + diffHigh;
  while (valueLow < 0) {
    valueLow += 4294967296;
    valueHigh -= 4294967296;
  }
  while (valueLow > 4294967295) {
    valueLow -= 4294967296;
    valueHigh += 4294967296;
  }
  valueHigh = valueHigh % 1.8446744073709552E19;
  while (valueHigh > 9223372032559808512) {
    valueHigh -= 1.8446744073709552E19;
  }
  while (valueHigh < -9223372036854775808) {
    valueHigh += 1.8446744073709552E19;
  }
  return [valueLow, valueHigh];
}

function div_0(a, b){
  var approx, deltaRem, deltaResult, halfa, rem, result;
  if (b[0] == 0 && b[1] == 0) {
    throw $ArithmeticException(new ArithmeticException, '/ by zero');
  }
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_213() , ZERO;
  }
  if (eq(a, ($clinit_213() , MIN_VALUE))) {
    if (eq(b, ONE) || eq(b, NEG_ONE)) {
      return MIN_VALUE;
    }
    halfa = shr(a, 1);
    approx = shl(div_0(halfa, b), 1);
    rem = sub(a, mul(b, approx));
    return add_0(approx, div_0(rem, b));
  }
  if (eq(b, MIN_VALUE)) {
    return ZERO;
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return div_0(neg(a), neg(b));
    }
     else {
      return neg(div_0(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(div_0(a, neg(b)));
  }
  result = ZERO;
  rem = a;
  while (compare_0(rem, b) >= 0) {
    deltaResult = fromDouble(Math.floor(toDoubleRoundDown(rem) / toDoubleRoundUp(b)));
    deltaResult[0] == 0 && deltaResult[1] == 0 && (deltaResult = ONE);
    deltaRem = mul(deltaResult, b);
    result = add_0(result, deltaResult);
    rem = sub(rem, deltaRem);
  }
  return result;
}

function eq(a, b){
  return a[0] == b[0] && a[1] == b[1];
}

function fromDouble(value){
  if (isNaN(value)) {
    return $clinit_213() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_213() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_213() , MAX_VALUE;
  }
  if (value > 0) {
    return create_0(Math.floor(value), 0);
  }
   else {
    return create_0(Math.ceil(value), 0);
  }
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    result = ($clinit_212() , boxedValues)[rebase];
    result == null && (result = boxedValues[rebase] = internalFromInt(value));
    return result;
  }
  return internalFromInt(value);
}

function internalFromInt(value){
  if (value >= 0) {
    return [value, 0];
  }
   else {
    return [value + 4294967296, -4294967296];
  }
}

function lowBits_0(a){
  if (a[0] >= 2147483648) {
    return ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648);
  }
   else {
    return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
  }
}

function makeFromBits(highBits, lowBits){
  var high, low;
  high = highBits * 4294967296;
  low = lowBits;
  lowBits < 0 && (low += 4294967296);
  return [low, high];
}

function mod(a, b){
  return sub(a, mul(div_0(a, b), b));
}

function mul(a, b){
  var a1, a2, a3, a4, b1, b2, b3, b4, res;
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_213() , ZERO;
  }
  if (b[0] == 0 && b[1] == 0) {
    return $clinit_213() , ZERO;
  }
  if (eq(a, ($clinit_213() , MIN_VALUE))) {
    return multByMinValue(b);
  }
  if (eq(b, MIN_VALUE)) {
    return multByMinValue(a);
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return mul(neg(a), neg(b));
    }
     else {
      return neg(mul(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(mul(a, neg(b)));
  }
  if (compare_0(a, TWO_PWR_24) < 0 && compare_0(b, TWO_PWR_24) < 0) {
    return create_0((a[1] + a[0]) * (b[1] + b[0]), 0);
  }
  a3 = a[1] % 281474976710656;
  a4 = a[1] - a3;
  a1 = a[0] % 65536;
  a2 = a[0] - a1;
  b3 = b[1] % 281474976710656;
  b4 = b[1] - b3;
  b1 = b[0] % 65536;
  b2 = b[0] - b1;
  res = ZERO;
  res = addTimes(res, a4, b1);
  res = addTimes(res, a3, b2);
  res = addTimes(res, a3, b1);
  res = addTimes(res, a2, b3);
  res = addTimes(res, a2, b2);
  res = addTimes(res, a2, b1);
  res = addTimes(res, a1, b4);
  res = addTimes(res, a1, b3);
  res = addTimes(res, a1, b2);
  res = addTimes(res, a1, b1);
  return res;
}

function multByMinValue(a){
  if ((lowBits_0(a) & 1) == 1) {
    return $clinit_213() , MIN_VALUE;
  }
   else {
    return $clinit_213() , ZERO;
  }
}

function neg(a){
  var newHigh, newLow;
  if (eq(a, ($clinit_213() , MIN_VALUE))) {
    return MIN_VALUE;
  }
  newHigh = -a[1];
  newLow = -a[0];
  if (newLow > 4294967295) {
    newLow -= 4294967296;
    newHigh += 4294967296;
  }
  if (newLow < 0) {
    newLow += 4294967296;
    newHigh -= 4294967296;
  }
  return [newLow, newHigh];
}

function pwrAsDouble(n){
  if (n <= 30) {
    return 1 << n;
  }
   else {
    return pwrAsDouble(30) * pwrAsDouble(n - 30);
  }
}

function shl(a, n){
  var diff, newHigh, newLow, twoToN;
  n &= 63;
  if (eq(a, ($clinit_213() , MIN_VALUE))) {
    if (n == 0) {
      return a;
    }
     else {
      return ZERO;
    }
  }
  if (a[1] < 0) {
    return neg(shl(neg(a), n));
  }
  twoToN = pwrAsDouble(n);
  newHigh = a[1] * twoToN % 1.8446744073709552E19;
  newLow = a[0] * twoToN;
  diff = newLow - newLow % 4294967296;
  newHigh += diff;
  newLow -= diff;
  newHigh >= 9223372036854775807 && (newHigh -= 1.8446744073709552E19);
  return [newLow, newHigh];
}

function shr(a, n){
  var newHigh, newLow, shiftFact;
  n &= 63;
  shiftFact = pwrAsDouble(n);
  newHigh = Math.floor(a[1] / shiftFact);
  newLow = Math.floor(a[0] / shiftFact);
  return create_0(newLow, newHigh);
}

function shru(a, n){
  var sr;
  n &= 63;
  sr = shr(a, n);
  a[1] < 0 && (sr = add_0(sr, shl(($clinit_213() , TWO), 63 - n)));
  return sr;
}

function sub(a, b){
  var newHigh, newLow;
  newHigh = a[1] - b[1];
  newLow = a[0] - b[0];
  return create_0(newLow, newHigh);
}

function toDoubleRoundDown(a){
  var diff, magnitute, toSubtract;
  magnitute = round_int(Math.log(a[1]) / ($clinit_213() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toSubtract = (1 << diff) - 1;
    return a[1] + (a[0] - toSubtract);
  }
}

function toDoubleRoundUp(a){
  var diff, magnitute, toAdd;
  magnitute = round_int(Math.log(a[1]) / ($clinit_213() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toAdd = (1 << diff) - 1;
    return a[1] + (a[0] + toAdd);
  }
}

function toString_13(a){
  var digits, rem, remDivTenPower, res, tenPowerLong, zeroesNeeded;
  if (a[0] == 0 && a[1] == 0) {
    return '0';
  }
  if (eq(a, ($clinit_213() , MIN_VALUE))) {
    return '-9223372036854775808';
  }
  if (a[1] < 0) {
    return '-' + toString_13(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem[0] == 0 && rem[1] == 0)) {
    tenPowerLong = fromInt(1000000000);
    remDivTenPower = div_0(rem, tenPowerLong);
    digits = '' + lowBits_0(sub(rem, mul(remDivTenPower, tenPowerLong)));
    rem = remDivTenPower;
    if (!(rem[0] == 0 && rem[1] == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; --zeroesNeeded) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) ^ ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) ^ lowBits_0(b));
}

function $clinit_212(){
  $clinit_212 = nullMethod;
  boxedValues = initDim(_3_3D_classLit, 152, 59, 256, 0);
}

var boxedValues;
function $clinit_213(){
  $clinit_213 = nullMethod;
  LN_2 = Math.log(2);
  MAX_VALUE = P7fffffffffffffff_longLit;
  MIN_VALUE = N8000000000000000_longLit;
  NEG_ONE = fromInt(-1);
  ONE = fromInt(1);
  TWO = fromInt(2);
  TWO_PWR_24 = P1000000_longLit;
  ZERO = fromInt(0);
}

var LN_2, MAX_VALUE, MIN_VALUE, NEG_ONE, ONE, TWO, TWO_PWR_24, ZERO;
function attachToDom(element){
  var origParent, origSibling, parent_0;
  ensureHiddenDiv();
  origParent = (parent_0 = ($clinit_101() , element).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  origSibling = $getNextSiblingElement(element);
  hiddenDiv.appendChild(element);
  return $UiBinderUtil$TempAttachment(new UiBinderUtil$TempAttachment, origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = ($clinit_101() , $doc).createElement('div');
    hiddenDiv.style.display = 'none';
    ($clinit_289() , $doc.body).appendChild(hiddenDiv);
  }
}

function orphan(node){
  node.parentNode.removeChild(node);
}

var hiddenDiv = null;
function $UiBinderUtil$TempAttachment(this$static, origParent, origSibling, element){
  this$static.origParent = origParent;
  this$static.origSibling = origSibling;
  this$static.element = element;
  return this$static;
}

function getClass_111(){
  return Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit;
}

function UiBinderUtil$TempAttachment(){
}

_ = UiBinderUtil$TempAttachment.prototype = new Object_0;
_.getClass$ = getClass_111;
_.typeId$ = 0;
_.element = null;
_.origParent = null;
_.origSibling = null;
function $CommandCanceledException(this$static){
  $fillInStackTrace_1(this$static);
  return this$static;
}

function getClass_112(){
  return Lcom_google_gwt_user_client_CommandCanceledException_2_classLit;
}

function CommandCanceledException(){
}

_ = CommandCanceledException.prototype = new RuntimeException;
_.getClass$ = getClass_112;
_.typeId$ = 52;
function $CommandExecutor(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1, this$static);
  this$static.commands = $ArrayList(new ArrayList);
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2, this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator, this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd, ex, ueh;
  cmd = $getLast(this$static.iterator);
  $remove_1(this$static.iterator);
  ex = null;
  cmd != null && canCast(cmd.typeId$, 66) && (ex = $CommandCanceledException(new CommandCanceledException, dynamicCast(cmd, 66)));
  if (ex) {
    ueh = sUncaughtExceptionHandler;
    if (ueh) {
      $clinit_24();
      $fatal(impl, 'Uncaught Exception:', ex);
    }
  }
  this$static.executing = false;
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var command, element, wasCanceled;
  wasCanceled = false;
  try {
    this$static.executing = true;
    this$static.iterator.end = this$static.commands.size;
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      try {
        if (element == null) {
          return;
        }
        if (element != null && canCast(element.typeId$, 66)) {
          command = dynamicCast(element, 66);
          command.execute();
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        if (wasCanceled) {
          return;
        }
        $remove_1(this$static.iterator);
      }
      if ((new Date).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel(this$static.cancellationTimer);
      this$static.executing = false;
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (this$static.commands.size != 0 && !this$static.executionTimerPending && !this$static.executing) {
    this$static.executionTimerPending = true;
    $schedule(this$static.executionTimer, 1);
  }
}

function $submit(this$static, command){
  $add_7(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function getClass_113(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0;
_.getClass$ = getClass_113;
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_224(){
  $clinit_224 = nullMethod;
  $clinit_3();
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_224();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_114(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}

function run_1(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1.prototype = new Timer;
_.getClass$ = getClass_114;
_.run = run_1;
_.typeId$ = 53;
_.this$0 = null;
function $clinit_225(){
  $clinit_225 = nullMethod;
  $clinit_3();
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_225();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_115(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}

function run_2(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, (new Date).getTime());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer;
_.getClass$ = getClass_115;
_.run = run_2;
_.typeId$ = 54;
_.this$0 = null;
function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getLast(this$static){
  return $get_5(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get_5(this$static.this$0.commands, this$static.next++);
  this$static.next >= this$static.end && (this$static.next = 0);
  return command;
}

function $remove_1(this$static){
  $remove_8(this$static.this$0.commands, this$static.last);
  --this$static.end;
  this$static.last <= this$static.next && --this$static.next < 0 && (this$static.next = 0);
  this$static.last = -1;
}

function getClass_116(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}

function hasNext(){
  return this.next < this.end;
}

function next_0(){
  return $next(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0;
_.getClass$ = getClass_116;
_.hasNext = hasNext;
_.next_0 = next_0;
_.typeId$ = 0;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function dispatchEvent_0(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(($clinit_101() , evt).type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function getParent(elem){
  var parent_0;
  return parent_0 = ($clinit_101() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem === captureElem && (captureElem = null);
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  captureElem = elem;
}

var currentEvent = null, sCaptureElem = null;
function $clinit_228(){
  $clinit_228 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor);
}

function addCommand(cmd){
  $clinit_228();
  if (!cmd) {
    throw $NullPointerException_0(new NullPointerException, 'cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function getClass_117(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}

function onClose(event_0){
  while (($clinit_3() , timers).size > 0) {
    $cancel(dynamicCast($get_5(timers, 0), 67));
  }
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0;
_.getClass$ = getClass_117;
_.onClose = onClose;
_.typeId$ = 55;
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_4?TYPE_4:(TYPE_4 = $GwtEvent$Type(new GwtEvent$Type)), handler);
}

function addHandler(type, handler){
  return $addHandler(getHandlers(), type, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_5 && (TYPE_5 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_5), handler);
}

function getHandlers(){
  !handlers && (handlers = $Window$WindowHandlers(new Window$WindowHandlers));
  return handlers;
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = ($clinit_232() , new Window$ClosingEvent);
    !!handlers && $fireEvent_0(handlers, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width;
  if (resizeHandlersInitialized) {
    width = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width || lastResizeHeight != height) {
      lastResizeWidth = width;
      lastResizeHeight = height;
      fire_1(getHandlers());
    }
  }
}

var closeHandlersInitialized = false, handlers = null, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_232(){
  $clinit_232 = nullMethod;
  TYPE_6 = $GwtEvent$Type(new GwtEvent$Type);
}

function dispatch_6(p0){
  throwClassCastExceptionUnlessNull(p0);
  null.nullMethod();
}

function getAssociatedType_7(){
  return TYPE_6;
}

function getClass_118(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent.prototype = new GwtEvent;
_.dispatch = dispatch_6;
_.getAssociatedType = getAssociatedType_7;
_.getClass$ = getClass_118;
_.typeId$ = 0;
var TYPE_6;
function ensureParameterMap(){
  var kv, kvPair, kvPair$array, kvPair$index, kvPair$max, qs, queryString, regexp;
  if (!paramMap) {
    paramMap = $HashMap(new HashMap);
    queryString = $wnd.location.search;
    if (queryString != null && queryString.length > 1) {
      qs = queryString.substr(1, queryString.length - 1);
      for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
        kvPair = kvPair$array[kvPair$index];
        kv = $split(kvPair, '=', 2);
        kv.length > 1?$put_1(paramMap, kv[0], (throwIfNull('encodedURLComponent', kv[1]) , regexp = /\+/g , decodeURIComponent(kv[1].replace(regexp, '%20')))):$put_1(paramMap, kv[0], '');
      }
    }
  }
}

var paramMap = null;
function $Window$WindowHandlers(this$static){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = null;
  this$static.isReverseOrder = false;
  return this$static;
}

function getClass_119(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers.prototype = new HandlerManager;
_.getClass$ = getClass_119;
_.typeId$ = 56;
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function isMyListener(object){
  return !(object != null && object.typeMarker$ != nullMethod && object.typeId$ != 2) && object != null && canCast(object.typeId$, 39);
}

var eventSystemIsInitialized = false;
function $getChild(elem, index){
  var count = 0, child = elem.firstChild;
  while (child) {
    var next = child.nextSibling;
    if (child.nodeType == 1) {
      if (index == count)
        return child;
      ++count;
    }
    child = next;
  }
  return null;
}

function $getChildCount(elem){
  var count = 0, child = elem.firstChild;
  while (child) {
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return count;
}

function $initEventSystem(){
  dispatchCapturedMouseEvent = $entry(function(evt){
    if (dispatchCapturedEvent(evt)) {
      var cap = captureElem;
      if (cap && cap.__listener) {
        if (isMyListener(cap.__listener)) {
          dispatchEvent_0(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  );
  dispatchCapturedEvent = $entry(function(evt){
    return true;
  }
  );
  dispatchEvent_1 = $entry(function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    curElem && curElem.nodeType != 1 && (curElem = null);
    listener && isMyListener(listener) && dispatchEvent_0(evt, curElem, listener);
  }
  );
  $wnd.addEventListener('click', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('dblclick', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousedown', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseup', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousemove', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseover', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseout', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousewheel', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('keydown', dispatchCapturedEvent, true);
  $wnd.addEventListener('keyup', dispatchCapturedEvent, true);
  $wnd.addEventListener('keypress', dispatchCapturedEvent, true);
}

function $insertChild(parent_0, toAdd, index){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchEvent_1:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?dispatchEvent_1:null);
}

var captureElem = null, dispatchCapturedEvent = null, dispatchCapturedMouseEvent = null, dispatchEvent_1 = null;
function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = $wnd.__captureElem;
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
  $wnd.addEventListener('DOMMouseScroll', dispatchCapturedMouseEvent, true);
}

function $sinkEvents_0(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & 131072 && elem.addEventListener('DOMMouseScroll', dispatchEvent_1, false);
}

function $ElementMapperImpl(this$static){
  this$static.uiObjectList = $ArrayList(new ArrayList);
  return this$static;
}

function $get_3(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  if (index < 0) {
    return null;
  }
  return dynamicCast($get_5(this$static.uiObjectList, index), 51);
}

function $put_0(this$static, uiObject){
  var index;
  if (!this$static.freeList) {
    index = this$static.uiObjectList.size;
    $add_7(this$static.uiObjectList, uiObject);
  }
   else {
    index = this$static.freeList.index_0;
    $set_1(this$static.uiObjectList, index, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  uiObject.element['__uiObjectID'] = index;
}

function $removeByElement(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  elem['__uiObjectID'] = null;
  $set_1(this$static.uiObjectList, index, null);
  this$static.freeList = $ElementMapperImpl$FreeNode(new ElementMapperImpl$FreeNode, index, this$static.freeList);
}

function getClass_120(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit;
}

function ElementMapperImpl(){
}

_ = ElementMapperImpl.prototype = new Object_0;
_.getClass$ = getClass_120;
_.typeId$ = 0;
_.freeList = null;
function $ElementMapperImpl$FreeNode(this$static, index, next){
  this$static.index_0 = index;
  this$static.next = next;
  return this$static;
}

function getClass_121(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit;
}

function ElementMapperImpl$FreeNode(){
}

_ = ElementMapperImpl$FreeNode.prototype = new Object_0;
_.getClass$ = getClass_121;
_.typeId$ = 0;
_.index_0 = 0;
_.next = null;
function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_0(getHandlers());
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function $add_2(this$static, w){
  $add(this$static, w, this$static.element);
}

function $add_3(this$static, w, left, top_0){
  var beforeIndex;
  $removeFromParent(w);
  beforeIndex = this$static.children.size;
  this$static.setWidgetPositionImpl(w, left, top_0);
  $insert(this$static, w, this$static.element, beforeIndex, true);
}

function $checkWidgetParent(this$static, w){
  if (w.parent_0 != this$static) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Widget must be a child of this panel.');
  }
}

function $setWidgetPosition(this$static, w, left, top_0){
  $checkWidgetParent(this$static, w);
  this$static.setWidgetPositionImpl(w, left, top_0);
}

function $setWidgetPositionImpl(w, left, top_0){
  var h;
  h = w.element;
  if (left == -1 && top_0 == -1) {
    changeToStaticPositioning(h);
  }
   else {
    h.style['position'] = 'absolute';
    h.style['left'] = left + 'px';
    h.style['top'] = top_0 + 'px';
  }
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function getClass_122(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}

function remove_2(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function setWidgetPositionImpl(w, left, top_0){
  $setWidgetPositionImpl(w, left, top_0);
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel;
_.getClass$ = getClass_122;
_.remove = remove_2;
_.setWidgetPositionImpl = setWidgetPositionImpl;
_.typeId$ = 57;
function $clinit_243(){
  $clinit_243 = nullMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function $AttachDetachException(this$static, causes){
  $clinit_243();
  $Throwable(this$static, 'One or more exceptions caught, see full set in AttachDetachException#getCauses', causes.map.size == 0?null:dynamicCast(causes.toArray(initDim(_3Ljava_lang_Throwable_2_classLit, 151, 3, 0, 0)), 68)[0]);
  return this$static;
}

function getClass_123(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit;
}

function tryCommand(hasWidgets, c){
  var old;
  $clinit_243();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator_0(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 52);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 3)) {
        e = $e0;
        !caught && (caught = $HashSet(new HashSet));
        old = $put_1(caught.map, e, caught);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw $AttachDetachException(new AttachDetachException, caught);
  }
}

function AttachDetachException(){
}

_ = AttachDetachException.prototype = new RuntimeException;
_.getClass$ = getClass_123;
_.typeId$ = 58;
var attachCommand, detachCommand;
function execute_6(w){
  w.onAttach();
}

function getClass_124(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit;
}

function AttachDetachException$1(){
}

_ = AttachDetachException$1.prototype = new Object_0;
_.execute_1 = execute_6;
_.getClass$ = getClass_124;
_.typeId$ = 0;
function execute_7(w){
  w.onDetach();
}

function getClass_125(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit;
}

function AttachDetachException$2(){
}

_ = AttachDetachException$2.prototype = new Object_0;
_.execute_1 = execute_7;
_.getClass$ = getClass_125;
_.typeId$ = 0;
function $clinit_247(){
  $clinit_247 = nullMethod;
  $clinit_306();
}

function $FocusWidget(this$static, elem){
  $clinit_247();
  this$static.element = elem;
  this$static.element.tabIndex = 0;
  return this$static;
}

function $setFocus(this$static, focused){
  focused?(this$static.element.focus() , undefined):(this$static.element.blur() , undefined);
}

function getClass_126(){
  return Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit;
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget;
_.getClass$ = getClass_126;
_.typeId$ = 59;
function $clinit_248(){
  $clinit_248 = nullMethod;
  $clinit_247();
}

function $ButtonBase(this$static, elem){
  $clinit_248();
  this$static.element = elem;
  this$static.element.tabIndex = 0;
  return this$static;
}

function getClass_127(){
  return Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit;
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget;
_.getClass$ = getClass_127;
_.typeId$ = 60;
function $clinit_249(){
  $clinit_249 = nullMethod;
  $clinit_248();
}

function $Button_0(this$static, html){
  var e;
  $clinit_249();
  $ButtonBase(this$static, (e = ($clinit_101() , $doc).createElement('BUTTON') , e.type = 'button' , e));
  this$static.element['className'] = 'gwt-Button';
  this$static.element.innerHTML = html || '';
  return this$static;
}

function getClass_128(){
  return Lcom_google_gwt_user_client_ui_Button_2_classLit;
}

function Button(){
}

_ = Button.prototype = new ButtonBase;
_.getClass$ = getClass_128;
_.typeId$ = 61;
function $CaptionPanel(this$static){
  var fieldSet;
  fieldSet = ($clinit_101() , $doc).createElement('fieldset');
  $initWidget(this$static, $SimplePanel(new SimplePanel, fieldSet));
  this$static.legend = $doc.createElement('legend');
  fieldSet.appendChild(this$static.legend);
  $setCaption_0(this$static.element, this$static.legend, '', false);
  return this$static;
}

function getClass_129(){
  return Lcom_google_gwt_user_client_ui_CaptionPanel_2_classLit;
}

function iterator_2(){
  return $SimplePanel$1(new SimplePanel$1, dynamicCast(this.widget, 11));
}

function remove_3(w){
  return $remove_0(dynamicCast(this.widget, 11), w);
}

function CaptionPanel(){
}

_ = CaptionPanel.prototype = new Composite;
_.getClass$ = getClass_129;
_.iterator_0 = iterator_2;
_.remove = remove_3;
_.typeId$ = 62;
_.legend = null;
function $setCaption_0(fieldset, legend, caption, asHTML){
  fieldset.style['display'] = 'none';
  asHTML?(legend.innerHTML = caption || '' , undefined):(($clinit_101() , legend).textContent = caption || '' , undefined);
  $equals_1('', caption)?!!legend.parentNode && fieldset.removeChild(legend):fieldset.insertBefore(legend, fieldset.firstChild);
  fieldset.style['display'] = '';
}

function $clinit_253(){
  $clinit_253 = nullMethod;
  DEFAULT_ROW_STYLENAMES = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['top', 'middle', 'bottom']);
}

function $DecoratorPanel(this$static){
  $clinit_253();
  $DecoratorPanel_0(this$static, DEFAULT_ROW_STYLENAMES, 1);
  return this$static;
}

function $DecoratorPanel_0(this$static, rowStyles, containerIndex){
  var i, row, table, trElem;
  $clinit_253();
  this$static.element = ($clinit_101() , $doc).createElement('table');
  table = this$static.element;
  this$static.tbody = $doc.createElement('tbody');
  table.appendChild(this$static.tbody);
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; ++i) {
    row = (trElem = $doc.createElement('tr') , trElem['className'] = rowStyles[i] , $clinit_182() , trElem.appendChild(createTD(rowStyles[i] + 'Left')) , trElem.appendChild(createTD(rowStyles[i] + 'Center')) , trElem.appendChild(createTD(rowStyles[i] + 'Right')) , trElem);
    this$static.tbody.appendChild(row);
    i == containerIndex && (this$static.containerElem = $getFirstChildElement($getChild(row, 1)));
  }
  this$static.element['className'] = 'gwt-DecoratorPanel';
  return this$static;
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = ($clinit_101() , $doc).createElement('td');
  inner = $doc.createElement('div');
  tdElem.appendChild(inner);
  tdElem['className'] = styleName;
  inner['className'] = styleName + 'Inner';
  return tdElem;
}

function getClass_130(){
  return Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit;
}

function getContainerElement_1(){
  return this.containerElem;
}

function DecoratorPanel(){
}

_ = DecoratorPanel.prototype = new SimplePanel;
_.getClass$ = getClass_130;
_.getContainerElement = getContainerElement_1;
_.typeId$ = 63;
_.containerElem = null;
_.tbody = null;
var DEFAULT_ROW_STYLENAMES;
function getClass_131(){
  return Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit;
}

function DockPanel$DockLayoutConstant(){
}

_ = DockPanel$DockLayoutConstant.prototype = new Object_0;
_.getClass$ = getClass_131;
_.typeId$ = 0;
function $DockPanel$LayoutData(this$static, dir){
  this$static.hAlign = ($clinit_272() , ALIGN_DEFAULT).textAlignString;
  this$static.vAlign = ($clinit_276() , ALIGN_TOP).verticalAlignString;
  this$static.direction_0 = dir;
  return this$static;
}

function getClass_132(){
  return Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit;
}

function DockPanel$LayoutData(){
}

_ = DockPanel$LayoutData.prototype = new Object_0;
_.getClass$ = getClass_132;
_.typeId$ = 0;
_.direction_0 = null;
_.td = null;
function getClass_133(){
  return Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit;
}

function DockPanel$TmpRow(){
}

_ = DockPanel$TmpRow.prototype = new Object_0;
_.getClass$ = getClass_133;
_.typeId$ = 64;
_.center = 0;
_.tr = null;
function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.bodyElem.rows.length;
  if (row >= rowSize || row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(($clinit_101() , td));
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_3(this$static.widgetMap, maybeChild), 52));
  if (widget) {
    $remove_2(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = '' , undefined);
    return false;
  }
}

function $remove_2(this$static, widget){
  var elem, parent_0;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = widget.element;
    (parent_0 = ($clinit_101() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $setColumnFormatter(this$static, formatter){
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setWidget_0(this$static, row, column, widget){
  var td, td_0;
  $prepareCell(this$static, row, column);
  if (widget) {
    $removeFromParent(widget);
    td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, true) , td_0);
    $put_0(this$static.widgetMap, widget);
    td.appendChild(widget.element);
    $setParent(widget, this$static);
  }
}

function getClass_134(){
  return Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit;
}

function iterator_3(){
  return $HTMLTable$1(new HTMLTable$1, this);
}

function remove_4(widget){
  return $remove_2(this, widget);
}

function HTMLTable(){
}

_ = HTMLTable.prototype = new Panel;
_.getClass$ = getClass_134;
_.iterator_0 = iterator_3;
_.remove = remove_4;
_.typeId$ = 65;
_.bodyElem = null;
_.cellFormatter = null;
_.columnFormatter = null;
_.rowFormatter = null;
_.tableElem = null;
function $FlexTable(this$static){
  this$static.widgetMap = $ElementMapperImpl(new ElementMapperImpl);
  this$static.tableElem = ($clinit_101() , $doc).createElement('table');
  this$static.bodyElem = $doc.createElement('tbody');
  this$static.tableElem.appendChild(this$static.bodyElem);
  this$static.element = this$static.tableElem;
  this$static.cellFormatter = $FlexTable$FlexCellFormatter(new FlexTable$FlexCellFormatter, this$static);
  this$static.rowFormatter = $HTMLTable$RowFormatter(new HTMLTable$RowFormatter, this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter, this$static));
  return this$static;
}

function $prepareCell(this$static, row, column){
  var cellCount, required;
  $prepareRow(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length);
  required = column + 1 - cellCount;
  required > 0 && addCells(this$static.bodyElem, row, required);
}

function $prepareRow(this$static, row){
  var i, rowCount, tr;
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot create a row with a negative index: ' + row);
  }
  rowCount = this$static.bodyElem.rows.length;
  for (i = rowCount; i <= row; ++i) {
    i != this$static.bodyElem.rows.length && $checkRowBounds(this$static, i);
    tr = ($clinit_101() , $doc).createElement('tr');
    $insertChild(this$static.bodyElem, tr, i);
  }
}

function addCells(table, row, num){
  var rowElem = table.rows[row];
  for (var i = 0; i < num; i++) {
    var cell = $doc.createElement('td');
    rowElem.appendChild(cell);
  }
}

function getClass_135(){
  return Lcom_google_gwt_user_client_ui_FlexTable_2_classLit;
}

function FlexTable(){
}

_ = FlexTable.prototype = new HTMLTable;
_.getClass$ = getClass_135;
_.typeId$ = 66;
function getClass_136(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit;
}

function HTMLTable$CellFormatter(){
}

_ = HTMLTable$CellFormatter.prototype = new Object_0;
_.getClass$ = getClass_136;
_.typeId$ = 0;
_.this$0 = null;
function $FlexTable$FlexCellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_137(){
  return Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit;
}

function FlexTable$FlexCellFormatter(){
}

_ = FlexTable$FlexCellFormatter.prototype = new HTMLTable$CellFormatter;
_.getClass$ = getClass_137;
_.typeId$ = 0;
function $clinit_261(){
  $clinit_261 = nullMethod;
  impl_0 = ($clinit_306() , $clinit_306() , implPanel);
}

function $FocusPanel(this$static){
  $clinit_261();
  this$static.element = $createFocusable(impl_0);
  return this$static;
}

function getClass_138(){
  return Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit;
}

function FocusPanel(){
}

_ = FocusPanel.prototype = new SimplePanel;
_.getClass$ = getClass_138;
_.typeId$ = 67;
var impl_0;
function $Label(this$static, text, wordWrap){
  this$static.element = ($clinit_101() , $doc).createElement('div');
  this$static.element['className'] = 'gwt-Label';
  this$static.element.textContent = text || '';
  this$static.element.style['whiteSpace'] = wordWrap?'normal':'nowrap';
  return this$static;
}

function getClass_139(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}

function Label(){
}

_ = Label.prototype = new Widget;
_.getClass$ = getClass_139;
_.typeId$ = 68;
function $HTML(this$static){
  this$static.element = ($clinit_101() , $doc).createElement('div');
  this$static.element['className'] = 'gwt-HTML';
  return this$static;
}

function $HTML_0(this$static, html){
  $HTML(this$static);
  this$static.element.innerHTML = html || '';
  return this$static;
}

function $setHTML(this$static, html){
  this$static.element.innerHTML = html || '';
}

function getClass_140(){
  return Lcom_google_gwt_user_client_ui_HTML_2_classLit;
}

function HTML(){
}

_ = HTML.prototype = new Label;
_.getClass$ = getClass_140;
_.typeId$ = 69;
function $HTMLPanel(this$static, html){
  this$static.children = $WidgetCollection(new WidgetCollection, this$static);
  this$static.element = ($clinit_101() , $doc).createElement('div');
  this$static.element.innerHTML = html || '';
  return this$static;
}

function getClass_141(){
  return Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit;
}

function HTMLPanel(){
}

_ = HTMLPanel.prototype = new ComplexPanel;
_.getClass$ = getClass_141;
_.typeId$ = 70;
function $HTMLTable$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.widgetList = this$static.this$0.widgetMap.uiObjectList;
  $findNext(this$static);
  return this$static;
}

function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.size) {
    if ($get_5(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next_0(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.size) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  result = dynamicCast($get_5(this$static.widgetList, this$static.nextIndex), 52);
  $findNext(this$static);
  return result;
}

function getClass_142(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit;
}

function hasNext_0(){
  return this.nextIndex < this.widgetList.size;
}

function next_1(){
  return $next_0(this);
}

function HTMLTable$1(){
}

_ = HTMLTable$1.prototype = new Object_0;
_.getClass$ = getClass_142;
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.typeId$ = 0;
_.nextIndex = -1;
_.this$0 = null;
function $HTMLTable$ColumnFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_101() , $doc).createElement('colgroup');
    $insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    this$static.columnGroup.appendChild($doc.createElement('col'));
  }
}

function getClass_143(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit;
}

function HTMLTable$ColumnFormatter(){
}

_ = HTMLTable$ColumnFormatter.prototype = new Object_0;
_.getClass$ = getClass_143;
_.typeId$ = 0;
_.columnGroup = null;
_.this$0 = null;
function $HTMLTable$RowFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $setStylePrimaryName_0(this$static, row, styleName){
  setStylePrimaryName(($prepareRow(this$static.this$0, row) , this$static.this$0.bodyElem.rows[row]), styleName);
}

function getClass_144(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit;
}

function HTMLTable$RowFormatter(){
}

_ = HTMLTable$RowFormatter.prototype = new Object_0;
_.getClass$ = getClass_144;
_.typeId$ = 0;
_.this$0 = null;
function $clinit_272(){
  $clinit_272 = nullMethod;
  ALIGN_CENTER = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'center');
  ALIGN_LEFT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'left');
  ALIGN_RIGHT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'right');
  ALIGN_DEFAULT = ($clinit_182() , ALIGN_LEFT);
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_RIGHT;
function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  this$static.textAlignString = textAlignString;
  return this$static;
}

function getClass_145(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_145;
_.typeId$ = 0;
_.textAlignString = null;
function $clinit_276(){
  $clinit_276 = nullMethod;
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'bottom');
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'middle');
  ALIGN_TOP = $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'top');
}

var ALIGN_TOP;
function $HasVerticalAlignment$VerticalAlignmentConstant(this$static, verticalAlignString){
  this$static.verticalAlignString = verticalAlignString;
  return this$static;
}

function getClass_146(){
  return Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_146;
_.typeId$ = 0;
_.verticalAlignString = null;
function $HorizontalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_272() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_276() , ALIGN_TOP);
  this$static.tableRow = ($clinit_101() , $doc).createElement('tr');
  this$static.body_0.appendChild(this$static.tableRow);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_4(this$static, w){
  var td;
  td = $createAlignedTd(this$static);
  this$static.tableRow.appendChild(td);
  $removeFromParent(w);
  $add_6(this$static.children, w);
  td.appendChild(w.element);
  $setParent(w, this$static);
}

function $createAlignedTd(this$static){
  var td;
  td = ($clinit_101() , $doc).createElement('td');
  td['align'] = this$static.horzAlign.textAlignString;
  td.style['verticalAlign'] = this$static.vertAlign.verticalAlignString;
  return td;
}

function getClass_147(){
  return Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit;
}

function remove_5(w){
  var removed, td;
  td = getParent(w.element);
  removed = $remove(this, w);
  removed && this.tableRow.removeChild(td);
  return removed;
}

function HorizontalPanel(){
}

_ = HorizontalPanel.prototype = new CellPanel;
_.getClass$ = getClass_147;
_.remove = remove_5;
_.typeId$ = 71;
_.tableRow = null;
function $clinit_281(){
  $clinit_281 = nullMethod;
  $clearImpl(new HashMap);
}

function $Image(this$static, url){
  $clinit_281();
  $Image$UnclippedState_0(new Image$UnclippedState, this$static, url);
  this$static.element['className'] = 'gwt-Image';
  return this$static;
}

function getClass_148(){
  return Lcom_google_gwt_user_client_ui_Image_2_classLit;
}

function Image_0(){
}

_ = Image_0.prototype = new Widget;
_.getClass$ = getClass_148;
_.typeId$ = 72;
function getClass_149(){
  return Lcom_google_gwt_user_client_ui_Image$State_2_classLit;
}

function Image$State(){
}

_ = Image$State.prototype = new Object_0;
_.getClass$ = getClass_149;
_.typeId$ = 0;
function $Image$UnclippedState_0(this$static, image, url){
  $replaceElement_0(image, ($clinit_101() , $doc).createElement('img'));
  $sinkEvents_0(image.element, 32768);
  $sinkEvents(image, 229501);
  image.element.src = url;
  return this$static;
}

function getClass_150(){
  return Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit;
}

function Image$UnclippedState(){
}

_ = Image$UnclippedState.prototype = new Image$State;
_.getClass$ = getClass_150;
_.typeId$ = 0;
function $clinit_286(){
  $clinit_286 = nullMethod;
  $clinit_247();
}

function $ListBox(this$static){
  var select;
  $clinit_286();
  $FocusWidget(this$static, (select = ($clinit_101() , $doc).createElement('select') , select));
  this$static.element['className'] = 'gwt-ListBox';
  return this$static;
}

function $checkIndex(this$static, index){
  if (index < 0 || index >= ($clinit_101() , this$static.element).options.length) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
}

function $getValue_0(this$static, index){
  $checkIndex(this$static, index);
  return ($clinit_101() , this$static.element).options[index].value;
}

function $insertItem(this$static, item, value, index){
  var before, option, select;
  select = this$static.element;
  option = ($clinit_101() , $doc).createElement('option');
  option.text = item;
  option.value = value;
  if (index == -1 || index == select.options.length) {
    select.add(option, null);
  }
   else {
    before = select.options[index];
    select.add(option, before);
  }
}

function getClass_151(){
  return Lcom_google_gwt_user_client_ui_ListBox_2_classLit;
}

function ListBox(){
}

_ = ListBox.prototype = new FocusWidget;
_.getClass$ = getClass_151;
_.typeId$ = 73;
function $clinit_289(){
  $clinit_289 = nullMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = $HashMap(new HashMap);
  widgetsToDetach = $HashSet(new HashSet);
}

function $RootPanel(this$static, elem){
  $clinit_289();
  this$static.children = $WidgetCollection(new WidgetCollection, this$static);
  this$static.element = elem;
  $onAttach(this$static);
  return this$static;
}

function detachNow(widget){
  $clinit_289();
  try {
    widget.onDetach();
  }
   finally {
    $remove_6(widgetsToDetach.map, widget) != null;
  }
}

function detachWidgets(){
  $clinit_289();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $clearImpl(widgetsToDetach.map);
    $clearImpl(rootPanels);
  }
}

function get_0(id){
  $clinit_289();
  var elem, rp;
  rp = dynamicCast($get_4(rootPanels, id), 69);
  elem = null;
  if (id != null) {
    if (!(elem = $doc.getElementById(id))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || rp.element == elem) {
      return rp;
    }
  }
  if (rootPanels.size == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_182();
  }
  !elem?(rp = $RootPanel$DefaultRootPanel(new RootPanel$DefaultRootPanel)):(rp = $RootPanel(new RootPanel, elem));
  $put_1(rootPanels, id, rp);
  $add_9(widgetsToDetach, rp);
  return rp;
}

function getClass_152(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel;
_.getClass$ = getClass_152;
_.typeId$ = 74;
var maybeDetachCommand, rootPanels, widgetsToDetach;
function execute_8(w){
  w.isAttached() && w.onDetach();
}

function getClass_153(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}

function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0;
_.execute_1 = execute_8;
_.getClass$ = getClass_153;
_.typeId$ = 0;
function getClass_154(){
  return Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit;
}

function onClose_0(closeEvent){
  detachWidgets();
}

function RootPanel$2(){
}

_ = RootPanel$2.prototype = new Object_0;
_.getClass$ = getClass_154;
_.onClose = onClose_0;
_.typeId$ = 75;
function $clinit_292(){
  $clinit_292 = nullMethod;
  $clinit_289();
}

function $RootPanel$DefaultRootPanel(this$static){
  $clinit_292();
  $RootPanel(this$static, $doc.body);
  return this$static;
}

function getClass_155(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}

function setWidgetPositionImpl_0(w, left, top_0){
  var style, style_0;
  left -= (style = $wnd.getComputedStyle(($clinit_101() , $doc).documentElement, '') , parseInt(style.marginLeft) + parseInt(style.borderLeftWidth));
  top_0 -= (style_0 = $wnd.getComputedStyle($doc.documentElement, '') , parseInt(style_0.marginTop) + parseInt(style_0.borderTopWidth));
  $setWidgetPositionImpl(w, left, top_0);
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel.prototype = new RootPanel;
_.getClass$ = getClass_155;
_.setWidgetPositionImpl = setWidgetPositionImpl_0;
_.typeId$ = 76;
function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.hasElement = !!this$static.this$0.widget;
  return this$static;
}

function $next_1(this$static){
  if (!this$static.hasElement || !this$static.this$0.widget) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.this$0.widget;
}

function getClass_156(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}

function hasNext_1(){
  return this.hasElement;
}

function next_2(){
  return $next_1(this);
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0;
_.getClass$ = getClass_156;
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.typeId$ = 0;
_.this$0 = null;
function $VerticalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_272() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_276() , ALIGN_TOP);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_5(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_101() , $doc).createElement('tr');
  td = (td_0 = $doc.createElement('td') , td_0['align'] = this$static.horzAlign.textAlignString , td_0.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , td_0);
  tr.appendChild(td);
  this$static.body_0.appendChild(tr);
  $removeFromParent(w);
  $add_6(this$static.children, w);
  td.appendChild(w.element);
  $setParent(w, this$static);
}

function getClass_157(){
  return Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit;
}

function remove_6(w){
  var removed, td, parent_1;
  td = getParent(w.element);
  removed = $remove(this, w);
  removed && this.body_0.removeChild((parent_1 = ($clinit_101() , td).parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1));
  return removed;
}

function VerticalPanel(){
}

_ = VerticalPanel.prototype = new CellPanel;
_.getClass$ = getClass_157;
_.remove = remove_6;
_.typeId$ = 77;
function $WidgetCollection(this$static, parent_0){
  this$static.parent_0 = parent_0;
  this$static.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 140, 52, 4, 0);
  return this$static;
}

function $add_6(this$static, w){
  $insert_0(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_0(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 140, 52, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_3(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_4(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  $remove_3(this$static, index);
}

function getClass_158(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}

function iterator_4(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this);
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0;
_.getClass$ = getClass_158;
_.iterator_0 = iterator_4;
_.typeId$ = 0;
_.array = null;
_.parent_0 = null;
_.size = 0;
function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $next_2(this$static){
  if (this$static.index_0 >= this$static.this$0.size) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  return this$static.this$0.array[++this$static.index_0];
}

function $remove_5(this$static){
  if (this$static.index_0 < 0 || this$static.index_0 >= this$static.this$0.size) {
    throw $IllegalStateException(new IllegalStateException);
  }
  this$static.this$0.parent_0.remove(this$static.this$0.array[this$static.index_0--]);
}

function getClass_159(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}

function hasNext_2(){
  return this.index_0 < this.this$0.size - 1;
}

function next_3(){
  return $next_2(this);
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0;
_.getClass$ = getClass_159;
_.hasNext = hasNext_2;
_.next_0 = next_3;
_.typeId$ = 0;
_.index_0 = -1;
_.this$0 = null;
function $clinit_306(){
  $clinit_306 = nullMethod;
  implPanel = $FocusImplStandard(new FocusImplStandard);
  implPanel?($clinit_306() , new FocusImpl):implPanel;
}

function getClass_160(){
  return Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit;
}

function FocusImpl(){
}

_ = FocusImpl.prototype = new Object_0;
_.getClass$ = getClass_160;
_.typeId$ = 0;
var implPanel;
function $clinit_307(){
  $clinit_307 = nullMethod;
  $clinit_306();
}

function $FocusImplStandard(this$static){
  $clinit_307();
  this$static.focusHandler = $createFocusHandler();
  return this$static;
}

function $createFocusHandler(){
  return function(evt){
    var div = this.parentNode;
    div.onfocus && $wnd.setTimeout(function(){
      div.focus();
    }
    , 0);
  }
  ;
}

function $createFocusable(this$static){
  var div = $doc.createElement('div');
  div.tabIndex = 0;
  var input = $doc.createElement('input');
  input.type = 'text';
  input.tabIndex = -1;
  input.style.opacity = 0;
  input.style.height = '1px';
  input.style.width = '1px';
  input.style.zIndex = -1;
  input.style.overflow = 'hidden';
  input.style.position = 'absolute';
  input.addEventListener('focus', this$static.focusHandler, false);
  div.appendChild(input);
  return div;
}

function getClass_161(){
  return Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit;
}

function FocusImplStandard(){
}

_ = FocusImplStandard.prototype = new FocusImpl;
_.getClass$ = getClass_161;
_.typeId$ = 0;
function $ArithmeticException(this$static, explanation){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = explanation;
  return this$static;
}

function getClass_162(){
  return Ljava_lang_ArithmeticException_2_classLit;
}

function ArithmeticException(){
}

_ = ArithmeticException.prototype = new RuntimeException;
_.getClass$ = getClass_162;
_.typeId$ = 78;
function $ArrayStoreException(this$static){
  $fillInStackTrace_1(this$static);
  return this$static;
}

function getClass_163(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}

function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException;
_.getClass$ = getClass_163;
_.typeId$ = 79;
function $clinit_313(){
  $clinit_313 = nullMethod;
  $Boolean(new Boolean_0, false);
  $Boolean(new Boolean_0, true);
}

function $Boolean(this$static, value){
  $clinit_313();
  this$static.value_0 = value;
  return this$static;
}

function equals_5(o){
  return o != null && canCast(o.typeId$, 71) && dynamicCast(o, 71).value_0 == this.value_0;
}

function getClass_164(){
  return Ljava_lang_Boolean_2_classLit;
}

function hashCode_7(){
  return this.value_0?1231:1237;
}

function toString_15(){
  return this.value_0?'true':'false';
}

function Boolean_0(){
}

_ = Boolean_0.prototype = new Object_0;
_.equals$ = equals_5;
_.getClass$ = getClass_164;
_.hashCode$ = hashCode_7;
_.toString$ = toString_15;
_.typeId$ = 82;
_.value_0 = false;
function createForArray(packageName, className){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  clazz.modifiers = 4;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  return clazz;
}

function getClass_165(){
  return Ljava_lang_Class_2_classLit;
}

function toString_16(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}

function Class(){
}

_ = Class.prototype = new Object_0;
_.getClass$ = getClass_165;
_.toString$ = toString_16;
_.typeId$ = 0;
_.modifiers = 0;
_.typeName = null;
function $ClassCastException(this$static){
  $fillInStackTrace_1(this$static);
  return this$static;
}

function getClass_166(){
  return Ljava_lang_ClassCastException_2_classLit;
}

function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException;
_.getClass$ = getClass_166;
_.typeId$ = 83;
function __parseAndValidateDouble(s){
  var toReturn;
  toReturn = __parseDouble(s);
  if (isNaN(toReturn)) {
    throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseDouble(str){
  var floatRegex = floatRegex_0;
  !floatRegex && (floatRegex = floatRegex_0 = /^\s*[+-]?\d*\.?\d*([eE][+-]?\d+)?\s*$/i);
  if (floatRegex.test(str)) {
    return parseFloat(str);
  }
   else {
    return Number.NaN;
  }
}

function getClass_167(){
  return Ljava_lang_Number_2_classLit;
}

function Number_0(){
}

_ = Number_0.prototype = new Object_0;
_.getClass$ = getClass_167;
_.typeId$ = 84;
var floatRegex_0 = null;
function $Double(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function equals_6(o){
  return o != null && canCast(o.typeId$, 72) && dynamicCast(o, 72).value_0 == this.value_0;
}

function getClass_168(){
  return Ljava_lang_Double_2_classLit;
}

function hashCode_8(){
  return ~~Math.max(Math.min(this.value_0, 2147483647), -2147483648);
}

function toString_17(){
  return '' + this.value_0;
}

function Double(){
}

_ = Double.prototype = new Number_0;
_.equals$ = equals_6;
_.getClass$ = getClass_168;
_.hashCode$ = hashCode_8;
_.toString$ = toString_17;
_.typeId$ = 85;
_.value_0 = 0;
function $IllegalArgumentException(this$static){
  $fillInStackTrace_1(this$static);
  return this$static;
}

function $IllegalArgumentException_0(this$static, message){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = message;
  return this$static;
}

function getClass_169(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException;
_.getClass$ = getClass_169;
_.typeId$ = 86;
function $IllegalStateException(this$static){
  $fillInStackTrace_1(this$static);
  return this$static;
}

function $IllegalStateException_0(this$static, s){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = s;
  return this$static;
}

function getClass_170(){
  return Ljava_lang_IllegalStateException_2_classLit;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException;
_.getClass$ = getClass_170;
_.typeId$ = 87;
function $IndexOutOfBoundsException(this$static){
  $fillInStackTrace_1(this$static);
  return this$static;
}

function $IndexOutOfBoundsException_0(this$static, message){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = message;
  return this$static;
}

function getClass_171(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException;
_.getClass$ = getClass_171;
_.typeId$ = 88;
function $Integer(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function equals_7(o){
  return o != null && canCast(o.typeId$, 56) && dynamicCast(o, 56).value_0 == this.value_0;
}

function getClass_172(){
  return Ljava_lang_Integer_2_classLit;
}

function hashCode_9(){
  return this.value_0;
}

function toPowerOfTwoString(value, shift){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = ~~(32 / shift);
  bitMask = (1 << shift) - 1;
  buf = initDim(_3C_classLit, 108, -1, bufSize, 1);
  digits = ($clinit_329() , digits_0);
  pos = bufSize - 1;
  if (value >= 0) {
    while (value > bitMask) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
  buf[pos] = digits[value & bitMask];
  return __valueOf(buf, pos, bufSize);
}

function toString_18(){
  return '' + this.value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_325() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = $Integer(new Integer, i));
    return result;
  }
  return $Integer(new Integer, i);
}

function Integer(){
}

_ = Integer.prototype = new Number_0;
_.equals$ = equals_7;
_.getClass$ = getClass_172;
_.hashCode$ = hashCode_9;
_.toString$ = toString_18;
_.typeId$ = 89;
_.value_0 = 0;
function $clinit_325(){
  $clinit_325 = nullMethod;
  boxedValues_0 = initDim(_3Ljava_lang_Integer_2_classLit, 146, 56, 256, 0);
}

var boxedValues_0;
function floor(x){
  return Math.floor(x);
}

function max(x, y){
  return x > y?x:y;
}

function min_0(x, y){
  return x < y?x:y;
}

function $NullPointerException(this$static){
  $fillInStackTrace_1(this$static);
  return this$static;
}

function $NullPointerException_0(this$static, message){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = message;
  return this$static;
}

function getClass_173(){
  return Ljava_lang_NullPointerException_2_classLit;
}

function NullPointerException(){
}

_ = NullPointerException.prototype = new RuntimeException;
_.getClass$ = getClass_173;
_.typeId$ = 90;
function $clinit_329(){
  $clinit_329 = nullMethod;
  digits_0 = initValues(_3C_classLit, 108, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function $NumberFormatException(this$static, message){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = message;
  return this$static;
}

function getClass_174(){
  return Ljava_lang_NumberFormatException_2_classLit;
}

function NumberFormatException(){
}

_ = NumberFormatException.prototype = new IllegalArgumentException;
_.getClass$ = getClass_174;
_.typeId$ = 91;
function $StackTraceElement(this$static, className, methodName, fileName, lineNumber){
  this$static.className_0 = className;
  this$static.methodName = methodName;
  this$static.fileName = fileName;
  this$static.lineNumber = lineNumber;
  return this$static;
}

function getClass_175(){
  return Ljava_lang_StackTraceElement_2_classLit;
}

function toString_19(){
  return this.className_0 + '.' + this.methodName + '(' + this.fileName + ':' + this.lineNumber + ')';
}

function StackTraceElement(){
}

_ = StackTraceElement.prototype = new Object_0;
_.getClass$ = getClass_175;
_.toString$ = toString_19;
_.typeId$ = 92;
_.className_0 = null;
_.fileName = null;
_.lineNumber = 0;
_.methodName = null;
function $equals_1(this$static, other){
  if (!(other != null && canCast(other.typeId$, 1))) {
    return false;
  }
  return String(this$static) == other;
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = initDim(_3Ljava_lang_String_2_classLit, 150, 1, out.length, 0);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

function equals_8(other){
  return $equals_1(this, other);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + String.fromCharCode(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function getClass_176(){
  return Ljava_lang_String_2_classLit;
}

function hashCode_10(){
  return getHashCode_0(this);
}

function toString_20(){
  return this;
}

_ = String.prototype;
_.equals$ = equals_8;
_.getClass$ = getClass_176;
_.hashCode$ = hashCode_10;
_.toString$ = toString_20;
_.typeId$ = 2;
function $clinit_333(){
  $clinit_333 = nullMethod;
  back = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + str.charCodeAt(i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_333();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back, count_0 = 0, front;
function $StringBuffer(this$static){
  this$static.impl = new StringBufferImplAppend;
  return this$static;
}

function $StringBuffer_0(this$static){
  this$static.impl = new StringBufferImplAppend;
  return this$static;
}

function $append_2(this$static, x){
  this$static.impl.string += String.fromCharCode(x);
  return this$static;
}

function $append_3(this$static, x){
  this$static.impl.string += String.fromCharCode.apply(null, x);
  return this$static;
}

function $append_4(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function $append_5(this$static, x){
  this$static.impl.string += x;
  return this$static;
}

function $replace_0(this$static, start, end, toInsert){
  $replace(this$static.impl, start, end, toInsert);
  return this$static;
}

function getClass_177(){
  return Ljava_lang_StringBuffer_2_classLit;
}

function toString_21(){
  return this.impl.string;
}

function StringBuffer(){
}

_ = StringBuffer.prototype = new Object_0;
_.getClass$ = getClass_177;
_.toString$ = toString_21;
_.typeId$ = 93;
function $UnsupportedOperationException(this$static, message){
  $fillInStackTrace_1(this$static);
  this$static.detailMessage = message;
  return this$static;
}

function getClass_178(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException;
_.getClass$ = getClass_178;
_.typeId$ = 94;
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function $toString_5(this$static){
  var comma, iter, sb;
  sb = $StringBuffer(new StringBuffer);
  comma = null;
  sb.impl.string += '[';
  iter = this$static.iterator_0();
  while (iter.hasNext()) {
    comma != null?(sb.impl.string += comma , undefined):(comma = ', ');
    $append_5(sb, '' + iter.next_0());
  }
  sb.impl.string += ']';
  return sb.impl.string;
}

function add_1(o){
  throw $UnsupportedOperationException(new UnsupportedOperationException, 'Add not supported on this collection');
}

function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  return !!iter;
}

function getClass_179(){
  return Ljava_util_AbstractCollection_2_classLit;
}

function toArray(a){
  var i, it, result, size;
  size = this.size_0();
  a.length < size && (a = createFrom(a, size));
  result = a;
  it = this.iterator_0();
  for (i = 0; i < size; ++i) {
    setCheck(result, i, it.next_0());
  }
  a.length > size && setCheck(a, size, null);
  return a;
}

function toString_22(){
  return $toString_5(this);
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0;
_.add_0 = add_1;
_.contains = contains;
_.getClass$ = getClass_179;
_.toArray = toArray;
_.toString$ = toString_22;
_.typeId$ = 0;
function $keySet(this$static){
  var entrySet;
  entrySet = $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, this$static);
  return $AbstractMap$1(new AbstractMap$1, this$static, entrySet);
}

function equals_9(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === this) {
    return true;
  }
  if (!(obj != null && canCast(obj.typeId$, 74))) {
    return false;
  }
  otherMap = dynamicCast(obj, 74);
  if (dynamicCast(this, 74).size != otherMap.size) {
    return false;
  }
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, otherMap).this$0); $hasNext_3(entry$iterator.iter);) {
    entry = dynamicCast($next_5(entry$iterator.iter), 73);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?dynamicCast(this, 74).nullSlotLive:otherKey != null && canCast(otherKey.typeId$, 1)?$hasStringValue(dynamicCast(this, 74), dynamicCast(otherKey, 1)):$hasHashValue(dynamicCast(this, 74), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?dynamicCast(this, 74).nullSlot:otherKey != null && canCast(otherKey.typeId$, 1)?dynamicCast(this, 74).stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(dynamicCast(this, 74), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}

function getClass_180(){
  return Ljava_util_AbstractMap_2_classLit;
}

function hashCode_11(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, dynamicCast(this, 74)).this$0); $hasNext_3(entry$iterator.iter);) {
    entry = dynamicCast($next_5(entry$iterator.iter), 73);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function toString_23(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, dynamicCast(this, 74)).this$0); $hasNext_3(iter.iter);) {
    entry = dynamicCast($next_5(iter.iter), 73);
    comma?(s += ', '):(comma = true);
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0;
_.equals$ = equals_9;
_.getClass$ = getClass_180;
_.hashCode$ = hashCode_11;
_.toString$ = toString_23;
_.typeId$ = 0;
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add_0(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new_$_4(this$static, key.substring(1));
      dest.add_0(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey_0(this$static, key){
  return key == null?this$static.nullSlotLive:key != null && canCast(key.typeId$, 1)?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $get_4(this$static, key){
  return key == null?this$static.nullSlot:key != null && canCast(key.typeId$, 1)?this$static.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put_1(this$static, key, value){
  return key == null?$putNullSlot(this$static, value):key != null && canCast(key.typeId$, 1)?$putStringValue(this$static, dynamicCast(key, 1), value):$putHashValue(this$static, key, value, ~~hashCode__devirtual$(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = $MapEntryImpl(new MapEntryImpl, key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  key in stringMap?(result = stringMap[key]):++this$static.size;
  stringMap[key] = value;
  return result;
}

function $remove_6(this$static, key){
  return key == null?$removeNullSlot(this$static):key != null && canCast(key.typeId$, 1)?$removeStringValue(this$static, dynamicCast(key, 1)):$removeHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        array.length == 1?delete this$static.hashCodeMap[hashCode]:array.splice(i, 1);
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function $removeStringValue(this$static, key){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.size;
    delete stringMap[key];
  }
  return result;
}

function equalsBridge(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_181(){
  return Ljava_util_AbstractHashMap_2_classLit;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap;
_.equalsBridge = equalsBridge;
_.getClass$ = getClass_181;
_.typeId$ = 0;
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function equals_10(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 75))) {
    return false;
  }
  other = dynamicCast(o, 75);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator_0(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains(otherItem)) {
      return false;
    }
  }
  return true;
}

function getClass_182(){
  return Ljava_util_AbstractSet_2_classLit;
}

function hashCode_12(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator_0(); iter.hasNext();) {
    next = iter.next_0();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection;
_.equals$ = equals_10;
_.getClass$ = getClass_182;
_.hashCode$ = hashCode_12;
_.typeId$ = 95;
function $AbstractHashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $contains(this$static, o){
  var entry, key, value;
  if (o != null && canCast(o.typeId$, 73)) {
    entry = dynamicCast(o, 73);
    key = entry.getKey();
    if ($containsKey_0(this$static.this$0, key)) {
      value = $get_4(this$static.this$0, key);
      return $equals_2(entry.getValue(), value);
    }
  }
  return false;
}

function contains_0(o){
  return $contains(this, o);
}

function getClass_183(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}

function iterator_5(){
  return $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, this.this$0);
}

function size_0(){
  return this.this$0.size;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet.prototype = new AbstractSet;
_.contains = contains_0;
_.getClass$ = getClass_183;
_.iterator_0 = iterator_5;
_.size_0 = size_0;
_.typeId$ = 96;
_.this$0 = null;
function $AbstractHashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList);
  this$static.this$0.nullSlotLive && $add_7(list, $AbstractHashMap$MapEntryNull(new AbstractHashMap$MapEntryNull, this$static.this$0));
  $addAllStringEntries(this$static.this$0, list);
  $addAllHashEntries(this$static.this$0, list);
  this$static.iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, list);
  return this$static;
}

function getClass_184(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}

function hasNext_3(){
  return $hasNext_3(this.iter);
}

function next_4(){
  return dynamicCast($next_5(this.iter), 73);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator.prototype = new Object_0;
_.getClass$ = getClass_184;
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.typeId$ = 0;
_.iter = null;
_.this$0 = null;
function equals_11(other){
  var entry;
  if (other != null && canCast(other.typeId$, 73)) {
    entry = dynamicCast(other, 73);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getClass_185(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}

function hashCode_13(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey() != null && (keyHash = hashCode__devirtual$(this.getKey()));
  this.getValue() != null && (valueHash = hashCode__devirtual$(this.getValue()));
  return keyHash ^ valueHash;
}

function toString_24(){
  return this.getKey() + '=' + this.getValue();
}

function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0;
_.equals$ = equals_11;
_.getClass$ = getClass_185;
_.hashCode$ = hashCode_13;
_.toString$ = toString_24;
_.typeId$ = 97;
function $AbstractHashMap$MapEntryNull(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_186(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}

function getKey(){
  return null;
}

function getValue(){
  return this.this$0.nullSlot;
}

function setValue(object){
  return $putNullSlot(this.this$0, object);
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry;
_.getClass$ = getClass_186;
_.getKey = getKey;
_.getValue = getValue;
_.setValue = setValue;
_.typeId$ = 98;
_.this$0 = null;
function $AbstractHashMap$MapEntryString(this$static, key, this$0){
  this$static.this$0 = this$0;
  this$static.key = key;
  return this$static;
}

function getClass_187(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}

function getKey_0(){
  return this.key;
}

function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}

function new_$_4(this$outer, key){
  return $AbstractHashMap$MapEntryString(new AbstractHashMap$MapEntryString, key, this$outer);
}

function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry;
_.getClass$ = getClass_187;
_.getKey = getKey_0;
_.getValue = getValue_0;
_.setValue = setValue_0;
_.typeId$ = 99;
_.key = null;
_.this$0 = null;
function add_2(obj){
  $add_8(this, this.size_0(), obj);
  return true;
}

function checkIndex(index, size){
  (index < 0 || index >= size) && indexOutOfBounds(index, size);
}

function equals_12(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 21))) {
    return false;
  }
  other = dynamicCast(o, 21);
  if (this.size_0() != other.size) {
    return false;
  }
  iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, dynamicCast(this, 21));
  iterOther = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, other);
  while (iter.i < iter.this$0.size) {
    elem = $next_5(iter);
    elemOther = $next_5(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function getClass_188(){
  return Ljava_util_AbstractList_2_classLit;
}

function hashCode_14(){
  var iter, k, obj;
  k = 1;
  iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, dynamicCast(this, 21));
  while (iter.i < iter.this$0.size) {
    obj = $next_5(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function indexOutOfBounds(index, size){
  throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Index: ' + index + ', Size: ' + size);
}

function iterator_6(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, dynamicCast(this, 21));
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection;
_.add_0 = add_2;
_.equals$ = equals_12;
_.getClass$ = getClass_188;
_.hashCode$ = hashCode_14;
_.iterator_0 = iterator_6;
_.typeId$ = 0;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext_3(this$static){
  return this$static.i < this$static.this$0.size;
}

function $next_5(this$static){
  if (this$static.i >= this$static.this$0.size) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  return $get_5(this$static.this$0, this$static.last = this$static.i++);
}

function $remove_7(this$static){
  if (this$static.last < 0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  $remove_8(this$static.this$0, this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function getClass_189(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}

function hasNext_4(){
  return this.i < this.this$0.size;
}

function next_5(){
  return $next_5(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0;
_.getClass$ = getClass_189;
_.hasNext = hasNext_4;
_.next_0 = next_5;
_.typeId$ = 0;
_.i = 0;
_.last = -1;
_.this$0 = null;
function $AbstractMap$1(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function contains_1(key){
  return $containsKey_0(this.this$0, key);
}

function getClass_190(){
  return Ljava_util_AbstractMap$1_2_classLit;
}

function iterator_7(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, this.val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter);
}

function size_1(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet;
_.contains = contains_1;
_.getClass$ = getClass_190;
_.iterator_0 = iterator_7;
_.size_0 = size_1;
_.typeId$ = 100;
_.this$0 = null;
_.val$entrySet = null;
function $AbstractMap$1$1(this$static, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function getClass_191(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}

function hasNext_5(){
  return $hasNext_3(this.val$outerIter.iter);
}

function next_6(){
  var entry;
  return entry = dynamicCast($next_5(this.val$outerIter.iter), 73) , entry.getKey();
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1.prototype = new Object_0;
_.getClass$ = getClass_191;
_.hasNext = hasNext_5;
_.next_0 = next_6;
_.typeId$ = 0;
_.val$outerIter = null;
function $ArrayList(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 148, 0, 0, 0);
  return this$static;
}

function $add_7(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $add_8(this$static, index, o){
  (index < 0 || index > this$static.size) && indexOutOfBounds(index, this$static.size);
  this$static.array.splice(index, 0, o);
  ++this$static.size;
}

function $get_5(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_2(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove_8(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  this$static.array.splice(index, 1);
  --this$static.size;
  return previous;
}

function $remove_9(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove_8(this$static, i);
  return true;
}

function $set_1(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

function add_3(o){
  return setCheck(this.array, this.size++, o) , true;
}

function contains_2(o){
  return $indexOf_2(this, o, 0) != -1;
}

function getClass_192(){
  return Ljava_util_ArrayList_2_classLit;
}

function size_2(){
  return this.size;
}

function toArray_0(out){
  var i, a, result;
  out.length < this.size && (out = (a = out , result = createFromSeed(0, this.size) , initValues(a.arrayClass$, a.typeId$, a.queryId$, result) , result));
  for (i = 0; i < this.size; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > this.size && setCheck(out, this.size, null);
  return out;
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList;
_.add_0 = add_3;
_.contains = contains_2;
_.getClass$ = getClass_192;
_.size_0 = size_2;
_.toArray = toArray_0;
_.typeId$ = 101;
_.size = 0;
function $clinit_351(){
  $clinit_351 = nullMethod;
  DAYS = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(_3Ljava_lang_String_2_classLit, 150, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

function $Date(this$static){
  $clinit_351();
  this$static.jsdate = new Date;
  return this$static;
}

function $Date_0(this$static, date){
  $clinit_351();
  this$static.jsdate = new Date(date[1] + date[0]);
  return this$static;
}

function $getTime0(this$static){
  this$static.checkJsDate();
  return this$static.jsdate.getTime();
}

function checkJsDate(){
  (!this.jsdate || typeof this.jsdate != 'object') && throwJsDateException('' + this.jsdate);
}

function equals_13(obj){
  return obj != null && canCast(obj.typeId$, 76) && eq(fromDouble((this.checkJsDate() , this.jsdate.getTime())), fromDouble($getTime0(dynamicCast(obj, 76))));
}

function getClass_193(){
  return Ljava_util_Date_2_classLit;
}

function hashCode_15(){
  return lowBits_0(xor(fromDouble((this.checkJsDate() , this.jsdate.getTime())), shru(fromDouble((this.checkJsDate() , this.jsdate.getTime())), 32)));
}

function padTwo_0(number){
  if (number < 10) {
    return '0' + number;
  }
   else {
    return '' + number;
  }
}

function throwJsDateException(val){
  throw $IllegalStateException_0(new IllegalStateException, 'jsdate is ' + val);
}

function toString_25(){
  this.checkJsDate();
  var d = this.jsdate;
  var padTwo = padTwo_0;
  var day = DAYS[d.getDay()];
  var month = MONTHS[d.getMonth()];
  var offset = -d.getTimezoneOffset();
  var hourOffset = String(offset >= 0?'+' + Math.floor(offset / 60):Math.ceil(offset / 60));
  var minuteOffset = padTwo(Math.abs(offset) % 60);
  return day + ' ' + month + ' ' + padTwo(d.getDate()) + ' ' + padTwo(d.getHours()) + ':' + padTwo(d.getMinutes()) + ':' + padTwo(d.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + d.getFullYear();
}

function Date_0(){
}

_ = Date_0.prototype = new Object_0;
_.checkJsDate = checkJsDate;
_.equals$ = equals_13;
_.getClass$ = getClass_193;
_.hashCode$ = hashCode_15;
_.toString$ = toString_25;
_.typeId$ = 102;
_.jsdate = null;
var DAYS, MONTHS;
function $HashMap(this$static){
  $clearImpl(this$static);
  return this$static;
}

function $equals_2(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_194(){
  return Ljava_util_HashMap_2_classLit;
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractHashMap;
_.getClass$ = getClass_194;
_.typeId$ = 103;
function $HashSet(this$static){
  this$static.map = $HashMap(new HashMap);
  return this$static;
}

function $add_9(this$static, o){
  var old;
  old = $put_1(this$static.map, o, this$static);
  return old == null;
}

function add_4(o){
  var old;
  return old = $put_1(this.map, o, this) , old == null;
}

function contains_3(o){
  return $containsKey_0(this.map, o);
}

function getClass_195(){
  return Ljava_util_HashSet_2_classLit;
}

function iterator_8(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $keySet(this.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter);
}

function size_3(){
  return this.map.size;
}

function toString_26(){
  return $toString_5($keySet(this.map));
}

function HashSet(){
}

_ = HashSet.prototype = new AbstractSet;
_.add_0 = add_4;
_.contains = contains_3;
_.getClass$ = getClass_195;
_.iterator_0 = iterator_8;
_.size_0 = size_3;
_.toString$ = toString_26;
_.typeId$ = 104;
_.map = null;
function $MapEntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value_0 = value;
  return this$static;
}

function getClass_196(){
  return Ljava_util_MapEntryImpl_2_classLit;
}

function getKey_1(){
  return this.key;
}

function getValue_1(){
  return this.value_0;
}

function setValue_1(value){
  var old;
  old = this.value_0;
  this.value_0 = value;
  return old;
}

function MapEntryImpl(){
}

_ = MapEntryImpl.prototype = new AbstractMapEntry;
_.getClass$ = getClass_196;
_.getKey = getKey_1;
_.getValue = getValue_1;
_.setValue = setValue_1;
_.typeId$ = 105;
_.key = null;
_.value_0 = null;
function $NoSuchElementException(this$static){
  $fillInStackTrace_1(this$static);
  return this$static;
}

function getClass_197(){
  return Ljava_util_NoSuchElementException_2_classLit;
}

function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException;
_.getClass$ = getClass_197;
_.typeId$ = 106;
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

function $submitDelta(this$static, delta){
  var jsDelta, key, key$iterator, entrySet, outerIter, entry;
  jsDelta = {};
  for (key$iterator = (outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, (entrySet = $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, delta) , $AbstractMap$1(new AbstractMap$1, delta, entrySet)).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter)); $hasNext_3(key$iterator.val$outerIter.iter);) {
    key = dynamicCast((entry = dynamicCast($next_5(key$iterator.val$outerIter.iter), 73) , entry.getKey()), 1);
    $unsafePut_1(jsDelta, key, dynamicCast(key == null?delta.nullSlot:key != null?delta.stringMap[':' + key]:$getHashValue(delta, key, ~~getHashCode_0(key)), 1));
  }
  this$static.submitDelta(jsDelta);
}

function $unsafePut_1(this$static, key, value){
  var oldValue = this$static[key] || null;
  this$static[key] = value;
  return oldValue || value;
}

function $dispatch_4(){
  $onUpdate();
}

function dispatch_7(p0){
  $dispatch_4(dynamicCast(p0, 77));
}

function fire_2(source){
  var event_0;
  if (TYPE_7) {
    event_0 = new StateUpdateEvent;
    $fireEvent_0(source, event_0);
    return event_0;
  }
  return null;
}

function getAssociatedType_8(){
  return TYPE_7;
}

function getClass_198(){
  return Lorg_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_2_classLit;
}

function StateUpdateEvent(){
}

_ = StateUpdateEvent.prototype = new GwtEvent;
_.dispatch = dispatch_7;
_.getAssociatedType = getAssociatedType_8;
_.getClass$ = getClass_198;
_.typeId$ = 0;
var TYPE_7 = null;
function $addStateUpdateEventHandler(this$static, handler){
  return $addHandler($ensureWaveEventBus(this$static), (!TYPE_7 && (TYPE_7 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_7), handler);
}

function $ensureWaveEventBus(this$static){
  !wave_0 && (wave_0 = this$static);
  if (!waveEventBus) {
    waveEventBus = $WaveFeature$WaveEventBus(new WaveFeature$WaveEventBus, this$static);
    $wnd.wave.setModeCallback(modeChangeEvent);
    $wnd.wave.setParticipantCallback(participantUpdateEvent);
    $wnd.wave.setPrivateStateCallback(privateStateUpdateEvent);
    $wnd.wave.setStateCallback(stateUpdateEvent);
  }
  return waveEventBus;
}

function getClass_199(){
  return Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2_classLit;
}

function modeChangeEvent(mode){
}

function participantUpdateEvent(){
}

function privateStateUpdateEvent(){
}

function stateUpdateEvent(){
  fire_2(waveEventBus);
}

function WaveFeature(){
}

_ = WaveFeature.prototype = new Object_0;
_.getClass$ = getClass_199;
_.typeId$ = 0;
var wave_0 = null, waveEventBus = null;
function $WaveFeature$WaveEventBus(this$static, source){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = source;
  this$static.isReverseOrder = false;
  return this$static;
}

function getClass_200(){
  return Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus_2_classLit;
}

function WaveFeature$WaveEventBus(){
}

_ = WaveFeature$WaveEventBus.prototype = new HandlerManager;
_.getClass$ = getClass_200;
_.typeId$ = 107;
var $entry = entry_0;
function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), Lcom_allen_1sauer_gwt_log_client_impl_LogImpl_2_classLit = createForClass('com.allen_sauer.gwt.log.client.impl.', 'LogImpl'), Lcom_allen_1sauer_gwt_log_client_GWTLogger_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'GWTLogger'), Lcom_allen_1sauer_gwt_log_client_SystemLogger_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'SystemLogger'), Lcom_allen_1sauer_gwt_log_client_FirebugLogger_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'FirebugLogger'), Lcom_allen_1sauer_gwt_log_client_ConsoleLogger_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'ConsoleLogger'), Lcom_allen_1sauer_gwt_log_client_DivLogger_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger'), Lcom_allen_1sauer_gwt_log_client_WindowLogger_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'WindowLogger'), Lcom_allen_1sauer_gwt_log_client_impl_LogImplBase_2_classLit = createForClass('com.allen_sauer.gwt.log.client.impl.', 'LogImplBase'), Lcom_allen_1sauer_gwt_log_client_impl_LogImplBase$1_2_classLit = createForClass('com.allen_sauer.gwt.log.client.impl.', 'LogImplBase$1'), Lcom_allen_1sauer_gwt_log_client_impl_LogImplDebug_2_classLit = createForClass('com.allen_sauer.gwt.log.client.impl.', 'LogImplDebug'), Lcom_allen_1sauer_gwt_log_client_impl_com_1allen_1sauer_1gwt_1log_1client_1impl_1LogClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.allen_sauer.gwt.log.client.impl.', 'com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1'), Lcom_allen_1sauer_gwt_log_client_ClientStackTraceElement_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'ClientStackTraceElement'), _3Lcom_allen_1sauer_gwt_log_client_ClientStackTraceElement_2_classLit = createForArray('[Lcom.allen_sauer.gwt.log.client.', 'ClientStackTraceElement;'), _3I_classLit = createForArray('', '[I'), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject'), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget'), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget'), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase'), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button'), _3Lcom_google_gwt_user_client_ui_Button_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Button;'), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel'), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel'), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel'), Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel'), Lcom_allen_1sauer_gwt_log_client_DivLogger$LogDockPanel_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$LogDockPanel'), Lcom_allen_1sauer_gwt_log_client_DivLogger$LogDockPanel$1_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$LogDockPanel$1'), Lcom_allen_1sauer_gwt_log_client_DivLogger$MouseDragHandler_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$MouseDragHandler'), Lcom_allen_1sauer_gwt_log_client_DivLogger$MouseResizeHandler_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$MouseResizeHandler'), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel'), Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ScrollPanel'), Lcom_allen_1sauer_gwt_log_client_DivLogger$ScrollPanelImpl_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$ScrollPanelImpl'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_allen_1sauer_gwt_log_client_DivLogger$1_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$1'), Lcom_allen_1sauer_gwt_log_client_DivLogger$1$1_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$1$1'), Lcom_allen_1sauer_gwt_log_client_DivLogger$2_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$2'), Lcom_allen_1sauer_gwt_log_client_DivLogger$3_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$3'), Lcom_allen_1sauer_gwt_log_client_DivLogger$4_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'DivLogger$4'), Lcom_allen_1sauer_gwt_log_client_Log_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'Log'), Lcom_allen_1sauer_gwt_log_client_LogRecord_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'LogRecord'), Lcom_allen_1sauer_gwt_log_client_NullLogger_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'NullLogger'), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement'), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Lcom_allen_1sauer_gwt_log_client_UnwrappedClientThrowable_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'UnwrappedClientThrowable'), Lcom_allen_1sauer_gwt_log_client_WrappedClientThrowable_2_classLit = createForClass('com.allen_sauer.gwt.log.client.', 'WrappedClientThrowable'), Lcom_example_portfoliobotty_client_constants_PortfolioConstants_1_2_classLit = createForClass('com.example.portfoliobotty.client.constants.', 'PortfolioConstants_'), Lcom_example_portfoliobotty_client_constants_PortfolioMessages_1_2_classLit = createForClass('com.example.portfoliobotty.client.constants.', 'PortfolioMessages_'), Lcom_example_portfoliobotty_client_feature_minimessages_MiniMessagesFeature_2_classLit = createForClass('com.example.portfoliobotty.client.feature.minimessages.', 'MiniMessagesFeature'), Lcom_example_portfoliobotty_client_service_PortfolioServiceImpl_2_classLit = createForClass('com.example.portfoliobotty.client.service.', 'PortfolioServiceImpl'), Lcom_example_portfoliobotty_client_request_WaveRequestServiceImpl_2_classLit = createForClass('com.example.portfoliobotty.client.request.', 'WaveRequestServiceImpl'), Lcom_example_portfoliobotty_client_utils_PortfolioUtilsImpl_2_classLit = createForClass('com.example.portfoliobotty.client.utils.', 'PortfolioUtilsImpl'), Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2_classLit = createForClass('org.cobogw.gwt.waveapi.gadget.client.', 'WaveFeature'), Lcom_example_portfoliobotty_client_PortfolioBotty$WaveFeatureProvider_2_classLit = createForClass('com.example.portfoliobotty.client.', 'PortfolioBotty$WaveFeatureProvider'), Lcom_google_gwt_gadgets_client_AnalyticsFeature_2_classLit = createForClass('com.google.gwt.gadgets.client.', 'AnalyticsFeature'), Lcom_example_portfoliobotty_client_PortfolioBotty$AnalyticsFeatureProvider_2_classLit = createForClass('com.example.portfoliobotty.client.', 'PortfolioBotty$AnalyticsFeatureProvider'), Lcom_example_portfoliobotty_client_PortfolioBotty$MiniMessagesFeatureProvider_2_classLit = createForClass('com.example.portfoliobotty.client.', 'PortfolioBotty$MiniMessagesFeatureProvider'), Lcom_google_gwt_gadgets_client_DynamicHeightFeature_2_classLit = createForClass('com.google.gwt.gadgets.client.', 'DynamicHeightFeature'), Lcom_example_portfoliobotty_client_PortfolioBotty$DynamicHeightFeatureProvider_2_classLit = createForClass('com.example.portfoliobotty.client.', 'PortfolioBotty$DynamicHeightFeatureProvider'), Lcom_example_portfoliobotty_client_inject_PortfolioGinjectorImpl_2_classLit = createForClass('com.example.portfoliobotty.client.inject.', 'PortfolioGinjectorImpl'), Lcom_example_portfoliobotty_client_request_WaveRequestServiceImpl$1_2_classLit = createForClass('com.example.portfoliobotty.client.request.', 'WaveRequestServiceImpl$1'), Lcom_example_portfoliobotty_client_resources_com_1example_1portfoliobotty_1client_1resources_1GlobalResources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.example.portfoliobotty.client.resources.', 'com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator'), Lcom_example_portfoliobotty_client_resources_com_1example_1portfoliobotty_1client_1resources_1GlobalResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.example.portfoliobotty.client.resources.', 'com_example_portfoliobotty_client_resources_GlobalResources_default_InlineClientBundleGenerator$1'), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;'), Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Composite'), Lcom_example_portfoliobotty_client_ui_PortfolioPanel_2_classLit = createForClass('com.example.portfoliobotty.client.ui.', 'PortfolioPanel'), Lcom_example_portfoliobotty_client_ui_PortfolioPanel$1_2_classLit = createForClass('com.example.portfoliobotty.client.ui.', 'PortfolioPanel$1'), Lcom_example_portfoliobotty_client_ui_PortfolioPanel$2_2_classLit = createForClass('com.example.portfoliobotty.client.ui.', 'PortfolioPanel$2'), Lcom_example_portfoliobotty_client_ui_PortfolioPanel$3_2_classLit = createForClass('com.example.portfoliobotty.client.ui.', 'PortfolioPanel$3'), Lcom_example_portfoliobotty_client_ui_PortfolioPanel$4_2_classLit = createForClass('com.example.portfoliobotty.client.ui.', 'PortfolioPanel$4'), Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalPanel'), Lcom_google_gwt_user_client_ui_CaptionPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CaptionPanel'), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox'), Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalPanel'), Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratorPanel'), Lcom_google_gwt_gadgets_client_Gadget_2_classLit = createForClass('com.google.gwt.gadgets.client.', 'Gadget'), Lorg_cobogw_gwt_waveapi_gadget_client_WaveGadget_2_classLit = createForClass('org.cobogw.gwt.waveapi.gadget.client.', 'WaveGadget'), Lcom_example_portfoliobotty_client_PortfolioBotty_2_classLit = createForClass('com.example.portfoliobotty.client.', 'PortfolioBotty'), Lcom_example_portfoliobotty_client_PortfolioBottyGadgetImpl_2_classLit = createForClass('com.example.portfoliobotty.client.', 'PortfolioBottyGadgetImpl'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler'), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl'), Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$1'), Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$2'), Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImpl'), Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImplAppend'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImpl'), Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplStandard'), Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplMozilla'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;'), Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$StyleInjectorImpl'), Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$1'), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent'), Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ChangeEvent'), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type'), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent'), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent'), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent'), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent'), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ResizeEvent'), Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit = createForClass('com.google.gwt.event.shared.', 'DefaultHandlerRegistration'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$HandlerRegistry'), Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$1'), Lcom_google_gwt_event_shared_HandlerManager$2_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$2'), Lcom_google_gwt_i18n_client_constants_DateTimeConstantsImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'DateTimeConstantsImpl_'), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_'), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date'), Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat'), Lcom_google_gwt_i18n_client_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.client.', 'DateTimeFormat$PatternPart'), Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'LocaleInfo'), Lcom_google_gwt_i18n_client_NumberFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'NumberFormat'), _3C_classLit = createForArray('', '[C'), Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client.', 'TimeZone'), Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONValue'), Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONArray'), Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONBoolean'), Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONException'), Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONNull'), Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONNumber'), Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONObject'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client.', 'JSONString'), _3_3D_classLit = createForArray('', '[[D'), Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client.', 'UiBinderUtil$TempAttachment'), Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl'), Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl$FreeNode'), Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImpl'), Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImplStandard'), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel'), _3Ljava_lang_Throwable_2_classLit = createForArray('[Ljava.lang.', 'Throwable;'), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException'), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1'), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2'), Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$TmpRow'), _3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'DockPanel$TmpRow;'), Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$DockLayoutConstant'), Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$LayoutData'), Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable'), Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable'), Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$CellFormatter'), Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable$FlexCellFormatter'), Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusPanel'), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label'), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML'), Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLPanel'), Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$ColumnFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$RowFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$1'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant'), Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image'), Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State'), Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$UnclippedState'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1'), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2'), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1'), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection'), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator'), Lcom_google_gwt_user_client_CommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandCanceledException'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Boolean_2_classLit = createForClass('java.lang.', 'Boolean'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_Double_2_classLit = createForClass('java.lang.', 'Double'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer'), _3Ljava_lang_Integer_2_classLit = createForArray('[Ljava.lang.', 'Integer;'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException'), Lorg_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_2_classLit = createForClass('org.cobogw.gwt.waveapi.gadget.client.', 'StateUpdateEvent'), Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus_2_classLit = createForClass('org.cobogw.gwt.waveapi.gadget.client.', 'WaveFeature$WaveEventBus');
$stats && $stats({moduleName:'portfoliobotty',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (portfoliobotty) portfoliobotty.onScriptLoad(gwtOnLoad);
})();
