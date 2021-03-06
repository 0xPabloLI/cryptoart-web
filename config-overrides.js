// const { override, fixBabelImports } = require('customize-cra');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

//参考：https://www.cnblogs.com/zyl-Tara/p/10635033.html
//https://ant.design/docs/react/use-with-create-react-app-cn
// module.exports = function override(config, env) {
//     // 关于webpack的相关配置
//     return config;
// };

process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            // modifyVars: { '@primary-color': '#414FA3' },
            javascriptEnabled: true,
        }
    })
);