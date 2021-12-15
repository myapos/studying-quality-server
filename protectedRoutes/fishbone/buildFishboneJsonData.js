var { findVal } = require("./findVal");
var { distinctValues } = require("./distinctValues");
var { aggregateObjectByProp } = require("./aggregateObjectByProp");
// import aggregateObjectByProp from "./aggregateObjectByProp";

const buildFishboneJsonData = (data) => {
  let fishboneCharts = [];

  //data is array of array with json objects

  let out = {
    name: "",
  };

  out["children"] = [];

  data.map((item, index) => {
    item.map((item_, index_) => {
      const tempObj = {
        name: item_.procedure_step,
      };
      tempObj["children"] = [];

      let search = findVal(out, item_["procedure_step"]);
      console.log("search:", search);
      if (!search) {
        //save obj
        out["name"] = [item_.procedure_step];
        out["children"] = [
          { name: item_.variable, children: item_.effect_description },
        ]; //[item_.effect_description];
      } else {
        if (!out.children.length) {
          out["children"] = [{ name: item_.variable }];
        } else {
          out["children"].push({
            name: item_.variable,
            children: item_.effect_description,
          });
        }
      }
    });

    fishboneCharts.push(out);

    //reset out
    out = {
      name: "",
    };

    out["children"] = [];
  });

  console.log("fishboneCharts:", fishboneCharts);

  const oo = {};

  const collapsed = fishboneCharts.map((item, index) => {
    let toCheck = "";
    let childrenArray = [];
    let f = false;

    let output_ = [];

    console.log("item:", item);

    let uniqueChildren = Array.from(
      new Set(
        item.children.map((item) =>
          item.children
            ? { name: item.name, children: item.children }
            : { name: item.name }
        )
      )
    );

    let distinct = distinctValues(item.children);

    let aggr = aggregateObjectByProp(distinct, "name");

    let object2 = {
      name: item.name,
      children: aggr,
    };

    oo[item.name] = object2;

    return aggr;
  });

  console.log("collapsed:", JSON.stringify(oo));

  return oo;
};

module.exports = { buildFishboneJsonData };
