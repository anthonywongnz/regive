# Regive

This is the build repository for Regive, and the README summarizes the Regive Platform. Please find the Regive Platform repos, installation/build instructions and technical details at https://github.com/anthonywongnz/regive. 

<p align="center">
<img max-height=200 height=200  src="https://github.com/anthonywongnz/regive/blob/master/Images/Regive.png"/>
</p>


## Table of Contents 

01. [ Demo Video. ](#video)
02. [ Regive Platform Summary. ](#desc)
03. [ Project Description. ](#longdesc)
04. [ Regive Architecture. ](#architecture)
05. [ Project Roadmap. ](#roadmap)
06. [ Prototype. ](#designprototype)
07. [ Getting Started. ](#started)
08. [ Authors. ](#authors)
09. [ References. ](#references)


## 01. Demo Video
<a name="video"></a>

[![](https://img.youtube.com/vi/zJskuH4LAs4/0.jpg)](https://www.youtube.com/watch?v=zJskuH4LAs4&feature=youtu.be&fbclid=IwAR00sc6oPb-jgrDliQjVXH1LTPIsIP3h-A4PQCzXbyoDtFVEDryCdYdMY1A)


## 02. Regive Platform Summary
<a name="desc"></a>

Regive is a platform that connect individuals to their local community to facilitate donations to those in need.

## 03. Project Description
<a name="longdesc"></a>

Regive is a free website that allows you to give any items that you don’t need to others who may need it now.

## What's the problem?

* Constantly, people tend to purchase things that they don’t necessarily need and we end up with a lot of materialistic items. 
* During the lockdown individuals stuck at home were able to sort through items they no longer wanted or needed, but with restrictions in place, there was no place to take them. Garage sales were not an option for those trying to maintain social distancing. This led to many communities closing charity stores and cancelling citywide garage sales. 
* Many charity organisations that run Op shops (known as "Thrift Shops" in the USA and "Recycle Stores" in parts of Asia) are informally reporting unprecedented volume of donations while restrictions lossen. As a result was a surplus of items. 
* Rather than overflowing Charity Organisations or by selling and attempting to earn a bit of monetary value, we could learn to regive our beloved items to others who may be in need of it.


## How can technology help?

As a community platform, the safety and security of our community is our main priority. Regive is a community solution which enhances community cooperation by addressing the need to support people who require items. It would allow both “Givers” (such as a store or a community member who has items they can sell or distribute) and “Receivers” who need the items to collaborate and support one another. 


## 04. Regive Architecture
<a name="architecture"></a>

<p align="center">
<img max-height=800 height=800  src="https://github.com/anthonywongnz/regive/blob/master/Images/Regive_Architecture.png"/>
</p>


## Regive works by:

### Giver
1. The Giver user creates an account or login to the Regive website.
2. On the web app, they will state by listing or capturing a photo of their items and IBM AI Watson will systematically sort their donations within the application.
3. HERE Maps curates to show the closest donation centers and what donations are listed within a Giver’s location. Also allows the Giver user to provide their own pickup location.
4. Store listing details are on cloudant.


### Receiver
5. The Receiver user creates an account or login to the Regive website.
6. The Receiver user goes on the Regive webapp and searches for what they want. When they request, it will be processed by a Cloud Function and written to Cloudant.
7. The Giver user will be notified and can accept the request through the Regive application.


## 05. Project Roadmap 
<a name="roadmap"></a>

<p align="center">
<img max-height=700 height=600  src="https://github.com/anthonywongnz/regive/blob/master/Images/Product%20Roadmap.pptx.jpg"/>
</p>


## 06. Prototype 
<a name="designprototype"></a>

Please sign up today to trial our prototype: https://www.notion.so/Regive-3add424fb1c541c78dfc09e0afda2115

Full working demo: https://regive-ibm.netlify.app


## 07. Getting Started
<a name="started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

<a name="authors"></a>
## 08. Authors

* Fiona - Designer - Project Manager https://www.linkedin.com/in/fionayllai/
* Anthony - Developer & Solutions Architect https://www.linkedin.com/in/anthonywongnz/
* Minh - Lead Front-End Developer https://www.linkedin.com/in/minh-phu-lai/
* Nicole - Data, Research, Business Strategist  https://www.linkedin.com/in/nicoleyuelin/
* Tash  - Partners Researcher & Documenter https://www.linkedin.com/in/tashbettridge/


<a name="references"></a>
## 09. References

* https://www.stuff.co.nz/national/crime/117773380/how-you-could-be-fined-400-for-donating-to-an-op-shop
* https://www.japantimes.co.jp/opinion/2020/05/02/commentary/world-commentary/thrift-shops-coronavirus/#.XxTPcZ4zaUk
* https://www.lansingstatejournal.com/story/life/2020/06/16/following-covid-19-shutdowns-thrift-secondhand-stores-may-take-longer-reopen/3177830001/
* https://www.nujournal.com/news/local-news/2020/06/13/thrift-shops-have-been-busy-since-covid-19-restrictions-lifted/

