const Ajv = require("ajv");
const ajv = new Ajv();
const validate = ajv.compile(require("./gb-schema.json"));
const db = require("../data/gb.json");
const errors = [];
for (const e of db) {
  validate(e);
  if (validate.errors) {
    errors.push(validate.errors);
  }
}
if (errors.length !== 0) {
  console.log(errors);
  throw "Errors in the schema";
}
