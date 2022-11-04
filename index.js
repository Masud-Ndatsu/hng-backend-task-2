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
  try {
    let result = 0;
    const validEnums = ["addition", "subtraction", "multiplication"];

    const { operation_type, x, y } = req.body;

    const isNotANumber = (param) => {
      return isNaN(parseInt(param));
    };

    const sendData = (code) => {
      if (code === 200) {
        return res
          .status(code)
          .json({ slackUsername: "Masud_Ndatsu", result, operation_type });
      }
      return res.status(code).json({
        result: "Invalid Input Format",
        operation_type,
      });
    };

    if (
      isNotANumber(x) ||
      isNotANumber(y) ||
      !validEnums.includes(operation_type)
    ) {
      return sendData(403);
    }

    console.log(req.body);

    if (
      validEnums.includes(operation_type) &&
      !isNotANumber(x) &&
      !isNotANumber(y)
    ) {
      result =
        operation_type === "addition"
          ? parseInt(x) + parseInt(y)
          : operation_type === "subtraction"
          ? parseInt(x) - parseInt(y)
          : operation_type === "multiplication"
          ? parseInt(x) * parseInt(y)
          : result;
    }

    return sendData(200);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
