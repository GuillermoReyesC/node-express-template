const app = require("src/app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening in port https://localhost:${PORT}`);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/views/index.html")

});

app.get('/solicitud', function (req, res) {
  res.sendFile(__dirname+"/views/creditRequest.html")
})

