import 'gi://Gdk?version=4.0';
import 'gi://Gtk?version=4.0';
import 'gi://Adw?version=1';

import { Application } from './feature/Application.js';

export function main(argv) {
	return new Application({ 'application-id': pkg.name }).run(argv);
}