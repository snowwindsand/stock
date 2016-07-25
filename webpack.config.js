var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
	devtool:'inline-source-map',
	entry:__dirname + "/index.js",
	resolve:{
		extensions:['','.js','.jsx']
	},
	output:{
		path:__dirname + '/build',
		filename:'bundle.js'
	},
	devServer:{
		colors:true,
		historyApiFallback:true,
		inline:true,
		port:3888,
		hot:true
	},
	module:{
		loaders:[
		{
			test: /\.css$/,
			loader:'style!css'
		},
		{
			test: /\.js[x]?$/,
			exclude:/node-modules/,
			loader:'babel'	
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname + "/template/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({
			url:'http://localhost:3888'
		})
	]
};