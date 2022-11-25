var strManifestID = "generic4";
var objManifestData =
{
	/************************ Core declarations ************************/
	"strName" : "Generic 4 Theme",		// Human readable name
	"strID" : "generic_4", 					// Unique key for system use
	"strDescription" : "Generic 4 Theme.", // JSON Encoded string
	"strVersion" : "3.0",
	"strManifestType" : "theme",
	"strOptionalOverridesDescription" : "", //Include any significate overrides to Core functions/features.
	"arrAncestryThemeIDs" : 
	[], //Set by the Portal or the developer if cloned from another Theme.

	/************************ Source Control ************************/
	// These are for future development.
	"strGitRepo" : "//thisdfhjkdf",
	"strGitRepoSubPath" : "",	// Not sure if we need this or it can be combined with the above path?

	/************************ Contributions ************************/
	"objContributors" :
	{

	},
		
	"objPortalDeclarations" :
	{
		// A list of the CORE theme elements utilised by the Asset when in the Player
		// ### To be populated once the Theme definition / manifest is scoped?
		"arrCustomThemeElements" :
		[
			{
				"strTitle" : "Minimum Large Output",
				"strVariableName" : "@gomo_large_width_min",
				"strDescription" : "Minimum Size for a large render output.",
				"strType" : "integer",
				"strDefaultValue" : objGlobalScreenRenderBoundaries.large.intScreenMin + "px",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Maximum Medium Output",
				"strVariableName" : "@gomo_medium_width_max",
				"strDescription" : "Maximum Size for a medium render output.",
				"strType" : "integer",
				"strDefaultValue" : objGlobalScreenRenderBoundaries.medium.intScreenMax + "px",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Minimum Medium Output",
				"strVariableName" : "@gomo_medium_width_min",
				"strDescription" : "Minimum Size for a medium render output.",
				"strType" : "integer",
				"strDefaultValue" : objGlobalScreenRenderBoundaries.medium.intScreenMin + "px",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Maximum Small Output",
				"strVariableName" : "@gomo_small_width_max",
				"strDescription" : "Maximum Size for a small render output.",
				"strType" : "integer",
				"strDefaultValue" : objGlobalScreenRenderBoundaries.small.intScreenMax + "px",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Maximum Page Width",
				"strVariableName" : "@gomo_page_width",
				"strDescription" : "Maximum page width for Large Output.",
				"strType" : "integer",
				"strDefaultValue" : "955px",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Maximum Page Height",
				"strVariableName" : "@gomo_page_max_height_desktop",
				"strDescription" : "Maximum page height for Large Output.",
				"strType" : "integer",
				"strDefaultValue" : "653px",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Font Colour",
				"strVariableName" : "@gomo_font_colour",
				"strDescription" : "General body font colour.",
				"strType" : "colour",
				"strDefaultValue" : "#000",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Base Colour",
				"strVariableName" : "@gomo_base_colour",
				"strDescription" : "Base colour of theme.",
				"strType" : "colour",
				"strDefaultValue" : "#0089CF",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Secondary Colour",
				"strVariableName" : "@gomo_secondary_colour",
				"strDescription" : "Secondary colour of theme.",
				"strType" : "colour",
				"strDefaultValue" : "#414143",
				"strMetaType" : "LESS"
			},
			{
				"strTitle" : "Animation Duration",
				"strVariableName" : "@gomo_device_transition_duration",
				"strDescription" : "The amount of seconds for an animation to complete.",
				"strType" : "duration",
				"strDefaultValue" : "0.25s",
				"strMetaType" : "LESS"
			}
		],
		
		"objOutputSupport" : 
		{
			"graphical" : true,
			"accessible" : true,
			"smartphone" : true,
			"tablet" : true
		},
		
		// List of OS's and Browsers etc...
		"objCrossCompatibilitySupport" : 
		{
			"blackberry" : false
		},
			
		// Add to list ONLY if player can NOT function without (eg if graceful fallback not possible.)
		"arrDependantTechnologies" :
		[
			//"html5",
			//"CSS3"
		],
		
		"arrActionsBlacklist" :
		[],
		
		"arrAssetsBlacklist" :
		[],
		
		"arrExtrasBlacklist" :
		[],
		
		"arrPlayerWhitelist" :
		[],

		// See the comment on the Authoring objFiles declaration
		"objFiles" :
		{
			"grey-background.jpg" : "resources",
			"lader_gray_256.gif" : "resources"
		},

		"objDependancies" :
		{
			"bootstrap.min.js" : "dependant-api",
			"bootstrap.css" : "dependant-api"
		}
	},

	"objPlayerDeclarations" :
	{
		// Methods should be tested for in sequence with the first match found
        // being the one selected.
        // Use of -1 denotes 'any' and would allow a single render method to be
        // specified with both Min and Max set to -1.
        // If a case is found where no methods match, that should be handled by
        // a generic error message being rendered in place of the asset content.
		"objScreenRenderBoundaries" :
		{
			"large" : {
				"intScreenMax" : objGlobalScreenRenderBoundaries.large.intScreenMax,
				"intScreenMin" : objGlobalScreenRenderBoundaries.large.intScreenMin
			},
			"medium" : {
				"intScreenMax" : objGlobalScreenRenderBoundaries.medium.intScreenMax,
				"intScreenMin" : objGlobalScreenRenderBoundaries.medium.intScreenMin
			},
			"small" : {
				"intScreenMax" : objGlobalScreenRenderBoundaries.small.intScreenMax,
				"intScreenMin" : objGlobalScreenRenderBoundaries.small.intScreenMin
			}
		}
	}
};

MANIFEST_MANAGER.reportManifestLoaded(strManifestID, objManifestData);
