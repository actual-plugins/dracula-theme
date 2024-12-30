import { ActualPluginManifest } from 'plugins-shared';

const manifest: ActualPluginManifest = {
  url: "https://github.com/actual-plugins/example/",
  name: "Example Plugin",
  version: "0.0.3",
  description: "This is an example plugin.",
  pluginType: 'client',
  minimumActualVersion: 'v24.12.0',
  author: "Leandro Menezes"
};

export default manifest;