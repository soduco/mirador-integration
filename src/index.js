import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import miradorDownloadPlugins from 'mirador-dl-plugin';
//import downloadDialogPlugin from 'mirador-downloaddialog/es';
export function createViewer(jsonData) {
  const config = {
    id: 'main',
    windows: jsonData.windows,
    catalog: jsonData.catalog,
    window: {
      sideBarPanel: "annotations",
      sideBarOpen: true,
      highlightAllAnnotations: true,
      workspaceControlPanel: {
        enabled: false,
      },
    },
    theme: {
      palette: {
        primary: {
          main: '#1967d2',
        },
      },
    },
  };

  Mirador.viewer(config, [
    ...miradorImageToolsPlugin, miradorDownloadPlugins,// downloadDialogPlugin,
  ]);
}
