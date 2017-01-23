module.exports = {
  default: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=CSS%20component&selectedStory=default')
      .waitForElementPresent('.z-grid', 1000)
      .assert.containsText('.z-grid__col--12-12 > h1', '12-12')
      .end();
  },
};
