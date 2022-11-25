gomo.manifestManager.add({
  uuid: '9d7f1720-b8ee-11e4-a71e-12e3f512a338',
  id: 'asset-accordion',
  type: 'asset',
  group: 'presentation',
  manifestId: 'accordion',
  name: 'Accordion',
  description: 'Display a set of content in a accordion view.',
  version: '1.0',
  compatibility: {player: '>=3.0.0'},
  boundaries: {
    small: {min: 100, max: 200},
    medium: {min: 201, max: 500},
    large: {min: 501, max: -1}
  },
  files: [
    {file: 'accordion_asset.js'},
    {file: 'accordion_asset.css'},
    {file: 'accordion_fragments.html'}
  ],
  dependencies: []
});
gomo.manifestManager.add({
  uuid: '44f414ac-b8ee-11e4-a71e-12e3f512a338',
  id: 'asset-button',
  type: 'asset',
  group: 'presentation',
  manifestId: 'button',
  name: 'Button',
  description: 'This is a button for adding simple actions too.',
  version: '1.0',
  compatibility: {player: '>=3.0.0'},
  boundaries: {
    small: {min: 100, max: 200},
    medium: {min: 201, max: 500},
    large: {min: 501, max: -1}
  },
  files: [
    {file: 'button_asset.js'},
    {file: 'button_asset.css'},
    {file: 'button_fragments.html'}
  ],
  dependencies: []
});
gomo.manifestManager.add({
  uuid: '08d8b45a-b8ee-11e4-a71e-12e3f512a338',
  id: 'asset-carousel',
  type: 'asset',
  group: 'presentation',
  manifestId: 'carousel',
  name: 'Carousel',
  description: 'Display a set of content in a carousel view.',
  version: '1.0',
  compatibility: {player: '>=3.0.0'},
  boundaries: {
    small: {min: 100, max: 200},
    medium: {min: 201, max: 500},
    large: {min: 501, max: -1}
  },
  files: [
    {file: 'carousel_asset.js'},
    {file: 'carousel_asset.css'},
    {file: 'carousel_fragments.html'}
  ],
  dependencies: [
    {file: 'player/owl-carousel/owl.carousel.min.js'},
    {file: 'player/owl-carousel/owl.carousel.css'},
    {file: 'player/owl-carousel/owl.theme.css'},
    {file: 'player/owl-carousel/owl.transitions.css'},
    {file: 'player/owl-carousel/grabbing.png'},
    {file: 'player/owl-carousel/AjaxLoader.gif'}
  ]
});
gomo.manifestManager.add({"uuid":"cf1b8580-b8ed-11e4-a71e-12e3f512a338","id":"asset-comic-strip","type":"asset","group":"presentation","manifestId":"comicstripAsset","name":"Comicstrip","description":"Display a group of images with interactive click states and more info.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"settings":{"objCustomThemeElements":{"intAdditionalScreenWidth":100}},"files":[{"file":"extension_comicstrip_asset.js"},{"file":"comicstrip_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({
  uuid: 'f4426120-333e-11e8-8244-77a805384038',
  id: 'countdown-timer',
  type: 'asset',
  group: 'presentation',
  manifestId: '',
  name: 'countdownTimer',
  description: '',
  version: '1.0',
  compatibility: {player: '>=3.0.0'},
  boundaries: {
    small: {min: 100, max: 200},
    medium: {min: 201, max: 500},
    large: {min: 501, max: -1}
  },
  files: [
    {file: 'countdown-timer_asset.js'},
    {file: 'countdown-timer_style.css'},
    {file: 'countdown-timer_fragments.html'}
  ],
  playerDependancies: []
});
gomo.manifestManager.add({"uuid":"a4580864-b8ed-11e4-a71e-12e3f512a338","id":"asset-filmstrip","type":"asset","group":"presentation","manifestId":"filmStripAsset","name":"Filmstrip","description":"Display a set of content in a filmstrip view.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"filmstrip_asset.js"},{"file":"filmstrip_asset.css"},{"file":"filmstrip_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"259cda36-b8ed-11e4-a71e-12e3f512a338","id":"asset-hot-text","type":"asset","group":"presentation","manifestId":"hotTextAsset","name":"Hottext","description":"Linkable text to subscreens.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_hottext_asset.js"},{"file":"hottext_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"c3f78b32-b8ec-11e4-a71e-12e3f512a338","id":"asset-image-button","type":"asset","group":"presentation","manifestId":"imagebutton","name":"Image button","description":"This will allow for a graphic with rollover states to have one or more actions applied to it.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_image_button_asset.js"},{"file":"image_button_asset.css"},{"file":"image_button_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"91648346-b8ec-11e4-a71e-12e3f512a338","id":"asset-image-hotspot","type":"asset","group":"presentation","manifestId":"imagehotspot","name":"Hotspot Image","description":"This asset displays an image with hotspots that can have actions set on them.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_image_hotspot_asset.js"},{"file":"image_hotspot_asset.css"},{"file":"image_hotspot_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({
  uuid: 'b320c1b0-1fb9-11e9-bb16-a72c645d4098',
  id: 'image-markers',
  type: 'asset',
  group: 'presentation',
  manifestId: '',
  name: 'imagemarkersasset',
  description: 'imagemarkersasset',
  version: '1.0',
  compatibility: {player: '>=3.0.0'},
  boundaries: {
    small: {min: 100, max: 200},
    medium: {min: 201, max: 500},
    large: {min: 501, max: -1}
  },
  files: [
    {file: 'image_markers_asset.js'},
    {file: 'image_markers_style.css'},
    {file: 'image_markers_fragments.html'}
  ],
  playerDependancies: [
  ]
});
gomo.manifestManager.add({"uuid":"274b453a-b8ec-11e4-a71e-12e3f512a338","id":"asset-image-static","type":"asset","group":"presentation","manifestId":"imagestatic","name":"Static Image","description":"This is static image asset for display of non-interactive graphics.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_image_static_asset.js"},{"file":"image_static_asset.css"},{"file":"image_static_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"367c9618-b8eb-11e4-a71e-12e3f512a338","id":"asset-image-wall","type":"asset","group":"presentation","manifestId":"imagewallAsset","name":"Image Wall","description":"Display a group of images with interactive click states and more info.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_imagewall_asset.js"},{"file":"imagewall_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[{"file":"player/gamma-gallery/js/jquery.history.js"},{"file":"player/gamma-gallery/js/jquery.masonry.min.js"},{"file":"player/gamma-gallery/js/jquerypp.custom.js"},{"file":"player/gamma-gallery/js/js-url.min.js"},{"file":"player/gamma-gallery/font/entypo-selected.eot"},{"file":"player/gamma-gallery/font/entypo-selected.svg"},{"file":"player/gamma-gallery/font/entypo-selected.ttf"},{"file":"player/gamma-gallery/font/entypo-selected.woff"},{"file":"player/gamma-gallery/css/noJS.css"},{"file":"player/gamma-gallery/css/style.css"},{"file":"player/gamma-gallery/js/gamma.js"}]});gomo.manifestManager.add({"uuid":"efb5c74a-b8ea-11e4-a71e-12e3f512a338","id":"asset-image-zoom","type":"asset","group":"presentation","manifestId":"imagezoom","name":"Zoomable Image","description":"This zoom image asset will allow courses to include images on Screens.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_image_zoom_asset.js"},{"file":"image_zoom_asset.css"},{"file":"image_zoom_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"99736f18-b8ea-11e4-a71e-12e3f512a338","id":"asset-menu-button","type":"asset","group":"presentation","manifestId":"menuButton","name":"Menu Button","description":"This is a button for linking to other topics. It will display the tracking state of the target topic.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_menubutton_asset.js"},{"file":"menubutton_asset.css"},{"file":"menubutton_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"5833c30e-b8ea-11e4-a71e-12e3f512a338","id":"asset-rule","type":"asset","group":"presentation","manifestId":"rule","name":"Separator","description":"Display a set of content in a rule view.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_rule_asset.js"},{"file":"rule_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({
  uuid: '9d7f1720-b8ee-11e4-a71e-12e3f512a338',
  id: 'tabs',
  type: 'asset',
  group: 'presentation',
  manifestId: 'tabs',
  name: 'Tabs',
  description: 'Display a set of content in a tabs view.',
  version: '1.0',
  compatibility: {player: '>=3.0.0'},
  boundaries: {
    small: {min: 100, max: 200},
    medium: {min: 201, max: 500},
    large: {min: 501, max: -1}
  },
  files: [
    {file: 'tabs_asset.js'},
    {file: 'tabs_style.css'},
    {file: 'tabs_fragments.html'}
  ],
  dependencies: []
});
gomo.manifestManager.add({"uuid":"fb7ed5ea-b8e9-11e4-a71e-12e3f512a338","id":"asset-text","type":"asset","group":"presentation","manifestId":"textAsset","name":"Text","description":"This is a simple Text asset.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"text_asset.js"},{"file":"text_asset.css"},{"file":"text_fragments.html"},{"file":"text_styles.css","context":"referenced"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"7c8df0e0-b8e9-11e4-a71e-12e3f512a338","id":"asset-assessment-results","type":"asset","group":"question","manifestId":"assessmentResultsAsset","name":"Assessment Results","description":"This asset totals up the scores within a topic and provides banded feedback.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_assessment_results_asset.js"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"03866a70-bf02-11e7-8b01-4de52774cb2d","id":"drag-and-drop","type":"asset","group":"question","manifestId":"","name":"drag-and-drop","description":"","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"drag-and-drop_asset.js"},{"file":"drag-and-drop_style.css"},{"file":"drag-and-drop_fragments.html"}],"playerDependancies":[]});gomo.manifestManager.add({"uuid":"0958dd6a-b8e9-11e4-a71e-12e3f512a338","id":"asset-drop-downs-on-graphic","type":"asset","group":"question","manifestId":"dropDownOnGraphicAsset","name":"Dropdowns on Graphic","description":"This Asset displays one or more dropdown controls over an image.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_ddog_asset.js"},{"file":"ddog_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"d4daac30-b8e8-11e4-a71e-12e3f512a338","id":"asset-dropdown-list","type":"asset","group":"question","manifestId":"dropdownListAsset","name":"Dropdown List","description":"Dropdown List asset.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"dropdown_list_asset.js"},{"file":"dropdown_list_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"8e152582-b8e8-11e4-a71e-12e3f512a338","id":"asset-graphical-mcq","type":"asset","group":"question","manifestId":"graphicalMcqAsset","name":"Graphical Multiple Choice","description":"A series of 2 or more small images, one of which is correct.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_graphicalmcq_asset.js"},{"file":"graphicalmcq_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"35032750-b8e8-11e4-a71e-12e3f512a338","id":"asset-graphical-sfl","type":"asset","group":"question","manifestId":"graphicalSflAsset","name":"Graphical Select from List","description":"A series of 2 or more small images, one or more of which is correct.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_graphicalsfl_asset.js"},{"file":"graphicalsfl_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"f32afe2a-b8e7-11e4-a71e-12e3f512a338","id":"asset-hotspot-mcq","type":"asset","group":"question","manifestId":"hotspotMcqAsset","name":"Hotspot Multiple Choice","description":"Hotspot MCQ.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_hotspotmcq_asset.js"},{"file":"hotspotmcq_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"7a74bb40-42e3-11e8-87cd-b5c4573f0901","id":"likert","type":"asset","group":"question","manifestId":"","name":"likert","description":"","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"likert_asset.js"},{"file":"likert_style.css"},{"file":"likert_fragments.html"}],"playerDependancies":[]});gomo.manifestManager.add({"uuid":"96286564-b8e7-11e4-a71e-12e3f512a338","id":"asset-mcq","type":"asset","group":"question","manifestId":"mcqAsset","name":"Multiple Choice","description":"This question asset allows for the selection of a single option from a list and may provide feedback.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_mcq_asset.js"},{"file":"mcq_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"efce89b4-b8e6-11e4-a71e-12e3f512a338","id":"asset-number-input","type":"asset","group":"question","manifestId":"numberInputAsset","name":"Number Input","description":"Number Input asset.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_numberinput_asset.js"},{"file":"numberinput_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"6efebd0e-b8e6-11e4-a71e-12e3f512a338","id":"asset-sfl","type":"asset","group":"question","manifestId":"sflAsset","name":"Select from List","description":"This question asset allows for the selection of one or more options from a list and may provide feedback.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_sfl_asset.js"},{"file":"sfl_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid": "6efebd0e-b8e6-11e4-a71e-12e3f512a338","id": "asset-stateselector","type": "asset","group": "question","manifestId": "stateselector","name": "AICPA state selector","description": "This question asset allows for the selection of one or more states.","version": "1.0","compatibility": {"player": ">=3.0.0"},"boundaries": {"small": {"min" : 100,"max" : 200},"medium": {"min" : 201,"max" : 500},"large": {"min" : 501,"max" : -1}},"player": {"tracking": {"scorm": {"suspendData": {"format": "string","seperator": "|~|"}}}},"files": [{ "file": "stateselector_asset.js" },{ "file": "stateselector_asset.css" },{ "file": "stateselector_fragments.html" }],"playerDependancies": []});gomo.manifestManager.add({"uuid":"fedb5d66-b8e5-11e4-a71e-12e3f512a338","id":"asset-text-input","type":"asset","group":"question","manifestId":"textInputAsset","name":"Text Input","description":"Text Input asset.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"extension_textinput_asset.js"},{"file":"textinput_asset.css"},{"file":"asset_fragments.html"}],"dependencies":[]});gomo.manifestManager.add({"uuid":"31cac3a8-b8e9-11e4-a71e-12e3f512a338","id":"asset-audio-player","type":"asset","group":"media","manifestId":"audioAsset","name":"Audio Player","description":"This is the asset for playing and controling audio files.","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"asset_fragments.html"},{"file":"extension_audio_player_asset.js"},{"file":"audioplayer_asset.css"}],"dependencies":[{ "file": "player/mediaelement/mediaelement-and-player.min.js" },{ "file": "player/mediaelement/mediaelementplayer.min.css" }]});gomo.manifestManager.add({"uuid":"3801d6cc-b8ed-11e4-a71e-12e3f512a338","id":"asset-iframe","type":"asset","group":"media","manifestId":"iframe","name":"iFrame (BETA)","description":"An iFrame asset","version":"1.0","compatibility":{"player":">=3.0.0"},"boundaries":{"small":{"min":100,"max":200},"medium":{"min":201,"max":500},"large":{"min":501,"max":-1}},"files":[{"file":"asset_fragments.html"},{"file":"extension_iframe_asset.js"},{"file":"iframe_asset.css"}],"dependencies":[]});/* eslint-disable */
gomo.manifestManager.add({
  uuid: '3801e1ee-b8ed-11e4-a71e-12e3f512a338',
  id: 'asset-video2',
  type: 'asset',
  group: 'media',
  manifestId: 'videoJs2',
  name: 'Video Player',
  description:
    'This is the asset for playing and controling video files. This version also includes subtitle support.',
  version: '1.0',
  compatibility: {player: '>=3.0.0'},
  boundaries: {
    small: {min: 100, max: 200},
    medium: {min: 201, max: 500},
    large: {min: 501, max: -1}
  },
  files: [{file: 'video_fragments.html'}, {file: 'video_asset.js'}, {file: 'video_asset.css'}],
  dependencies: [
    {file: 'player/video-js-2/video.min.js'},
    {file: 'player/video-js-2/video-js.min.css'}
  ]
});
var strManifestID = "accessibleExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Accessible",		// Human readable name
	"strID" : "extra-accessible", 					// Unique key for system use
	"strDescription" : "Switch Accessible and Standard modes.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "core-interface",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
	},

	"objPortalDeclarations" :
	{
		"objFields": {
            "title": {
                "strTitle": "Accessible Mode title",
                "strInputType": "text",
                "defaultValue": "@NAV_ACCESSIBLE_VERSION_BUTTON_TEXT"
            },
			"altTitle": {
                "strTitle": "Standard Mode title",
                "strInputType": "text",
                "defaultValue": "@NAV_STANDARD_VERSION_BUTTON_TEXT"
            }
        },

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"intDefaultOrder" : 2
		}
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],


		"objMetaTopicConfigOverrides" :
		{
			"objAuthoringConfigurationSettings.booTopicCanUseSubscreens" : false
		},

		"arrWhitelistedAssets" :
		[
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],

		"objFiles" :
		{
		},

		"objDependancies" :
		{
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "accessibleButtonTemplateC",
			"strAltHtmlFragment" : "versionAltTemplateC"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderHelloWorldSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderHelloWorldMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderHelloWorldLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"accessible_mode.js" : "base",
			"extra_fragments.html" : "base",
			"accessible_extra.css" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);/* eslint-disable */
var strManifestID = "animatorInterface";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Animator Interface",		// Human readable name
	"strID" : "extra-animator-interface", 					// Unique key for system use
	"strDescription" : "This interface allows assets to request animation which is " +
			"then passed off to move.js or animator.js depending on hardware support.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		// Use of "gomo-auto" presumes the archtecture will take care of populating a value automatically.
		"strID" : "",
		// Extra's strID property?
		"strType" : "",
		"strGroup" : "core-interface",	//### Check these make sense!
		"strLayoutID" : "",
		"strLayoutColumn" : "",
		"objImageSrc" :
		{
			"strImageSrc" : "",
			"strDescription" : "",
			"strBrief" : ""
		},

		// Other Extra specific properties
		// Example repeatable data block:
		"arrOptions" :
		[
			{
				"strOptionText" : "",
				"booIsCorrect" : true,
				"arrActions" : []	// Option specific actions (see below for some examples)
			},
			{
				"strOptionText" : "",
				"booIsCorrect" : false,
				"arrActions" : []	// Option specific actions (see below for some examples)
			}
		],

		// Example Extra level actions, some Extras would use option / hotspot etc. level actions
		"arrActions" :	// ### Confirm once Actions are fully defined.
		[
			{
				"strActionID" : "action-id-01",	// Show subscreen example
				"objActionParams" :
				{
					"strTargetSubScreenID" : "123s01sub01"
				}
			},
			{
				"strActionID" : "action-id-02",	// Play audio file example
				"objActionParams" :
				{
					"strAudioFilename" : "audiofile.mp3"
				}
			},
			{
				"strActionID" : "action-id-03",	// Change Extra state example
				"objActionParams" :
				{
					"strExtraID" : "123s01a04",
					"strTargetSRC" : "custom2"
				}
			},
			{
				"strActionID" : "action-id-04",	// Change variable value example
				"objActionParams" :
				{
					"strVariableName" : "VARIABLE_1",
					"strNewVariableValue" : "Fish!"
				}
			}
		]
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
			{
				"strTestName" : "Small screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with minimal content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_small.json"
			},
			{
				"strTestName" : "Average screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with average amount content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_average.json"
			},
			{
				"strTestName" : "Large screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_large.json"
			},
			{
				"strTestName" : "Small sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with minimal content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_small.json"
			},
			{
				"strTestName" : "Average sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with average amount content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_average.json"
			},
			{
				"strTestName" : "Large sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_large.json"
			}
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[
			{
				"strActionName" : "Fancy custom action for this extra only!",
				"strActionID" : "action-id-03",
				"strFilename" : "custom_action_03.zip"
			},
			{
				"strActionName" : "Another fancy custom action for this extra only!",
				"strActionID" : "action-id-04",
				"strFilename" : "custom_action_04.zip"
			}
		]
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[
				{
					"strDirectiveTitle" : "Extra title: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : "Hello World Extra",
					"strBoundValue" : null,
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras title",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "ID: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : null,
					"strBoundValue" : "strID",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras ID",
					"strVisibilityCheckMethod" : null
				}
			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : "A default property/##DYNAMIC_VALUE_1##",
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : null,
					"booTemplateability" : false,
					"strTooltip" : "This is the extras tooltip" , // Leave blank to disable tool tip
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "BUTTON_COLLECTION",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intDefaultSelection" : 0,
					// If set to true, should be bound to an array on the extra data
					"booAllowMultipleSelections" : false,
					"booGroupButtons" : true,
					"arrButtons" :
					[
						{
							"strButtonTitle" : "Button 1",
							"strButtonValue" : "button-value-1",
							"strButtonStyle" : "default/alt-button-style1C"
						},
						{
							"strButtonTitle" : "Button 2",
							"strButtonValue" : "button-value-2",
							"strButtonStyle" : "default/alt-button-style1C"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "CHECKBOX",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"booDefaultState" : true,
					"strSelectedValue" : true,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "RADIO",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedRadioIndex" : 0,
					"strSelectedValue" : "##REPEATABLE_COUNT##",
					"strGroup" : "radioButtonGroupName",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "DROPDOWN",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedIndex" : 0,
					"arrDropdownContents" :
					[
						{
							"strType" : "static",
							"strTitle" : "Title 1",
							"strValue" : "value-1"
						},
						{
							"strType" : "static",
							"strTitle" : "Title 2",
							"strValue" : "value-2"
						},
						// Will resolve to a single array entry
						{
							"strType" : "dynamic-single",
							"strTitle" : "##DYNAMIC_TITLE_1##",
							"strValue" : "##DYNAMIC_VALUE_1##"
						},
						// Will resolve to zero, one or more array entries.
						{
							"strType" : "dynamic-block",
							"strTitle" : "##DYNAMIC_TITLE_COLLECTION_1##",
							"strValue" : "##DYNAMIC_VALUE_COLLECTION_1##"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SLIDER_HORIZONTAL",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"floMin" : 0.0,
					"floMax" : 10,
					"floStep" : 0.5,
					"floInitialValue" : 5,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "MULTI_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Set to two or more lines.
					"intNumberOfLines" : 2,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT_WITH_BROWSE",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "##EXTRA_ID##.png",
					"arrAllowedFileTypes" :
					[
						".xml",
						".pdf",
						"##IMAGE_FILES##",	// Magic value, gets expanded based on presets
						"##AUDIO_FILES##",	// Magic value, gets expanded based on presets
						"##VIDEO_FILES##",	// Magic value, gets expanded based on presets
						"##ALL##"						// Magic value, removes all filtering
					],
					"arrViewTypes" :
					[
						"list",
						"small-thumb",
						"medium-thumb",
						"large-thumb"
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Set extra position",
					"strDirectiveType" : "CO_ORDS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"arrInitialValues" : [0,0,50,50],
					"strPopupTitle" : "Extra CO_ORDS/SubScreen CO_ORDS etc.",
					// point = X & Y, full = X, Y, W & H
					"strCoordsType" : "point/full",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strPopupBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Button Title",
					"strDirectiveType" : "HOTSPOTS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strPopupTitle" : "Hotspots",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Repeatable block title: ",
					"strDirectiveType" : "REPEATABLE_BLOCK",
					"arrBlockRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Can be set to null or an event name. The outermost DOM element for the block, the new block index and the extra will be passed as parameters.
					"strAddCallback" : "",
					// Can be set to null or an event name. The outermost DOM element for the block, the block index and the extra will be passed as parameters.
					"strRemoveCallback" : "",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Sub inspector button",
					"strDirectivePopupTitle" : "Sub inspector popup",
					"strDirectiveType" : "SUBINSPECTOR",
					"arrSubInspectorRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Called after the popup has finished opening. Can be set to null or an event name.
					"strOpenedCallback" : "",
					// Called prior to closure, can be set to null or an event name.
					"strVerfifcationCallback" : "",
					// Called once closure is complete, can be set to null or an event name.
					"strClosedCallback" : "",
					"strVisibilityCheckMethod" : null
				}
			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"animator_interface.js" : "base"
		},

		"objDependancies" :
		{
			"player/move-js/move.js" : "dependant-api",
			"player/animator-js/animator.js" : "dependant-api"
		}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);/* eslint-disable */
var strManifestID = "animatorInterface2";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Animator Interface 2",		// Human readable name
	"strID" : "extra-animator-interface-2", 					// Unique key for system use
	"strDescription" : "This interface allows assets to request animation which is " +
			"then passed off to move.js or animator.js depending on hardware support.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		// Use of "gomo-auto" presumes the archtecture will take care of populating a value automatically.
		"strID" : "",
		// Extra's strID property?
		"strType" : "",
		"strGroup" : "core-interface",	//### Check these make sense!
		"strLayoutID" : "",
		"strLayoutColumn" : "",
		"objImageSrc" :
		{
			"strImageSrc" : "",
			"strDescription" : "",
			"strBrief" : ""
		},

		// Other Extra specific properties
		// Example repeatable data block:
		"arrOptions" :
		[
			{
				"strOptionText" : "",
				"booIsCorrect" : true,
				"arrActions" : []	// Option specific actions (see below for some examples)
			},
			{
				"strOptionText" : "",
				"booIsCorrect" : false,
				"arrActions" : []	// Option specific actions (see below for some examples)
			}
		],

		// Example Extra level actions, some Extras would use option / hotspot etc. level actions
		"arrActions" :	// ### Confirm once Actions are fully defined.
		[
			{
				"strActionID" : "action-id-01",	// Show subscreen example
				"objActionParams" :
				{
					"strTargetSubScreenID" : "123s01sub01"
				}
			},
			{
				"strActionID" : "action-id-02",	// Play audio file example
				"objActionParams" :
				{
					"strAudioFilename" : "audiofile.mp3"
				}
			},
			{
				"strActionID" : "action-id-03",	// Change Extra state example
				"objActionParams" :
				{
					"strExtraID" : "123s01a04",
					"strTargetSRC" : "custom2"
				}
			},
			{
				"strActionID" : "action-id-04",	// Change variable value example
				"objActionParams" :
				{
					"strVariableName" : "VARIABLE_1",
					"strNewVariableValue" : "Fish!"
				}
			}
		]
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
			{
				"strTestName" : "Small screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with minimal content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_small.json"
			},
			{
				"strTestName" : "Average screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with average amount content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_average.json"
			},
			{
				"strTestName" : "Large screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_large.json"
			},
			{
				"strTestName" : "Small sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with minimal content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_small.json"
			},
			{
				"strTestName" : "Average sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with average amount content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_average.json"
			},
			{
				"strTestName" : "Large sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_large.json"
			}
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[
			{
				"strActionName" : "Fancy custom action for this extra only!",
				"strActionID" : "action-id-03",
				"strFilename" : "custom_action_03.zip"
			},
			{
				"strActionName" : "Another fancy custom action for this extra only!",
				"strActionID" : "action-id-04",
				"strFilename" : "custom_action_04.zip"
			}
		]
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[
				{
					"strDirectiveTitle" : "Extra title: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : "Hello World Extra",
					"strBoundValue" : null,
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras title",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "ID: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : null,
					"strBoundValue" : "strID",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras ID",
					"strVisibilityCheckMethod" : null
				}
			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : "A default property/##DYNAMIC_VALUE_1##",
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : null,
					"booTemplateability" : false,
					"strTooltip" : "This is the extras tooltip" , // Leave blank to disable tool tip
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "BUTTON_COLLECTION",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intDefaultSelection" : 0,
					// If set to true, should be bound to an array on the extra data
					"booAllowMultipleSelections" : false,
					"booGroupButtons" : true,
					"arrButtons" :
					[
						{
							"strButtonTitle" : "Button 1",
							"strButtonValue" : "button-value-1",
							"strButtonStyle" : "default/alt-button-style1C"
						},
						{
							"strButtonTitle" : "Button 2",
							"strButtonValue" : "button-value-2",
							"strButtonStyle" : "default/alt-button-style1C"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "CHECKBOX",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"booDefaultState" : true,
					"strSelectedValue" : true,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "RADIO",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedRadioIndex" : 0,
					"strSelectedValue" : "##REPEATABLE_COUNT##",
					"strGroup" : "radioButtonGroupName",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "DROPDOWN",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedIndex" : 0,
					"arrDropdownContents" :
					[
						{
							"strType" : "static",
							"strTitle" : "Title 1",
							"strValue" : "value-1"
						},
						{
							"strType" : "static",
							"strTitle" : "Title 2",
							"strValue" : "value-2"
						},
						// Will resolve to a single array entry
						{
							"strType" : "dynamic-single",
							"strTitle" : "##DYNAMIC_TITLE_1##",
							"strValue" : "##DYNAMIC_VALUE_1##"
						},
						// Will resolve to zero, one or more array entries.
						{
							"strType" : "dynamic-block",
							"strTitle" : "##DYNAMIC_TITLE_COLLECTION_1##",
							"strValue" : "##DYNAMIC_VALUE_COLLECTION_1##"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SLIDER_HORIZONTAL",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"floMin" : 0.0,
					"floMax" : 10,
					"floStep" : 0.5,
					"floInitialValue" : 5,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "MULTI_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Set to two or more lines.
					"intNumberOfLines" : 2,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT_WITH_BROWSE",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "##EXTRA_ID##.png",
					"arrAllowedFileTypes" :
					[
						".xml",
						".pdf",
						"##IMAGE_FILES##",	// Magic value, gets expanded based on presets
						"##AUDIO_FILES##",	// Magic value, gets expanded based on presets
						"##VIDEO_FILES##",	// Magic value, gets expanded based on presets
						"##ALL##"						// Magic value, removes all filtering
					],
					"arrViewTypes" :
					[
						"list",
						"small-thumb",
						"medium-thumb",
						"large-thumb"
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Set extra position",
					"strDirectiveType" : "CO_ORDS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"arrInitialValues" : [0,0,50,50],
					"strPopupTitle" : "Extra CO_ORDS/SubScreen CO_ORDS etc.",
					// point = X & Y, full = X, Y, W & H
					"strCoordsType" : "point/full",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strPopupBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Button Title",
					"strDirectiveType" : "HOTSPOTS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strPopupTitle" : "Hotspots",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Repeatable block title: ",
					"strDirectiveType" : "REPEATABLE_BLOCK",
					"arrBlockRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Can be set to null or an event name. The outermost DOM element for the block, the new block index and the extra will be passed as parameters.
					"strAddCallback" : "",
					// Can be set to null or an event name. The outermost DOM element for the block, the block index and the extra will be passed as parameters.
					"strRemoveCallback" : "",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Sub inspector button",
					"strDirectivePopupTitle" : "Sub inspector popup",
					"strDirectiveType" : "SUBINSPECTOR",
					"arrSubInspectorRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Called after the popup has finished opening. Can be set to null or an event name.
					"strOpenedCallback" : "",
					// Called prior to closure, can be set to null or an event name.
					"strVerfifcationCallback" : "",
					// Called once closure is complete, can be set to null or an event name.
					"strClosedCallback" : "",
					"strVisibilityCheckMethod" : null
				}
			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"animator_interface_2.js" : "base"
		},

		"objDependancies" :
		{
			"player/velocityjs/velocity_and_effectsPack.min.js" : "dependant-api"
		}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "backExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Back",		// Human readable name
	"strID" : "extra-back", 					// Unique key for system use
	"strDescription" : "Back page button for player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" : {},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "core-interface",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" : {
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" : [ "v2.1" ],
		"objMetaTopicConfigOverrides" : {},
		"arrWhitelistedAssets" : [
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],
		"objFiles" : {},
		"objDependancies" : {}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" : [
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" : {
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "back_generalTemplateC",
			"strType": "screen_navigation"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" : [],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" : {},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			/*{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderHelloWorldSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderHelloWorldMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderHelloWorldLarge"
			}*/
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"back.js" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" : {}
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" : {},
		"objFields" : {}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "blanker";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Blanker",		// Human readable name
	"strID" : "extra-blanker", 					// Unique key for system use
	"strDescription" : "This is an example of how to create a simple extra.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		// Use of "gomo-auto" presumes the archtecture will take care of populating a value automatically.
		"strID" : "",
		// Extra's strID property?
		"strType" : "",
		"strGroup" : "core-interface",	//### Check these make sense!
		"strLayoutID" : "",
		"strLayoutColumn" : "",
		"objImageSrc" :
		{
			"strImageSrc" : "",
			"strDescription" : "",
			"strBrief" : ""
		},

		// Other Extra specific properties
		// Example repeatable data block:
		"arrOptions" :
		[
			{
				"strOptionText" : "",
				"booIsCorrect" : true,
				"arrActions" : []	// Option specific actions (see below for some examples)
			},
			{
				"strOptionText" : "",
				"booIsCorrect" : false,
				"arrActions" : []	// Option specific actions (see below for some examples)
			}
		],

		// Example Extra level actions, some Extras would use option / hotspot etc. level actions
		"arrActions" :	// ### Confirm once Actions are fully defined.
		[
			{
				"strActionID" : "action-id-01",	// Show subscreen example
				"objActionParams" :
				{
					"strTargetSubScreenID" : "123s01sub01"
				}
			},
			{
				"strActionID" : "action-id-02",	// Play audio file example
				"objActionParams" :
				{
					"strAudioFilename" : "audiofile.mp3"
				}
			},
			{
				"strActionID" : "action-id-03",	// Change Extra state example
				"objActionParams" :
				{
					"strExtraID" : "123s01a04",
					"strTargetSRC" : "custom2"
				}
			},
			{
				"strActionID" : "action-id-04",	// Change variable value example
				"objActionParams" :
				{
					"strVariableName" : "VARIABLE_1",
					"strNewVariableValue" : "Fish!"
				}
			}
		]
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
			{
				"strTestName" : "Small screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with minimal content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_small.json"
			},
			{
				"strTestName" : "Average screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with average amount content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_average.json"
			},
			{
				"strTestName" : "Large screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_large.json"
			},
			{
				"strTestName" : "Small sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with minimal content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_small.json"
			},
			{
				"strTestName" : "Average sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with average amount content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_average.json"
			},
			{
				"strTestName" : "Large sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_large.json"
			}
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[
			{
				"strActionName" : "Fancy custom action for this extra only!",
				"strActionID" : "action-id-03",
				"strFilename" : "custom_action_03.zip"
			},
			{
				"strActionName" : "Another fancy custom action for this extra only!",
				"strActionID" : "action-id-04",
				"strFilename" : "custom_action_04.zip"
			}
		]
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"BLANKER_LAYER_MISSING_ERROR" : "ERROR: Unable to find blanking layer in BLANKER.handleEvent_toggleBlanking(), blanker.js"
		}
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[
				{
					"strDirectiveTitle" : "Extra Title: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : "Hello World Extra",
					"strBoundValue" : null,
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras title",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "ID: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : null,
					"strBoundValue" : "strID",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras ID",
					"strVisibilityCheckMethod" : null
				}
			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : "A default property/##DYNAMIC_VALUE_1##",
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : null,
					"booTemplateability" : false,
					"strTooltip" : "This is the extras tooltip" , // Leave blank to disable tool tip
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "BUTTON_COLLECTION",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intDefaultSelection" : 0,
					// If set to true, should be bound to an array on the extra data
					"booAllowMultipleSelections" : false,
					"booGroupButtons" : true,
					"arrButtons" :
					[
						{
							"strButtonTitle" : "Button 1",
							"strButtonValue" : "button-value-1",
							"strButtonStyle" : "default/alt-button-style1C"
						},
						{
							"strButtonTitle" : "Button 2",
							"strButtonValue" : "button-value-2",
							"strButtonStyle" : "default/alt-button-style1C"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "CHECKBOX",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"booDefaultState" : true,
					"strSelectedValue" : true,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "RADIO",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedRadioIndex" : 0,
					"strSelectedValue" : "##REPEATABLE_COUNT##",
					"strGroup" : "radioButtonGroupName",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "DROPDOWN",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedIndex" : 0,
					"arrDropdownContents" :
					[
						{
							"strType" : "static",
							"strTitle" : "Title 1",
							"strValue" : "value-1"
						},
						{
							"strType" : "static",
							"strTitle" : "Title 2",
							"strValue" : "value-2"
						},
						// Will resolve to a single array entry
						{
							"strType" : "dynamic-single",
							"strTitle" : "##DYNAMIC_TITLE_1##",
							"strValue" : "##DYNAMIC_VALUE_1##"
						},
						// Will resolve to zero, one or more array entries.
						{
							"strType" : "dynamic-block",
							"strTitle" : "##DYNAMIC_TITLE_COLLECTION_1##",
							"strValue" : "##DYNAMIC_VALUE_COLLECTION_1##"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SLIDER_HORIZONTAL",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"floMin" : 0.0,
					"floMax" : 10,
					"floStep" : 0.5,
					"floInitialValue" : 5,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "MULTI_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Set to two or more lines.
					"intNumberOfLines" : 2,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT_WITH_BROWSE",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "##EXTRA_ID##.png",
					"arrAllowedFileTypes" :
					[
						".xml",
						".pdf",
						"##IMAGE_FILES##",	// Magic value, gets expanded based on presets
						"##AUDIO_FILES##",	// Magic value, gets expanded based on presets
						"##VIDEO_FILES##",	// Magic value, gets expanded based on presets
						"##ALL##"						// Magic value, removes all filtering
					],
					"arrViewTypes" :
					[
						"list",
						"small-thumb",
						"medium-thumb",
						"large-thumb"
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Set extra position",
					"strDirectiveType" : "CO_ORDS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"arrInitialValues" : [0,0,50,50],
					"strPopupTitle" : "Extra CO_ORDS/SubScreen CO_ORDS etc.",
					// point = X & Y, full = X, Y, W & H
					"strCoordsType" : "point/full",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strPopupBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Button Title",
					"strDirectiveType" : "HOTSPOTS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strPopupTitle" : "Hotspots",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Repeatable Block Title: ",
					"strDirectiveType" : "REPEATABLE_BLOCK",
					"arrBlockRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Can be set to null or an event name. The outermost DOM element for the block, the new block index and the extra will be passed as parameters.
					"strAddCallback" : "",
					// Can be set to null or an event name. The outermost DOM element for the block, the block index and the extra will be passed as parameters.
					"strRemoveCallback" : "",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Sub inspector button",
					"strDirectivePopupTitle" : "Sub inspector popup",
					"strDirectiveType" : "SUBINSPECTOR",
					"arrSubInspectorRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Called after the popup has finished opening. Can be set to null or an event name.
					"strOpenedCallback" : "",
					// Called prior to closure, can be set to null or an event name.
					"strVerfifcationCallback" : "",
					// Called once closure is complete, can be set to null or an event name.
					"strClosedCallback" : "",
					"strVisibilityCheckMethod" : null
				}
			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderBlankerSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderBlankerMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderBlankerLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"blanker.js" : "base",
			"blanker_extra.css" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);/* global MANIFEST_MANAGER */

var strManifestID = 'connection-checkerExtra';
var objManifestData = {
  /** ********************** Core declarations ************************/
  strName: 'connection-checker', // Human readable name
  strID: 'extra-connection-checker', // Unique key for system use
  strDescription: 'connection-checker  button for player.', // JSON Encoded string
  strVersion: '1.0',
  strManifestType: 'extra',

  /** ********************** Source Control ************************/
  // These are for future development.
  strGitRepo: '',
  strGitRepoSubPath: '', // Not sure if we need this or it can be combined with the above path?

  /** ********************** Contributions ************************/
  objContributors: {},

  /** ********************** Extra Data Template ************************/
  // ### Need to consider a sensible system for default values.
  objDataTemplate: {
    strGroup: 'core-interface',
    booIsShown: true
  },

  /** ********************** Common declarations ************************/
  objCommonDeclarations: {},

  objAuthoringDeclarations: {
    // An array of known compatible Authoring builds
    arrAuthoringVersions: ['v2.1'],
    objMetaTopicConfigOverrides: {},
    arrWhitelistedAssets: ['text', 'imagestatic', 'video2', 'audioplayer'],
    objFiles: {},
    objDependancies: {}
  },

  objPlayerDeclarations: {
    // An array of minimum Core Player builds - How can we automate the updating of these
    // lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
    arrPlayerVersions: ['html-v3.0', 'native-html-v3.1'],

    objNavButton: {
      booDefaultDisplayButton: true,
      intPriority: 50,
      strHtmlFragment: 'connection-checker_generalTemplateC'
    },

    // A list of the CORE theme elements utilised by the Extra when in the Player
    // ### To be populated once the Theme definition / manifest is scoped?
    arrThemeElementsSupport: [],

    // Anything that could be sensibly styled that does fit into the CORE theming framework
    // (Bootstrap + Core GoMo extentsions)
    // ### To be populated once the Theme definition / manifest is scoped?
    objCustomThemeElements: {},

    // Methods should be tested for in sequence with the first match found
    // being the one selected.
    // Use of -1 denotes 'any' and would allow a single render method to be
    // specified with both Min and Max set to -1.
    // If a case is found where no methods match, that should be handled by
    // a generic error message being rendered in place of the extra content.
    arrRenderMethods: [],

    // See the comment on the Authoring objFiles declaration
    objFiles: {
      'connection-checker.js': 'base'
    },

    objDependancies: {}
  },

  objPortalDeclarations: {
    objNavButton: {
      booDefaultDisplayButton: true,
      intPriority: 50,
      intDefaultOrder: 1
    },

    objTranslatableCoreContentText: {
      CONNECTION_CHECKER_WARNING: 'It appears you have lost internet connection!',
      CONNECTION_CHECKER_CONTINUE: 'Continue',
      CONNECTION_CHECKER_IGNORE: 'Ignore connection warnings'
    },

    objFields: {}
  }
};

if (typeof MANIFEST_MANAGER != 'undefined') {
  MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}

(function(root) {
  if (typeof module === 'object' && typeof module.exports === 'object') { // eslint-disable-line
    module.exports = { // eslint-disable-line
      dependancies: objManifestData.objPlayerDeclarations.objDependancies,
      main: objManifestData.objPlayerDeclarations.objFiles
    };
  }
})(this);
var strManifestID = "exitExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Exit",		// Human readable name
	"strID" : "extra-exit", 					// Unique key for system use
	"strDescription" : "Exit  button for player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" : {},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "core-interface",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" : {
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" : [ "v2.1" ],
		"objMetaTopicConfigOverrides" : {},
		"arrWhitelistedAssets" : [
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],
		"objFiles" : {},
		"objDependancies" : {}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" : [
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" : {
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "exit_generalTemplateC"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" : [],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" : {},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			/*{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderHelloWorldSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderHelloWorldMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderHelloWorldLarge"
			}*/
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"exit.js" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" : {}
	},

	"objPortalDeclarations" :
	{
		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"intDefaultOrder" : 1
		},

		"objTranslatableCoreContentText" :
		{
			"NAV_EXIT_BUTTON_TITLE" : "Exit button",
			"NAV_EXIT_BUTTON_TEXT" : "Exit",

			"EXIT_POPUP_CLOSE_BUTTON_TITLE" : "Close button",
			"EXIT_POPUP_CLOSE_BUTTON_TEXT" : "Close"
		},
		
		"objFields":
		{
            "title":
			{
                "strTitle": "Exit title",
                "strInputType": "text",
                "defaultValue": "@NAV_EXIT_BUTTON_TEXT"
            }
        }
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "iscrollExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "iScroll Interface",		// Human readable name
	"strID" : "extra-iscroll", 					// Unique key for system use
	"strDescription" : "This is an interface to interact with iScroll.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		// Use of "gomo-auto" presumes the archtecture will take care of populating a value automatically.
		"strID" : "",
		// Extra's strID property?
		"strType" : "",
		"strGroup" : "core-interface",	//### Check these make sense!
		"strLayoutID" : "",
		"strLayoutColumn" : "",
		"objImageSrc" :
		{
			"strImageSrc" : "",
			"strDescription" : "",
			"strBrief" : ""
		},

		// Other Extra specific properties
		// Example repeatable data block:
		"arrOptions" :
		[
			{
				"strOptionText" : "",
				"booIsCorrect" : true,
				"arrActions" : []	// Option specific actions (see below for some examples)
			},
			{
				"strOptionText" : "",
				"booIsCorrect" : false,
				"arrActions" : []	// Option specific actions (see below for some examples)
			}
		],

		// Example Extra level actions, some Extras would use option / hotspot etc. level actions
		"arrActions" :	// ### Confirm once Actions are fully defined.
		[
			{
				"strActionID" : "action-id-01",	// Show subscreen example
				"objActionParams" :
				{
					"strTargetSubScreenID" : "123s01sub01"
				}
			},
			{
				"strActionID" : "action-id-02",	// Play audio file example
				"objActionParams" :
				{
					"strAudioFilename" : "audiofile.mp3"
				}
			},
			{
				"strActionID" : "action-id-03",	// Change Extra state example
				"objActionParams" :
				{
					"strExtraID" : "123s01a04",
					"strTargetSRC" : "custom2"
				}
			},
			{
				"strActionID" : "action-id-04",	// Change variable value example
				"objActionParams" :
				{
					"strVariableName" : "VARIABLE_1",
					"strNewVariableValue" : "Fish!"
				}
			}
		]
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
			{
				"strTestName" : "Small screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with minimal content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_small.json"
			},
			{
				"strTestName" : "Average screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with average amount content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_average.json"
			},
			{
				"strTestName" : "Large screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_large.json"
			},
			{
				"strTestName" : "Small sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with minimal content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_small.json"
			},
			{
				"strTestName" : "Average sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with average amount content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_average.json"
			},
			{
				"strTestName" : "Large sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_large.json"
			}
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[
			{
				"strActionName" : "Fancy custom action for this extra only!",
				"strActionID" : "action-id-03",
				"strFilename" : "custom_action_03.zip"
			},
			{
				"strActionName" : "Another fancy custom action for this extra only!",
				"strActionID" : "action-id-04",
				"strFilename" : "custom_action_04.zip"
			}
		]
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"ISCROLL_INTERFACE_DEBUG_ADD_SCROLLING_MESSAGE" : "Adding scrolling?",
			"ISCROLL_INTERFACE_DEBUG_NO_SCROLLING_MESSAGE" : "No scrolling?"
		}
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[
				{
					"strDirectiveTitle" : "Extra Title: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : "Hello World Extra",
					"strBoundValue" : null,
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras title",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "ID: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : null,
					"strBoundValue" : "strID",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras ID",
					"strVisibilityCheckMethod" : null
				}
			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : "A default property/##DYNAMIC_VALUE_1##",
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : null,
					"booTemplateability" : false,
					"strTooltip" : "This is the extras tooltip" , // Leave blank to disable tool tip
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "BUTTON_COLLECTION",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intDefaultSelection" : 0,
					// If set to true, should be bound to an array on the extra data
					"booAllowMultipleSelections" : false,
					"booGroupButtons" : true,
					"arrButtons" :
					[
						{
							"strButtonTitle" : "Button 1",
							"strButtonValue" : "button-value-1",
							"strButtonStyle" : "default/alt-button-style1C"
						},
						{
							"strButtonTitle" : "Button 2",
							"strButtonValue" : "button-value-2",
							"strButtonStyle" : "default/alt-button-style1C"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "CHECKBOX",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"booDefaultState" : true,
					"strSelectedValue" : true,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "RADIO",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedRadioIndex" : 0,
					"strSelectedValue" : "##REPEATABLE_COUNT##",
					"strGroup" : "radioButtonGroupName",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "DROPDOWN",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedIndex" : 0,
					"arrDropdownContents" :
					[
						{
							"strType" : "static",
							"strTitle" : "Title 1",
							"strValue" : "value-1"
						},
						{
							"strType" : "static",
							"strTitle" : "Title 2",
							"strValue" : "value-2"
						},
						// Will resolve to a single array entry
						{
							"strType" : "dynamic-single",
							"strTitle" : "##DYNAMIC_TITLE_1##",
							"strValue" : "##DYNAMIC_VALUE_1##"
						},
						// Will resolve to zero, one or more array entries.
						{
							"strType" : "dynamic-block",
							"strTitle" : "##DYNAMIC_TITLE_COLLECTION_1##",
							"strValue" : "##DYNAMIC_VALUE_COLLECTION_1##"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SLIDER_HORIZONTAL",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"floMin" : 0.0,
					"floMax" : 10,
					"floStep" : 0.5,
					"floInitialValue" : 5,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "MULTI_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Set to two or more lines.
					"intNumberOfLines" : 2,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT_WITH_BROWSE",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "##EXTRA_ID##.png",
					"arrAllowedFileTypes" :
					[
						".xml",
						".pdf",
						"##IMAGE_FILES##",	// Magic value, gets expanded based on presets
						"##AUDIO_FILES##",	// Magic value, gets expanded based on presets
						"##VIDEO_FILES##",	// Magic value, gets expanded based on presets
						"##ALL##"						// Magic value, removes all filtering
					],
					"arrViewTypes" :
					[
						"list",
						"small-thumb",
						"medium-thumb",
						"large-thumb"
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Set extra position",
					"strDirectiveType" : "CO_ORDS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"arrInitialValues" : [0,0,50,50],
					"strPopupTitle" : "Extra CO_ORDS/SubScreen CO_ORDS etc.",
					// point = X & Y, full = X, Y, W & H
					"strCoordsType" : "point/full",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strPopupBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Button Title",
					"strDirectiveType" : "HOTSPOTS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strPopupTitle" : "Hotspots",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Repeatable Block Title: ",
					"strDirectiveType" : "REPEATABLE_BLOCK",
					"arrBlockRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Can be set to null or an event name. The outermost DOM element for the block, the new block index and the extra will be passed as parameters.
					"strAddCallback" : "",
					// Can be set to null or an event name. The outermost DOM element for the block, the block index and the extra will be passed as parameters.
					"strRemoveCallback" : "",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Sub inspector button",
					"strDirectivePopupTitle" : "Sub inspector popup",
					"strDirectiveType" : "SUBINSPECTOR",
					"arrSubInspectorRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Called after the popup has finished opening. Can be set to null or an event name.
					"strOpenedCallback" : "",
					// Called prior to closure, can be set to null or an event name.
					"strVerfifcationCallback" : "",
					// Called once closure is complete, can be set to null or an event name.
					"strClosedCallback" : "",
					"strVisibilityCheckMethod" : null
				}
			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"iscroll_interface.js" : "base",
			"iscroll.css" : "base",
			"iscroll-zoom.js" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "lastPageVisited";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Last Page Visited",		// Human readable name
	"strID" : "extra-last-page-visited", 					// Unique key for system use
	"strDescription" : "If the user reloads a course, display an option message to reload from last page visited.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		// Use of "gomo-auto" presumes the archtecture will take care of populating a value automatically.
		"strID" : "",
		// Extra's strID property?
		"strType" : "",
		"strGroup" : "core-specialist",	//### Check these make sense!
		"strLayoutID" : "",
		"strLayoutColumn" : "",
		"objImageSrc" :
		{
			"strImageSrc" : "",
			"strDescription" : "",
			"strBrief" : ""
		},

		// Other Extra specific properties
		// Example repeatable data block:
		"arrOptions" :
		[
			{
				"strOptionText" : "",
				"booIsCorrect" : true,
				"arrActions" : []	// Option specific actions (see below for some examples)
			},
			{
				"strOptionText" : "",
				"booIsCorrect" : false,
				"arrActions" : []	// Option specific actions (see below for some examples)
			}
		],

		// Example Extra level actions, some Extras would use option / hotspot etc. level actions
		"arrActions" :	// ### Confirm once Actions are fully defined.
		[
			{
				"strActionID" : "action-id-01",	// Show subscreen example
				"objActionParams" :
				{
					"strTargetSubScreenID" : "123s01sub01"
				}
			},
			{
				"strActionID" : "action-id-02",	// Play audio file example
				"objActionParams" :
				{
					"strAudioFilename" : "audiofile.mp3"
				}
			},
			{
				"strActionID" : "action-id-03",	// Change Extra state example
				"objActionParams" :
				{
					"strExtraID" : "123s01a04",
					"strTargetSRC" : "custom2"
				}
			},
			{
				"strActionID" : "action-id-04",	// Change variable value example
				"objActionParams" :
				{
					"strVariableName" : "VARIABLE_1",
					"strNewVariableValue" : "Fish!"
				}
			}
		]
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
			{
				"strTestName" : "Small screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with minimal content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_small.json"
			},
			{
				"strTestName" : "Average screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with average amount content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_average.json"
			},
			{
				"strTestName" : "Large screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_large.json"
			},
			{
				"strTestName" : "Small sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with minimal content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_small.json"
			},
			{
				"strTestName" : "Average sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with average amount content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_average.json"
			},
			{
				"strTestName" : "Large sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_large.json"
			}
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[
			{
				"strActionName" : "Fancy custom action for this extra only!",
				"strActionID" : "action-id-03",
				"strFilename" : "custom_action_03.zip"
			},
			{
				"strActionName" : "Another fancy custom action for this extra only!",
				"strActionID" : "action-id-04",
				"strFilename" : "custom_action_04.zip"
			}
		]
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
				"LAST_PAGE_POPUP_CLOSE_BUTTON_TITLE" : "Close button",
				"LAST_PAGE_POPUP_CLOSE_BUTTON_TEXT" : "Close",
				"LAST_PAGE_POPUP_TITLE" : "Last location bookmark",
				"LAST_PAGE_POPUP_PROMPT" : "Do you wish to return to your last location:",
				"LAST_PAGE_POPUP_OK_BUTTON_TEXT" : "Ok",
				"LAST_PAGE_POPUP_CANCEL_BUTTON_TEXT" : "Cancel",
				"LAST_PAGE_VISITIED_TOPIC_TITLE" : "Topic title:",
				"LAST_PAGE_VISITIED_PAGE_TITLE" : "Page title:"
		}
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[
				{
					"strDirectiveTitle" : "Extra Title: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : "Hello World Extra",
					"strBoundValue" : null,
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras title",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "ID: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : null,
					"strBoundValue" : "strID",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras ID",
					"strVisibilityCheckMethod" : null
				}
			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : "A default property/##DYNAMIC_VALUE_1##",
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : null,
					"booTemplateability" : false,
					"strTooltip" : "This is the extras tooltip" , // Leave blank to disable tool tip
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "BUTTON_COLLECTION",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intDefaultSelection" : 0,
					// If set to true, should be bound to an array on the extra data
					"booAllowMultipleSelections" : false,
					"booGroupButtons" : true,
					"arrButtons" :
					[
						{
							"strButtonTitle" : "Button 1",
							"strButtonValue" : "button-value-1",
							"strButtonStyle" : "default/alt-button-style1C"
						},
						{
							"strButtonTitle" : "Button 2",
							"strButtonValue" : "button-value-2",
							"strButtonStyle" : "default/alt-button-style1C"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "CHECKBOX",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"booDefaultState" : true,
					"strSelectedValue" : true,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "RADIO",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedRadioIndex" : 0,
					"strSelectedValue" : "##REPEATABLE_COUNT##",
					"strGroup" : "radioButtonGroupName",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "DROPDOWN",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedIndex" : 0,
					"arrDropdownContents" :
					[
						{
							"strType" : "static",
							"strTitle" : "Title 1",
							"strValue" : "value-1"
						},
						{
							"strType" : "static",
							"strTitle" : "Title 2",
							"strValue" : "value-2"
						},
						// Will resolve to a single array entry
						{
							"strType" : "dynamic-single",
							"strTitle" : "##DYNAMIC_TITLE_1##",
							"strValue" : "##DYNAMIC_VALUE_1##"
						},
						// Will resolve to zero, one or more array entries.
						{
							"strType" : "dynamic-block",
							"strTitle" : "##DYNAMIC_TITLE_COLLECTION_1##",
							"strValue" : "##DYNAMIC_VALUE_COLLECTION_1##"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SLIDER_HORIZONTAL",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"floMin" : 0.0,
					"floMax" : 10,
					"floStep" : 0.5,
					"floInitialValue" : 5,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "MULTI_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Set to two or more lines.
					"intNumberOfLines" : 2,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT_WITH_BROWSE",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "##EXTRA_ID##.png",
					"arrAllowedFileTypes" :
					[
						".xml",
						".pdf",
						"##IMAGE_FILES##",	// Magic value, gets expanded based on presets
						"##AUDIO_FILES##",	// Magic value, gets expanded based on presets
						"##VIDEO_FILES##",	// Magic value, gets expanded based on presets
						"##ALL##"						// Magic value, removes all filtering
					],
					"arrViewTypes" :
					[
						"list",
						"small-thumb",
						"medium-thumb",
						"large-thumb"
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Set extra position",
					"strDirectiveType" : "CO_ORDS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"arrInitialValues" : [0,0,50,50],
					"strPopupTitle" : "Extra CO_ORDS/SubScreen CO_ORDS etc.",
					// point = X & Y, full = X, Y, W & H
					"strCoordsType" : "point/full",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strPopupBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Button Title",
					"strDirectiveType" : "HOTSPOTS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strPopupTitle" : "Hotspots",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Repeatable Block Title: ",
					"strDirectiveType" : "REPEATABLE_BLOCK",
					"arrBlockRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Can be set to null or an event name. The outermost DOM element for the block, the new block index and the extra will be passed as parameters.
					"strAddCallback" : "",
					// Can be set to null or an event name. The outermost DOM element for the block, the block index and the extra will be passed as parameters.
					"strRemoveCallback" : "",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Sub inspector button",
					"strDirectivePopupTitle" : "Sub inspector popup",
					"strDirectiveType" : "SUBINSPECTOR",
					"arrSubInspectorRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Called after the popup has finished opening. Can be set to null or an event name.
					"strOpenedCallback" : "",
					// Called prior to closure, can be set to null or an event name.
					"strVerfifcationCallback" : "",
					// Called once closure is complete, can be set to null or an event name.
					"strClosedCallback" : "",
					"strVisibilityCheckMethod" : null
				}
			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v2.0",
			"native-html-v2.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderLastPageVisitedSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderLastPageVisitedMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderLastPageVisitedLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"last_page_visited.js" : "base",
			"last_page_visited_extra.css" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "localStorageInterface";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Local Storage Interface",		// Human readable name
	"strID" : "extra-local-storage-interface", 					// Unique key for system use
	"strDescription" : "This allows users scores to be stored locally \n\
    so that if a connection drops mid session, their results will be uploaded on \n\
next connection to the LMS.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		// Use of "gomo-auto" presumes the archtecture will take care of populating a value automatically.
		"strID" : "",
		// Extra's strID property?
		"strType" : "",
		"strGroup" : "core-interface",	//### Check these make sense!
		"strLayoutID" : "",
		"strLayoutColumn" : "",
		"objImageSrc" :
		{
			"strImageSrc" : "",
			"strDescription" : "",
			"strBrief" : ""
		},

		// Other Extra specific properties
		// Example repeatable data block:
		"arrOptions" :
		[
			{
				"strOptionText" : "",
				"booIsCorrect" : true,
				"arrActions" : []	// Option specific actions (see below for some examples)
			},
			{
				"strOptionText" : "",
				"booIsCorrect" : false,
				"arrActions" : []	// Option specific actions (see below for some examples)
			}
		],

		// Example Extra level actions, some Extras would use option / hotspot etc. level actions
		"arrActions" :	// ### Confirm once Actions are fully defined.
		[
			{
				"strActionID" : "action-id-01",	// Show subscreen example
				"objActionParams" :
				{
					"strTargetSubScreenID" : "123s01sub01"
				}
			},
			{
				"strActionID" : "action-id-02",	// Play audio file example
				"objActionParams" :
				{
					"strAudioFilename" : "audiofile.mp3"
				}
			},
			{
				"strActionID" : "action-id-03",	// Change Extra state example
				"objActionParams" :
				{
					"strExtraID" : "123s01a04",
					"strTargetSRC" : "custom2"
				}
			},
			{
				"strActionID" : "action-id-04",	// Change variable value example
				"objActionParams" :
				{
					"strVariableName" : "VARIABLE_1",
					"strNewVariableValue" : "Fish!"
				}
			}
		]
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
			{
				"strTestName" : "Small screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with minimal content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_small.json"
			},
			{
				"strTestName" : "Average screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with average amount content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_average.json"
			},
			{
				"strTestName" : "Large screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_large.json"
			},
			{
				"strTestName" : "Small sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with minimal content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_small.json"
			},
			{
				"strTestName" : "Average sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with average amount content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_average.json"
			},
			{
				"strTestName" : "Large sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_large.json"
			}
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[
			{
				"strActionName" : "Fancy custom action for this extra only!",
				"strActionID" : "action-id-03",
				"strFilename" : "custom_action_03.zip"
			},
			{
				"strActionName" : "Another fancy custom action for this extra only!",
				"strActionID" : "action-id-04",
				"strFilename" : "custom_action_04.zip"
			}
		]
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"LOCAL_STORAGE_SAVE_ERROR" : "Something has gone wrong with the creation of a local backup. This is most likely caused by running out of space in the localStorage. Would you like to remove all local storage and try again?"
		}
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[
				{
					"strDirectiveTitle" : "Extra Title: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : "Hello World Extra",
					"strBoundValue" : null,
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras title",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "ID: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : null,
					"strBoundValue" : "strID",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras ID",
					"strVisibilityCheckMethod" : null
				}
			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : "A default property/##DYNAMIC_VALUE_1##",
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : null,
					"booTemplateability" : false,
					"strTooltip" : "This is the extras tooltip" , // Leave blank to disable tool tip
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "BUTTON_COLLECTION",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intDefaultSelection" : 0,
					// If set to true, should be bound to an array on the extra data
					"booAllowMultipleSelections" : false,
					"booGroupButtons" : true,
					"arrButtons" :
					[
						{
							"strButtonTitle" : "Button 1",
							"strButtonValue" : "button-value-1",
							"strButtonStyle" : "default/alt-button-style1C"
						},
						{
							"strButtonTitle" : "Button 2",
							"strButtonValue" : "button-value-2",
							"strButtonStyle" : "default/alt-button-style1C"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "CHECKBOX",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"booDefaultState" : true,
					"strSelectedValue" : true,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "RADIO",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedRadioIndex" : 0,
					"strSelectedValue" : "##REPEATABLE_COUNT##",
					"strGroup" : "radioButtonGroupName",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "DROPDOWN",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedIndex" : 0,
					"arrDropdownContents" :
					[
						{
							"strType" : "static",
							"strTitle" : "Title 1",
							"strValue" : "value-1"
						},
						{
							"strType" : "static",
							"strTitle" : "Title 2",
							"strValue" : "value-2"
						},
						// Will resolve to a single array entry
						{
							"strType" : "dynamic-single",
							"strTitle" : "##DYNAMIC_TITLE_1##",
							"strValue" : "##DYNAMIC_VALUE_1##"
						},
						// Will resolve to zero, one or more array entries.
						{
							"strType" : "dynamic-block",
							"strTitle" : "##DYNAMIC_TITLE_COLLECTION_1##",
							"strValue" : "##DYNAMIC_VALUE_COLLECTION_1##"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SLIDER_HORIZONTAL",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"floMin" : 0.0,
					"floMax" : 10,
					"floStep" : 0.5,
					"floInitialValue" : 5,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "MULTI_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Set to two or more lines.
					"intNumberOfLines" : 2,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT_WITH_BROWSE",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "##EXTRA_ID##.png",
					"arrAllowedFileTypes" :
					[
						".xml",
						".pdf",
						"##IMAGE_FILES##",	// Magic value, gets expanded based on presets
						"##AUDIO_FILES##",	// Magic value, gets expanded based on presets
						"##VIDEO_FILES##",	// Magic value, gets expanded based on presets
						"##ALL##"						// Magic value, removes all filtering
					],
					"arrViewTypes" :
					[
						"list",
						"small-thumb",
						"medium-thumb",
						"large-thumb"
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Set extra position",
					"strDirectiveType" : "CO_ORDS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"arrInitialValues" : [0,0,50,50],
					"strPopupTitle" : "Extra CO_ORDS/SubScreen CO_ORDS etc.",
					// point = X & Y, full = X, Y, W & H
					"strCoordsType" : "point/full",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strPopupBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Button Title",
					"strDirectiveType" : "HOTSPOTS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strPopupTitle" : "Hotspots",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Repeatable Block Title: ",
					"strDirectiveType" : "REPEATABLE_BLOCK",
					"arrBlockRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Can be set to null or an event name. The outermost DOM element for the block, the new block index and the extra will be passed as parameters.
					"strAddCallback" : "",
					// Can be set to null or an event name. The outermost DOM element for the block, the block index and the extra will be passed as parameters.
					"strRemoveCallback" : "",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Sub inspector button",
					"strDirectivePopupTitle" : "Sub inspector popup",
					"strDirectiveType" : "SUBINSPECTOR",
					"arrSubInspectorRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Called after the popup has finished opening. Can be set to null or an event name.
					"strOpenedCallback" : "",
					// Called prior to closure, can be set to null or an event name.
					"strVerfifcationCallback" : "",
					// Called once closure is complete, can be set to null or an event name.
					"strClosedCallback" : "",
					"strVisibilityCheckMethod" : null
				}
			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderHelloWorldSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderHelloWorldMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderHelloWorldLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"local_storage_interface.js" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "localiserExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Localiser",		// Human readable name
	"strID" : "extra-localiser", 					// Unique key for system use
	"strDescription" : "Tool to build language files.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		// Use of "gomo-auto" presumes the archtecture will take care of populating a value automatically.
		"strID" : "",
		// Extra's strID property?
		"strType" : "",
		"strGroup" : "core-specialist",	//### Check these make sense!
		"strLayoutID" : "",
		"strLayoutColumn" : "",
		"objImageSrc" :
		{
			"strImageSrc" : "",
			"strDescription" : "",
			"strBrief" : ""
		},

		// Other Extra specific properties
		// Example repeatable data block:
		"arrOptions" :
		[
			{
				"strOptionText" : "",
				"booIsCorrect" : true,
				"arrActions" : []	// Option specific actions (see below for some examples)
			},
			{
				"strOptionText" : "",
				"booIsCorrect" : false,
				"arrActions" : []	// Option specific actions (see below for some examples)
			}
		],

		// Example Extra level actions, some Extras would use option / hotspot etc. level actions
		"arrActions" :	// ### Confirm once Actions are fully defined.
		[
			{
				"strActionID" : "action-id-01",	// Show subscreen example
				"objActionParams" :
				{
					"strTargetSubScreenID" : "123s01sub01"
				}
			},
			{
				"strActionID" : "action-id-02",	// Play audio file example
				"objActionParams" :
				{
					"strAudioFilename" : "audiofile.mp3"
				}
			},
			{
				"strActionID" : "action-id-03",	// Change Extra state example
				"objActionParams" :
				{
					"strExtraID" : "123s01a04",
					"strTargetSRC" : "custom2"
				}
			},
			{
				"strActionID" : "action-id-04",	// Change variable value example
				"objActionParams" :
				{
					"strVariableName" : "VARIABLE_1",
					"strNewVariableValue" : "Fish!"
				}
			}
		]
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
			{
				"strTestName" : "Small screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with minimal content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_small.json"
			},
			{
				"strTestName" : "Average screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with average amount content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_average.json"
			},
			{
				"strTestName" : "Large screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_large.json"
			},
			{
				"strTestName" : "Small sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with minimal content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_small.json"
			},
			{
				"strTestName" : "Average sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with average amount content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_average.json"
			},
			{
				"strTestName" : "Large sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_large.json"
			}
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[
			{
				"strActionName" : "Fancy custom action for this extra only!",
				"strActionID" : "action-id-03",
				"strFilename" : "custom_action_03.zip"
			},
			{
				"strActionName" : "Another fancy custom action for this extra only!",
				"strActionID" : "action-id-04",
				"strFilename" : "custom_action_04.zip"
			}
		]
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[
				{
					"strDirectiveTitle" : "Extra Title: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : "Hello World Extra",
					"strBoundValue" : null,
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras title",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "ID: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : null,
					"strBoundValue" : "strID",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras ID",
					"strVisibilityCheckMethod" : null
				}
			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : "A default property/##DYNAMIC_VALUE_1##",
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : null,
					"booTemplateability" : false,
					"strTooltip" : "This is the extras tooltip" , // Leave blank to disable tool tip
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "BUTTON_COLLECTION",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intDefaultSelection" : 0,
					// If set to true, should be bound to an array on the extra data
					"booAllowMultipleSelections" : false,
					"booGroupButtons" : true,
					"arrButtons" :
					[
						{
							"strButtonTitle" : "Button 1",
							"strButtonValue" : "button-value-1",
							"strButtonStyle" : "default/alt-button-style1C"
						},
						{
							"strButtonTitle" : "Button 2",
							"strButtonValue" : "button-value-2",
							"strButtonStyle" : "default/alt-button-style1C"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "CHECKBOX",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"booDefaultState" : true,
					"strSelectedValue" : true,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "RADIO",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedRadioIndex" : 0,
					"strSelectedValue" : "##REPEATABLE_COUNT##",
					"strGroup" : "radioButtonGroupName",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "DROPDOWN",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedIndex" : 0,
					"arrDropdownContents" :
					[
						{
							"strType" : "static",
							"strTitle" : "Title 1",
							"strValue" : "value-1"
						},
						{
							"strType" : "static",
							"strTitle" : "Title 2",
							"strValue" : "value-2"
						},
						// Will resolve to a single array entry
						{
							"strType" : "dynamic-single",
							"strTitle" : "##DYNAMIC_TITLE_1##",
							"strValue" : "##DYNAMIC_VALUE_1##"
						},
						// Will resolve to zero, one or more array entries.
						{
							"strType" : "dynamic-block",
							"strTitle" : "##DYNAMIC_TITLE_COLLECTION_1##",
							"strValue" : "##DYNAMIC_VALUE_COLLECTION_1##"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SLIDER_HORIZONTAL",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"floMin" : 0.0,
					"floMax" : 10,
					"floStep" : 0.5,
					"floInitialValue" : 5,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "MULTI_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Set to two or more lines.
					"intNumberOfLines" : 2,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT_WITH_BROWSE",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "##EXTRA_ID##.png",
					"arrAllowedFileTypes" :
					[
						".xml",
						".pdf",
						"##IMAGE_FILES##",	// Magic value, gets expanded based on presets
						"##AUDIO_FILES##",	// Magic value, gets expanded based on presets
						"##VIDEO_FILES##",	// Magic value, gets expanded based on presets
						"##ALL##"						// Magic value, removes all filtering
					],
					"arrViewTypes" :
					[
						"list",
						"small-thumb",
						"medium-thumb",
						"large-thumb"
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Set extra position",
					"strDirectiveType" : "CO_ORDS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"arrInitialValues" : [0,0,50,50],
					"strPopupTitle" : "Extra CO_ORDS/SubScreen CO_ORDS etc.",
					// point = X & Y, full = X, Y, W & H
					"strCoordsType" : "point/full",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strPopupBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Button Title",
					"strDirectiveType" : "HOTSPOTS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strPopupTitle" : "Hotspots",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Repeatable Block Title: ",
					"strDirectiveType" : "REPEATABLE_BLOCK",
					"arrBlockRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Can be set to null or an event name. The outermost DOM element for the block, the new block index and the extra will be passed as parameters.
					"strAddCallback" : "",
					// Can be set to null or an event name. The outermost DOM element for the block, the block index and the extra will be passed as parameters.
					"strRemoveCallback" : "",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Sub inspector button",
					"strDirectivePopupTitle" : "Sub inspector popup",
					"strDirectiveType" : "SUBINSPECTOR",
					"arrSubInspectorRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Called after the popup has finished opening. Can be set to null or an event name.
					"strOpenedCallback" : "",
					// Called prior to closure, can be set to null or an event name.
					"strVerfifcationCallback" : "",
					// Called once closure is complete, can be set to null or an event name.
					"strClosedCallback" : "",
					"strVisibilityCheckMethod" : null
				}
			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v2.0",
			"native-html-v2.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderLocaliserSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderLocaliserMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderLocaliserLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			//"localisation_data_generator.js" : "base",
			//"localisation_data_generator.html" : "base",
			"localiser.js" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "menuExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Menu",		// Human readable name
	"strID" : "extra-menu", 					// Unique key for system use
	"strDescription" : "Menu button for player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" : {},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "core-interface",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" : {
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" : [ "v2.1" ],
		"objMetaTopicConfigOverrides" : {},
		"arrWhitelistedAssets" : [
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],
		"objFiles" : {},
		"objDependancies" : {}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" : [
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" : {
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "menu_topicTemplateC"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" : [],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" : {},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			/*{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderHelloWorldSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderHelloWorldMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderHelloWorldLarge"
			}*/
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"menu.js" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" : {}
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"NAV_MENU_BUTTON_TITLE" : "Menu"
		},
		"objFields":
		{
            "title":
			{
                "strTitle": "Menu title",
                "strInputType": "text",
                "defaultValue": "@NAV_MENU_BUTTON_TITLE"
            },
			"topic":
			{
                "strTitle": "Select topic",
                "strInputType": 'select',
                "arrData": [],
                "strDynamicDataMap": "topics",
                "defaultValue": null
            }
        },

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"intDefaultOrder" : 5
		}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "nextExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Next",		// Human readable name
	"strID" : "extra-next", 					// Unique key for system use
	"strDescription" : "Next page button for player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" : {},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "core-interface",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" : {
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" : [ "v2.1" ],
		"objMetaTopicConfigOverrides" : {},
		"arrWhitelistedAssets" : [
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],
		"objFiles" : {},
		"objDependancies" : {}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" : [
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" : {
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "next_generalTemplateC",
			"strType": "screen_navigation"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" : [],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" : {},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			/*{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderHelloWorldSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderHelloWorldMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderHelloWorldLarge"
			}*/
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"next.js" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" : {}
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" : {},
		"objFields" : {}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);/* global MANIFEST_MANAGER, module */
var strManifestID = 'progressBarExtra';
var objManifestData = {
  /** ********************** Core declarations ************************/
  strName: 'Progress Bar', // Human readable name
  strID: 'extra-progress_bar', // Unique key for system use
  strDescription: 'Progress bar for player.', // JSON Encoded string
  strVersion: '1.0',
  strManifestType: 'extra',

  /** ********************** Source Control ************************/
  // These are for future development.
  strGitRepo: '',
  strGitRepoSubPath: '', // Not sure if we need this or it can be combined with the above path?

  /** ********************** Contributions ************************/
  objContributors: {},

  /** ********************** Extra Data Template ************************/
  // ### Need to consider a sensible system for default values.
  objDataTemplate: {
    strGroup: 'core-interface',
    booIsShown: true
  },

  /** ********************** Common declarations ************************/
  objCommonDeclarations: {},

  objAuthoringDeclarations: {
    // An array of known compatible Authoring builds
    arrAuthoringVersions: ['v2.1'],
    objMetaTopicConfigOverrides: {},
    arrWhitelistedAssets: ['text', 'imagestatic', 'video2', 'audioplayer'],
    objFiles: {},
    objDependancies: {}
  },

  objPlayerDeclarations: {
    // An array of minimum Core Player builds - How can we automate the updating of these
    // lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
    arrPlayerVersions: ['html-v3.0', 'native-html-v3.1'],

    objNavButton: {
      booDefaultDisplayButton: true,
      intPriority: 50,
      strHtmlFragment: 'progress_generalTemplateC',
      type: 'progress'
    },

    // A list of the CORE theme elements utilised by the Extra when in the Player
    // ### To be populated once the Theme definition / manifest is scoped?
    arrThemeElementsSupport: [],

    // Anything that could be sensibly styled that does fit into the CORE theming framework
    // (Bootstrap + Core GoMo extentsions)
    // ### To be populated once the Theme definition / manifest is scoped?
    objCustomThemeElements: {},

    // Methods should be tested for in sequence with the first match found
    // being the one selected.
    // Use of -1 denotes 'any' and would allow a single render method to be
    // specified with both Min and Max set to -1.
    // If a case is found where no methods match, that should be handled by
    // a generic error message being rendered in place of the extra content.
    arrRenderMethods: [],

    // See the comment on the Authoring objFiles declaration
    objFiles: {
      'progress_bar.js': 'base',
      'extra_fragments.html': 'base'
    },

    objDependancies: {}
  },

  objPortalDeclarations: {
    objTranslatableCoreContentText: {
      PROGRESS_BAR_PAGE_LABEL: 'Page',
      PROGRESS_BAR_SEPERATOR_LABEL: 'of'
    },
    objFields: {},

    objNavButton: {
      booDefaultDisplayButton: true,
      intPriority: 50,
      intDefaultOrder: 2
    }
  }
};

if (typeof MANIFEST_MANAGER != 'undefined') {
  MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}

(function(root) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = {
      dependancies: objManifestData.objPlayerDeclarations.objDependancies,
      main: objManifestData.objPlayerDeclarations.objFiles
    };
  }
})(this);
var strManifestID = "swipeControl";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Swipe Control",		// Human readable name
	"strID" : "exrta-swipe-control", 					// Unique key for system use
	"strDescription" : "", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "core-interface"
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
			{
				"strTestName" : "Small screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with minimal content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_small.json"
			},
			{
				"strTestName" : "Average screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with average amount content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_average.json"
			},
			{
				"strTestName" : "Large screen test",
				"strTestDescription" : "This is an example of the extra used in a screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "screen-extra",
				"strTestDataFile" : "extra_test_data_screen_large.json"
			},
			{
				"strTestName" : "Small sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with minimal content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_small.json"
			},
			{
				"strTestName" : "Average sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with average amount content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_average.json"
			},
			{
				"strTestName" : "Large sub-screen test",
				"strTestDescription" : "This is an example of the extra used in a sub-screen context with a large amount of content", // JSON Encoded string
				"strTestType" : "sub-screen-extra",
				"strTestDataFile" : "extra_test_data_sub_screen_large.json"
			}
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[
			{
				"strActionName" : "Fancy custom action for this extra only!",
				"strActionID" : "action-id-03",
				"strFilename" : "custom_action_03.zip"
			},
			{
				"strActionName" : "Another fancy custom action for this extra only!",
				"strActionID" : "action-id-04",
				"strFilename" : "custom_action_04.zip"
			}
		]
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"SWIPE_CONTROL_UNKNOWN_SWIPE_DIRECTION_ERROR" : "ERROR: Unknown swip type of '{1}' found in SWIPE_CONTROL.handleEvent_screenSwipe() swipe_control.js"
		}
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[
				{
					"strDirectiveTitle" : "Extra Title: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : "Hello World Extra",
					"strBoundValue" : null,
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras title",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "ID: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50",
					"strStaticValue" : null,
					"strBoundValue" : "strID",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras ID",
					"strVisibilityCheckMethod" : null
				}
			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "STATIC_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : "A default property/##DYNAMIC_VALUE_1##",
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : null,
					"booTemplateability" : false,
					"strTooltip" : "This is the extras tooltip" , // Leave blank to disable tool tip
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "BUTTON_COLLECTION",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intDefaultSelection" : 0,
					// If set to true, should be bound to an array on the extra data
					"booAllowMultipleSelections" : false,
					"booGroupButtons" : true,
					"arrButtons" :
					[
						{
							"strButtonTitle" : "Button 1",
							"strButtonValue" : "button-value-1",
							"strButtonStyle" : "default/alt-button-style1C"
						},
						{
							"strButtonTitle" : "Button 2",
							"strButtonValue" : "button-value-2",
							"strButtonStyle" : "default/alt-button-style1C"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "CHECKBOX",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"booDefaultState" : true,
					"strSelectedValue" : true,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "RADIO",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedRadioIndex" : 0,
					"strSelectedValue" : "##REPEATABLE_COUNT##",
					"strGroup" : "radioButtonGroupName",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "DROPDOWN",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"intSelectedIndex" : 0,
					"arrDropdownContents" :
					[
						{
							"strType" : "static",
							"strTitle" : "Title 1",
							"strValue" : "value-1"
						},
						{
							"strType" : "static",
							"strTitle" : "Title 2",
							"strValue" : "value-2"
						},
						// Will resolve to a single array entry
						{
							"strType" : "dynamic-single",
							"strTitle" : "##DYNAMIC_TITLE_1##",
							"strValue" : "##DYNAMIC_VALUE_1##"
						},
						// Will resolve to zero, one or more array entries.
						{
							"strType" : "dynamic-block",
							"strTitle" : "##DYNAMIC_TITLE_COLLECTION_1##",
							"strValue" : "##DYNAMIC_VALUE_COLLECTION_1##"
						}
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SLIDER_HORIZONTAL",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"floMin" : 0.0,
					"floMax" : 10,
					"floStep" : 0.5,
					"floInitialValue" : 5,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "MULTI_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image Extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Set to two or more lines.
					"intNumberOfLines" : 2,
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Extra property: ",
					"strDirectiveType" : "SINGLE_TEXT_WITH_BROWSE",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "AssetDataHolder.prototype._parseAsset_ASSET_TYPE" pattern (see image asset as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strInitialValue" : "##EXTRA_ID##.png",
					"arrAllowedFileTypes" :
					[
						".xml",
						".pdf",
						"##IMAGE_FILES##",	// Magic value, gets expanded based on presets
						"##AUDIO_FILES##",	// Magic value, gets expanded based on presets
						"##VIDEO_FILES##",	// Magic value, gets expanded based on presets
						"##ALL##"						// Magic value, removes all filtering
					],
					"arrViewTypes" :
					[
						"list",
						"small-thumb",
						"medium-thumb",
						"large-thumb"
					],
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Set extra position",
					"strDirectiveType" : "CO_ORDS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"arrInitialValues" : [0,0,50,50],
					"strPopupTitle" : "Extra CO_ORDS/SubScreen CO_ORDS etc.",
					// point = X & Y, full = X, Y, W & H
					"strCoordsType" : "point/full",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strPopupBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveButtonTitle" : "Button Title",
					"strDirectiveType" : "HOTSPOTS",
					"strDirectiveStyle" : "row50/row30_70/row40_60/row60_40/row100/title_row",
					// ## Denotes something that will be built up by the render directive OR the "ExtraDataHolder.prototype._parseExtra_EXTRA_TYPE" pattern (see image extra as an example)
					"strStaticValue" : null,
					// Or can be set to null if there is no dynamic link
					"strBoundValue" : "rootProperty/.rootProperty.arrRepeatableElement.#.repeatableProperty",
					"booTemplateability" : false,
					// Leave blank to disable tool tip
					"strTooltip" : "This is the extras tooltip",
					"strPopupTitle" : "Hotspots",
					// Can either use a property of the extra (e.g. basesrc), a property of the parent screen or subscreen (e.g. screenbgsrc), a static file which must be packaged within the "core_authoring" sub folder OR a blank canvas of the specified size.
					"strBackgroundSrc" : "self.property/parent.property/file.filename.png/blank.1024.768",
					// Can be set to null or an event name. The DOM element and the extra will be passed as parameters.
					"strUpdateCallback" : "customUpdateHandler",
					"strVisibilityCheckMethod" : null
				},
				{
					"strDirectiveTitle" : "Repeatable Block Title: ",
					"strDirectiveType" : "REPEATABLE_BLOCK",
					"arrBlockRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Can be set to null or an event name. The outermost DOM element for the block, the new block index and the extra will be passed as parameters.
					"strAddCallback" : "",
					// Can be set to null or an event name. The outermost DOM element for the block, the block index and the extra will be passed as parameters.
					"strRemoveCallback" : ""
				},
				{
					"strDirectiveButtonTitle" : "Sub inspector button",
					"strDirectivePopupTitle" : "Sub inspector popup",
					"strDirectiveType" : "SUBINSPECTOR",
					"arrSubInspectorRenderDirectives" :
					[
						// Render directives go here referencing the repeatable pattern:
						// ".rootProperty.arrRepeatableElement.#.repeatableProperty"
					],
					// Called after the popup has finished opening. Can be set to null or an event name.
					"strOpenedCallback" : "",
					// Called prior to closure, can be set to null or an event name.
					"strVerfifcationCallback" : "",
					// Called once closure is complete, can be set to null or an event name.
					"strClosedCallback" : "",
					"strVisibilityCheckMethod" : null
				}
			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"swipe_control.js" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);/* globals MANIFEST_MANAGER, module */
var strManifestID = 'tab-manager-extra';
var objManifestData = {
  /** ********************** Core declarations ************************/
  'strName': 'Tab Manager', // Human readable name
  'strID': 'extra-tab-manager', // Unique key for system use
  'strDescription': 'Tab manager', // JSON Encoded string
  'strVersion': '1.0',
  'strManifestType': 'extra',

  /** ********************** Extra Data Template ************************/
  // ### Need to consider a sensible system for default values.
  'objDataTemplate': {
    'strGroup': 'core-interface',
    'booIsShown': true
  },
  'objPlayerDeclarations': {
    'objFiles': {
      'tab_manager.js': 'base',
      'tab_manager.css': 'base'
    }
  }
};

if (typeof MANIFEST_MANAGER != 'undefined') {
  MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function(root) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = {
      dependancies: objManifestData.objPlayerDeclarations.objDependancies,
      main: objManifestData.objPlayerDeclarations.objFiles
    };
  }
})(this);
var strManifestID = "userRegistration";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "User Registration",		// Human readable name
	"strID" : "extra-user-registration", 					// Unique key for system use
	"strDescription" : "User Registration popup for player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" : {},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "core-interface",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" : {
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" : [ "v2.1" ],
		"objMetaTopicConfigOverrides" : {},
		"arrWhitelistedAssets" : [
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],
		"objFiles" : {},
		"objDependancies" : {}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" : [
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" : {
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" : [],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" : {},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"user-registration.js" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" : {}
	},

	"objPortalDeclarations" :
	{
		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"intDefaultOrder" : 1
		},

		"objTranslatableCoreContentText" :
		{
			"USER_REG_POPUP_TITLE" : "Please enter your details to access this content",
			"USER_REG_POPUP_FIELD_TITLE_EMAIL" : "Email",
			"USER_REG_POPUP_FIELD_TITLE_FIRSTNAME" : "Firstname",
			"USER_REG_POPUP_FIELD_TITLE_SURNAME" : "Surname",
			"USER_REG_POPUP_SUBMIT_BUTTON" : "Submit",
			"USER_REG_POPUP_INVAID_ENTRY" : "Invalid entry for field ",
			"USER_REG_POPUP_MISSING_REQUIRED_FIELD" : "Missing required input for field "
		}
	
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "variableHolder";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Variable Holder",		// Human readable name
	"strID" : "extra-variables-holder", 					// Unique key for system use
	"strDescription" : "Replace markers with Variables set in the Portal.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "core-interface"	//### Check these make sense!
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[

		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		],

		/************************ Layout grid support ************************/
		"objLayoutGridSupport" :
		{
			"intMinUnits" : 4,					// 1-12 or -1 to denote "any"
			"intMaxUnits" : 12,					// 1-12 or -1 to denote "any"
			"booNonLayoutExtra" : false	// Denotes an extra like the full screen background image or the expert extra
		},

		"arrIncompatibleActions" :
		[
			"action-id-01",
			"action-id-02"
		],

		"objExtraCustomActions" :	// These will be created as normal actions and placed in the custom_actions sub-folder
		[

		]
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		// ### We should discuss what sorts of files there will be, currently I've got:
		//
		// - "base" : Will be added to a load queue as soon as the manifest is parsed.
		// - "referenced" : Is referenced from within the extra, no actions required by the loader.
		//									Examples might be images referenced by the CSS.

		"objFiles" :
		{
			"extension_hello_world_extra.js" : "base",
			"hello_world_extra.css" : "base",
			"hello_world_extra_fragment.html" : "base",
			"hello_world_sprites.png" : "referenced"
		},

		// ### Again TBD,
		// - "dependant-api" : Will be added to a hash table for load once ALL manifests are parsed to avoid multiple downloads.
		// - "gomo-extra" : A required extra for a given extra. Ideally extras should be able to function without the extra or at least handle it's absence gracefully
		// - "gomo-topic-extra" : A collection of topic level features required to support a given extra.
		// - "data-file-mandatory" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Manditory means they will be added to the first set of data loaded that happens before
		//														'bootup' continues.
		// - "data-file-optional" : These will be treated in a similiar manner to API's in that they are aggregated and processed en
		//														masse. Optional means they will be added to the second set of data loaded that happens after
		//														'bootup' continues. Referencing a data file in this manner means that the asset is capable of
		//														failing gracefully if the data isn't present and, ideally, capable of updating any asset instances
		//														when the data arrives.
		"objDependancies" :
		{
			"api_folder/3rd_party_api.js" : "dependant-api",
			"video_popup.js" : "gomo-extra",
			"branching_extra.js" : "gomo-topic-extra",
			"gomo_data_glossary" : "data-file"	// How do we define these? Is it by ID or data filename?
		},

		// Should follow the following nested structure:
		//	HEAD
		//		TITLE BLOCK
		//	MAIN
		//		TITLE 1
		//			FIELD 1
		//			SUB BUTTON 1
		//				SUB TITLE 1
		//					SUB INSPECTOR PROP 1
		//				SUB TITLE 2
		//					SUB INSPECTOR PROP 2
		//					SUB INSPECTOR PROP 3
		//					SUB INSPECTOR PROP 4
		//		TITLE 2
		//			FIELD 2
		//			FIELD 3
		//			FIELD 4
		//			SUB BUTTON 2
		//				SUB INSPECTOR PROPS
		"objInspectorRenderDirectives" :
		{
			"arrHeadRenderDirectives" :
			[

			],
			"arrMainRenderDirectives" :	// The following are a set of examples of each current render directive type
			[

			]
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v2.0",
			"native-html-v2.1"
		],

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderScreenSizeManagerSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderScreenSizeManagerMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderScreenSizeManagerLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"variables_holder.js" : "base",
                        "extra_fragments.html" : "base"
		},

		"objDependancies" :
		{

		},
	  "objPortalDeclarations" :
	  {
			"objTranslatableCoreContentText" :
			{
				"UNSET_VARIABLE_VALUE" : "Value not set."
			}
	  }
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);/* eslint-disable */
var strManifestID = "glossaryExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Glossary",		// Human readable name
	"strID" : "extra-glossary", 					// Unique key for system use
	"strDescription" : "Render the Glossary items in the Player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "presentation",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		"objNavButton" : {
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "glossary_generalTemplateC"
		},


		"objMetaTopicConfigOverrides" :
		{
			"objAuthoringConfigurationSettings.booTopicCanUseSubscreens" : false,
			"objSessionConfigurationSettings.strScreenTemplateType" : "glossary"
		},

		"arrWhitelistedAssets" :
		[
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],

		"objFiles" :
		{
		},

		"objDependancies" :
		{
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "glossary_generalTemplateC"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderHelloWorldSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderHelloWorldMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderHelloWorldLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"glossary.js" : "base",
			"glossary_extra.css" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" :
		{
			"player/mathiasbynens/he.js": "dependant-api"
		}
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"NAV_GLOSSARY_BUTTON_TITLE" : "Glossary button",
			"NAV_GLOSSARY_BUTTON_TEXT" : "Glossary",

			"GLOSSARY_POPUP_TITLE" : "Glossary",
			"GLOSSARY_POPUP_CLOSE_BUTTON_TITLE" : "Close button",
			"GLOSSARY_POPUP_CLOSE_BUTTON_TEXT" : "Close",
			"GLOSSARY_POPUP_TERMS_TITLE" : "Terms",
			"GLOSSARY_POPUP_DEFINITION_TITLE" : "Definition",
			"GLOSSARY_POPUP_NO_DEFINITION_TEXT" : "No term selected, please select a letter from above or a term from the left.",
			"GLOSSARY_POPUP_TITLE_ACCESSIBLE" : "Glossary",
			"GLOSSARY_POPUP_CLOSE_BUTTON_TITLE_ACCESSIBLE" : "Close button",
			"GLOSSARY_POPUP_CLOSE_BUTTON_TEXT_ACCESSIBLE" : "Close",
			"GLOSSARY_POPUP_TERMS_TITLE_ACCESSIBLE" : "Terms",
			"GLOSSARY_POPUP_TITLE_SMARTPHONE" : "Glossary",
			"GLOSSARY_POPUP_CLOSE_BUTTON_TITLE_SMARTPHONE" : "Close button",
			"GLOSSARY_POPUP_CLOSE_BUTTON_TEXT_SMARTPHONE" : "Close",
			"GLOSSARY_POPUP_TITLE_TABLET" : "Glossary",
			"GLOSSARY_POPUP_CLOSE_BUTTON_TITLE_TABLET" : "Close button",
			"GLOSSARY_POPUP_CLOSE_BUTTON_TEXT_TABLET" : "Close",
			"GLOSSARY_POPUP_TERMS_TITLE_TABLET" : "Terms",
			"GLOSSARY_POPUP_DEFINITION_TITLE_TABLET" : "Definition",
			"GLOSSARY_ALL" : "All"
		},
		"objFields":
		{
            "title":
			{
                "strTitle": "Glossary title",
                "strInputType": "text",
                "defaultValue": "@NAV_GLOSSARY_BUTTON_TEXT"
            }
        },

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"intDefaultOrder" : 4
		}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "helpExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Help",		// Human readable name
	"strID" : "extra-help", 					// Unique key for system use
	"strDescription" : "Render Help data in the Player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "presentation",
		"booIsShown" : true,
		"booHasSideMenu" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		]
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		"objNavButton" : {
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "help_genericTemplateC"
		},

		"objMetaTopicConfigOverrides" :
		{
			"objAuthoringConfigurationSettings.booTopicCanUseSubscreens" : false,
			"objSessionConfigurationSettings.strScreenTemplateType" : "help"
		},

		"arrWhitelistedAssets" :
		[
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],

		"objFiles" :
		{
		},

		"objDependancies" :
		{
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		//NavButton settings if required
		//Priority (value 1-100) sets a default position on the Nav
		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,												// Bootstrap
			"intPriority" : 1,
			"strHtmlFragment" : "help_genericTemplateC"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderHelpSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderHelpMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderHelpLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"help.js" : "base",
			"help_extra.css" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" :
		{}
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"NAV_HELP_BUTTON_TITLE_TOPIC" : "Help button",
			"NAV_HELP_BUTTON_TEXT_TOPIC" : "Help",

			"HELP_POPUP_CLOSE_BUTTON_TITLE" : "Close button",
			"HELP_POPUP_CLOSE_BUTTON_TEXT" : "Close"
		},
		"objFields":
		{
            "title":
			{
                "strTitle": "Help title",
                "strInputType": "text",
                "defaultValue": "@NAV_HELP_BUTTON_TEXT_TOPIC"
            }
        },

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 1,
			"intDefaultOrder" : 3
		}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "jlr-menuExtra";
var objManifestData = {
    /************************ Core declarations ************************/
    "strName": "Contents", // Human readable name
    "strID": "extra-jlr-menu", // Unique key for system use
    "strDescription": "Render the Table of Contents items in the Player.", // JSON Encoded string
    "strVersion": "1.0",
    "strManifestType": "extra",

    /************************ Source Control ************************/
    // These are for future development.
    "strGitRepo": "",
    "strGitRepoSubPath": "", // Not sure if we need this or it can be combined with the above path?

    /************************ Contributions ************************/
    "objContributors": {},

    /************************ Extra Data Template ************************/
    // ### Need to consider a sensible system for default values.
    "objDataTemplate": {
        "strGroup": "presentation",
        "booIsShown": true
    },

    /************************ Common declarations ************************/
    "objCommonDeclarations": {

    },

    "objAuthoringDeclarations": {
        // An array of known compatible Authoring builds
        "arrAuthoringVersions": [
            "v2.0",
            "v2.1"
        ],


        "objMetaTopicConfigOverrides": {
            "objAuthoringConfigurationSettings.booTopicCanUseSubscreens": false,
            "objSessionConfigurationSettings.strScreenTemplateType": "glossary"
        },

        "arrWhitelistedAssets": [
            "text",
            "imagestatic",
            "video2",
            "audioplayer"
        ],

        "objFiles": {},

        "objDependancies": {}
    },

    "objPortalDeclarations": {
        "objTranslatableCoreContentText": {
        },
        "objFields": {
            "title": {
                "strTitle": "Title",
                "strInputType": "text",
                "defaultValue": ""
            },
            "buttonLeftLabel": {
                "strTitle": "Left button label",
                "strInputType": "text",
                "defaultValue": ""
            },
            "buttonLeftTopic": {
                "strTitle": "Select topic link for left button",
                "strInputType": "selectgomoid",
                "arrData": [],
                "strDynamicDataMap": "topics",
                "defaultValue": null
            },
            "buttonRightLabel": {
                "strTitle": "Right button label",
                "strInputType": "text",
                "defaultValue": ""
            },
            "buttonRightTopic": {
                "strTitle": "Select topic link for right button",
                "strInputType": "selectgomoid",
                "arrData": [],
                "strDynamicDataMap": "topics",
                "defaultValue": null
            },
            "topic": {
                "strTitle": "Sort topics",
                "strInputType": "sortablelist",
                "arrData": [],
                "strDynamicDataMap": "topics",
                "defaultValue": null
            }
        },
        "objNavButton": {
            "booDefaultDisplayButton": true,
            "intPriority": 50,
            "intDefaultOrder": 1
        }
    },

    "objPlayerDeclarations": {
        // An array of minimum Core Player builds - How can we automate the updating of these
        // lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
        "arrPlayerVersions": [
            "html-v3.0",
            "native-html-v3.1"
        ],

        "objNavButton": {
            "booDefaultDisplayButton": true, // Bootstrap
            "intPriority": 100,
            "strHtmlFragment": "jlrMenu_generalTemplateC"
        },

        // A list of the CORE theme elements utilised by the Extra when in the Player
        // ### To be populated once the Theme definition / manifest is scoped?
        "arrThemeElementsSupport": [
            "btn", // Bootstrap
            "gomo-confirm-buttonC", // GoMo
            "gomo-content-background-1C", // GoMo
            "gomo-border-1C" // GoMo
        ],

        // Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
        // ### To be populated once the Theme definition / manifest is scoped?
        "objCustomThemeElements": {

        },

        // Methods should be tested for in sequence with the first match found
        // being the one selected.
        // Use of -1 denotes 'any' and would allow a single render method to be
        // specified with both Min and Max set to -1.
        // If a case is found where no methods match, that should be handled by
        // a generic error message being rendered in place of the extra content.
        "arrRenderMethods": [{
            "intMinValue": 100,
            "intMaxValue": 200,
            "strMethodName": "_renderSettingsSmall"
        }, {
            "intMinValue": 201,
            "intMaxValue": 500,
            "strMethodName": "_renderSettingsMedium"
        }, {
            "intMinValue": 501,
            "intMaxValue": -1,
            "strMethodName": "_renderSettingsLarge"
        }],

        // See the comment on the Authoring objFiles declaration
        "objFiles": {
            "jlr-menu.js": "base",
            "jlr-menu_extra.css": "base",
            "extra_fragments.html": "base"
        },

        "objDependancies": {}
    }
};

if (typeof MANIFEST_MANAGER != 'undefined') {
    MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function(root) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = {
            dependancies: objManifestData.objPlayerDeclarations.objDependancies,
            main: objManifestData.objPlayerDeclarations.objFiles
        }
    }
})(this);
/* eslint-disable */
var strManifestID = "languageSelector";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Language Selector",		// Human readable name
	"strID" : "extra-language-selector", 					// Unique key for system use
	"strDescription" : "Render the Language selector panel in the Player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "presentation",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],


		"objMetaTopicConfigOverrides" :
		{
		},

		"arrWhitelistedAssets" :
		[
		],

		"objFiles" :
		{
		},

		"objDependancies" :
		{
		}
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"LANGUAGE_NAV_BUTTON" : "Language",
			"LANGUAGE_SELECTOR_CONFIRM_BUTTON" : "Select",
			"LANGUAGE_SELECTOR_POPUP_CLOSE_BUTTON_TITLE" : "Close Button",
			"LANGUAGE_SELECTOR_POPUP_CLOSE_BUTTON_TEXT" : "Close",
			"LANGUAGE_SELECTOR_POPUP_TITLE" : "Select a Language"
		},
		"objFields":
		{
			"title":
			{
				"strTitle": "Title",
				"strInputType": "text",
				"defaultValue": "@LANGUAGE_NAV_BUTTON"
			}
		},
		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"intDefaultOrder" : 1
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,												// Bootstrap
			"intPriority" : 100,
			"strHtmlFragment" : "languageSelector_generalTemplateC"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderSettingsSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderSettingsMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderSettingsLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"languageSelector.js" : "base",
			"languageSelector_extra.css" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);var strManifestID = "resourcesExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Resources",		// Human readable name
	"strID" : "extra-resources", 					// Unique key for system use
	"strDescription" : "Render Resources data in the Player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "presentation",
		"booIsShown" : true,
		"booHasSideMenu" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		/************************ Test data links ************************/
		"arrTestDataFragments" :
		[
		],

		/************************ Test data required files ************************/
		// ### Do we need to specify these? Should they just sit in a "test data" sub folder?
		// JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in the roadmap
		"arrTestDataFiles" :
		[
			"filename1.jpg",
			"filename2.jpg",
			"video1.mp4"
		]
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],

		"objNavButton" : {
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"strHtmlFragment" : "resources_genericTemplateC"
		},

		"objMetaTopicConfigOverrides" :
		{
			"objAuthoringConfigurationSettings.booTopicCanUseSubscreens" : false,
			"objSessionConfigurationSettings.strScreenTemplateType" : "resources"
		},

		"arrWhitelistedAssets" :
		[
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],

		"objFiles" :
		{
		},

		"objDependancies" :
		{
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		//NavButton settings if required
		//Priority (value 1-100) sets a default position on the Nav
		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,												// Bootstrap
			"intPriority" : 1,
			"strHtmlFragment" : "resources_genericTemplateC"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderResourcesSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderResourcesMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderResourcesLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"resources.js" : "base",
			"resources_extra.css" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" :
		{}
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"NAV_RESOURCES_BUTTON_TITLE_TOPIC" : "Resources button",
			"NAV_RESOURCES_BUTTON_TEXT_TOPIC" : "Resources",

			"RESOURCES_POPUP_CLOSE_BUTTON_TITLE" : "Close button",
			"RESOURCES_POPUP_CLOSE_BUTTON_TEXT" : "Close"
		},
		"objFields":
		{
            "title":
			{
                "strTitle": "Resources title",
                "strInputType": "text",
                "defaultValue": "@NAV_RESOURCES_BUTTON_TEXT_TOPIC"
            }
        },

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 1,
			"intDefaultOrder" : 3
		}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);
/* globals MANIFEST_MANAGER, module */

var strManifestID = 'searchExtra';
var objManifestData = {
  /** ********************** Core declarations ************************/
  strName: 'Search', // Human readable name
  strID: 'extra-search', // Unique key for system use
  strDescription: 'Search content in the Player.', // JSON Encoded string
  strVersion: '1.0',
  strManifestType: 'extra',

  /** ********************** Source Control ************************/
  // These are for future development.
  strGitRepo: '',
  strGitRepoSubPath: '', // Not sure if we need this or it can be combined with the above path?

  /** ********************** Contributions ************************/
  objContributors: {},

  /** ********************** Extra Data Template ************************/
  // ### Need to consider a sensible system for default values.
  objDataTemplate: {
    strGroup: 'presentation',
    booIsShown: true,
    booHasSideMenu: true
  },

  /** ********************** Common declarations ************************/
  objCommonDeclarations: {
    /** ********************** Test data links ************************/
    arrTestDataFragments: [],

    /** ********************** Test data required files ************************/
    // ### Do we need to specify these? Should they just sit in a "test data" sub folder?
    // JC + JH: Keep for now, but optional and likely only used for cleanup at a later point in
    // the roadmap
    arrTestDataFiles: ['filename1.jpg', 'filename2.jpg', 'video1.mp4']
  },

  objAuthoringDeclarations: {
    // An array of known compatible Authoring builds
    arrAuthoringVersions: ['v2.0', 'v2.1'],

    objNavButton: {
      booDefaultDisplayButton: true,
      intPriority: 50,
      strHtmlFragment: 'search_genericTemplateC'
    },

    objMetaTopicConfigOverrides: {
      'objAuthoringConfigurationSettings.booTopicCanUseSubscreens': false,
      'objSessionConfigurationSettings.strScreenTemplateType': 'search'
    },

    arrWhitelistedAssets: ['text', 'imagestatic', 'video2', 'audioplayer'],

    objFiles: {},

    objDependancies: {}
  },

  objPlayerDeclarations: {
    // An array of minimum Core Player builds - How can we automate the updating of these
    // lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
    arrPlayerVersions: ['html-v3.0', 'native-html-v3.1'],

    // NavButton settings if required
    // Priority (value 1-100) sets a default position on the Nav
    objNavButton: {
      booDefaultDisplayButton: true, // Bootstrap
      intPriority: 1,
      strHtmlFragment: 'search_genericTemplateC'
    },

    // A list of the CORE theme elements utilised by the Extra when in the Player
    // ### To be populated once the Theme definition / manifest is scoped?
    arrThemeElementsSupport: [
      'btn', // Bootstrap
      'gomo-confirm-buttonC', // GoMo
      'gomo-content-background-1C', // GoMo
      'gomo-border-1C' // GoMo
    ],

    // Anything that could be sensibly styled that does fit into the CORE theming framework
    // (Bootstrap + Core GoMo extentsions)
    // ### To be populated once the Theme definition / manifest is scoped?
    objCustomThemeElements: {},

    // Methods should be tested for in sequence with the first match found
    // being the one selected.
    // Use of -1 denotes 'any' and would allow a single render method to be
    // specified with both Min and Max set to -1.
    // If a case is found where no methods match, that should be handled by
    // a generic error message being rendered in place of the extra content.
    arrRenderMethods: [
      {
        intMinValue: 100,
        intMaxValue: 200,
        strMethodName: '_renderHelpSmall'
      },
      {
        intMinValue: 201,
        intMaxValue: 500,
        strMethodName: '_renderHelpMedium'
      },
      {
        intMinValue: 501,
        intMaxValue: -1,
        strMethodName: '_renderHelpLarge'
      }
    ],

    // See the comment on the Authoring objFiles declaration
    objFiles: {
      'search.js': 'base',
      'search_extra.css': 'base',
      'extra_fragments.html': 'base'
    },

    objDependancies: {}
  },

  objPortalDeclarations: {
    objTranslatableCoreContentText: {
      NAV_SEARCH_BUTTON_TITLE_TOPIC: 'Search',
      NAV_SEARCH_BUTTON_TEXT_TOPIC: 'Search',

      SEARCH_POPUP_CLOSE_BUTTON_TITLE: 'Close button',
      SEARCH_POPUP_CLOSE_BUTTON_TEXT: 'Close',

      SEARCH_TITLE: 'Course Search',
      SEARCH_BUTTON: 'Find it',
      SEARCH_RESULTS: 'Results'
    },
    objFields: {
      title: {
        strTitle: 'Search title',
        strInputType: 'text',
        defaultValue: '@NAV_SEARCH_BUTTON_TEXT_TOPIC'
      }
    },

    objNavButton: {
      booDefaultDisplayButton: true,
      intPriority: 1,
      intDefaultOrder: 3
    }
  }
};

if (typeof MANIFEST_MANAGER != 'undefined') {
  MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}

(function(root) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = {
      dependancies: objManifestData.objPlayerDeclarations.objDependancies,
      main: objManifestData.objPlayerDeclarations.objFiles
    };
  }
})(this);
var strManifestID = "tableOfContentsExtra";
var objManifestData = {
	/************************ Core declarations ************************/
	"strName" : "Contents",		// Human readable name
	"strID" : "extra-table-of-contents", 					// Unique key for system use
	"strDescription" : "Render the Table of Contents items in the Player.", // JSON Encoded string
	"strVersion" : "1.0",
	"strManifestType" : "extra",

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{},

	/************************ Extra Data Template ************************/
	// ### Need to consider a sensible system for default values.
	"objDataTemplate" :
	{
		"strGroup" : "presentation",
		"booIsShown" : true
	},

	/************************ Common declarations ************************/
	"objCommonDeclarations" :
	{
		
	},

	"objAuthoringDeclarations" :
	{
		// An array of known compatible Authoring builds
		"arrAuthoringVersions" :
		[
			"v2.0",
			"v2.1"
		],


		"objMetaTopicConfigOverrides" :
		{
			"objAuthoringConfigurationSettings.booTopicCanUseSubscreens" : false,
			"objSessionConfigurationSettings.strScreenTemplateType" : "glossary"
		},

		"arrWhitelistedAssets" :
		[
			"text",
			"imagestatic",
			"video2",
			"audioplayer"
		],

		"objFiles" :
		{
		},

		"objDependancies" :
		{
		}
	},

	"objPortalDeclarations" :
	{
		"objTranslatableCoreContentText" :
		{
			"NAV_TABLE_OF_CONTENTS_BUTTON_TITLE" : "Contents",
			"TABLE_OF_CONTENTS_POPUP_CLOSE_BUTTON_TITLE" : "Close Button",
			"TABLE_OF_CONTENTS_POPUP_CLOSE_BUTTON_TEXT" : "Close",
			"TABLE_OF_CONTENTS_POPUP_TITLE" : "Content"
		},
		"objFields":
		{
			"title":
			{
				"strTitle": "Title",
				"strInputType": "text",
				"defaultValue": "@NAV_TABLE_OF_CONTENTS_BUTTON_TITLE"
			},
			"topic":
			{
				"strTitle": "Sort topics",
				"strInputType": 'sortablelist',
				"arrData": [],
				"strDynamicDataMap": "topics",
				"defaultValue": null
			}
		},
		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,
			"intPriority" : 50,
			"intDefaultOrder" : 1
		}
	},

	"objPlayerDeclarations" :
	{
		// An array of minimum Core Player builds - How can we automate the updating of these
		// lists? Perhaps the Portal has a means of updating these manifests? (2.1?)
		"arrPlayerVersions" :
		[
			"html-v3.0",
			"native-html-v3.1"
		],

		"objNavButton" :
		{
			"booDefaultDisplayButton" : true,												// Bootstrap
			"intPriority" : 100,
			"strHtmlFragment" : "tableOfContents_generalTemplateC"
		},

		// A list of the CORE theme elements utilised by the Extra when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrThemeElementsSupport" :
		[
			"btn",												// Bootstrap
			"gomo-confirm-buttonC",				// GoMo
			"gomo-content-background-1C",	// GoMo
			"gomo-border-1C"							// GoMo
		],

		// Anything that could be sensibly styled that does fit into the CORE theming framework (Bootstrap + Core GoMo extentsions)
		// ### To be populated once the Theme definition / manifest is scoped?
		"objCustomThemeElements" :
		{

		},

		// Methods should be tested for in sequence with the first match found
		// being the one selected.
		// Use of -1 denotes 'any' and would allow a single render method to be
		// specified with both Min and Max set to -1.
		// If a case is found where no methods match, that should be handled by
		// a generic error message being rendered in place of the extra content.
		"arrRenderMethods" :
		[
			{
				"intMinValue" : 100,
				"intMaxValue" : 200,
				"strMethodName" : "_renderSettingsSmall"
			},
			{
				"intMinValue" : 201,
				"intMaxValue" : 500,
				"strMethodName" : "_renderSettingsMedium"
			},
			{
				"intMinValue" : 501,
				"intMaxValue" : -1,
				"strMethodName" : "_renderSettingsLarge"
			}
		],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"tableofcontents.js" : "base",
			"tableofcontents_extra.css" : "base",
			"extra_fragments.html" : "base"
		},

		"objDependancies" :
		{}
	}
};

if (typeof MANIFEST_MANAGER != 'undefined')
{
	MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
}


(function (root) {
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = {
			dependancies: objManifestData.objPlayerDeclarations.objDependancies,
			main: objManifestData.objPlayerDeclarations.objFiles
		}
	}
})(this);