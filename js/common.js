/**wNumb***/
(function(){function r(b){return b.split("").reverse().join("")}function s(b,f,c){if((b[f]||b[c])&&b[f]===b[c])throw Error(f);}function v(b,f,c,d,e,p,q,k,l,h,n,a){q=a;var m,g=n="";p&&(a=p(a));if("number"!==typeof a||!isFinite(a))return!1;b&&0===parseFloat(a.toFixed(b))&&(a=0);0>a&&(m=!0,a=Math.abs(a));b&&(p=Math.pow(10,b),a=(Math.round(a*p)/p).toFixed(b));a=a.toString();-1!==a.indexOf(".")&&(b=a.split("."),a=b[0],c&&(n=c+b[1]));f&&(a=r(a).match(/.{1,3}/g),a=r(a.join(r(f))));m&&k&&(g+=k);d&&(g+=d);
m&&l&&(g+=l);g=g+a+n;e&&(g+=e);h&&(g=h(g,q));return g}function w(b,f,c,d,e,h,q,k,l,r,n,a){var m;b="";n&&(a=n(a));if(!a||"string"!==typeof a)return!1;k&&a.substring(0,k.length)===k&&(a=a.replace(k,""),m=!0);d&&a.substring(0,d.length)===d&&(a=a.replace(d,""));l&&a.substring(0,l.length)===l&&(a=a.replace(l,""),m=!0);e&&a.slice(-1*e.length)===e&&(a=a.slice(0,-1*e.length));f&&(a=a.split(f).join(""));c&&(a=a.replace(c,"."));m&&(b+="-");b=Number((b+a).replace(/[^0-9\.\-.]/g,""));q&&(b=q(b));return"number"===
typeof b&&isFinite(b)?b:!1}function x(b){var f,c,d,e={};for(f=0;f<h.length;f+=1)c=h[f],d=b[c],void 0===d?e[c]="negative"!==c||e.negativeBefore?"mark"===c&&"."!==e.thousand?".":!1:"-":"decimals"===c?0<d&&8>d&&(e[c]=d):"encoder"===c||"decoder"===c||"edit"===c||"undo"===c?"function"===typeof d&&(e[c]=d):"string"===typeof d&&(e[c]=d);s(e,"mark","thousand");s(e,"prefix","negative");s(e,"prefix","negativeBefore");return e}function u(b,f,c){var d,e=[];for(d=0;d<h.length;d+=1)e.push(b[h[d]]);e.push(c);return f.apply("",
e)}function t(b){if(!(this instanceof t))return new t(b);"object"===typeof b&&(b=x(b),this.to=function(f){return u(b,v,f)},this.from=function(f){return u(b,w,f)})}var h="decimals thousand mark prefix postfix encoder decoder negativeBefore negative edit undo".split(" ");window.wNumb=t})();

/**end**/


/*****FancyForm.js*****/
/*!
* Fancyform - jQuery Plugin
* Simple and fancy form styling alternative
*
* Examples and documentation at: https://github.com/Lutrasoft/Fancyform
*
* Copyright (c) 2010-2013 - Lutrasoft
*
* Version: 1.4.1
* Requires: jQuery v1.6.1+
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/
(function(c){c.simpleEllipsis=function(d,f){return d.length<f?d:d.substring(0,f)+"..."};var b=!!("ontouchstart" in window),a=function(){var g=c(this),f=g.data("options")||g.data("settings"),d;for(d in f){g.parent().removeClass(d)}};c.fn.extend({caret:function(k,d){var h=this[0],j=this.val(),g,f,i;if(h){if(typeof k=="undefined"){if(h.selectionStart){k=h.selectionStart;d=h.selectionEnd}else{if(document.selection){this.focus();g=document.selection.createRange();if(g==null){return{start:0,end:e.value.length,length:0}}f=h.createTextRange();i=f.duplicate();f.moveToBookmark(g.getBookmark());i.setEndPoint("EndToStart",f);return{start:i.text.length-(i.text.split("\n").length+1)+2,end:i.text.length+g.text.length-(i.text.split("\n").length+1)+2,length:g.text.length,text:g.text}}}}else{if(typeof d!="number"){d=-1}if(typeof k!="number"||k<0){k=0}if(d>j.length){d=j.length}d=Math.max(k,d);k=Math.min(k,d);h.focus();if(h.selectionStart){h.selectionStart=k;h.selectionEnd=d}else{if(document.selection){g=h.createTextRange();g.collapse(true);g.moveStart("character",k);g.moveEnd("character",d-k);g.select()}}}return{start:k,end:d}}},transformCheckbox:function(f){var g={base:"image",checked:"",unchecked:"",disabledChecked:"",disabledUnchecked:"",tristateHalfChecked:"",changeHandler:function(i){},trigger:"self",tristate:0},d=c.extend(g,f),h={setImage:function(){var i=c(this),j=i.data("settings"),k;if(i.is(":disabled")){k=i.is(":checked")?"disabledChecked":"disabledUnchecked"}else{if(i.hasClass("half-checked")){k="tristateHalfChecked"}else{if(i.is(":checked")){k="checked"}else{k="unchecked"}}}if(j.base=="image"){i.next().attr("src",j[k])}else{a.call(this);i.parent().addClass(k)}},setProp:function(k,j,i){c(k).prop(j,i).change();h.setImage.call(k);if(j=="checked"&&!c(k).data("settings").type){c("[name='"+c(k).attr("name")+"']").each(function(){h.setImage.call(this)})}},uncheck:function(){h.setProp(this,"checked",0)},check:function(){h.setProp(this,"checked",1)},disable:function(){h.setProp(this,"disabled",1)},enable:function(){h.setProp(this,"disabled",0)},imageClick:function(){var j=c(this),i=j.data("settings");if(!j.is(":disabled")){if(j.is(":checked")&&i.type){h.uncheck.call(j);d.changeHandler.call(j,1)}else{h.check.call(j);d.changeHandler.call(j,0)}h.handleTriState.call(j)}},handleTriState:function(){var j=c(this),m=j.data("settings"),i=j.parent(),l=i.find("ul"),k=i.closest("li");if(m.tristate){if(j.hasClass("half-checked")||j.is(":checked")){j.removeClass("half-checked");h.check.call(j);l.find("input:checkbox").removeClass("half-checked").each(h.check)}else{if(j.not(":checked")){j.removeClass("half-checked");l.find("input:checkbox").each(h.uncheck)}}l.find("input:checkbox").each(h.setImage);if(j.parent().parent().parent().is("li")){h.handleTriStateLevel.call(j.parent().parent().parent())}j.trigger("transformCheckbox.tristate")}},handleTriStateLevel:function(){var m=c(this),j=m.find("input:checkbox").first(),k=m.find("ul"),i=k.find("input:checkbox"),l=i.filter(":checked");j.removeClass("half-checked");if(i.length==l.length){h.check.call(j)}else{if(l.length){j.addClass("half-checked")}else{h.uncheck.call(j)}}h.setImage.call(j);if(m.parent().parent().is("li")){h.handleTriStateLevel.call(m.parent().parent())}}};return this.each(function(){if(typeof f=="string"){h[f].call(this)}else{var i=c(this);if(!i.data("tf.init")){i.data("tf.init",1).data("settings",d);d.type=i.is("[type=checkbox]");i.hide();if(d.base=="image"){i.after("<img />")}else{i.wrap("<span class='trans-element-"+(d.type?"checkbox":"radio")+"' />")}h.setImage.call(this);if(d.base=="image"){switch(d.trigger){case"parent":i.parent().click(c.proxy(h.imageClick,this));break;case"self":i.next("img").click(c.proxy(h.imageClick,this));break}}else{switch(d.trigger){case"parent":i.parent().parent().click(c.proxy(h.imageClick,this));break;case"self":i.parent().click(c.proxy(h.imageClick,this));break}}}}})},transformSelect:function(f){var g={dropDownClass:"transformSelect",showFirstItemInDrop:1,acceptManualInput:0,useManualInputAsFilter:0,subTemplate:function(i){if(c(this)[0].type=="select-multiple"){return"<span><input type='checkbox' value='"+c(i).val()+"' "+(c(i).is(":selected")?"checked='checked'":"")+" name='"+c(this).attr("name").replace("_backup","")+"' />"+c(i).text()+"</span>"}else{return"<span>"+c(i).text()+"</span>"}},initValue:function(){return c(this).text()},valueTemplate:function(){return c(this).text()},ellipsisLength:null,addDropdownToBody:0};var d=c(this).data("settings"),h={init:function(){var m=this,q=c(m),j=0,k=q.find("option:first");q.hide();if(q.find("option:selected").length&&m.type!="select-multiple"){k=q.find("option:selected");j=q.find("option").index(k)}var o="<ul class='"+d.dropDownClass+" trans-element'><li>";if(d.acceptManualInput&&!b){var p=q.data("value")||d.initValue.call(k);o+="<ins></ins><input type='text' name='"+q.attr("name").replace("_backup","")+"' value='"+p+"' />";if(q.attr("name").indexOf("_backup")<0){q.attr("name",q.attr("name")+"_backup")}}else{if(d.ellipsisLength){o+='<span title="'+k.text()+'">'+c.simpleEllipsis(d.initValue.call(k),d.ellipsisLength)+"</span>"}else{o+="<span>"+d.initValue.call(k)+"</span>"}}o+="<ul style='display: none;'>";q.children().each(function(r){if(!r&&!d.showFirstItemInDrop){}else{o+=h[this.tagName=="OPTION"?"getLIOptionChild":"getLIOptgroupChildren"].call(m,this)}});o+="</ul></li></ul>";var l=c(o),n=l.find("ul li:not(.group)"),i=l.find("input");q.after(l);if(q.is(":disabled")){h.disabled.call(m,1)}if(m.type=="select-multiple"&&!b){if(q.attr("name")&&q.attr("name").indexOf("_backup")==-1){q.attr("name",q.attr("name")+"_backup")}n.click(h.selectCheckbox)}else{n.click(h.selectNewValue);i.click(h.openDrop).keydown(function(r){if(c.inArray(r.which,[9,13])>=0){h.closeAllDropdowns()}}).prev("ins").click(h.openDrop)}if(d.useManualInputAsFilter){i.keyup(h.filterByInput)}l.find("span:first").click(h.openDrop);l.find("ul:first").data("trans-element",l).addClass("transformSelectDropdown");l.data("trans-element-drop",l.find("ul:first"));if(d.addDropdownToBody){l.find("ul:first").appendTo("body")}c("html").unbind("click.transformSelect").bind("click.transformSelect",h.closeDropDowns);if(c.hotkeys&&!c("body").data("trans-element-select")){c("body").data("trans-element-select",1);c(document).bind("keydown","up",function(u){var t=c(".trans-focused"),s,r;if(!t.length||t.find("input").length){return 0}s=t.prevAll("select").first();r=s[0].selectedIndex-1;if(r<0){r=s.find("option").length-1}h.selectIndex.call(s,r);return 0}).bind("keydown","down",function(u){var t=c(".trans-focused"),s,r;if(!t.length||t.find("input").length){return 0}s=t.prevAll("select").first();r=s[0].selectedIndex+1;if(r>s.find("option").length-1){r=0}h.selectIndex.call(s,r);return 0})}if(b){if(!d.showFirstItemInDrop){q.find("option:first").remove()}q.appendTo(l.find("li:first")).show().css({opacity:0,position:"absolute",width:"100%",height:"100%",left:0,top:0});l.find("li:first").css({position:"relative"});q.change(h.mobileChange)}},getUL:function(){return b?c(this).closest("ul"):c(this).next(".trans-element:first")},getSelect:function(i){return b?i.find("select"):i.prevAll("select:first")},disabled:function(i){h.getUL.call(this)[i?"addClass":"removeClass"]("disabled")},repaint:function(){var i=h.getUL.call(this);i.data("trans-element-drop").remove();i.remove();h.init.call(this)},filterByInput:function(){var m=c(this),l=m.val().toLowerCase(),k=m.closest("ul"),j=k.data("trans-element-drop"),i=j.find("li");if(!l){i.show()}else{i.each(function(){var n=c(this);if(!!n.data("settings").alwaysvisible){n.show()}else{n[n.text().toLowerCase().indexOf(l)<0?"hide":"show"]()}})}},selectIndex:function(k){var i=c(this),l=h.getUL.call(this),j=l.data("trans-element-drop");try{j.find("li").filter(function(){}).first().trigger("click");return c(this).text()==i.find("option").eq(k).text()}catch(m){}},selectValue:function(l){var i=c(this),k=h.getUL.call(this),j=k.data("trans-element-drop");h.selectIndex.call(this,i.find(l?"option[value='"+l+"']":"option:not([value])").index())},getLIOptionChild:function(k){var j=c(k).attr("data-settings")||"",i=(c(k).attr("class")||"")+(c(k).is(":selected")?" selected":"");return"<li data-settings='"+j+"' class='"+i+"'>"+d.subTemplate.call(this,c(k))+"</li>"},getLIOptgroupChildren:function(j){var k=this,i="<li class='group'><span>"+c(j).attr("label")+"</span><ul>";c(j).find("option").each(function(){i+=h.getLIOptionChild.call(k,this)});i+="</ul></li>";return i},getLIIndex:function(j){var i=0,l=j.closest(".group"),k;if(l.length){i=j.closest(".transformSelectDropdown").find("li").index(j)-l.prevAll(".group").length-1}else{i=j.parent().find("li").index(j)-j.prevAll(".group").length}if(!d.showFirstItemInDrop){i+=1}return i},selectNewValue:function(){var m=c(this),l=m.closest(".transformSelectDropdown"),k=l.data("trans-element"),i=h.getSelect(k),j=h.getLIIndex(m);i[0].selectedIndex=j;if(k.find("input").length){k.find("input").val(d.valueTemplate.call(m))}else{sel=i.find("option:selected");k.find("span:first").html(d.ellipsisLength?c.simpleEllipsis(d.valueTemplate.call(sel),d.ellipsisLength):d.valueTemplate.call(sel))}l.find(".selected").removeClass("selected");m.addClass("selected");h.closeAllDropdowns();i.trigger("change");c(".trans-element").removeClass("trans-focused");k.addClass("trans-focused");if(c.fn.validate){i.valid()}},mobileChange:function(){var i=c(this),j=h.getUL.call(this),k=i.find("option:selected");if(this.type!="select-multiple"){j.find("span:first").html(d.ellipsisLength?c.simpleEllipsis(d.valueTemplate.call(k),d.ellipsisLength):d.valueTemplate.call(k))}},selectCheckbox:function(n){var l=c(this),i=l.closest(".transformSelectDropdown"),j=i.data("trans-element"),o=h.getSelect(j),q=l.closest("li"),k=q.find(":checkbox"),m,p;if(c(n.target).is("li")){q=l}m=h.getLIIndex(q);if(!c(n.target).is(":checkbox")){k.prop("checked",!k.is(":checked"))}o.find("option").eq(m).prop("selected",k.is(":checked"));if(k.data("tfc.init")){k.transformCheckbox("setImage")}if(!c(n.target).is(":checkbox")){k.change()}o.change()},openDrop:function(){var j=c(this).closest(".trans-element"),i=j.data("trans-element-drop"),k=c(this).parent();if(j.hasClass("disabled")){return 0}if(k.hasClass("open")&&!c(this).is("input")){h.closeAllDropdowns()}else{k.css({"z-index":1200}).addClass("open");i.css({"z-index":1200}).show();h.hideAllOtherDropdowns.call(this)}if(d.addDropdownToBody){i.css({position:"absolute",top:k.offset().top+k.outerHeight(),left:k.offset().left})}},hideAllOtherDropdowns:function(){var j=c("body").find("*"),i=j.index(c(this).parent());c("body").find("ul.trans-element").each(function(){var k=c(this).data("trans-element-drop");if(i-1!=j.index(c(this))){k.hide().css("z-index",0).parent().css("z-index",0).removeClass("open")}})},closeDropDowns:function(i){if(!c(i.target).closest(".trans-element").length){h.closeAllDropdowns()}},closeAllDropdowns:function(){c("ul.trans-element").each(function(){c(this).data("trans-element-drop").hide();c(this).find("li:first").removeClass("open")}).removeClass("trans-focused")}};if(typeof f=="string"){h[f].apply(this,Array.prototype.slice.call(arguments,1));return this}return this.each(function(){var i=c(this);if(!i.data("tfs.init")){d=c.extend(g,f);i.data("settings",d);i.data("tfs.init",1);h.init.call(this)}})},transformFile:function(d){var f={file:function(h,g){return this.each(function(){var l=c(this),k=c("<div></div>").appendTo(l).css({position:"absolute",overflow:"hidden","-moz-opacity":"0",filter:"alpha(opacity: 0)",opacity:"0",zoom:"1",width:l.outerWidth()+"px",height:l.outerHeight()+"px","z-index":1}),o=0,m,j=function(){var q=m=k.html("<input "+(window.FormData?"multiple ":"")+'type="file" style="border:none; position:absolute">').find("input");o=o||q.width();q.change(function(){q.unbind("change");j();h(q[0])})},i=function(q){k.offset(l.offset());if(q){m.offset({left:q.pageX-o+25,top:q.pageY-10});p()}},p=function(){l.addClass(g+"MouseOver")},n=function(){l.removeClass(g+"MouseOver")};j();l.mouseover(i);l.mousemove(i);l.mouseout(n);i()})}};return this.each(function(k){if(!c(this).data("tff.init")){c(this).data("tff.init",1);var l=c(this).hide(),m=null,j=l.attr("name"),g=(!d?"customInput":(d.cssClass?d.cssClass:"customInput")),h=(!d?"Browse...":(d.label?d.label:"Browse..."));if(!l.attr("id")){l.attr("id","custom_input_file_"+(new Date().getTime())+Math.floor(Math.random()*100000))}m=l.attr("id");l.after('<span id="'+m+'_custom_input" class="'+g+'"><span class="inputPath" id="'+m+'_custom_input_path">&nbsp;</span><span class="inputButton">'+h+"</span></span>");f.file.call(c("#"+m+"_custom_input"),function(i){i.id=m;i.name=j;c("#"+m).replaceWith(i).removeAttr("style").hide();c("#"+m+"_custom_input_path").html(c("#"+m).val().replace(/\\/g,"/").replace(/.*\//,""))},g)}})},transformTextarea:function(f,d){var h={hiddenTextareaClass:"hiddenTextarea"},g=c.extend(h,f),i={init:function(){var k=c(this);if(k.css("line-height")=="normal"){k.css("line-height","12px")}var j={"line-height":k.css("line-height"),"font-family":k.css("font-family"),"font-size":k.css("font-size"),border:"1px solid black",width:k.width(),"letter-spacing":k.css("letter-spacing"),"text-indent":k.css("text-indent"),padding:k.css("padding"),overflow:"hidden","white-space":k.css("white-space")};k.css(j).keyup(i.keyup).keydown(i.keyup).bind("mousewheel",i.mousewheel).after(c("<div />")).next().addClass(g.hiddenTextareaClass).css(j).css("width",k.width()-5).hide()},mousewheel:function(l,m){l.preventDefault();var k=c(this).css("line-height"),j=c(this)[0].scrollTop+(parseFloat(k)*(m*-1));i.scrollToPx.call(this,j)},keyup:function(j){if(c.inArray(j.which,[37,38,39,40])>=0){i.checkCaretScroll.call(this)}else{i.checkScroll.call(this,j.which)}i.scrollCallBack.call(this)},checkCaretScroll:function(){var j=c(this),m=j.caret().start,k=j.val(),q=j.scrollTop(),n=parseInt(j.css("line-height")),o=k.substr(0,m),p=k.substr(m),l=j.next("."+g.hiddenTextareaClass),r;if(m){if(k.substr(m-1,1)=="\n"){o=k.substr(0,m+1)}i.toDiv.call(this,0,o,p);if(l.height()>(j.height()+q)){r=q+n}else{if(l.height()<=q){r=q-n}}if(r){i.scrollToPx.call(this,r)}}},checkScroll:function(m){var q=c(this),j=q.next("."+g.hiddenTextareaClass),o=q.caret().start,l=q.val(),n=l.substr(0,o),k=l.substr(o);i.toDiv.call(this,1,n,k);if((q.scrollTop()+q.height())>j.height()){return}if(j.data("old-height")!=j.data("new-height")){var p=j.data("new-height")-j.data("old-height");i.scrollToPx.call(this,q.scrollTop()+p)}},toDiv:function(p,l,n){var j=c(this),m=j.next("."+g.hiddenTextareaClass),k=/\n/g,q=/\s\s/g,u=/\s/g,o=j.val(),r=0,s=0,t="<br />";if(l){o=l}if(k.test(o.substring(o.length-1))){r=1}if(k.test(o.substring(o.length-2,o.length-1))&&u.test(o.substring(o.length-1))){s=1}if(p){m.data("old-height",m.height())}o=o.replace(k,"<br>").replace(q,"&nbsp; ").replace(q,"&nbsp; ").replace(/<br>/ig,t);m.html(o);if((r||s)&&c.trim(n)){if(s&&c.browser.msie){m.append(t)}m.append(t)}if(p){m.data("new-height",m.height())}},scrollToPercentage:function(l){if(l>=0&&l<=100){var n=c(this),j=n.next("."+g.hiddenTextareaClass),m=parseFloat(n[0].scrollHeight)-n.height(),k=m*l/100;i.scrollToPx.call(this,k)}},scrollToPx:function(j){var k=this;c(k).scrollTop(i.roundToLineHeight.call(k,j));i.scrollCallBack.call(k)},roundToLineHeight:function(k){var j=parseInt(c(this).css("line-height"));return Math.ceil(k/j)*j},remove:function(){c(this).unbind("keyup").css({overflow:"auto",border:""}).next("div").remove()},scrollCallBack:function(){var n=this,k=c(n),m=k[0],l=parseFloat(m.scrollHeight)-k.height(),j=parseFloat(m.scrollTop)/l*100;j=j>100?100:j;j=j<0?0:j;j=isNaN(j)?100:j;k.trigger("scrollToPx",[m.scrollTop,j])}};if(typeof f=="string"){i[f].call(this,d);return this}return this.each(function(){if(!c(this).next().hasClass(g.hiddenTextareaClass)){i.init.call(this);i.toDiv.call(this,1)}})}});c.fn.transformRadio=c.fn.transformCheckbox})(jQuery);
/*******end************/

/*****Spinner****/
/*! jQuery spinner - v0.1.6 - 2015-03-09
* https://github.com/xixilive/jquery-spinner
* Copyright (c) 2015 xixilive; Licensed MIT */
!function(a){"use strict";var b,c=function(b,d){return d=a.extend({},d),this.$el=b,this.options=a.extend({},c.rules.defaults,c.rules[d.rule]||{},d),this.min=parseFloat(this.options.min)||0,this.max=parseFloat(this.options.max)||0,this.$el.on("focus.spinner",a.proxy(function(b){b.preventDefault(),a(document).trigger("mouseup.spinner"),this.oldValue=this.value()},this)).on("change.spinner",a.proxy(function(a){a.preventDefault(),this.value(this.$el.val())},this)).on("keydown.spinner",a.proxy(function(a){var b={38:"up",40:"down"}[a.which];b&&(a.preventDefault(),this.spin(b))},this)),this.oldValue=this.value(),this.value(this.$el.val()),this};c.rules={defaults:{min:null,max:null,step:1,precision:0},currency:{min:0,max:null,step:.01,precision:2},quantity:{min:1,max:999,step:1,precision:0},percent:{min:1,max:100,step:1,precision:0},month:{min:1,max:12,step:1,precision:0},day:{min:1,max:31,step:1,precision:0},hour:{min:0,max:23,step:1,precision:0},minute:{min:1,max:59,step:1,precision:0},second:{min:1,max:59,step:1,precision:0}},c.prototype={spin:function(b){if("disabled"!==this.$el.attr("disabled")){this.oldValue=this.value();var c=a.isFunction(this.options.step)?this.options.step.call(this,b):this.options.step;switch(b){case"up":this.value(this.oldValue+Number(c,10));break;case"down":this.value(this.oldValue-Number(c,10))}}},value:function(c){if(null===c||void 0===c)return this.numeric(this.$el.val());c=this.numeric(c);var e=this.validate(c);0!==e&&(c=-1===e?this.min:this.max),this.$el.val(c.toFixed(this.options.precision)),this.oldValue!==this.value()&&(this.$el.trigger("changing.spinner",[this.value(),this.oldValue]),clearTimeout(b),b=setTimeout(a.proxy(function(){this.$el.trigger("changed.spinner",[this.value(),this.oldValue])},this),d.delay))},numeric:function(a){return a=this.options.precision>0?parseFloat(a,10):parseInt(a,10),!isNaN(parseFloat(a))&&isFinite(a)?a:a||this.options.min||0},validate:function(a){return null!==this.options.min&&a<this.min?-1:null!==this.options.max&&a>this.max?1:0}};var d=function(b,d){d=a.extend({},d),this.$el=b,this.$spinning=a("[data-spin='spinner']",this.$el),0===this.$spinning.length&&(this.$spinning=a(":input[type='text']",this.$el)),this.spinning=new c(this.$spinning,a.extend(this.$spinning.data(),d)),this.$el.on("click.spinner","[data-spin='up'],[data-spin='down']",a.proxy(this.spin,this)).on("mousedown.spinner","[data-spin='up'],[data-spin='down']",a.proxy(this.spin,this)),a(document).on("mouseup.spinner",a.proxy(function(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)},this)),d.delay&&this.delay(d.delay),d.changed&&this.changed(d.changed),d.changing&&this.changing(d.changing)};d.delay=500,d.prototype={constructor:d,spin:function(b){var c=a(b.currentTarget).data("spin");switch(b.type){case"click":b.preventDefault(),this.spinning.spin(c);break;case"mousedown":1===b.which&&(this.spinTimeout=setTimeout(a.proxy(this.beginSpin,this,c),300))}},delay:function(a){var b=parseInt(a,10);b>=0&&(this.constructor.delay=b+100)},value:function(){return this.spinning.value()},changed:function(a){this.bindHandler("changed.spinner",a)},changing:function(a){this.bindHandler("changing.spinner",a)},bindHandler:function(b,c){a.isFunction(c)?this.$spinning.on(b,c):this.$spinning.off(b)},beginSpin:function(b){this.spinInterval=setInterval(a.proxy(this.spinning.spin,this.spinning,b),100)}},a.fn.spinner=function(b,c){return this.each(function(){var e=a(this),f=e.data("spinner");f||e.data("spinner",f=new d(e,a.extend({},e.data(),b))),("delay"===b||"changed"===b||"changing"===b)&&f[b](c),"step"===b&&c&&(f.spinning.step=c),"spin"===b&&c&&f.spinning.spin(c)})},a(function(){a('[data-trigger="spinner"]').spinner()})}(jQuery);
/***end*********/


/****Tiptip******/
 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.tipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#tiptip_holder").length<=0){var tiptip_holder=$('<div id="tiptip_holder" style="max-width:'+opts.maxWidth+';"></div>');var tiptip_content=$('<div id="tiptip_content"></div>');var tiptip_arrow=$('<div id="tiptip_arrow"></div>');$("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))}else{var tiptip_holder=$("#tiptip_holder");var tiptip_content=$("#tiptip_content");var tiptip_arrow=$("#tiptip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_tiptip()},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_tiptip()}).blur(function(){deactive_tiptip()})}else if(opts.activation=="click"){org_elem.click(function(){active_tiptip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_tiptip()}});if(opts.keepAlive){tiptip_holder.hover(function(){},function(){deactive_tiptip()})}}function active_tiptip(){opts.enter.call(this);tiptip_content.html(org_title);tiptip_holder.hide().removeAttr("class").css("margin","0");tiptip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=tiptip_holder.outerWidth();var tip_h=tiptip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}tiptip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});tiptip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){tiptip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_tiptip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}tiptip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);
/***End********/
	


/******Zoom*******/

/*!
Zoom 1.7.14
license: MIT
http://www.jacklmoore.com/zoom
*/
(function($){var defaults={url:false,callback:false,target:false,duration:120,on:"mouseover",touch:true,onZoomIn:false,onZoomOut:false,magnify:1};$.zoom=function(target,source,img,magnify){var targetHeight,targetWidth,sourceHeight,sourceWidth,xRatio,yRatio,offset,$target=$(target),position=$target.css("position"),$source=$(source);$target.css("position",/(absolute|fixed)/.test(position)?position:"relative");$target.css("overflow","hidden");img.style.width=img.style.height="";$(img).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:img.width*magnify,height:img.height*magnify,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(target);return{init:function(){targetWidth=$target.outerWidth();targetHeight=$target.outerHeight();if(source===$target[0]){sourceWidth=targetWidth;sourceHeight=targetHeight}else{sourceWidth=$source.outerWidth();sourceHeight=$source.outerHeight()}xRatio=(img.width-targetWidth)/sourceWidth;yRatio=(img.height-targetHeight)/sourceHeight;offset=$source.offset()},move:function(e){var left=e.pageX-offset.left,top=e.pageY-offset.top;top=Math.max(Math.min(top,sourceHeight),0);left=Math.max(Math.min(left,sourceWidth),0);img.style.left=left*-xRatio+"px";img.style.top=top*-yRatio+"px"}}};$.fn.zoom=function(options){return this.each(function(){var settings=$.extend({},defaults,options||{}),target=settings.target||this,source=this,$source=$(source),$target=$(target),img=document.createElement("img"),$img=$(img),mousemove="mousemove.zoom",clicked=false,touched=false,$urlElement;if(!settings.url){$urlElement=$source.find("img");if($urlElement[0]){settings.url=$urlElement.data("src")||$urlElement.attr("src")}if(!settings.url){return}}(function(){var position=$target.css("position");var overflow=$target.css("overflow");$source.one("zoom.destroy",function(){$source.off(".zoom");$target.css("position",position);$target.css("overflow",overflow);$img.remove()})})();img.onload=function(){var zoom=$.zoom(target,source,img,settings.magnify);function start(e){zoom.init();zoom.move(e);$img.stop().fadeTo($.support.opacity?settings.duration:0,1,$.isFunction(settings.onZoomIn)?settings.onZoomIn.call(img):false)}function stop(){$img.stop().fadeTo(settings.duration,0,$.isFunction(settings.onZoomOut)?settings.onZoomOut.call(img):false)}if(settings.on==="grab"){$source.on("mousedown.zoom",function(e){if(e.which===1){$(document).one("mouseup.zoom",function(){stop();$(document).off(mousemove,zoom.move)});start(e);$(document).on(mousemove,zoom.move);e.preventDefault()}})}else if(settings.on==="click"){$source.on("click.zoom",function(e){if(clicked){return}else{clicked=true;start(e);$(document).on(mousemove,zoom.move);$(document).one("click.zoom",function(){stop();clicked=false;$(document).off(mousemove,zoom.move)});return false}})}else if(settings.on==="toggle"){$source.on("click.zoom",function(e){if(clicked){stop()}else{start(e)}clicked=!clicked})}else if(settings.on==="mouseover"){zoom.init();$source.on("mouseenter.zoom",start).on("mouseleave.zoom",stop).on(mousemove,zoom.move)}if(settings.touch){$source.on("touchstart.zoom",function(e){e.preventDefault();if(touched){touched=false;stop()}else{touched=true;start(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}}).on("touchmove.zoom",function(e){e.preventDefault();zoom.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])})}if($.isFunction(settings.callback)){settings.callback.call(img)}};img.src=settings.url})};$.fn.zoom.defaults=defaults})(window.jQuery);
/******END*********/


$(document).ready(function(){
		$('.cm_commonAllSliders').each(function (){
			var cm_sliderCont = $(this).find('.cm_commonGallerySection');
			var cm_sliderBtns = $(this).find('.cm_galleryBtns');
			
			if($(this).hasClass('cm_media')){ //For Media section
				setWd = 880;
			}else{
				setWd = 970;
			}
			cm_sliderCont.bxSlider({
				slideWidth: setWd,
				maxSlides: 1,
				slideMargin: 10,
				moveSlides: 1,
				nextText: '',
				prevText: '',
				nextSelector: cm_sliderBtns.find('.cm_next'),
				prevSelector: cm_sliderBtns.find('.cm_previous'),
				pager: false,
				infiniteLoop: false,
				hideControlOnEnd: true
			});
			
		
		});
		
		
		
	    $('.cm_scrollToTop').click(function(){
	    	$('html, body').animate({scrollTop:0}, '500', 'swing');
	    });
		
		$('.cm_filterByCatSubMenu li a').on('click', function (e){
			var txt = $(this).text();
			console.log($('.cm_filterByMenu li.cm_setMeFirst').children('a:first').length)
			$('.cm_filterByMenu li.cm_setMeFirst').children('a:first').text(txt);
			e.preventDefault();
		});
		
		
		if($('.cm_searchBar').is(':visible')){
			var barTopPos = $('.cm_searchBar').position().top;	
		}
		if($('.cm_subscribe').is(':visible')){
			var scrollTopPos = $('.cm_subscribe').position().top;
		}
		
		
		$(window).scroll(function(){
			var winScrollPos = $(this).scrollTop();
			
			if(winScrollPos>=barTopPos){ //SearchBar fixed
				$('.cm_searchBar').addClass('fixBar');
				$('.cm_searchBar').removeClass('smallSearchBar');
			}else{
				$('.cm_searchBar').removeClass('fixBar');
				$('.cm_searchBar').addClass('smallSearchBar');
			}
			if($('.cm_subscribe').is(':visible')){
				if($(window).scrollTop() >= $('.cm_subscribe').position().top + 10 - $(window).height()) { //Scroll to top fixed
					$('.scrollToTop').removeClass('fixScroll');
				}else{
					$('.scrollToTop').addClass('fixScroll');
				}
				
			}
		});
		
		
		$(window).resize(function(){
			//$('.cm_searchBar').css('width',$(this).width()+'px');
			$(window).scroll(function(){
				var winScrollPos = $(this).scrollTop();
				if(winScrollPos>=barTopPos){
					$('.cm_searchBar').addClass('fixBar');
					$('.cm_searchBar').removeClass('smallSearchBar');
				}else{
					$('.cm_searchBar').removeClass('fixBar');
					$('.cm_searchBar').addClass('smallSearchBar');
				}
			});
		}).trigger('resize');
		
		if($('.cm_wishCount').html()!=""){
			$('.cm_cartIcon').addClass('itHasItem');
			$('.cm_wishCount').css('display','block');
		}else{
			$('.cm_cartIcon').removeClass('itHasItem');
			$('.cm_wishCount').css('display','none');
		}
		
		if($('.cm_whCount').html()!=""){
			$('.cm_wishListIcon').addClass('itHasItem');
			$('.cm_whCount').css('display','block');
		}else{
			$('.cm_wishListIcon').removeClass('itHasItem');
			$('.cm_whCount').css('display','none');
		}
		
		$('.cm_diffCatTopLevel li').hover(function (){
			$(this).addClass('selected active');
			$(this).siblings('li').removeClass('selected active');
			setArrowPos($('.cm_diffCatTopLevel li.selected'));
			var custAttr = $(this).attr('data-cat-key');
			$('.cm_shopByCatAllDv.'+custAttr).show();
			$('.cm_shopByCatAllDv.'+custAttr).siblings('.cm_shopByCatAllDv').hide();
		}, function(){
			$('.cm_shopByCatAllDv.cm_shopByCatLi').show();
		});
		
		$('.cm_shopByCatAllMenu li').hover(function(){
			$(this).find('.cm_shopCatSubview').show();
			$(this).siblings('li').find('.cm_shopCatSubview').hide();
			$(this).siblings('li').find('a').removeClass('active');
		});

		$('.cm_shopByCatDv').hover(function (){
			$('.cm_shopCatSubview.showAlways').show();
			$('.cm_shopCatSubview.showAlways').siblings('a').addClass('active');
			$('.cm_shopCatSubview.showAlways').parent('li').siblings('li').children('.cm_shopCatSubview').hide();
		});
		
		$('.cm_hurryOfferDv ul').bxSlider({controls: false, auto: true});
		
		
		$("input:checkbox").transformCheckbox({
			base: "class"
		});
		
		$('.cm_filtCntDv ul li input[type="checkbox"]').change(function (){
			if($(this).prop('checked') != false){
				var tag = "<li class=''><label>"+$(this).parent('span').siblings('label').html()+"</label><a href='javascript:void(0)' class='cm_headerIcons cm_crossFilterTag' onclick='deleteTag(this)'></a></li>";
				$('.cm_filterBarTags ul').append(tag);
			}else{
				
			}
		});
		$("input:radio").transformCheckbox({
			base: "class"
		});
		
		$('.cm_closePopup').on('click', function (){
			jQuery('.cm_setNewAddr').removeClass('bounceInUp');
			$(this).closest('.allPopups').hide();
			$(this).closest('.allPopups').siblings('.cm_greyLayer').hide();
			
		});
		
		/***Address footer Action****/
		$('.cm_shipAddArticle article').not(":eq(0)").on('click', function (){
			$(this).addClass('selected').siblings('article').removeClass('selected');
			$('.cm_shipAddArticle article.selected').find('.delvHere').addClass('cm_green').removeClass('cm_brandClr').html('<label class="cm_headerIcons cm_greenTickSmall">Selected</label>');
			$('.cm_shipAddArticle article.selected').siblings('article').find('.delvHere').removeClass('cm_green').addClass('cm_brandClr').html('Deliver Here');
		});
		
		$('.makeAddBk footer input').on('change', function (){
			$(this).closest('article').addClass('selected').siblings('article').removeClass('selected');
			$('.cm_shippingAddrDv article.selected').find('.delvHere').addClass('cm_green').removeClass('cm_brandClr').html('<label class="cm_headerIcons cm_greenTickSmall">Selected</label>');
			$('.cm_shippingAddrDv article.selected').siblings('article').find('.delvHere').removeClass('cm_green').addClass('cm_brandClr').html('Deliver Here');
		});
		
		
		$('.changCurrLink').click(function (){
			if($(this).hasClass('closed')){
				$('.cm_currDrop').show();
				$(this).removeClass('closed');
			}else{
				$('.cm_currDrop').hide();
				$(this).addClass('closed');
			}
			
		});
		$('.cm_changCurrSelect').change(function (){
			var currLb = $(this).children('option:selected').attr('data-curr');
			$('.changCurrLink').text(currLb);
			$('.changCurrLink').click();
		});
		
		
	});
	function deleteAddr(ele){
		
		$(ele).closest('article').remove();
	}
	function showMoreFooterCat(ele){
		if($(ele).hasClass('open')){
			$(ele).closest('li').siblings('li.cm_hiddenCat').hide();
			$(ele).removeClass('open').text('More');
		}
		else{
			$(ele).closest('li').siblings('li.cm_hiddenCat').show();
			$(ele).addClass('open').text('Less');
		}
	}
	
	function showMoreCatLi(ele){
		if($(ele).hasClass('open')){
			$(ele).siblings('ul').children('li.cm_hiddenCat').hide();
			$(ele).removeClass('open').text('Show More');
		
		}else{
			$(ele).siblings('ul').children('li.cm_hiddenCat').show();
			$(ele).addClass('open').text('Show Less');
		}
	}
	
	function deleteTag(ele){
		$(ele).closest('li').remove();
	}
	function setArrowPos(ele){
           var arrow = $(ele).parents('.cm_diffCatTopLevel').find('.cm_shopCatArrow');
           var left = $(ele).position().left+$(ele).outerWidth()/2-arrow.outerWidth()/2;
           arrow.css({'left':left});
    }
	function openNewAddr(){
		jQuery('.cm_setNewAddr').addClass('bounceInUp');
		jQuery('.cm_setNewAddr, .cm_greyLayer').css('display', 'block');
	}
	function openShippFaq(){
		jQuery('.cm_shippingFaq').addClass('bounceInUp');
		jQuery('.cm_shippingFaq, .cm_greyLayer').css('display', 'block');
	}
	function openEmiOption(){
		jQuery('.cm_emiOption').addClass('bounceInUp');
		jQuery('.cm_emiOption, .cm_greyLayer').css('display', 'block');
	}
	function openAccLogin(){
		jQuery('.cm_AccLogin').addClass('bounceInUp');
		jQuery('.cm_AccLogin, .cm_greyLayer').css('display', 'block');
	}
	
	function loginPopup(){
		jQuery('.myLoginPopup').addClass('bounceInUp');
		jQuery('.myLoginPopup, .cm_greyLayer').css('display', 'block');
		
	}
	function closeThisPop(ele){
		$(ele).closest('.allPopups').hide();
		jQuery('.cm_greyLayer').hide();
	}
	
	function cm_checkOptions(ele){
		jQuery('.all_checkOptions').addClass('bounceInUp');
		jQuery('.all_checkOptions, .cm_greyLayer').css('display', 'block');
		showCheckOptionsGallery();
	}
	
	