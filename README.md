# A ReactJS/Reflux TodoList driven by Unit and functional tests

The idea of this project is to build a todo list app fully driven by unit and functional test. That's why the emphasize of the project will be on the tests not on the visual part.
This Readme file will be a living one and I will update it with the things I learned after the latest commit. You can see the notes at the bottom of the file.

There will be only Unit tests / functional tests at the begginig.
If everything goes well there should be visual todo list as well :)

To run the project:

```
npm install
```
and to execute the tests:
```
npm test
```

All comments, suggestions and critiques are welcome!

#Notes:

21.07.2015
- Prevent Jest from mocking the reflux. Otherwise every Reflux methond will return undefined.
- To test Action listeners you should use jest.runAllTimers() because they are async (Reflux's issue: https://github.com/spoike/refluxjs/issues/218)
