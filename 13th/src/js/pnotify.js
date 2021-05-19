import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { error, defaults } from '@pnotify/core/dist/PNotify.js';

export default function PNotify(err) {
  defaults.width = '300px';
  defaults.type = 'error';
  defaults.title = 'Error';
  defaults.text = err;
  error();
}
