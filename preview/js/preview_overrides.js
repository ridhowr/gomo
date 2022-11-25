/* eslint-disable new-cap, no-unused-vars */
/* globals MobileEsp, OUTPUT_MODE_CHECKER, VARIABLES_HOLDER, MASTER_RENDERER,
EM, GOMO_PREVIEW, LOADER, $, SCREEN_INTERACTIONS, SUB_SCREEN_INTERACTIONS, POPUP_MANANGER,
TOPIC_MANAGER, PREVIEW_DATA, SCROLLING_MANAGER, CORE, OBJ_REF, _, BASE_ROOT_PATH:true  */

var _booIsSmartphone = MobileEsp.DetectSmartphone();
var _booIsTablet = MobileEsp.DetectTierTablet();

window.GOMO_PREVIEW = (function() {
  /**
   * Preview - centralises all preview related tasks
   */
  function Preview() {
    var me = this;
    me.invalidDataAlert = 'invalid-data-alert';
    me.showInvalidDataAlerts = true;
    me.dataPollingInterval = 30000;
    me.lastMessage = false;
    me.init = function() {
      // Set the flag in the player for Preview mode
      OUTPUT_MODE_CHECKER.setPreviewMode(true);
      me.extenedVariablesHolder();
      me.setListeners();
    },

    me.extenedVariablesHolder = function() {
      if (!_booIsSmartphone && !_booIsTablet) {
        VARIABLES_HOLDER._booResizeHandlerAssigned = false;

        VARIABLES_HOLDER.handleEvent_outputModeChanged = function(_objEventData) {
          var _strNewOutputMode = _objEventData['strNewOutputMode'];
          var _strCurrAccessibilityState = this.getVariableValue('gomo_accessibility_state');
          var _arrChangedVariables = [];

          switch (_strNewOutputMode) {
            case 'graphicalC':
              if (_strCurrAccessibilityState == 'true') {
                EM.trigger('updateVariableValue', {
                  strVariableName: 'gomo_accessibility_state',
                  strVariableValue: 'false',
                  strCallbackEvent: false,
                  booIsSystemVariable: true
                });
                _arrChangedVariables.push('gomo_accessibility_state');
              }
              break;
            case 'accessibleC':
              if (_strCurrAccessibilityState == 'false') {
                EM.trigger('updateVariableValue', {
                  strVariableName: 'gomo_accessibility_state',
                  strVariableValue: 'true',
                  strCallbackEvent: false,
                  booIsSystemVariable: true
                });
                _arrChangedVariables.push('gomo_accessibility_state');
              }
              break;
            case 'smartphoneC':
              if (_strCurrAccessibilityState == 'true') {
                EM.trigger('updateVariableValue', {
                  strVariableName: 'gomo_accessibility_state',
                  strVariableValue: 'false',
                  strCallbackEvent: false,
                  booIsSystemVariable: true
                });
                _arrChangedVariables.push('gomo_accessibility_state');
              }
              break;
            case 'tabletC':
              if (_strCurrAccessibilityState == 'true') {
                EM.trigger('updateVariableValue', {
                  strVariableName: 'gomo_accessibility_state',
                  strVariableValue: 'false',
                  strCallbackEvent: false,
                  booIsSystemVariable: true
                });
                _arrChangedVariables.push('gomo_accessibility_state');
              }
              break;
            default:
              alert(
                'ERROR: Unknown output mode of \'' +
                  _strNewOutputMode +
                  '\' found in handleEvent_outputModeChanged, variables_holder.js'
              );
              break;
          }

          this._checkPreviewScreenWidth(_arrChangedVariables);

          if (!this._booResizeHandlerAssigned) {
            $(window).resize(function() {
              VARIABLES_HOLDER._checkPreviewScreenWidth([]);
            });
            this._booResizeHandlerAssigned = true;
          }
        };

        VARIABLES_HOLDER._checkPreviewScreenWidth = function(_arrChangedVariables) {
          var _strCurrDeviceType = this.getVariableValue('gomo_device_type');

          var _objFrameSize = OUTPUT_MODE_CHECKER.getScreenDimensions();
          var _intScreenWidth = _objFrameSize['intViewportWidth'];

          if (gomo.outputChecker.isDesktop()) {
            if (_strCurrDeviceType != 'desktop') {
              EM.trigger('updateVariableValue', {
                strVariableName: 'gomo_device_type',
                strVariableValue: 'desktop',
                strCallbackEvent: false,
                booIsSystemVariable: true
              });
              _arrChangedVariables.push('gomo_device_type');
            }
          }
          if (gomo.outputChecker.isTablet()) {
            if (_strCurrDeviceType != 'tabletC') {
              EM.trigger('updateVariableValue', {
                strVariableName: 'gomo_device_type',
                strVariableValue: 'tablet',
                strCallbackEvent: false,
                booIsSystemVariable: true
              });
              _arrChangedVariables.push('gomo_device_type');
            }
          }
          if (gomo.outputChecker.isSmartPhone()) {
            if (_strCurrDeviceType != 'smartphoneC') {
              EM.trigger('updateVariableValue', {
                strVariableName: 'gomo_device_type',
                strVariableValue: 'smartphone',
                strCallbackEvent: false,
                booIsSystemVariable: true
              });
              _arrChangedVariables.push('gomo_device_type');
            }
          }

          if (_arrChangedVariables.length > 0) {
            var variableMatch = false;
            var countVariables = 0;
            while (countVariables < _arrChangedVariables.length) {
              // We don't want to updates the display on
              // accessible state change as this will get rerendered anyway
              if (_arrChangedVariables[countVariables] == 'gomo_accessibility_state') {
                variableMatch = true;
                break;
              }
              countVariables++;
            }

            EM.trigger('systemVariablesChanged', {
              arrChangedSystemVariables: _arrChangedVariables,
              suppressDomUpdates: variableMatch
            });
          }
        };
      }
    };

    me.sendCurrentScreen = function(objCurrentTopicIdScreenId) {
      // targetOrigin = domain of the parent, * = any
      // this is fine as we're checking origin in preview controller
      var message = {
        type: 'setTopicAndScreenId',
        data: objCurrentTopicIdScreenId
      };
      parent.postMessage(JSON.stringify(message), '*');
    };

    me.setListeners = function() {
      var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
      var eventer = window[eventMethod];
      var messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
      eventer(messageEvent, function(e) {
        // validate the message is sent from a gomo domain or docker
        if (e.origin !== 'http://nginx' && e.origin.indexOf('gomolearning.com') === -1) return;
        if (e.data) {
          var messageData = e.data;
          if (messageData && messageData.type) {
            switch (messageData.type) {
              case 'goToScreen': {
                GOMO_PREVIEW.goToScreen(messageData);
                break;
              }
              case 'switchLanguage': {
                GOMO_PREVIEW.switchLanguage(messageData);
                break;
              }
              case 'switchDeviceType': {
                GOMO_PREVIEW.switchDeviceType(messageData);
                break;
              }
              case 'liveDataUpdate': {
                GOMO_PREVIEW.liveDataUpdate(messageData);
                break;
              }
              case 'updateMetaData': {
                GOMO_PREVIEW.updateMetaData(messageData);
                break;
              }
              case 'goToScreenId': {
                GOMO_PREVIEW.goToScreenId(messageData);
                break;
              }
              case 'goToSubscreenId': {
                GOMO_PREVIEW.goToSubscreenId(messageData);
                break;
              }
              case 'setEditorMode': {
                GOMO_PREVIEW.setEditorMode(messageData);
                break;
              }
            }
          }
        }
      });
    };

    me.switchLanguage = function(messageData) {
      if (gomo && gomo.translationManager) {
        if (PREVIEW_DATA && PREVIEW_DATA.editorMode) {
          EM.trigger('showCurrentPage', {_booForceReRender: true});
        }
        var callback = function() {};
        gomo.translationManager.setTranslation(
          messageData.translationData.language,
          true,
          callback,
          messageData.translationData
        );
      }
    };

    me.switchDeviceType = function(messageData) {
      OUTPUT_MODE_CHECKER.setDeviceType(messageData.deviceType);
      // The new device may require iScroll so we will attempt to enable it
      SCREEN_INTERACTIONS.applyIscrollToCurrentScreen();
    };

    me.liveDataUpdate = function(messageData) {
      me.lastMessage = messageData;
      var scrollerId = SCROLLING_MANAGER.getCurrentScreenScrollerId();
      SCROLLING_MANAGER.saveScrollPosition(scrollerId);
      OBJ_REF.resetSubscreens();
      SUB_SCREEN_INTERACTIONS.resetRegisteredSubscreenList();
      me.setEditorModeResourcePath();
      TOPIC_MANAGER.silentlyAddData({topic: messageData.topicData}, true);
      EM.trigger('showCurrentPage', {_booForceReRender: true});
      me.displayValidationErrors(messageData.validationData);
      if (messageData.translationData) {
        var callback = function() {};
        gomo.translationManager.setTranslation(
          messageData.translationData.language,
          true,
          callback,
          messageData.translationData
        );
      }
      SCROLLING_MANAGER.restoreScrollPosition(scrollerId);
    };

    me.displayValidationErrors = function(validationData) {
      gomo.alertManager.closeAlert(me.invalidDataAlert);

      if (!me.showInvalidDataAlerts) {
        return;
      }

      // Build the popup content
      // Preconstructed list of invalid actins and display conditions
      // for use by the more info option
      var messageDetail = validationData.feedback;
      var testFailData = validationData.testFailData;
      var messageTitle = '';
      var messageText = '';
      var dataTypes = '';

      if (testFailData.length) {
        for (var i=0; i < testFailData.length; i++) {
          if (i > 0) {
            dataTypes += ' & ' + testFailData[i].dataType;
            if (testFailData[i].testFailData.length && testFailData[i].testFailData.length > 1) {
              dataTypes += 's';
            }
          } else {
            dataTypes = testFailData[i].dataType;
            if (testFailData[i].testFailData.length && testFailData[i].testFailData.length > 1) {
              dataTypes += 's';
            }
          }
        }

        // messageTitle = 'Warning, invalid '+ dataTypes + ' found.';
        messageText = 'Warning, invalid '+ dataTypes + ' found.';
        /* not currently use but leaving here to aid in building the 'more info' option
        messageText = 'Warning, you have the following invalid '+ dataTypes +
          ' in this topic which may stop your course working correctly.<br><br>'+
          'Click <strong>More info</strong> to see these in greater detail.'; */


        var buttons = [
          {
            label: 'Ignore invalid data warnings',
            type: 'secondary',
            action: function() {
              me.showInvalidDataAlerts = false;
            }
          },
          {
            label: 'Continue',
            type: 'primary',
            action: function() {}
          }
        ];

        gomo.alertManager.create(
          'warning',
          false,
          messageText,
          buttons,
          me.invalidDataAlert
        );
      }
    };

    me.updateMetaData = function(messageData) {
      _.each(messageData.metaData, function(element, index) {
        CORE.objResourceMetaData.files[index] = CORE.objResourceMetaData.files[index].concat(
          element
        );
      });
      EM.trigger('broadcastSharedResourceData', CORE.objResourceMetaData.files);
    };

    me.setEditorMode = function(messageData) {
      // Only setup once
      if (PREVIEW_DATA.editorMode) {
        _.each(CORE.objResourceMetaData.files, function(element, index) {
          CORE.objResourceMetaData.files[index] = element.concat(
            messageData.sharedResourcesMetaData[index]
          );
        });
        if (CORE.objResourceMetaData && CORE.objResourceMetaData.files) {
          EM.trigger('broadcastSharedResourceData', CORE.objResourceMetaData.files);
        }
        VARIABLES_HOLDER.updateVariable(messageData.groupVariables);
        OUTPUT_MODE_CHECKER.animationEnabled = false;
        gomo.outputChecker.updateOutputVariables();
      }
    };

    me.goToScreen = function(messageData) {
      if (EM) {
        EM.trigger('processActions', messageData.actions);
      }
    };

    me.goToScreenId = function(messageData) {
      if (EM) {
        // Close any open popups
        if (messageData.hidePopups) {
          SUB_SCREEN_INTERACTIONS.hideSubScreens();
          POPUP_MANANGER.hideAllPopups();
        }
        var _objActionOptions = {};
        _objActionOptions.objActions = [
          {
            objParameters: {target_id: messageData.screenId},
            strActionGroup: 'navigation',
            strObjectType: 'action',
            strType: 'internal_link'
          }
        ];
        _objActionOptions.objOptionalExtraData = {};
        _objActionOptions.objOptionalExtraData.funTriggerCallBack = function() {};

        EM.trigger('processActions', _objActionOptions);
      }
    };

    me.goToSubscreenId = function(messageData) {
      if (EM) {
        var _objActionOptions = {};
        _objActionOptions.objActions = [
          {
            objParameters: {strSubScreenID: messageData.subscreenId},
            strActionGroup: 'subscreen',
            strObjectType: 'action',
            strType: 'showSubScreen'
          }
        ];
        _objActionOptions.objOptionalExtraData = {};
        _objActionOptions.objOptionalExtraData.funTriggerCallBack = function() {};

        EM.trigger('processActions', _objActionOptions);
      }
    };

    me.triggerPlayerLoaded = function() {
      var message = {
        type: 'hasPlayerLoaded',
        data: LOADER.booLoadSequenceComplete
      };
      parent.postMessage(JSON.stringify(message), '*');

      me.triggerProjectUpdatePolling();
    };

    me.triggerProjectUpdatePolling = function() {
      var queryString = window.location.search.substring(1);
      var params = queryString.split('&');

      // Get the query parameters
      for (var i=0; i<params.length; i++) {
        var paramName = params[i].split('=');
        if (paramName.length > 0) {
          var paramValue = paramName[1];
          // Get the parameter name
          // and test first character for ?
          paramName = paramName[0];
          paramName = paramName[0] == '?' ? paramName.substr(1) : paramName;

          if (paramName === 'autoUpdate' && paramValue && JSON.parse(paramValue)) {
            me.dataPollingInterval = setInterval(function() {
              me.pollProjectUpdates();
            }, me.dataPollingInterval);
          }
        }
      }
    };

    /**
     * Check if the sharelink is stale
     */
    me.pollProjectUpdates = function() {
      // Get the query params to construct a request to check for staleness.
      var baseUrl = gomo.utility.getQueryParam('shareAppBaseUrl');
      var hash =
        PREVIEW_DATA && PREVIEW_DATA.hash
          ? PREVIEW_DATA.hash
          : gomo.utility.getQueryParam('shareHash');
      if (baseUrl && hash) {
        $.get(baseUrl + '/sharelink/' + hash + '/is-stale', function() {})
          .done(function(response) {
            if (response.isStale && response.newShareLink.code) {
              me.newShareLink = response.newShareLink;
              if (PREVIEW_DATA.editorMode) {
                PREVIEW_DATA.hash = me.newShareLink.code;
                PREVIEW_DATA.hostname = me.newShareLink.signingUrl;
                BASE_ROOT_PATH = PREVIEW_DATA.hostname;
                var signUrl = response.newShareLink.signingUrl + '?noredirect';
                $.ajax({type: 'GET', url: signUrl, xhrFields: {withCredentials: true}})
                  .done(function(response) {
                    // Trigger a data update so image paths update.
                    if (me.lastMessage) {
                      me.liveDataUpdate(me.lastMessage);
                    }
                    return;
                  })
                  .fail(function(e) {
                    if (window.LogManager) {
                      window.LogManager.add('ERROR', e);
                    }
                  });
              } else {
                me.warnUser();
              }
            }
          })
          .fail(function(e) {
            if (window.LogManager) {
              window.LogManager.add('ERROR', e);
            }
          });
      }
    };

    /**
     * Warns the user the course data is stale and asks for confirmation to refresh.
     * @param {string} newHash
     */
    me.warnUser = function() {
      me.disableAutoUpdate();
      var alertType = 'warning';
      var title = 'This course has been recently updated.';
      var message = 'Click Ok to reload the preview back to the beginning or click Cancel to'
      + ' continue with the current content and changes. Please note: the current content'
      + ' may be out-of-date and the media may fail to load.';
      var buttons = [
        {
          label: 'Cancel',
          type: 'secondary',
          action: function() {
            gomo.alertManager.create('danger', 'Reload for latest content.', false, false);
          }
        },
        {
          label: 'Ok',
          type: 'primary',
          action: function() {
            me.refreshCourse();
          }
        }
      ];
      gomo.alertManager.create(alertType, title, message, buttons);
    };

    /**
     * Refresh the course if the content becomes stale.
     */
    me.refreshCourse = function() {
      var extras = {
        screenID: gomo.utility.getQueryParam('screenID'),
        topicID: gomo.utility.getQueryParam('topicID'),
        projectID: gomo.utility.getQueryParam('projectID'),
        groupID: gomo.utility.getQueryParam('groupID')
      };

      window.location.href = me.newShareLink.signingUrl + '?'
        + gomo.utility.objectToQueryString(extras);
    };

    me.disableAutoUpdate = function() {
      clearInterval(me.dataPollingInterval);
    };

    me.setEditorModeResourcePath = function() {
      var contentUrl = gomo.utility.getQueryParam('contentBaseUrl');
      if (contentUrl && PREVIEW_DATA.hash) {
        MASTER_RENDERER.strResourceBasePath =
          'https://' + contentUrl + '/sharelink/' + PREVIEW_DATA.hash + '/resources/';
        gomo.fileManager.resourceBasePath = MASTER_RENDERER.strResourceBasePath;
      }
    };
  }

  return new Preview();
})();

GOMO_PREVIEW.init();
