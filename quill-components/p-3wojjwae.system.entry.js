System.register(["./p-71ab5464.system.js"],function(t){"use strict";var e,r,i;return{setters:[function(t){e=t.r;r=t.h;i=t.g}],execute:function(){var s=function(){function t(t){e(this,t);this.format="html";this.debug="warn";this.strict=true;this.styles="{}";this.preserveWhitespace=false}t.prototype.setEditorContent=function(t){if(this.format==="html"){var e=this.quillEditor.clipboard.convert(t);this.quillEditor.setContents(e,"api")}else if(this.format==="text"){this.quillEditor.setText(t)}else if(this.format==="json"){try{this.quillEditor.setContents(JSON.parse(t),"api")}catch(e){this.quillEditor.setText(t,"api")}}else{this.quillEditor.setText(t,"api")}};t.prototype.getEditorContent=function(){var t=this.quillEditor.getText();var e=this.quillEditor.getContents();var r=this.editorElement.children[0].innerHTML;if(r==="<p><br></p>"||r==="<div><br><div>"){r=""}if(this.format==="html"){return r}else if(this.format==="text"){this.quillEditor.getText()}else if(this.format==="json"){try{return JSON.stringify(e)}catch(e){return t}}else{return t}};t.prototype.componentDidLoad=function(){var t=this;var e=this.modules?JSON.parse(this.modules):{toolbar:false};if(e.toolbar){e.toolbar=false}this.quillEditor=new Quill(this.editorElement,{debug:this.debug,modules:e,readOnly:true,theme:this.theme||"snow",formats:this.formats,strict:this.strict});if(this.styles){var r=JSON.parse(this.styles);Object.keys(r).forEach(function(e){t.editorElement.style.setProperty(e,r[e])})}this.editorElement.classList.add("quill-view");if(this.content){this.setEditorContent(this.content);this.quillEditor["history"].clear()}};t.prototype.updateStyle=function(t,e){var r=this;if(!this.editorElement){return}if(e){var i=JSON.parse(e);Object.keys(i).forEach(function(t){r.editorElement.style.setProperty(t,"")})}if(t){var s=JSON.parse(t);Object.keys(s).forEach(function(t){r.editorElement.style.setProperty(t,s[t])})}};t.prototype.updateContent=function(t){var e=this.getEditorContent();if(["text","html","json"].indexOf(this.format)>-1&&t===e){return null}else{var r=false;try{var i=JSON.stringify(t);r=JSON.stringify(e)!==i}catch(t){return null}if(!r){return null}}this.setEditorContent(t)};t.prototype.render=function(){var t=this;return this.preserveWhitespace?r("pre",{"quill-element":true,ref:function(e){return t.editorElement=e}}):r("div",{"quill-element":true,ref:function(e){return t.editorElement=e}})};Object.defineProperty(t.prototype,"wrapperElement",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{styles:["updateStyle"],content:["updateContent"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".ql-container.quill-view.sc-quill-view{border:0}"},enumerable:true,configurable:true});return t}();t("quill_view",s)}}});