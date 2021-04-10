module.exports = {
    pluginOptions: {
      electronBuilder: {
        builderOptions: {
          publish: [
            {
              provider: "github",
              owner: "mayasky76",
              private: true,
            }
          ]
        }
      }
    }
  }