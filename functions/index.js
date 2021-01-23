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

exports.thumbImgs = functions.storage.object().onFinalize((object) => {
  const bucketName = 'portfolio-7bf15.appspot.com';
  const filePath = object.name;
  const id = filePath.split('.png')[0];
  const db = admin.firestore();

  db.collection('works')
    .add({
      id: id,
      path: `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(
        filePath
      )}?alt=media`,
    })
    .then(() => console.log('Done')); // eslint-disable-line no-console
});
