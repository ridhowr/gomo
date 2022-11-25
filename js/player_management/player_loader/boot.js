/* global LOADER, head, coreBundleConfig, customBundleConfig, BASE_ROOT_PATH: true */
/* global BOO_APP_VERSION, BOO_DEBUG_MODE, BOO_SDK_MODE, phantomJsData */
/* eslint-disable no-unused-vars, max-len, require-jsdoc */

/**
 * @title Boot file
 * @description The file that triggers the first load and defines the load sequences.
 *
 *
 * @author JohnC
 * @version 0.1 15/09/13
 * @version 0.2 22/09/13 - Adapted for Player - JH
 */

// Used as a placeholder for data to load into whilst
// other components are loaded in.
var OBJ_PRELOADED_DATA = {};
var OBJ_PRELOADED_EXTRA_DATA = {};
var _strDataID = null;
var _objLoadingData = null;
var BOO_LOAD_CUSTOM_ASSETS = false;

// temp var to disable logging in preview mode
var DISABLE_LOGGING = true;

var BASE_ROOT_PATH = null;

var PREVIEW_DATA = {
  editorMode: false,
  project: null,
  authoringMode: false,
  hostname: '',
  hash: null,
  userGroup: null
};

// Set authoring mode
(function() {
  try {
    // Node js uses this file and Window isn't going to exist
    // When gomoPreview exists, the player is in Gomo Authoring
    var urlParams = {};
    if (window && window.location) {
      // Grab the url params if they exist
      var rawUrlParams = window.location.search.split('?')[1];
      rawUrlParams ? rawUrlParams = rawUrlParams.split('&') : rawUrlParams = [];
      rawUrlParams.forEach(function(element) {
        urlParams[element.split('=')[0]] = element.split('=')[1];
      });
    }
    if (urlParams.hasCustomModules === 'true') {
      BOO_LOAD_CUSTOM_ASSETS = true;
    }
    if (urlParams.gomoPreview || window.callPhantom) {
      PREVIEW_DATA.authoringMode = true;
      if (urlParams.authoringBaseUrl) {
        PREVIEW_DATA.hostname = urlParams.authoringBaseUrl + '/';
      }
      BASE_ROOT_PATH = PREVIEW_DATA.hostname;

      // PhantomJS uses the local file system
      if (window.callPhantom) {
        PREVIEW_DATA.hostname = '../../../../public';
      }

      if (urlParams.mode && urlParams.mode === 'editor') {
        PREVIEW_DATA.editorMode = true;
      }

      PREVIEW_DATA.userGroup = urlParams.userGroup;

      if (phantomJsData && phantomJsData.userGroupId) {
        PREVIEW_DATA.userGroup = phantomJsData.userGroupId;
      }
    }
  } catch (err) {
    console.log('Error reading URL Params: '+ err);
  }
})();

var PATH_MANAGER = {
  getPathToProjectRoot: function() {
    return '';
    /**
     * Projects aren't stored remotely yet
    return PREVIEW_DATA.editorMode
      ? PREVIEW_DATA.hostname + '/projects/' + PREVIEW_DATA.project + '/'
      : '';
    */
  },

  getPathToData: function() {
    return 'data/';
    /**
     * Data isn't stored remotely from the player yet
    return PREVIEW_DATA.editorMode
      ? PREVIEW_DATA.hostname + '/projects/' + PREVIEW_DATA.project + '/data/'
      : 'data/';
    */
  },

  getPathToGlobalModules: function(pathToFile) {
    var coreCacheId =
      typeof coreBundleConfig !== 'undefined' && coreBundleConfig.cacheId ? '?' + coreBundleConfig.cacheId : '';
    return PREVIEW_DATA.authoringMode
      ? PREVIEW_DATA.hostname + '/globalModules/' + pathToFile + coreCacheId
      : pathToFile;
  },

  getPathToUserGroupModules: function(pathToFile) {
    var customCacheId =
      typeof customBundleConfig !== 'undefined' && customBundleConfig.cacheId ? '?' + customBundleConfig.cacheId : '';
    return PREVIEW_DATA.authoringMode
      ? PREVIEW_DATA.hostname + '/userGroupModules/' + PREVIEW_DATA.userGroup + '/playerFiles/' + pathToFile + customCacheId
      : pathToFile;
  }
};

function firstLoadCompleted() {
  LOADER.startLoadSequence(ARR_CORE_LOAD_SEQUENCE);
}

function LoggingLoadCompleted() {
  if (window.logit) {
    var apiKey = '05943f79-e04e-4cd1-b9c9-71a364028509';
    window.logit.init(apiKey, {logToConsole: true, disableSending: false});
  }
}

function isAuthoringMode() {
  return PREVIEW_DATA.authoringMode;
}

function loadBaseFiles() {
  // Load logging
  if (this.booIsNotIE8() && this.loggingEnabled()) {
    head.js(
      {logit: 'frameworks/logit.js'},
      {stacktrace: 'frameworks/stacktrace.js'},
      {error_handler: 'js/core_player_1_bundle.js'},
      LoggingLoadCompleted
    );
  }

  // Load the loader
  head.js(
    {loader: 'js/core_js_1_bundle.js'},
    firstLoadCompleted
  );
}
// ************************** AUTHORING PRIMARY LOAD SEQUENCES **************************

// ************* ConditionalLoaders *************
function loggingEnabled() {
  var loggingEnabledUrl = false;

  var locationSearch = window.location.search;
  locationSearch = locationSearch.slice(1, locationSearch.length); // Remove the leading ?
  if (locationSearch && locationSearch != '') {
    var searchSplit = locationSearch.split('&');

    var count = 0;
    while (count < searchSplit.length) {
      if (searchSplit[count] == 'loggingEnabled=true') {
        loggingEnabledUrl = true;
      }
      count++;
    }
  }
  return DISABLE_LOGGING ? false : loggingEnabledUrl;
}

function booIsNotIE8() {
  if (head.browser.ie && head.browser.version === 8) {
    return false;
  }
  return true;
}

function booConditionalMobile() {
  if (!head.desktop) {
    return true;
  }
  return false;
}

function booConditionalApp() {
  if (BOO_APP_VERSION) {
    return true;
  }
  return false;
}

function booIsIE8() {
  if (head.browser.ie && head.browser.version === 8) {
    return true;
  }
  return false;
}

function shouldLoadCoreModules() {
  /*
  * Core files are only used in the Authoring environment
  */
  if (isAuthoringMode()) {
    return true;
  }
  return false;
}

function shouldLoadCustomModules() {
  /*
  * Authoring will tell us if a user group has custom assets and needs the global bundle.
  * If we're not in authoring mode (published courses) then the course "may" have custom assets.
  * Published courses will need to check their own bundleConfig (below) to see what was created.
  */
  if (BOO_LOAD_CUSTOM_ASSETS || !isAuthoringMode()) {
    return true;
  }
  return false;
}

function shouldLoadCoreJs() {
  if (shouldLoadCoreModules()
    && typeof coreBundleConfig !== 'undefined'
    && coreBundleConfig.moduleJsFilesFound) {
    return true;
  }
  return false;
}

function shouldLoadCustomJs() {
  if (shouldLoadCustomModules()
    && typeof customBundleConfig !== 'undefined'
    && customBundleConfig.moduleJsFilesFound) {
    return true;
  }
  return false;
}

function shouldLoadCoreHtml() {
  if (shouldLoadCoreModules()
    && typeof coreBundleConfig !== 'undefined'
    && coreBundleConfig.moduleHtmlFilesFound) {
    return true;
  }
  return false;
}

function shouldLoadCustomHtml() {
  if (shouldLoadCustomModules()
    && typeof customBundleConfig !== 'undefined'
    && customBundleConfig.moduleHtmlFilesFound) {
    return true;
  }
  return false;
}

function shouldLoadCoreManifest() {
  if (shouldLoadCoreModules()
    && typeof coreBundleConfig !== 'undefined'
    && coreBundleConfig.moduleManifestFilesFound) {
    return true;
  }
  return false;
}

function shouldLoadCustomManifest() {
  if (shouldLoadCustomModules()
    && typeof customBundleConfig !== 'undefined'
    && customBundleConfig.moduleManifestFilesFound) {
    return true;
  }
  return false;
}

function shouldLoadCssCoreBundle() {
  if (shouldLoadCoreModules()
    && typeof coreBundleConfig !== 'undefined'
    && coreBundleConfig.cssBundle) {
    return true;
  }
  return false;
}

function shouldLoadCssCustomBundle() {
  if (shouldLoadCustomModules()
    && typeof customBundleConfig !== 'undefined'
    && customBundleConfig.cssBundle) {
    return true;
  }
  return false;
}

function shouldLoadCoreLocalisations() {
  // Bundled Localisation shouldn't be loaded in pubilsh mode as authoring handles that data.
  if (shouldLoadCoreModules()
    && typeof coreBundleConfig !== 'undefined'
    && coreBundleConfig.modulelocalisationsFound) {
    return true;
  }
  return false;
}

function shouldLoadCustomLocalisations() {
  // Bundled Localisation shouldn't be loaded in pubilsh mode as authoring handles that data.
  if (shouldLoadCustomModules()
    && typeof customBundleConfig !== 'undefined'
    && customBundleConfig.modulelocalisationsFound) {
    return true;
  }
  return false;
}

function shouldLoadCoreExternalFiles() {
  if (shouldLoadCoreModules()
    && typeof coreBundleConfig !== 'undefined'
    && coreBundleConfig.moduleExternalFilesFound) {
    return true;
  }
  return false;
}

function shouldLoadCustomExternalFiles() {
  if (shouldLoadCustomModules()
    && typeof customBundleConfig !== 'undefined'
    && customBundleConfig.moduleExternalFilesFound) {
    return true;
  }
  return false;
}

function booIsNotDebug() {
  if (BOO_DEBUG_MODE == false) {
    return true;
  }
  return false;
}

function booIsDebug() {
  if (BOO_DEBUG_MODE) {
    return true;
  }
  return false;
}

function booIsSdkMode() {
  if (BOO_SDK_MODE) {
    return true;
  }
  return false;
}

function booIsNotSdkMode() {
  if (BOO_SDK_MODE == false) {
    return true;
  }
  return false;
}

/**
 * v3.0 files..
 */

var PLAYER_PRIMARY_CORE = {
  arrFileList: [
    {
      strFile: 'core_player_2_bundle.js',
      strType: 'base',
      booLoadRequested: false
    }
  ],
  arrCompletionEvents: []
};

/**
 * Core Framework files
 */
var FRAMEWORKS_AND_APIS_GOMO_CORE = {
  arrFileList: [
    /* REQUIRED DATA FILES */
    // Load player frameworks
    {
      strFile: 'libs_bundle.js',
      strType: 'base',
      booLoadRequested: false
    }
  ],
  arrCompletionEvents: ['frameworksLoaded']
};

var GOMO_SETTINGS = {
  arrFileList: [
    {
      strFile: PATH_MANAGER.getPathToData() + 'settings.json',
      strType: 'settings-json',
      booLoadRequested: false
    },
    {
      strFile: PATH_MANAGER.getPathToGlobalModules('modules/data/bundle_core_config.json'),
      strType: 'overrides-json',
      booLoadRequested: false,
      arrCompletionEvents: [],
      funBooConditionalLoader: this.shouldLoadCoreModules
    },
    {
      strFile: PATH_MANAGER.getPathToUserGroupModules('modules/data/bundle_custom_config.json'),
      strType: 'overrides-json',
      booLoadRequested: false,
      arrCompletionEvents: [],
      funBooConditionalLoader: this.shouldLoadCustomModules
    }
  ],
  arrCompletionEvents: []
};

var OBJ_GLOBAL_LOCALISATION_DATA = {
  arrFileList: [
    {
      strFile: 'global_core_localisation.js',
      strType: 'coreModules',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCoreLocalisations,
      arrDataLoadHandlers: []
    },
    {
      strFile: 'global_custom_localisation.js',
      strType: 'customModules',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCustomLocalisations,
      arrDataLoadHandlers: []
    }
  ],
  arrCompletionEvents: []
};

var OBJ_LOCALISATION_DATA = {
  arrFileList: [
    {
      strFile: PATH_MANAGER.getPathToData() + 'localisation.json',
      strType: 'external-json',
      booLoadRequested: false,
      arrDataLoadHandlers: ['recieveTopicContentData']
    }
  ],
  arrCompletionEvents: ['localisationLoaded']
};

var PRIMARY_CSS = {
  arrFileList: [
    // LOAD CSS
    {strFile: 'libs_bundle.css', strType: 'base', booLoadRequested: false},
    {strFile: 'gomo_styles.css', strType: 'theme', booLoadRequested: false},
    {
      strFile: 'js_core_css_extract.css',
      strType: 'coreModules', booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCssCoreBundle
    },
    {
      strFile: 'js_custom_css_extract.css',
      strType: 'customModules', booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCssCustomBundle
    }
  ],
  arrCompletionEvents: []
};

var JS_PRIMARY_CORE = {
  arrFileList: [
    {
      strFile: 'core_js_2_bundle.js',
      strType: 'base',
      booLoadRequested: false
    }
  ],
  arrCompletionEvents: []
};

// This needs to load after CSS
var DEVICE_SPECIFIC_FRAMEWORKS = {
  arrFileList: [
    // PhoneGap Javascript
    {
      strFile: 'cordova.js',
      strType: 'base',
      booLoadRequested: false,
      funBooConditionalLoader: this.booConditionalApp
    },
    {
      strFile: 'vendor/html5shiv/html5shiv.js',
      strType: 'dependant-api',
      booLoadRequested: false,
      funBooConditionalLoader: this.booIsIE8
    }
  ],
  arrCompletionEvents: []
};

var JS_SECONDARY_CORE = {
  arrFileList: [
    {
      strFile: 'core_js_3_bundle.js',
      strType: 'base',
      booLoadRequested: false
    }
  ],
  arrCompletionEvents: ['gomoSecondaryFilesLoaded']
};

var OBJ_GOMO_MODULES_MANIFESTS = {
  arrFileList: [
    {
      strFile: 'core_manifests_bundle.js',
      strType: 'coreModules',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCoreManifest
    },
    {
      strFile: 'custom_manifests_bundle.js',
      strType: 'customModules',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCustomManifest
    }
  ],
  arrCompletionEvents: ['gomoManifestsLoaded']
};

var OBJ_GOMO_MODULES = {
  arrFileList: [
    {
      strFile: 'js_core_bundle.js',
      strType: 'coreModules',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCoreJs
    },
    {
      strFile: 'js_custom_bundle.js',
      strType: 'customModules',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCustomJs
    },
    {
      strFile: PATH_MANAGER.getPathToGlobalModules('core_modules_html_1_bundle.htm'),
      strType: 'base-payload-html',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCoreHtml
    },
    {
      strFile: PATH_MANAGER.getPathToGlobalModules('core_modules_html_2_bundle.htm'),
      strType: 'base-payload-html',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCoreHtml
    },
    {
      strFile: PATH_MANAGER.getPathToUserGroupModules('custom_modules_html_1_bundle.htm'),
      strType: 'base-payload-html',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCustomHtml
    },
    {
      strFile: PATH_MANAGER.getPathToUserGroupModules('custom_modules_html_2_bundle.htm'),
      strType: 'base-payload-html',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCustomHtml
    }
  ],
  arrCompletionEvents: ['purgeHTMLIframes']
};

var OBJ_THEME_OVERRIDE_JS_FILES = {
  arrFileList: [
    // LOAD THEME OVERRIDES
    {strFile: 'OVERRIDES_config.js', strType: 'theme', booLoadRequested: false}
  ],
  arrCompletionEvents: ['gomoThemeJsOverridesLoaded']
};

var OBJ_PLAYER_DATA_CONTENT = {
  arrFileList: [
    {
      strFile: PATH_MANAGER.getPathToData() + 'data.json',
      strType: 'external-json',
      booLoadRequested: false,
      funBooConditionalLoader: this.booIsNotSdkMode,
      arrCompletionEvents: []
    }
  ],
  arrCompletionEvents: []
};

var OBJ_MODULES_EXTERNAL_LINKS = {
  arrFileList: [
    {
      strFile: PATH_MANAGER.getPathToGlobalModules('modules/bundle_core_external_links.json'),
      strType: 'external-json',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCoreExternalFiles,
      arrCompletionEvents: []
    },
    {
      strFile: PATH_MANAGER.getPathToUserGroupModules('modules/bundle_custom_external_links.json'),
      strType: 'external-json',
      booLoadRequested: false,
      funBooConditionalLoader: this.shouldLoadCustomExternalFiles,
      arrCompletionEvents: []
    }
  ],
  arrCompletionEvents: []
};

// Load Portal data for variable overrides
// To-do make this a data folder file
var OBJ_PORTAL_SETTINGS_DATA = {
  arrFileList: [
    {
      strFile: PATH_MANAGER.getPathToData() + 'overrides.json',
      strType: 'overrides-json',
      booLoadRequested: false,
      arrCompletionEvents: []
    }
  ],
  arrCompletionEvents: ['gomoCoreAndDataLoaded', 'loadSequenceCompleted']
};

// Comes here to allow respond.js to refactor as much CSS as possible
var OBJ_TERCHARY_FRAMEWORKS_AND_APIS = {
  arrFileList: [
    {
      strFile: 'respond.js',
      strType: 'dependant-api',
      booLoadRequested: false,
      funBooConditionalLoader: this.booIsIE8
    }
  ],
  arrCompletionEvents: []
};

var OBJ_PREVIEW_OVERRIDES = {
  arrFileList: [
    {strFile: 'preview_overrides.css', strType: 'preview-css-override', booLoadRequested: false},
    {strFile: 'preview_overrides.js', strType: 'preview-js-override', booLoadRequested: false}
  ],
  arrCompletionEvents: []
};

var ARR_CORE_LOAD_SEQUENCE = [
  {
    strTitle: 'Frameworks and apis gomo core',
    strID: 'frameworks2',
    objLoadData: FRAMEWORKS_AND_APIS_GOMO_CORE
  },
  {
    strTitle: 'Settings json',
    strID: 'gomo settings',
    objLoadData: GOMO_SETTINGS
  },
  {
    strTitle: 'global_Localisation data',
    strID: 'data',
    objLoadData: OBJ_GLOBAL_LOCALISATION_DATA
  },
  {
    strTitle: 'Localisation data',
    strID: 'data',
    objLoadData: OBJ_LOCALISATION_DATA
  },
  {
    strTitle: 'Player data content',
    strID: 'data content',
    objLoadData: OBJ_PLAYER_DATA_CONTENT
  },
  {
    strTitle: 'Primary core load list',
    strID: 'core1',
    objLoadData: JS_PRIMARY_CORE
  },
  {
    strTitle: 'Primary CSS requirements',
    strID: 'primarycss',
    objLoadData: PRIMARY_CSS
  },
  {
    strTitle: 'Scondary Frameworks - device specific',
    strID: 'frameworks3',
    objLoadData: DEVICE_SPECIFIC_FRAMEWORKS
  },
  {
    strTitle: 'Secondary core load list',
    strID: 'core2',
    objLoadData: JS_SECONDARY_CORE
  },
  // v3.0 core files!
  {
    strTitle: 'v3.0 Player - core 1',
    strID: 'v3PlayerCore1',
    objLoadData: PLAYER_PRIMARY_CORE
  },
  /* MDOULES */
  {
    strTitle: 'GoMo Modules manifests load list',
    strID: 'manifests',
    objLoadData: OBJ_GOMO_MODULES_MANIFESTS
  },
  {
    strTitle: 'GoMo modules JS and html',
    strID: 'modules code',
    objLoadData: OBJ_GOMO_MODULES
  },
  {
    strTitle: 'GoMo modules external links - optional',
    strID: 'modules dependencies',
    objLoadData: OBJ_MODULES_EXTERNAL_LINKS
  },
  /* MODULES END */
  {
    strTitle: 'Preview overrides load - only for portal',
    strID: 'previewOverridesLoad',
    objLoadData: OBJ_PREVIEW_OVERRIDES
  },
  {
    strTitle: 'ThemeOverrides JS',
    strID: 'themeJsoverrides',
    objLoadData: OBJ_THEME_OVERRIDE_JS_FILES
  },
  {
    strTitle: 'Portal Settings data',
    strID: 'Portal data',
    objLoadData: OBJ_PORTAL_SETTINGS_DATA
  },
  {
    strTitle: 'Final frameworks load',
    strID: 'frameworksFinal',
    objLoadData: OBJ_TERCHARY_FRAMEWORKS_AND_APIS
  }
];

// ************************** AUTHORING LISTINGS REFRESH SEQUENCE **************************

// Dynamic Player version
var OBJ_PLAYER_REFRESH_DATA = {
  arrFileList: [
    {
      strFile: '',
      strType: '',
      arrDataLoadHandlers: ['recieveDataTemplates'],
      booLoadRequested: false
    }
  ],
  arrCompletionEvents: ['refreshDataComplete']
};

var ARR_DATA_REFRESH_LOAD_SEQUENCE = [
  {
    strTitle: 'Refresh data sequence',
    strID: 'refresh_data',
    objLoadData: OBJ_PLAYER_REFRESH_DATA
  }
];

// Node JS hook for boot objects
(function(root) {
  if (typeof module === 'object' && typeof module.exports === 'object') { // eslint-disable-line no-undef
    module.exports = { // eslint-disable-line no-undef
      JS_PRIMARY_CORE: JS_PRIMARY_CORE.arrFileList,
      JS_SECONDARY_CORE: JS_SECONDARY_CORE.arrFileList,
      OBJ_GOMO_MODULES_MANIFESTS: OBJ_GOMO_MODULES_MANIFESTS.arrFileList,
      OBJ_GOMO_MODULES: OBJ_GOMO_MODULES.arrFileList,
      PLAYER_PRIMARY_CORE: PLAYER_PRIMARY_CORE.arrFileList
    };
  }
})(this);
