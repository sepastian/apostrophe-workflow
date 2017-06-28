module.exports = function(self, options) {
  self.pushAssets = function() {
    self.pushAsset('script', 'user', { when: 'user' });
    self.pushAsset('script', 'manage-modal', { when: 'user' });
    self.pushAsset('script', 'commit-modal', { when: 'user' });
    self.pushAsset('script', 'export-modal', { when: 'user' });
    self.pushAsset('script', 'review-modal', { when: 'user' });
    self.pushAsset('script', 'history-modal', { when: 'user' });
    self.pushAsset('script', 'locale-picker-modal', { when: 'user' });
    self.pushAsset('script', 'pieces-editor-modal', { when: 'user' });
    self.pushAsset('script', 'pages-editor-modal', { when: 'user' });
    self.pushAsset('script', 'force-export-widget-modal', { when: 'user' });
    self.pushAsset('script', 'force-export-modal', { when: 'user' });
    self.pushAsset('script', 'schemas', { when: 'user' });
    self.pushAsset('script', 'global', { when: 'user' });
    self.pushAsset('stylesheet', 'user', { when: 'user' });
  };  
};