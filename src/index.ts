import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the jupyterlab_nasadaily extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_nasadaily:plugin',
  description: 'JupyterLab Extension to Show Astronomy Picture of the Day from NASA',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension jupyterlab_nasadaily is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('jupyterlab_nasadaily settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for jupyterlab_nasadaily.', reason);
        });
    }
  }
};

export default plugin;
