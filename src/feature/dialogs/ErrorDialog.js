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
import Gtk from 'gi://Gtk';

export const ErrorDialog = GObject.registerClass({
	GTypeName: 'AtbErrorDialog',
	Template: 'resource:///com/keygenqt/aurora-toolbox/ui/dialogs/ErrorDialog.ui',
	InternalChildren: [
		'IdErrorDialog',
		'IdMessage',
	],
}, class extends Gtk.Widget {
	present(window, message) {
		this._IdErrorDialog.present(window);
		this._IdMessage.label = message;
		return this._IdErrorDialog;
	}
});
