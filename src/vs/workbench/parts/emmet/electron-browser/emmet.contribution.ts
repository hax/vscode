/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import nls = require('vs/nls');

import { Registry } from 'vs/platform/registry/common/platform';
import { IConfigurationRegistry, Extensions as ConfigurationExtensions } from 'vs/platform/configuration/common/configurationRegistry';

import './actions/expandAbbreviation';
import './actions/wrapWithAbbreviation';

// Configuration: emmet
const configurationRegistry = <IConfigurationRegistry>Registry.as(ConfigurationExtensions.Configuration);
configurationRegistry.registerConfiguration({
	'id': 'emmet',
	'order': 6,
	'title': nls.localize('emmetConfigurationTitle', "Emmet"),
	'type': 'object',
	'properties': {
		'emmet.triggerExpansionOnTab': {
			'type': 'boolean',
			'default': true,
			'description': nls.localize('triggerExpansionOnTab', "When enabled, emmet abbreviations are expanded when pressing TAB. Not applicable when emmet.useNewemmet is set to true.")
		},
		'emmet.preferences': {
			'type': 'object',
			'default': {},
			'description': nls.localize('emmetPreferences', "Preferences used to modify behavior of some actions and resolvers of Emmet. Not applicable when emmet.useNewemmet is set to true.")
		},
		'emmet.useNewEmmet': {
			'type': 'boolean',
			'default': true,
			'description': nls.localize('useNewEmmet', 'Try out the new emmet modules (which will eventually replace the old single emmet library) for all emmet features.')
		}
	}
});
