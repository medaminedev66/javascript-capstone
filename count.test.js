import { numberOfComments } from './src/modules/comments.js';

jest.mock('./src/modules/commentsApi.js');

describe('test numberOfComments function', () => {
  let comments = [{ a: 1 }, { b: 2 }, { c: 3 }];
  const involvementAPI = '';
  const appId = '';

  test('Expect the number of comments to be 3', () => {
    numberOfComments(involvementAPI, appId, comments).then((data) => {
      expect(data).toBe(3);
    });
  });
  comments = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

  test('Expect the number of comments to be 5', () => {
    numberOfComments(involvementAPI, appId, comments).then((data) => {
      expect(data).toBe(5);
    });
  });
});
