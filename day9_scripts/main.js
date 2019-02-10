const bbCore = require('sdk');


// get all of the presents
exports.presents = async function(data, callback){

  // get the app
  const app = await bbCore.getApp();
  // make sure the presents are not cached
  app.$flush('presents');
  // get a resource that is a list of the presents
  const resource = await app.$get('presents');
  // unwrap the results and extract the embedded objects
  const presents  = await resource.$get('custom_objects');

  // build up a table of the results i a summary
  let body = "<html><body><table><tr><th>Present</th><th>Count</th></th>";
  const summary = {};

  for (const present of presents){
    summary[present.present] = (summary[present.present] || 0) + present.count;
  }

  for (const present of Object.keys(summary)) {
    body += "<tr><td>" + present + "</td><td>" +  summary[present] + "</td></tr>";
  }

  body += "</table></body></html>"


  callback(null, {
    statusCode: 200,
    response: body,
    proxy: true,
    headers: {
      "Content-Type": "text/html; charset=UTF-8"
    }
  });
}

