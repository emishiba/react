// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', { structuredData: true });
//   response.send('Hello from Firebase!');
// });

const functions = require('firebase-functions'),
  admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

//  サムネイル画像の登録
exports.pfThumbs = functions.storage.object().onFinalize((object) => {
  const bucketName = 'portfolio-7bf15.appspot.com';
  const worksRef = db.collection('works');
  const filePath = object.name;
  const id = filePath;

  worksRef
    .doc(id)
    .set({
      id: filePath,
      path: `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(
        filePath
      )}?alt=media`,
    })
    .then(() => console.log('Done'));
});

const sendResponse = (response, statusCode, body) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

exports.addDatasetFront = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    sendResponse(res, 405, { error: 'Invalid Request' });
  } else {
    const dataset = req.body;
    for (const key of Object.keys(dataset)) {
      const data = dataset[key];
      await db.collection('pfdataFront').doc(key).set(data);
    }
    sendResponse(res, 200, { message: 'Success!!' });
  }
});

exports.addDatasetReact = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    sendResponse(res, 405, { error: 'Invalid Request' });
  } else {
    const dataset = req.body;
    for (const key of Object.keys(dataset)) {
      const data = dataset[key];
      await db.collection('pfdataReact').doc(key).set(data);
    }
    sendResponse(res, 200, { message: 'Success!!' });
  }
});
