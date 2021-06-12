import moduleAlias  from "module-alias";
//import  database  from "./config/database";



moduleAlias.addAliases({
  "@configs": `${__dirname}/config/index.ts`,
  "@database": `${__dirname}/config/index.ts`,
});


