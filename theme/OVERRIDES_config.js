var tempConfigObj = JSON.parse('{ "BOO_SHOW_TOPIC_TITLE": false, "BOO_SHOW_SCREEN_TITLE": false, "BOO_SHOW_CORRECTNESS_ICONS_ON_CONFIRM_CLICK": true, "BOO_GRAPHICAL_PAGE_COUNT": false, "BOO_PAGE_COUNT_POSITION_SCREEN": false, "BOO_PAGE_COUNT_POSITION_NAV": false, "BOO_INCLUDE_FILMSTRIP_STEP_HEADINGS": false, "BOO_SHOW_FILMSTRIP_STEP_NUMBERS": false, "MATCH_COLUMN_HEIGHT": true, "BOO_ENABLE_RTL": true } ');for (var k in tempConfigObj) { window[k] = tempConfigObj[k] }