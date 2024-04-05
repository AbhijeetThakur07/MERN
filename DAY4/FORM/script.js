const firstNameChange = (e) => {
  const val = e.target.value;
  if (val.length > 3) {
    console.log("correct");
  }
};
//Default behaviour of Form is Submit
function SubmitForm(e) {
  e.preventDefault();
  const t = e.target;
  const res = {};
  // for(let i=0;i<2;i++)
  for (let i = 0; i < t.length; i++) {
    // console.dir(t[i].value);
    // console.dir(t[i].type);

    const ty = t[i].type;
    const vl = t[i].value;
    const nm = t[i].name;
    console.log(nm, ty, vl);
    if (ty == "checkbox") {
      console.log(t[i].checked);
    }
    if (ty != "submit") {
      res[nm] = vl;
      if (ty == "checkbox" && t[i].checked) {
        res.hobbies.push(vl);
      }
      if (ty != "checkbox") {
        res[nm] = vl;
      }
    }
  }
  console.log(res);
  // console.dir(Array.isArray(t));
  // console.dir(e.target);
}
