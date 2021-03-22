
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))



require('../develop/routes/apiRoutes')(app);
require('../develop/routes/htmlroutes')(app);



app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
