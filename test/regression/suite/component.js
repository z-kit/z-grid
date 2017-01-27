module.exports = {
  default: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
      .waitForElementPresent('.z-grid', 1000)
      .assert.containsText('.z-grid__col--12-12 > h1', '12-12')
      .end();
  },
  gutter: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=gutters')
      .waitForElementPresent('.z-grid', 1000)
      .getLocation('.z-grid', (gridLocation) => {
        browser.assert.equal(gridLocation.value.x, -8);
      })
      .end();
  },
  reverse: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=reverse%20grid')
      .waitForElementPresent('.z-grid', 1000)
      .getLocation('.z-grid', (gridLocation) => {
        const gridX = gridLocation.value.x;
        browser.getElementSize('.z-grid', (gridSize) => {
          const gridWidth = gridSize.value.width;
          browser.getElementSize('.z-grid__col:nth-child(2)', (columnSize) => {
            const columnWidth = columnSize.value.width;
            browser.getLocation('.z-grid__col:nth-child(2)', (columnLocation) => {
              const expectedX = (columnLocation.value.x + columnWidth) - gridX;
              browser.assert.equal(expectedX, gridWidth);
            });
          });
        });
      })
      .end();
  },
  center: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=center%20grid')
      .waitForElementPresent('.z-grid', 1000)
      .getLocation('.z-grid', (gridLocation) => {
        const gridX = gridLocation.value.x;
        browser.getElementSize('.z-grid', (gridSize) => {
          const gridWidth = gridSize.value.width;
          const expectedX = Math.floor((gridWidth / 4) + gridX);
          browser.getLocation('.z-grid__col:nth-child(1)', (columnLocation) => {
            const columnX = Math.floor(columnLocation.value.x);
            browser.assert.equal(expectedX, columnX);
          });
        });
      })
      .end();
  },
  fit: (browser) => {
    browser
      .resizeWindow(640, 480)
      .url('http://localhost:3000/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=fit')
      .waitForElementPresent('.z-grid', 1000)
      .getElementSize('.z-grid', (gridSize) => {
        const gridWidth = gridSize.value.width;
        const expectedWidth = Math.floor((gridWidth / 12) * 11);
        browser.getElementSize('.z-grid__col:nth-child(2)', (columnSize) => {
          const columnWidth = Math.floor(columnSize.value.width);
          browser.assert.equal(expectedWidth, columnWidth);
        });
      })
      .end();
  },
  important: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=important%20column%20example')
      .waitForElementPresent('.z-grid', 1000)
      .getLocation('.z-grid', (gridLocation) => {
        const gridX = gridLocation.value.x;
        browser.getLocation('.z-grid__col--important', (columnLocation) => {
          const columnX = columnLocation.value.x;
          const expectedX = gridX;
          browser.assert.equal(expectedX, columnX);
        });
      })
      .end();
  },
  resizing: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=resizing%20example')
      .waitForElementPresent('.z-grid', 1000)
      .resizeWindow(600, 768)
      .getLocation('.z-grid', (gridLocation) => {
        const gridX = gridLocation.value.x;
        browser.getElementSize('.z-grid', (gridSize) => {
          const gridWidth = gridSize.value.width;
          const expectedX = Math.floor((gridWidth / 2) + gridX);
          browser.getLocation('.z-grid__col:nth-child(2)', (columnLocation) => {
            const columnX = Math.floor(columnLocation.value.x);
            browser.assert.equal(expectedX, columnX);
          });
        });
      })
      .resizeWindow(400, 768)
      .getLocation('.z-grid', (gridLocation) => {
        const gridX = gridLocation.value.x;
        browser.getLocation('.z-grid__col:nth-child(2)', (columnLocation) => {
          const columnX = Math.floor(columnLocation.value.x);
          browser.assert.equal(gridX, columnX);
        });
      })
      .end();
  },
};
