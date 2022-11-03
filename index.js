const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "Masud_Ndatsu",
    backend: true,
    age: 23,
    bio: "My name is Mas'ud Ndatsu and I have been coding for like 2 years now. I hope that with the connections and oppurtunities that comes with this internship. I can secure a backend (Nodejs) developer role. This is the sad truth about me :( .",
  });
});

// HNG TASK TWO
app.post("/api/operation", (req, res) => {
  let result;
  const opts = {
    ADDITION: "addition",
    SUBSTRACTION: "substraction",
    MULTIPLICATION: "multiplication",
  };
  const { operation_type, x, y } = req.body;

  let num1 = Number(x),
    num2 = Number(y);

  switch (operation_type) {
    case opts.ADDITION:
      result = num1 + num2;
      result = {
        result,
        operation_type: opts.ADDITION,
      };
      break;
    case opts.SUBSTRACTION:
      result = Math.abs(num1 - num2);
      result = {
        result,
        operation_type: opts.SUBSTRACTION,
      };
      break;
    case opts.MULTIPLICATION:
      result = num1 * num2;
      result = {
        result,
        operation_type: opts.MULTIPLICATION,
      };
      break;
    default:
      return;
  }

  return res.status(200).json({
    slackUsername: "Masud_Ndatsu",
    result: result.result,
    operation_type: result.operation_type,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
