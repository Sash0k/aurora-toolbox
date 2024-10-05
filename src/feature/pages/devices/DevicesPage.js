/**
 * Copyright 2024 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import GObject from 'gi://GObject';
import Adw from 'gi://Adw';

import './elements/DevicesGroups.js';

export const DevicesPage = GObject.registerClass({
	GTypeName: 'AtbDevicesPage',
	Template: 'resource:///com/keygenqt/aurora-toolbox/ui/pages/devices/DevicesPage.ui',
	InternalChildren: [
		'IdDevicesGroups',
	],
	Signals: {
		'navigation-push': {
			param_types: [GObject.TYPE_STRING]
		},
	},
}, class extends Adw.NavigationPage {
	constructor(params) {
		super(params);
		this.#initConnect();
	}

	#initConnect() {
		this._IdDevicesGroups.connect('navigation-push', (_, value) => {
			this.emit('navigation-push', value);
		});
	}
});
