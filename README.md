# Weekend Feedback Loop

A feedback application to showcase newly acquired react-redux skills. 

Timeframe: A weekend, including 12 hr. sprint.

## Installation
Utilize the included SQL file to create a sample database named "prime_feedback".

Use npm to install dependences and start servers.

```bash
npm install
```
```bash
npm run server
```
```bash
npm run client
```

## Features

#### Client-Side: 
- Users can use slide-bar to enter their feedback.
- Ability to go back and edit answers before submitting.
- Comment section and review section.

#### Admin-Side: 
- Ability to save all user feedback in database.
- Able to view, delete and manually flag feedback entries.
- Able to set and edit list of words to be flagged.
- All feedback with scores of less than two will be automatically flagged.

## Wireframes
<img width="686" alt="admin" src="https://user-images.githubusercontent.com/105940054/192168344-cb27cf10-b8ee-47d3-a441-ebcb78e7d7c0.png">

<img width="515" alt="page-one" src="https://user-images.githubusercontent.com/105940054/192168321-7cfd1e65-c9b9-4d24-b846-3640aab710f5.png">


## Planning
<img width="1411" alt="Screen Shot 2022-09-25 at 5 16 51 PM" src="https://user-images.githubusercontent.com/105940054/192168271-11a9d16b-b609-4ea8-870d-0e0ad36fd4cc.png">


## Demo
![Sep-25-2022 16-55-15](https://user-images.githubusercontent.com/105940054/192167318-039602f6-ec5d-45a7-96de-51e29a025e44.gif)

![Sep-25-2022 16-57-27](https://user-images.githubusercontent.com/105940054/192167431-ee452b06-b450-4d59-a8b9-e97975de0b52.gif)

## Trouble-Shooting
Working with react and moving data around was quite enjoyable during this project. I had some set-backs figuring out the logic involved with creating a filter for flagging feedback. This was due to there being multiple components (each numbered input, as well as comments) which would affect the state of that key value.

I'm also still slowing understanding CSS, and while this project isn't the most responsive, it was my largest scaled application to date. 

## Onwards

I added a column in the "flagged words" table, as well as a rudimentary input, for administrators to be able to set a "severity" parameter for their flag-words. The thought behind this, is that, down the line, logic could be put in place to help the admin determine hate-speech from mental health crisis, and so on. 

Ideally, there would be a way to create a login, and revisit your account, be it admin or student.

I would also love to implement some visual representations of the data, like a line-graph representing each class or student's feedback over a period of time.

## Technologies 
html, css, js, react, postico, postgres, sql, redux, ajax, axios, material ui, sweet alert, figma, node.js, express
