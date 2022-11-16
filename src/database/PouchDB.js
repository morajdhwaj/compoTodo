/* eslint-disable no-console */
import PouchDb from "pouchdb";

const pouchdb = new PouchDb("pouchdata");

pouchdb.info().then((info) => {
  console.log("Show me ", info);
});

export async function inputDB(dataItem) {
  try {
    const responseget = await pouchdb.post(dataItem);
    return responseget;
  } catch (error) {
  
    console.error(error);
  }
  return null;
}

export function getToData() {
  const value = pouchdb
    .allDocs({ include_docs: true, descending: true }, (err, doc) => doc.rows)
    .catch((error) => {
      console.error(error);
    });
  return value;
}

export async function removeToDB(id) {
  try {
    const docs = await pouchdb.get(id);
    pouchdb.remove(docs);
  } catch (error) {
    console.error(error);
  }
}


export async function updateDB(id, data) {
  try {
    const doc = await pouchdb.get(id);
    const response = await pouchdb.put({
      _id: id,
      // eslint-disable-next-line no-underscore-dangle
      _rev: doc._rev,
      ...data,
    });
    console.log("response", response);
  } catch (error) {
    console.log("error is== ", error);
  }
}


