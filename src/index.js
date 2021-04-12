import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
Amplify.configure({
  Auth:{
    identityPoolId: 'ap-southeast-1:5ce0a482-c866-4c48-a646-65782149ef04',
    region: 'ap-southeast-1',
    identityPoolRegion: 'ap-southeast-1',
    userPoolId: 'ap-southeast-1_aqQtRtXHC',
    userPoolWebClientId: '3cum191sussunov03qbnnqqemq',
    mandatorySignIn: false,
    clientMetadata: { myCustomKey: 'myCustomValue' },
    oauth: {   
    }
  },
  API: {
    endpoints: [
        {
            name: "MyAPIGatewayAPI",
            endpoint: "https://l1upkksywb.execute-api.ap-southeast-1.amazonaws.com",
        }
    ]
  },
  Interactions: {
    bots: {
      "ScheduleAppointment": {
        "name": "ScheduleAppointment",
        "alias": "$LATEST",
        "region": "ap-southeast-1",
      },
    }
  }
});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
