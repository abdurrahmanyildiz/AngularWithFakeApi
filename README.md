# AngularWithFakeApi

This is an angular project to start frontend development without waiting backend services (or you can use any purposes).

Project has a sibling Nodejs project named as fakeapi. 

You need to build and run Nodejs api before angular project. 

If you start Nodejs and saw "Fake api started on 3000" this mean you have an API on http://localhost:3000

After starting API you need to redirect http calls on Angular. To provide this redirection Angular project has a file named as proxy.conf.json 

Finally, you need to say Angular project "use this proxy file" with "npm run proxy"
This command will run "ng serve --disable-host-check --proxy-config proxy.conf.json" command in package.json of Angular.

1. Run Fake Api

![Run Api](https://github.com/abdurrahmanyildiz/AngularWithFakeApi/blob/master/gitss/nodejsapistart.PNG)

2. Run Angular app with "proxy" script

![Run with Proxy](https://github.com/abdurrahmanyildiz/AngularWithFakeApi/blob/master/gitss/ngrunproxy.PNG)

You can see redirection logs as following:

![Logs](https://github.com/abdurrahmanyildiz/AngularWithFakeApi/blob/master/gitss/proxyredirect.PNG)

And Also two paging components added under angular>src>app>core>components.