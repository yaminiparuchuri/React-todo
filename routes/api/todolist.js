// const express = require('express');

// const router = express.Router();

// router.get('/todolist', (req, res, next) => {
//   console.log('coming here');
//   res.send({ success: 'success' });
// });
// module.exports = router;

const express = require("express");

const router = express.Router();

const List = require("../../models/list");

router.get("/todolist", (req, res) => {
  console.log("fgfgff ghghfghg jghjghgjgjgjh ghjghjghjhgjhjghjghjjh");
  List.find()
    .sort({ date: -1 })
    .then(list => res.json(list));
});

router.post("/save/list", (req, res) => {
  console.log(
    "sjhdgasghdsad sadhgsajdjhasgdsa sgdsagdsa dsadas dy sadsdsdsadsad asdyasdysdusa"
  );
  console.log(req.body);
  const newList = new List({
    name: req.body.listName
  });

  newList.save().then(list => res.json(list));
});

// const getMessage = (req, res, next) => {
//   res.json({ success: "success" });
// };

//router.route("/todolist").get(getMessage);

module.exports = router;
