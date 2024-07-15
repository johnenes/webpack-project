let mode = "development"
if (process.env.NODE_ENV === "production"){
   mode = "production"
}

module.exports =  {
   mode:mode,

   devtool:"source-map", //remove unwanted comment in the main.js after server is build
   
   module:{

   rules: [{
      test:/\.js$/,
      exclude:/node_modules/,
      use:{
         loader:"babel-loader"
      }
   }], 
   },
   devServer: {
    static:"./dist",
   },
};